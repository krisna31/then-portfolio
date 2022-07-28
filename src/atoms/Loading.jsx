const Loading = () => {
  return (
    <>
      <div className="container fixed z-20 min-w-full min-h-full flex justify-center items-center gap-5  bg-gradient-to-r flex-col from-indigo-200 via-red-200 to-yellow-100">
        <div className="flex justify-center items-center gap-5">
          <span className="w-5 h-5 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 animate-pulse rounded-full"></span>
          <span className="w-5 h-5 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 animate-pulse rounded-full"></span>
          <span className="w-5 h-5 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 animate-pulse rounded-full"></span>
        </div>
        <h1 className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 animate-pulse bg-clip-text text-transparent font-semibold">LOADING</h1>
      </div>
    </>
  );
};

export default Loading;
