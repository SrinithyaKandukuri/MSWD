import { Card } from "../../components/cards/style";

const Profile = () => {
  return (
    <div className="p-20 ">
      <p className="text-2xl ">Profile</p>
      <Card>
        <div className="flex gap-4">
          <div className="font-bold">
            <p>Name: </p>
            <p>Email: </p>
            <p>Role: </p>
          </div>
          <div className=" ">
            <p>{localStorage.getItem("name")} </p>
            <p>{localStorage.getItem("email")} </p>
            <p>{localStorage.getItem("role")}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
