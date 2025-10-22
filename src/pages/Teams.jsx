import React, { useState } from "react";

const sampleTeam = [
  {
    id: 1,
    name: "Dhananjay Bhardwaj",
    role: "Event management ",
    img: "images/event/JayBhardwaj.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/dhananjay-bhardwaj-69775528a/",
      instagram: "https://www.instagram.com/jayybhardwaj.__/",
    },
    group: "Event management",
  },
  {
    id: 2,
    name: "Pari Goel",
    role: "PR",
    img: "images/PR/PariGoel.jpeg",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/pari-goel-97208a325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram:
        "https://www.instagram.com/parigoel06?igsh=MWlyMG8wenphMnJ0bw%3D%3D&utm_source=qr",
    },
    group: "PR",
  },
  {
    id: 3,
    name: "Yuvraj Vikram Singh",
    role: "Content",
    img: "images/content/YuvrajVikramSingh.jpg",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/yuvraj2007?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://www.instagram.com/yuvraj2007/",
    },
    group: "Content",
  },
  {
    id: 4,
    name: "Saksham Gupta",
    role: "",
    img: "images/others/sakshamGupta.jpg",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/saksham-gupta-057669126?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/sakshamgupta2001/",
    },
    group: "",
  },
  {
    id: 5,
    name: "Md Faisal Quaiyum",
    role: "Technical",
    img: "images/technical/Faisal.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/md-faisal-quaiyum-b943a922b/",
      instagram: "https://www.instagram.com/faisalquaiyum/",
    },
    group: "Technical",
  }, 
   {
    id: 6,
    name: "Dhruv Chetiwal",
    role: "Technical",
    img: "images/technical/Dhruv.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/dhruv-chetiwal-197809371/",
      instagram: "https://www.instagram.com/dhruv_chetiwal_/",
    },
    group: "Technical",
  },
  {
    id: 7,
    name: "Yatin Kumar",
    role: "",
    img: "images/others/YatinKumar.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/yatin-kumar-069861319/",
      instagram: "https://www.instagram.com/yatin_1220/?hl=en",
    },
    group: "",
  },
  {
    id: 8,
    name: "Shubham Jha",
    role: "",
    img: "images/others/ShubhamJha.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/shubham-jha-a37a49263/",
      instagram: "https://www.instagram.com/_shubham.2028/",
    },
    group: "",
  },
  {
    id: 9,
    name: "Gaurang Dhall",
    role: "Event Management",
    img: "images/event/GaurangDhall.jpg",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/gaurang-dhall-603155292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/gaurang._.2105?igsh=MXh6ZnU5eWV6OGlzcg==",
    },
    group: "Event Management",
  },
  {
    id: 10,
    name: "Ridhi Garg",
    role: "PR",
    img: "images/PR/ridhigargg.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/ridhigarg1602/",
      instagram:
        "https://www.instagram.com/_ridhi.garg/?igsh=MTl3cXA4c3FhMnhsMw%3D%3D&utm_source=qr",
    },
    group: "PR",
  },
  {
    id: 11,
    name: "Abhishek gupta",
    role: "Technical",
    img: "images/technical/AbhishekGupta.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/mynetwork/",
      instagram: "https://www.instagram.com/abhishekgupta0720/",
    },
    group: "Technical",
  },
  {
    id: 12,
    name: "Sukriti Chauhan",
    role: "social media",
    img: "images/social/SukritiShakuntala.jpg",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/sukriti-chauhan-b46619344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/sukriti_95?igsh=MW8wODhzZWoyamkzNw==",
    },
    group: "Social",
  },
  {
    id: 13,
    name: "Jatin Kumar",
    role: "Technical",
    img: "images/technical/jatinKumar.jpg",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/jatin-kumar-a5655b30a",
      instagram:
        "https://www.instagram.com/ijatinydv",
    },
    group: "Technical",
  },
];

const featuredData = [
  {
    id: 1,
    name: "Dr. Bhaskar Kapoor",
    role: "faculty",
    img: "images/faculty/drBhaskar.jpeg",
    desc: "Empowering students with mentorship that blends wisdom",
  },
  {
    id: 2,
    name: "Dr. Bhoomi Gupta",
    role: "faculty",
    img: "images/faculty/drBhoomi.jpeg",
    desc: "A communications lead who connects people and ideas",
  },
  {
    id: 3,
    name: "Dr. Monika bhardwaj",
    role: "faculty",
    img: "images/faculty/drMonika.jpeg",
    desc: "Organizes memorable experiences and events that leave a lasting impact",
  },
];

