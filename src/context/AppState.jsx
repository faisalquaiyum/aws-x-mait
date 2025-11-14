import AppContext from "./AppContext";
import axios from "axios";

const AppState = (props) => {
  const URL = import.meta.env.VITE_URL_API;

  // Chatbot API call
  const fetchChatResponse = async (message) => {
    try {
      const response = await axios.post(`${URL}/api/chat`, {
        message: message,
      });

      return response.data;
    } catch (error) {
      console.error("Error fetching chat response:", error);
      throw error;
    }
  };

  return (
    <AppContext.Provider
      value={{
        fetchChatResponse,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
