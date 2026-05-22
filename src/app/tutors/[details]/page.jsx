import Details from "@/components/Details";
import { getOneData } from "@/lib/data";

const DetailsPage = async ({ params }) => {
  const { details } = await params;
  const oneUser = await getOneData(details);

  return (
    <div>
      <Details details={details} oneUser={oneUser}></Details>
    </div>
  );
};

export default DetailsPage;
