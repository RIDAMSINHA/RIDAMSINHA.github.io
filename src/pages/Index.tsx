import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import BlockchainBackground from "@/components/BlockchainBackground";
import { Blocks, Code, Send, Mail, Phone, Linkedin, Book, Award, Briefcase } from "lucide-react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          el.classList.add("animate-fade-up");
          el.classList.remove("opacity-0");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "GREEN GAUGE",
      description: "Developed GreenGauge, a blockchain-based carbon offset tracking platform that ensures transparency and accuracy in carbon footprint measurements. Integrated advanced algorithms to analyze emission data and support sustainable decision making for businesses.",
      tech: "React, Tailwind CSS, MongoDB, Solidity",
      date: "August 2024-October 2024",
      icon: <Blocks className="w-8 h-8 text-primary" />,
    },
    {
      title: "Before Deadline Token",
      description: "Designed and implemented the 'Before Deadline' project, utilizing token-based technology to streamline operations and enhance secure access control. Focused on optimizing workflows through innovative digital token applications.",
      tech: "React, Node, Solidity",
      date: "November 2023-December 2023",
      icon: <Code className="w-8 h-8 text-primary" />,
    },
  ];

  const education = [
    {
      degree: "Bachelors in Computer Science Engineering",
      institution: "Chandigarh University",
      grade: "CGPA: 8.2",
      period: "2022-2026",
    },
    {
      degree: "Intermediate (CBSE)",
      institution: "Jai Academy School, Jhansi",
      period: "2021-2022",
    },
  ];

  const skills = {
    technical: [
      "HTML/CSS/ReactJS/NodeJS/Angular",
      "MongoDB/MySQL",
      "UI/UX Designer",
      "Java",
    ],
    interpersonal: [
      "Strong interpersonal skills",
      "Proactive and self-motivated",
      "Exceptional organizational skills",
    ],
  };

  const certifications = [
    "Angular Web Development - Infosys",
    "Backend Web Development - Microsoft Learn",
    "Blockchain - Metacrafter",
    "Python and AI Google Developer Student Clubs",
  ];

  return (
    <div className="relative min-h-screen bg-dark text-white overflow-x-hidden">
      <BlockchainBackground />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          <div className="container mx-auto px-4 pt-20">
            <div className="text-center animate-fade-in backdrop-blur-sm bg-dark/30 p-8 rounded-lg shadow-xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Ridam Aditya Sinha
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Dynamic and adaptable professional with a strong foundation in front-end technologies such as HTML, CSS, React, and JavaScript, coupled with extensive experience in backend development. Proficient in building and integrating APIs, with a keen understanding of Solidity for blockchain development. A dedicated individual committed to delivering high quality results in fast-paced environments.
              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                <a href="mailto:ridamsinha20@gmail.com" className="flex items-center gap-2 text-primary hover:text-primary/80">
                  <Mail size={20} />
                  ridamsinha20@gmail.com
                </a>
                <a href="tel:9532911742" className="flex items-center gap-2 text-primary hover:text-primary/80">
                  <Phone size={20} />
                  9532911742
                </a>
                <a href="https://www.linkedin.com/in/ridam-sinha/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll opacity-0">
              <Book className="inline-block mr-2 mb-1" /> Education
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-dark/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 animate-on-scroll opacity-0"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-gray-300">{edu.institution}</p>
                  {edu.grade && <p className="text-primary">{edu.grade}</p>}
                  <p className="text-sm text-gray-400">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-dark/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll opacity-0">
              <Briefcase className="inline-block mr-2 mb-1" /> Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-dark/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-on-scroll opacity-0"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-4">{project.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="text-sm">
                    <span className="text-primary">{project.tech}</span>
                    <span className="text-gray-400 block mt-2">{project.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll opacity-0">
              <Code className="inline-block mr-2 mb-1" /> Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="animate-on-scroll opacity-0">
                <h3 className="text-xl font-bold mb-6 text-primary">Technical Skills</h3>
                <ul className="space-y-4">
                  {skills.technical.map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2"
                    >
                      <div className="h-2 w-2 bg-primary rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-on-scroll opacity-0" style={{ animationDelay: "200ms" }}>
                <h3 className="text-xl font-bold mb-6 text-primary">Interpersonal Skills</h3>
                <ul className="space-y-4">
                  {skills.interpersonal.map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2"
                    >
                      <div className="h-2 w-2 bg-primary rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 bg-dark/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll opacity-0">
              <Award className="inline-block mr-2 mb-1" /> Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-dark/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 animate-on-scroll opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-lg">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll opacity-0">
              <Send className="inline-block mr-2 mb-1" /> Get in Touch
            </h2>
            <div className="max-w-xl mx-auto">
              <form className="space-y-6 animate-on-scroll opacity-0">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:border-primary/40 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:border-primary/40 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:border-primary/40 focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
