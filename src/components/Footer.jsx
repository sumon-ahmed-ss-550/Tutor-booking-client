import { Separator } from "@heroui/react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 pt-16 pb-8 overflow-hidden border-t border-gray-800">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Description */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
                T
              </div>
              <strong className="text-2xl font-extrabold text-white tracking-tight">
                Tutor<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Booking</span>
              </strong>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm pr-4">
              Empowering learners, one session at a time. Discover top-tier mentors and elevate your skills through personalized learning experiences.
            </p>
          </div>

          {/* Links Section 1 */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Tutor Services</h3>
            <ul className="space-y-4">
              {['One-on-One Tutoring', 'Group Sessions', 'Online Learning', 'Exam Preparation', 'Subject Specialists'].map((item, idx) => (
                <li key={idx}>
                  <Link className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center group" href="#">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/0 group-hover:bg-teal-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section 2 */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Learning Services</h3>
            <ul className="space-y-4">
              {['Study Plans', 'Practice Tests', 'Resource Library', 'Progress Tracking', 'Scholarships'].map((item, idx) => (
                <li key={idx}>
                  <Link className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center group" href="#">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/0 group-hover:bg-teal-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                sumon@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                +880 1707 286766
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                Mirpur-2300, Dhaka, BD
              </li>
            </ul>

            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Follow Us</h3>
            <div className="flex items-center gap-3">
              {[
                { icon: FaFacebook, link: "#" },
                { icon: FaTwitter, link: "#" },
                { icon: FaSquareInstagram, link: "#" },
                { icon: FaLinkedin, link: "#" },
                { icon: FaYoutube, link: "#" },
              ].map((social, idx) => (
                <Link key={idx} href={social.link} className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-gradient-to-tr hover:from-teal-500 hover:to-blue-600 hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <social.icon className="text-lg" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-2">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} EduLearn Tutors. All rights reserved.
          </p>

          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link className="text-gray-500 hover:text-white transition-colors" href="#">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="text-gray-500 hover:text-white transition-colors" href="#">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link className="text-gray-500 hover:text-white transition-colors" href="#">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
