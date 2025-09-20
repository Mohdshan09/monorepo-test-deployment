import { client } from "@repo/db/client";
const Home = async () => {
  const user = await client.user.findFirst();
  return (
    <div>
      Name of the user
      <h2>{user?.username}</h2>
      Password of the user
      <h4>{user?.password}</h4>
    </div>
  );
};

export default Home;
