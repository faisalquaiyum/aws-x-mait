import React, { useState } from "react";
const sampleTeam = [
  {
    id: 1,
    name: "Md Faisal Quaiyum",
    role: "Technical",
    img: "src/assets/technical/Faisal.jpg",
    socials: { linkedin: "https://www.linkedin.com/in/md-faisal-quaiyum-b943a922b/", instagram: "https://www.instagram.com/faisalquaiyum/" },
    group: "Technical",
  },
  {
    id: 2,
    name: "Ridhi Garg",
    role: "PR",
    img: "src/assets/PR/ridhi gargg.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/ridhigarg1602/", instagram: "https://www.instagram.com/_ridhi.garg/?igsh=MTl3cXA4c3FhMnhsMw%3D%3D&utm_source=qr" },
    group: "PR",
  },
  {
    id: 3,
    name: "Dhananjay Bhardwaj ",
    role: "Event management ",
    img: "src/assets/event/Jay_Bhardwaj.jpg",
    socials: { linkedin: "https://www.linkedin.com/in/dhananjay-bhardwaj-69775528a/", instagram: "https://www.instagram.com/jayybhardwaj.__/" },
    group: "Event management",
  },
  {
    id: 4,
    name: "Yuvraj Vikram Singh",
    role: "Content",
    img: "src/assets/content/Yuvraj Vikram Singh.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/yuvraj2007?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=member_android",
      instagram: ""
    },
    group: "Content"
  },
  {
    id: 5,
    name: "Saksham Gupta",
    role: "",
    img: "src/assets/saksham gupta.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/saksham-gupta-057669126?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: ""
    },
    group: ""
  },
  {
    id: 6,
    name: "Yatin Kumar",
    role: "",
    img: "src/assets/yatin (2) - Yatin Kumar.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/yatin-kumar-069861319/",
      instagram: "https://www.instagram.com/yatin_1220/?hl=en"
    },
    group: ""
  },
  {
    id: 7,
    name: "Shubham Jha",
    role: "",
    img: "src/assets/Shubham Jha.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/shubham-jha-a37a49263/",
      instagram: "https://www.instagram.com/_shubham.2028/"
    },
    group: ""
  },
  {
    id: 8,
    name: "Gaurang Dhall",
    role: "Event Management",
    img: "src/assets/event/Gaurang Dhall.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/gaurang-dhall-603155292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/gaurang._.2105?igsh=MXh6ZnU5eWV6OGlzcg=="
    },
    group: "Event Management"
  },
  {
    id: 9,
    name: "Pari Goel",
    role: "PR",
    img: "src/assets/PR/Pari Goel.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/pari-goel-97208a325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/parigoel06?igsh=MWlyMG8wenphMnJ0bw%3D%3D&utm_source=qr"
    },
    group: "PR"
  },
  {
    id: 10,
    name: "Abhishek gupta",
    role: "Technical",
    img: "src/assets/Abhishek_gupta.jpg",
    socials: {
      linkedin: "",
      instagram: ""
    },
    group: "Technical"
  },
  {
    id: 11,
    name: "Sukriti Chauhan",
    role: "social media",
    img: "src/assets/social/Sukriti Shakuntala.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/sukriti-chauhan-b46619344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/sukriti_95?igsh=MW8wODhzZWoyamkzNw=="
    },
    group: "Social"
  },
];
const featuredData = [
  {
    id: 1,
    name: "Md Faisal Quaiyum",
    role: "faculty",
    img: "https://images.unsplash.com/photo-1545996124-1e26c928b40f?w=600&q=60&auto=format&fit=crop",
    desc:
      "Empowering students with mentorship that blends wisdom",
  },
  {
    id: 2,
    name: "Ridhi Garg",
    role: "faculty",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=60&auto=format&fit=crop",
    desc:
      "A communications lead who connects people and ideas,",
  },
  {
    id: 3,
    name: "Dhananjay Bhardwaj",
    role: "faculty",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=60&auto=format&fit=crop",
    desc:
      "Organizes memorable experiences and ",
  },
];

