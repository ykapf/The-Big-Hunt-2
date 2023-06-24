"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Confetti from "../Confetti.jsx";

const Home = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password.toLowerCase() === "4 big guys") {
      router.push("/qghshgjjjyenrgdkjs");
    }
    setPassword(""); // Reset the password input
  };

  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      {/* play music */}
      <div className="w-0 h-0 flex flex-col items-center">
        <iframe
          className="w-0 h-0 opacity-0 "
          src={"https://www.youtube.com/embed/kSENMW9KHJ0?loop=1&iv_load_policy=3&controls=1&modestbranding=1&playsinline=1&color=white&autoplay=1"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {/* end play music */}
      <Confetti />
      <div className="flex h-full pb-36 flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center p-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Congratulations! 🎉</h1>
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-4xl font-bold text-center mt-10 opacity-50">You successfully completed</h1>
          &nbsp; &nbsp;
          <h1 className="text-4xl font-bold text-center mt-10 opacity-100">THE BIG HUNT 2!</h1>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-end w-full ">
        Made by{" "}
        <a className="hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" href="https://www.ykapf.com">
          Yusuf
        </a>
      </h1>
    </main>
  );
};

export default Home;
