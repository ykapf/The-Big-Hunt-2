"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password.toLowerCase() === "she's gotta chill") {
      router.push("/");
    }
    setPassword(""); // Reset the password input
  };

  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold text-start w-full ">Stage 2</h1>

      <div className="flex h-full pb-36 flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> 20/10/2021 16:47</h1>
        <h1 className="text-4xl font-bold text-center mt-10 opacity-50">
          If you&apos;re struggling to solve a puzzle, remember that your opponent is probably ahead of you and you are just being stupid.
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-row">
          <div className="bg-[#FBFBFB] dark:bg-black rounded-l-xl p-[4px] bg-gradient-to-r from-purple-400 to-pink-600">
            <input
              className="bg-[#FBFBFB] dark:bg-black rounded-l-lg p-2 outline-none"
              type="text"
              placeholder="Password..."
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div className="bg-[#FBFBFB] dark:bg-black rounded-r-xl pr-[4px] py-[4px] bg-gradient-to-r from-pink-600 to-pink-800">
            <button className="bg-[#FBFBFB] dark:bg-black rounded-r-lg p-2 outline-none hover:bg-opacity-0 hover:text-white font-bold" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Home;
