const Card = ({ item }) => {
  const sizeOptions =
    item.options && item.options.length > 0 ? item.options[0] : {};
  return (
    <div className="bg-white shadow-lg  max-w-[500px] w-[350px] rounded-lg ">
      <img
        src={item.img}
        alt="food"
        className=" w-full h-60 object-cover rounded-lg"
      />
      <div className="space-y-4 p-6">
        <h1 className="text-xl font-bold ">{item.name}</h1>
        <p className="text-slate-500">{item.description}</p>
        <div className="flex items-center gap-3">
          <select className="flex-1/8 border border-slate-500 text-sm text-center py-2 px-2 rounded-lg cursor-pointer ">
            {Array.from(Array(6), (_, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="flex-1/3 border border-slate-500 text-sm text-center py-2 px-2 rounded-lg cursor-pointer capitalize">
            {Object.keys(sizeOptions).map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
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