function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0V8zm7.5 0h4.6v1.9h.1c.6-1.1 2.2-2.2 4.5-2.2 4.8 0 5.7 3.1 5.7 7.1V22H17v-6.2c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.5 1.7-2.5 3.3V22H7.5V8z" />
    </svg>
  );
}

function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" {...props}>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1 .6 1.5 1.1.5.5.9.9 1.1 1.5.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.6 1-1.1 1.5-.5.5-.9.9-1.5 1.1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.6-1.5-1.1-.5-.5-.9-.9-1.1-1.5-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.6-1 1.1-1.5.5-.5.9-.9 1.5-1.1.5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3 0-3.3 0-4.5.1-1 .1-1.6.2-2 .4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2C3.2 9 3.2 9.3 3.2 12s0 3 .1 4.2c.1 1 .2 1.6.4 2 .2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2 .4 1.2.1 1.5.1 4.5.1s3.3 0 4.5-.1c1-.1 1.6-.2 2-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2 .1-1.2.1-1.5.1-4.5s0-3.3-.1-4.5c-.1-1-.2-1.6-.4-2-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2-.4C15.3 4 15 4 12 4zM12 7.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8zM18.4 6.1a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
    </svg>
  );
}

function TeamCard({ member }) {
  return (
    <article className="group bg-[#1a1d23] rounded-xl overflow-hidden border border-[#2a2e35] hover:border-[#FF9900]/50 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={member.img}
          alt={`${member.name}`}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d23] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
        <p className="text-[#aab7b8] text-sm mb-4">
          {member.role || "Team Member"}
        </p>

        <div className="flex gap-3">
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 bg-[#2a2e35] hover:bg-[#FF9900] rounded-md flex items-center justify-center text-[#aab7b8] hover:text-white transition-all duration-200"
            >
              <IconLinkedIn />
            </a>
          )}
          {member.socials.instagram && (
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 bg-[#2a2e35] hover:bg-[#FF9900] rounded-md flex items-center justify-center text-[#aab7b8] hover:text-white transition-all duration-200"
            >
              <IconInstagram />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function FeaturedPanel({ item }) {
  return (
    <div
      className="bg-[#1a1d23] border border-[#2a2e35] hover:border-[#FF9900]/50 rounded-xl p-6 shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 group"
      role="group"
      aria-labelledby={`featured-${item.id}-name`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <img
            src={item.img}
            alt={item.name}
            className="w-28 h-28 rounded-full object-cover ring-4 ring-[#2a2e35] group-hover:ring-[#FF9900] transition-all duration-300"
          />
        </div>
        <div className="flex-1">
          <h3
            id={`featured-${item.id}-name`}
            className="text-xl font-bold text-white"
          >
            {item.name}
          </h3>
          <p className="text-[#FF9900] text-sm mt-1 font-medium uppercase tracking-wide">
            {item.role}
          </p>
          <p className="text-[#aab7b8] mt-3 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

const Teams = () => {
  const [filter, setFilter] = useState("All");

  const filtered = sampleTeam.filter(
    (m) => filter === "All" || m.group === filter
  );

  return (
    <section className="min-h-screen bg-[#0a0b0f] text-gray-100 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Meet Our <span className="text-[#FF9900]">Team</span>
          </h1>
          <p className="text-base md:text-lg text-[#aab7b8]">
            The passionate minds behind AWS×MAIT, driving innovation and
            excellence in cloud computing.
          </p>
        </header>

        {/* Featured Leadership */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Leadership Team
            {/* Leadership <span className="text-[#FF9900]">Team</span> */}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredData.map((item) => (
              <FeaturedPanel key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            Our Members
            {/* Our <span className="text-[#FF9900]">Members</span> */}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "All",
              "Technical",
              "PR",
              "Content",
              "Event Management",
              "Social",
            ].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filter === category
                    ? "bg-[#FF9900] text-white shadow-lg shadow-[#FF9900]/20"
                    : "bg-[#1a1d23] text-[#aab7b8] hover:bg-[#2a2e35] hover:text-white border border-[#2a2e35]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#aab7b8] text-lg">
              No team members found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Teams;
