const Skeleton = () => {
  return (
    <div className="animate-pulse flex flex-col space-y-4 p-4 rounded-xl bg-gray-100">
      <div className="h-40 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default Skeleton;
