import React from "react";
import Loading from "./Loading";

const Data = ({ data, isLoading }) => {
  return (
    <div className="mt-[2rem] px-4 py-2 bg-black text-white border h-[40rem] overflow-scroll rounded">
      {isLoading && <Loading />}
      {!isLoading && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Data;
