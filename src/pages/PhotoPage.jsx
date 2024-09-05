import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import Url from "../components/Url";
import Data from "../components/Data";
import { useFetch } from "../hook/fetchData";
import { fetchPhotosData } from "../http/apiService";

const PhotoPage = () => {
  const { fetchedData, isLoading } = useFetch(fetchPhotosData, []);
  return (
    <LayoutWrapper>
      <Url url={"https://jsonplaceholder.typicode.com/photos"} />
      <Data data={fetchedData} isLoading={isLoading} />
    </LayoutWrapper>
  );
};

export default PhotoPage;
