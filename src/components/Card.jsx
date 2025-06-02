import React from "react";

const Card = () => {
  return (
    <div>
      <h1 className="text-xl font-bold ">Title</h1>
      <p className="text-slate-500">description</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMRymR2Y72Kd9DhN4ScWsD6Zfmnae2b89LNnRQdkq2AiMdquazSYhyLK_Eu0LLdNfvRs&usqp=CAU"
        alt="food"
      />
      <div className="flex ">

      <select className="">
        {Array.from(Array(6), (_, i) => {
          return (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          );
        })}
      </select>
      <select className="">
        <option value="Half">Half</option>
        <option value="Full">Full</option>
      </select>
      <div>
        <p>Total Price</p>
      </div>
        </div>
    </div>
  );
};

export default Card;