function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0V8zm7.5 0h4.6v1.9h.1c.6-1.1 2.2-2.2 4.5-2.2 4.8 0 5.7 3.1 5.7 7.1V22H17v-6.2c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.5 1.7-2.5 3.3V22H7.5V8z"/>
    </svg>
  );
}
function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" {...props}>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1 .6 1.5 1.1.5.5.9.9 1.1 1.5.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.6 1-1.1 1.5-.5.5-.9.9-1.5 1.1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.6-1.5-1.1-.5-.5-.9-.9-1.1-1.5-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.6-1 1.1-1.5.5-.5.9-.9 1.5-1.1.5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3 0-3.3 0-4.5.1-1 .1-1.6.2-2 .4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2C3.2 9 3.2 9.3 3.2 12s0 3 .1 4.2c.1 1 .2 1.6.4 2 .2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2 .4 1.2.1 1.5.1 4.5.1s3.3 0 4.5-.1c1-.1 1.6-.2 2-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2 .1-1.2.1-1.5.1-4.5s0-3.3-.1-4.5c-.1-1-.2-1.6-.4-2-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2-.4C15.3 4 15 4 12 4zM12 7.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8zM18.4 6.1a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"/>
    </svg>
  );
}

function TeamCard({ member }) {
  return (
    <article className="group  bg-white/10 rounded-2xl p-4 shadow-xl transform transition hover:-translate-y-2">
      <div className="relative overflow-hidden rounded-xl border border-gray-700">
        {/* Neon border shadow on hover */}
        <div className="absolute inset-0 pointer-events-none rounded-xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity"
              />
        <img
          src={member.img}
          alt={`${member.name}`}
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <div className="p-4 bg-white/10 rounded-b-xl">
          <h3 className="text-white font-semibold text-lg flex items-center gap-2">
            {member.name}
            
          </h3>
          <p className="text-gray-300 text-sm mt-1">{member.role}</p>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-3 text-cyan-300">
              <a href={member.socials.linkedin} aria-label="LinkedIn" className="p-2 rounded-md bg-gray-800 hover:bg-cyan-900/60 transition">
                <IconLinkedIn />
              </a>
              <a href={member.socials.instagram} aria-label="Instagram" className="p-2 rounded-md bg-gray-800 hover:bg-pink-600/30 transition">
                <IconInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
function FeaturedPanel({ item }) {
  return (
    <div
      className="bg-gray-800/60 border border-gray-700 rounded-xl p-2 flex items-center gap-6 shadow-lg transition-transform transform hover:-translate-y-2"
      role="group"
      aria-labelledby={`featured-${item.id}-name`}
    >
      <img
        src={item.img}
        alt={item.name}
        className="w-28 h-28 rounded-full object-cover ring-4 ring-cyan-700/60"
      />
      <div className="flex-1">
        <h3 id={`featured-${item.id}-name`} className="text-xl font-bold text-white">
          {item.name}
        </h3>
        <p className="text-cyan-300 text-sm mt-1">{item.role}</p>
        <p className="text-gray-300 mt-3 text-sm leading-relaxed">{item.desc}</p>
      </div>
      {/* optional online indicator */}
      
    </div>
  );
}

export default function TeamSection() {
  const [filter, setFilter] = useState("All"); // All | Core | Heads
  const featured = featuredData[0];

  const filtered = sampleTeam.filter((m) => filter === "All" || m.group === filter);

  return (
    <section className="min-h-screen bg-[#0a0b0f] text-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* nav / breadcrumbs can be added above */}
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-white tracking-tight">
            Meet Our <span className="text-transparent bg-clip-text text-[#e89417]">Team</span>
          </h1>
          <p className="mt-4 text-gray-300">
            The passionate minds behind AWS x MAIT, driving innovation and excellence.
          </p>
        </header>

        {/* Featured panel */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredData.slice(0, 3).map((item) => (
              <FeaturedPanel key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {["All", "Technical", "PR", "Content", "Event Management", "Social"].map((p) => (
            <button
              key={p}
              onClick={() => setFilter(p)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${filter === p ? "bg-gradient-to-r from-[#ff9900] to-[#0a0b0f] text-gray-900 shadow-lg" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map((m) => (
            <TeamCard key={m.id} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}