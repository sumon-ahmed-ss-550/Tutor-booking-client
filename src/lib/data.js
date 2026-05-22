// get one data
export const getOneData = async (userId) => {
  const res = await fetch(`http://localhost:8000/tutors/${userId}`);
  const data = await res.json();
  return data;
};
