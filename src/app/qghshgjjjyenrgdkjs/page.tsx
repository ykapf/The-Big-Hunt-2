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
    if (password.toLowerCase() === "4 big guys") {
      router.push("/qghshgjjjyenrgdkjs");
    }
    setPassword(""); // Reset the password input
  };

  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <div className="flex h-full pb-36 flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center p-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Congratulations! 🎉</h1>
        <h1 className="text-4xl font-bold text-center mt-10 opacity-50">You successfully completed THE BIG HUNT 2! </h1>
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
