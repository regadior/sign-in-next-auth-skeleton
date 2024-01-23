import { authConfig, loginIsRequiredServer } from "@/src/lib/auth";
import { getServerSession } from "next-auth";

const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms));

export default async function Page() {
  await loginIsRequiredServer();
  const session = await getServerSession(authConfig);
  console.log(session);
  await wait(1000);
  return (
    <>
      {session?.user?.image && <img src={session?.user?.image} alt="" />}
      <h3>This is your email: {session?.user?.email}</h3>
      <h3>This is your username: {session?.user?.name}</h3>
    </>
  );
}
