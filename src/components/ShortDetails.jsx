import MyBookingUser from "./MyBookingUser";

const ShortDetails = ({ oneUser }) => {
  return (
    <div>
      <MyBookingUser oneUser={oneUser} />
    </div>
  );
};

export default ShortDetails;
