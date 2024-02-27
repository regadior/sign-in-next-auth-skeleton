"use client";
import React from "react";
import { signOut } from "next-auth/react";

function SignOut() {
  return (
    <div className="flex flex-col justify-between h-screen p-4">
      <button className="bg-white rounded-full border border-gray-200 text-gray-800 px-4 py-2 flex items-center space-x-2 hover:bg-gray-200">
        <span onClick={() => signOut()}>Logout</span>
      </button>
    </div>
  );
}

export default SignOut;
