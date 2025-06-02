import React from "react";

const Card = () => {
  return (
    <div className="bg-white shadow-lg  max-w-[300px] w-[280px] rounded-lg ">
      <img
        src="https://lh3.googleusercontent.com/_eun9F8Eo9sQux-mIIH4VRQT6jzPWRQDkrtSFpLX0guDNeARftY_-HyZgjohFfgXknZnsjsff4OlIxQvP77sHTHqSx0=w360-rw"
        alt="food"
        className=" w-full h-60 object-cover rounded-lg"
      />
      <div className="space-y-2 py-2 px-4">
        <h1 className="text-xl font-bold ">Title</h1>
        <p className="text-slate-500">description</p>
        <div className="flex items-center gap-2">
          <select className="flex-1/8 border border-slate-500 text-sm text-center py-2 px-2 rounded-lg cursor-pointer ">
            {Array.from(Array(6), (_, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="flex-1/3 border border-slate-500 text-sm text-center py-2 px-2 rounded-lg cursor-pointer ">
            <option value="Half">Half</option>
            <option value="Full">Full</option>
          </select>
        </div>
          <div className="bg-slate-800 text-white py-2 px-4 text-center rounded-lg">
            <p>Total Price</p>
          </div>
      </div>
    </div>
  );
};

export default Card;
