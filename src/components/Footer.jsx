import { Separator } from "@heroui/react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" py-10 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-3">
        <div>
          <div className="text-[24px] mb-8">
            <strong className="text-[#ffffff]">
              Tutor
              <span className="text-[#5bd9b3]">Booking</span>
            </strong>
            <p className="text-[#7c78b5]">
              Empowering learners, one session at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mb-8 space-y-8 lg:space-y-0">
            <div>
              <h2 className="text-[#7c78b5] mb-3.5">Tutor Services</h2>
              <ul className="space-y-3">
                <li>
                  <Link className="text-[#c8c4e8]" href="#">
                    One-on-One Tutoring
                  </Link>
                </li>

                <li>
                  <Link className="text-[#c8c4e8]" href="#">
                    Group Sessions
                  </Link>
                </li>

                <li>
                  <Link className="text-[#c8c4e8]" href="#">
                    Online Learning
                  </Link>
                </li>

                <li>
                  <Link className="text-[#c8c4e8]" href="#">
                    Exam Preparation
                  </Link>
                </li>

                <li>
                  <Link className="text-[#c8c4e8]" href="#">
                    Subject Specialists
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#7c78b5] mb-3.5">Learning Services</h2>
              <ul className="space-y-3">
                <li>
                  <Link className="text-[#c8c4e8]" href="#">
                    Study Plans
                  </Link>
                </li>

                <li>
                  <Link className="text-[#c8c4e8]" href="#">
                    Practice Tests
                  </Link>
                </li>

                <li>
                  <Link className="text-[#c8c4e8]" href="#">
                    Resource Library
                  </Link>
                </li>

                <li>
                  <Link className="text-[#c8c4e8]" href="#">
                    Progress Tracking
                  </Link>
                </li>

                <li>
                  <Link className="text-[#c8c4e8]" href="#">
                    Scholarships
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#7c78b5] mb-3.5">Contact</h2>
              <ul className="space-y-3">
                <li className="text-[#c8c4e8]">sumon@gmail.com</li>
                <li className="text-[#c8c4e8]">+8801707286766</li>
                <li className="text-[#c8c4e8]">Mirpur-2300, Dhaka, BD</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#7c78b5] mb-3.5">Follow Us</h2>
              <ul className="flex items-center gap-3">
                <li>
                  <Link className="text-[#c8c4e8]" href="#">
                    <FaFacebook className="text-[32px] rounded border border-[#ffffff2e] bg-[#ffffff0d] p-1" />
                  </Link>
                </li>

                <li>
                  <Link className="text-[#c8c4e8]" href="#">
                    <FaTwitter className="text-[32px] rounded border border-[#ffffff2e] bg-[#ffffff0d] p-1" />
                  </Link>
                </li>

                <li>
                  <Link className="text-[#c8c4e8]" href="#">
                    <FaSquareInstagram className="text-[32px] rounded border border-[#ffffff2e] bg-[#ffffff0d] p-1" />
                  </Link>
                </li>

                <li>
                  <Link className="text-[#c8c4e8]" href="#">
                    <FaLinkedin className="text-[32px] rounded border border-[#ffffff2e] bg-[#ffffff0d] p-1" />
                  </Link>
                </li>

                <li>
                  <Link className="text-[#c8c4e8]" href="#">
                    <FaYoutube className="text-[32px] rounded border border-[#ffffff2e] bg-[#ffffff0d] p-1" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator></Separator>
          <div className="md:flex justify-between items-center mt-8">
            <p className="text-[#7c78b5] mb-4 lg:mb-0">
              © 2026 EduLearn Tutors. All rights reserved.
            </p>

            <div>
              <ul className="flex items-center gap-4">
                <li>
                  <Link className="text-[#7c78b5]" href="#">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link className="text-[#7c78b5]" href="#">
                    Terms of Use
                  </Link>
                </li>

                <li>
                  <Link className="text-[#7c78b5]" href="#">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
