"use client";

const Home = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <div className="flex h-full pb-36 flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center">Welcome to</h1>
        <div className="flex flex-row items-center justify-center text-9xl mt-5">
          <h1 className="text-9xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> BOMB DEFUSER</h1>
          &nbsp;
          <h1 className="text-9xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-800"> 2</h1>
        </div>
        <h1 className="text-4xl font-bold text-center mt-10 opacity-50">The online scavanger hunt makes an unexpected return</h1>
      </div>
    </main>
  );
};

export default Home;
