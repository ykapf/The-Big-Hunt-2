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
    if (password.toLowerCase() === "bity") {
      router.push("/kjlajedfoancjaocas");
    }
    setPassword(""); // Reset the password input
  };

  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <div className="flex h-full pb-36 flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center">Welcome to</h1>
        <div className="flex flex-row items-center justify-center text-9xl mt-5">
          <h1 className="text-9xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> THE BIG HUNT</h1>
          &nbsp;
          <h1 className="text-9xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-800"> 2</h1>
        </div>
        <h1 className="text-4xl font-bold text-center mt-10 opacity-50">The online scavanger hunt makes an unexpected return</h1>
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
