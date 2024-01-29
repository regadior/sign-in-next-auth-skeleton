import { NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import TwitchProvider from "next-auth/providers/twitch";


export const authConfig: NextAuthOptions = {
  callbacks: {
    async session({ session, token, user }) {
      return {...session, token};
    },
  },
  
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID as string,
      clientSecret: process.env.TWITCH_CLIENT_SECRET as string,
    }),
  ],
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");
}

export function loginIsRequiredClient() {
  if (typeof window !== "undefined") {
    const session = useSession();
    const router = useRouter();
    if (!session) router.push("/");
  }
}
