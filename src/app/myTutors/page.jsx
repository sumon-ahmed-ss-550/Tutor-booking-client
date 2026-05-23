import Table from "@/components/Table";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyTutorsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/user/${user?.id}`,
  );
  const data = await res.json();

  return <Table data={data}></Table>;
};

export default MyTutorsPage;
