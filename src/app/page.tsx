import {
  GithubSignInButton,
  GoogleSignInButton,
  TwitchSignInButton,
} from "@/src/components/authButtons";
import { getServerSession } from "next-auth";
import { authConfig } from "@/src/lib/auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await getServerSession(authConfig);
  if (session) return redirect("/home");

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center mt-10 p-10 shadow-md">
        <h1 className="mt-10 mb-4 text-4xl font-bold">Sign In</h1>
        <GoogleSignInButton />
        <GithubSignInButton />
        <TwitchSignInButton/>
      </div>
    </div>
  );
}
