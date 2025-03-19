import React, { useState, useEffect, useRef } from "react";

const OurTeam = () => {
  const [activeTab, setActiveTab] = useState("all");
  const tabsContainerRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({
    width: 0,
    transform: "translateX(0)",
  });

  const updateSliderPosition = () => {
    if (!tabsContainerRef.current) return;

    const activeButton = tabsContainerRef.current.querySelector(
      `button[data-tab="${activeTab}"]`
    );

    if (activeButton) {
      const buttonRect = activeButton.getBoundingClientRect();
      const containerRect = tabsContainerRef.current.getBoundingClientRect();

      setSliderStyle({
        width: buttonRect.width,
        transform: `translateX(${buttonRect.left - containerRect.left}px)`,
      });
    }
  };

  useEffect(() => {
    updateSliderPosition();
    window.addEventListener("resize", updateSliderPosition);
    return () => window.removeEventListener("resize", updateSliderPosition);
  }, [activeTab]);

  const teamMembers = {
    all: [
      {
        id: 1,
        role: "developer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "John Doe",
        position: "Lead Developer",
        college: "Future Institute of Engineering and Management",
        department: "CSE - Data Science",
        year: "3rd Year",
      },
      {
        id: 2,
        role: "designer",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        name: "Jane Smith",
        position: "UI/UX Designer",
        college: "Future Institute of Engineering and Management",
        department: "CSE - Data Science",
        year: "3rd Year",
      },
      {
        id: 3,
        role: "manager",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        name: "Mike Johnson",
        position: "Project Manager",
        college: "Future Institute of Engineering and Management",
        department: "CSE - Data Science",
        year: "3rd Year",
      },
    ],
  };

  return (
    <section
      id="our-team"
      className="relative py-16 md:py-24 bg-gradient-to-br from-[#f0f4ff] to-[#e0eafc] overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-secondary/30 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-secondary/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary inline-block relative">
            Our Artistic Team
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary" />
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            The passionate creators from Future Institute of Engineering and Management
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.all.map((member) => (
            <div
              key={member.id}
              className="group transform transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-xl backdrop-blur-lg bg-white/30 border border-white/40 transition duration-500 hover:shadow-2xl hover:bg-white/50">
                <div className="relative w-40 h-40 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.position}</p>
                <p className="text-sm text-gray-500 mt-1">{member.department}</p>
                <p className="text-sm text-gray-500 mt-1">{member.year}</p>
                <p className="text-sm text-gray-500 mt-1">{member.college}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
