"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiCloseLargeFill, RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const pathName = usePathname();
  const handleToggleIcon = () => {
    setIsToggle(!isToggle);
  };

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`${pathName === "/" ? "text-[#5bd9b3]" : "text-[#8a8885]"} block`}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/tutors"
          className={`${pathName === "/tutors" ? "text-[#5bd9b3]" : "text-[#8a8885]"} block`}
        >
          Tutors
        </Link>
      </li>

      <li>
        <Link
          href="/addTutors"
          className={`${pathName === "/addTutors" ? "text-[#5bd9b3]" : "text-[#8a8885]"} block`}
        >
          Add Tutors
        </Link>
      </li>

      <li>
        <Link
          href="/myTutors"
          className={`${pathName === "/myTutors" ? "text-[#5bd9b3]" : "text-[#8a8885]"} block`}
        >
          My Tutors
        </Link>
      </li>

      <li>
        <Link
          href="/myBookSession"
          className={`${pathName === "/myBookSession" ? "text-[#5bd9b3]" : "text-[#8a8885]"} block`}
        >
          My Booked Sessions
        </Link>
      </li>
    </>
  );

  const { data: session } = authClient.useSession();
  const userData = session?.user;
  console.log(userData);

  const handleSignOutButton = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="shadow-sm py-3">
      <div className="px-3">
        <div className="flex justify-between items-center">
          <div className="text-[#3e3c36] text-2xl">
            <div className="flex items-center">
              <div>
                <div onClick={handleToggleIcon} className="lg:hidden mr-4">
                  {isToggle ? <RiCloseLargeFill /> : <RiMenu2Line />}
                </div>

                <div
                  className={`${isToggle ? "block" : "hidden"} absolute top-17.5 lg:hidden p-6 w-67.5 border rounded
                  bg-[#ffffff] z-10`}
                >
                  <ul className="space-y-2 text-[16px]">{links}</ul>
                </div>
              </div>

              <strong>
                Tutor
                <span className="text-[#5bd9b3]">Booking</span>
              </strong>
            </div>
          </div>

          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">{links}</ul>
          </div>

          <div className="flex items-center gap-3">
            {userData ? (
              <div className="flex items-center gap-3">
                <Avatar className="outline outline-offset-1">
                  <Avatar.Image
                    alt={`${userData?.name}`}
                    src={`${userData?.image}`}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{`${userData?.name?.charAt(0)}`}</Avatar.Fallback>
                </Avatar>
                <Button onClick={handleSignOutButton} className="rounded">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="rounded border-none bg-[#0485f7] text-[#ffffff]"
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/register">
                  <Button
                    variant="outline"
                    className="rounded border-none bg-[#0485f7] text-[#ffffff]"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
