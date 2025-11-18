import { useState, useRef, useEffect, useContext } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import AppContext from "../context/AppContext";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Hi! I'm your AWS assistant. Ask me anything about AWS services, cloud computing, or our AWS×MAIT society!",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { fetchChatResponse } = useContext(AppContext);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "What is AWS?",
    "How to join AWS×MAIT?",
    "Upcoming events",
    "AWS certifications",
  ];

  const handleSendMessage = async (e, messageText = null) => {
    if (e) e.preventDefault();

    const textToSend = messageText || inputMessage;

    if (!textToSend.trim() || isLoading) return;

    const userMessage = {
      role: "user",
      content: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const data = await fetchChatResponse(textToSend);

      if (data && data.reply) {
        const botMessage = {
          role: "bot",
          content: data.reply,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error("No reply received");
      }
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = {
        role: "bot",
        content:
          error.response?.data?.error ||
          "Sorry, I encountered an error. Please try again later.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(null, reply);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#FF9900] hover:bg-[#ec8b00] text-white rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(255,153,0,0.5)] flex items-center justify-center transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {isOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaRobot className="text-2xl" />
        )}
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-3 sm:right-6 z-50 w-[95vw] sm:w-[90vw] max-w-md h-[70vh] sm:h-[600px] max-h-[600px] bg-[#1a1d23] border border-[#2a2e35] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FF9900] to-[#ec8b00] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <FaRobot className="text-[#FF9900] text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-white">AWS Assistant</h3>
                  <p className="text-xs text-white/80">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0b0f]">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      msg.role === "user"
                        ? "bg-[#FF9900] text-white"
                        : "bg-[#1a1d23] text-gray-200 border border-[#2a2e35]"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {msg.content}
                    </p>
                    <p className="text-xs mt-1 opacity-60">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#1a1d23] border border-[#2a2e35] rounded-2xl p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-[#FF9900] rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-[#FF9900] rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-[#FF9900] rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 bg-[#1a1d23] border-t border-[#2a2e35]"
            >
              {/* Quick Reply Chips */}
              {messages.length <= 1 && !isLoading && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleQuickReply(reply)}
                      className="bg-[#0a0b0f] hover:bg-[#FF9900] text-gray-300 hover:text-white text-xs sm:text-sm px-3 py-2 rounded-full border border-[#2a2e35] hover:border-[#FF9900] transition-all duration-200"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about AWS services..."
                  className="flex-1 bg-[#0a0b0f] text-white border border-[#2a2e35] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF9900] transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-[#FF9900] hover:bg-[#ec8b00] text-white rounded-xl px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
