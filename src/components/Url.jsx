import React from "react";
import { Link } from "react-router-dom";

const Url = ({ url }) => {
  return (
    <div className="font-poppins px-4 py-2 bg-gray-50 border">
      <span className="font-bold uppercase">Url :&nbsp;&nbsp;</span>
      <Link to={url} target="_blank">
        {url}
      </Link>
    </div>
  );
};

export default Url;
