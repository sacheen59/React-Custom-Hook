import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import Url from "../components/Url";
import Data from "../components/Data";
import { fetchPostData } from "../http/apiService";
import { useFetch } from "../hook/fetchData";

const PostPage = () => {
  const { fetchedData,isLoading } = useFetch(fetchPostData, []);
  return (
    <LayoutWrapper>
      <Url url={"https://jsonplaceholder.typicode.com/posts"} />
      <Data data={fetchedData} isLoading={isLoading} />
    </LayoutWrapper>
  );
};

export default PostPage;
