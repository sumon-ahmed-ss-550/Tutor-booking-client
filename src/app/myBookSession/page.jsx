import MyBookingUserData from "@/components/MyBookingUserData";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBookSessionPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;

  const res = await fetch(`http://localhost:8000/tutors/booking/${userId}`);
  const data = await res.json();
  console.log("My Bookings Data:", data);
  return (
    <div>
      <MyBookingUserData data={data}></MyBookingUserData>
    </div>
  );
};

export default MyBookSessionPage;
