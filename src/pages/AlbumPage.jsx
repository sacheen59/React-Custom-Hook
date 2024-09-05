import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import Url from "../components/Url";
import Data from "../components/Data";
import { useFetch } from "../hook/fetchData";
import { fetchAlbumData } from "../http/apiService";

const AlbumPage = () => {
  const { fetchedData,isLoading } = useFetch(fetchAlbumData, []);
  return (
    <LayoutWrapper>
      <Url url={"https://jsonplaceholder.typicode.com/albums"} />
      <Data data={fetchedData} isLoading={isLoading} />
    </LayoutWrapper>
  );
};

export default AlbumPage;
