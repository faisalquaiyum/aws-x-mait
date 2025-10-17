import Feature from "../components/Feature";

const Home = () => {
  const scrollingCards = [
    {
      title: "AWS Workshop 2024",
      subtitle: "Cloud Computing Event",
      image: "/aws_partyrockHack.png",
      gradient: "from-purple-600/30 to-blue-600/30",
    },
    {
      title: "AWS PartyRock Session",
      subtitle: "Guest Speaker Event",
      image: "/aws_partyRockSpeakers.png",
      gradient: "from-pink-600/30 to-purple-600/30",
    },
    {
      title: "AWS × MAIT Partnership",
      subtitle: "Faculty & Team Collaboration",
      image: "/awxXmaitWithTeachers.png",
      gradient: "from-blue-600/30 to-cyan-600/30",
    },
    {
      title: "MAIT Campus",
      subtitle: "Our Learning Hub",
      image: "/mait-campus.jpg",
      gradient: "from-orange-600/30 to-pink-600/30",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0b0f]">
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
        <div className="text-center space-y-5 md:space-y-7">
          {/* Title */}
          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-[#FF9900]">AWS×MAIT, </span>
            <span className="text-gray-300">empowering </span>
            {/* <span className="text-gray-200"></span> */}
            <br />
            <span className="text-gray-200">the next generation!</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            A beginner-friendly platform for mastering cloud & develop skills.
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-3">
            <button className="px-6 py-3 md:px-8 md:py-3.5 bg-[#FF9900] hover:bg-[#ec8b00] text-white text-sm md:text-base font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              Explore Courses
            </button>
            <button className="px-6 py-3 md:px-8 md:py-3.5 bg-white hover:bg-gray-100 text-gray-900 text-sm md:text-base font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              Explore Notes
            </button>
          </div> */}
        </div>
      </div>

      {/* Scrolling Cards Section */}
      <div className="relative pb-20 overflow-hidden">
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 bg-gradient-to-r from-[#0a0b0f] via-[#0a0b0f]/80 to-transparent z-10 pointer-events-none"></div>

        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 bg-gradient-to-l from-[#0a0b0f] via-[#0a0b0f]/80 to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-4 md:gap-6 animate-scroll-left">
          {/* First set of cards */}
          {scrollingCards.map((card, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-56 sm:w-72 md:w-80 lg:w-96 h-48 sm:h-64 md:h-72 rounded-xl md:rounded-2xl shadow-2xl overflow-hidden relative group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}
              ></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2 drop-shadow-lg">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white/90 drop-shadow-md">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {scrollingCards.map((card, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-56 sm:w-72 md:w-80 lg:w-96 h-48 sm:h-64 md:h-72 rounded-xl md:rounded-2xl shadow-2xl overflow-hidden relative group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}
              ></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2 drop-shadow-lg">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white/90 drop-shadow-md">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Feature Section */}
      <Feature />
    </div>
  );
};

export default Home;
