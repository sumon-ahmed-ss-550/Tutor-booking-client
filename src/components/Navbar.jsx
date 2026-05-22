"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { RiCloseLargeFill, RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();

  // Add scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleIcon = () => {
    setIsToggle(!isToggle);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Tutors", path: "/tutors" },
    { name: "Add Tutors", path: "/addTutors" },
    { name: "My Tutors", path: "/myTutors" },
    { name: "My Booked Sessions", path: "/myBookSession" },
  ];

  const { data: session } = authClient.useSession();
  const userData = session?.user;

  const handleSignOutButton = async () => {
    await authClient.signOut();
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-gray-100 py-3"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleToggleIcon}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isToggle ? (
                <RiCloseLargeFill size={24} />
              ) : (
                <RiMenu2Line size={24} />
              )}
            </button>

            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-cyan-500/30 transition-shadow">
                T
              </div>
              <strong className="text-2xl font-extrabold text-gray-800 tracking-tight">
                Tutor
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
                  Booking
                </span>
              </strong>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-gray-50/80 px-2 py-1.5 rounded-full border border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathName === item.path
                    ? "text-teal-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-sm"
                }`}
              >
                {pathName === item.path && (
                  <span className="absolute inset-0 bg-white shadow-sm border border-gray-200 rounded-full -z-10"></span>
                )}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side: Auth / Profile */}
          <div className="flex items-center gap-4">
            {userData ? (
              <div className="flex items-center gap-4 bg-gray-50 p-1.5 pr-5 rounded-full border border-gray-100 shadow-sm">
                <Avatar className="w-9 h-9 border-2 border-white shadow-sm cursor-pointer hover:scale-105 transition-transform">
                  <Avatar.Image
                    alt={`${userData?.name}`}
                    src={`${userData?.image}`}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback className="bg-gradient-to-br from-teal-400 to-blue-500 text-white font-medium">
                    {`${userData?.name?.charAt(0)}`}
                  </Avatar.Fallback>
                </Avatar>
                <button
                  onClick={handleSignOutButton}
                  className="text-sm font-semibold text-gray-600 hover:text-red-500 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login" className="hidden sm:block">
                  <Button
                    variant="light"
                    className="font-medium text-gray-600 hover:text-gray-900"
                  >
                    Log in
                  </Button>
                </Link>

                <Link href="/register">
                  <Button className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium px-6 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border-none">
                    Sign up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-2xl transition-all duration-300 origin-top overflow-hidden lg:hidden ${
          isToggle ? "opacity-100 max-h-[400px]" : "opacity-0 max-h-0"
        }`}
      >
        <div className="px-4 py-6 space-y-2 max-w-7xl mx-auto flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsToggle(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                pathName === item.path
                  ? "bg-teal-50/80 text-teal-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {!userData && (
            <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3 sm:hidden">
              <Link href="/login" onClick={() => setIsToggle(false)}>
                <Button
                  variant="flat"
                  className="w-full justify-center font-medium bg-gray-100 text-gray-700"
                >
                  Log in
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
