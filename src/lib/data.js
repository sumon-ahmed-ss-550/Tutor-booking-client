// get one data
export const getOneData = async (userId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tutors/${userId}`,
  );
  const data = await res.json();
  return data;
};
