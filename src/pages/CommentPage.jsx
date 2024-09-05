import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import Url from "../components/Url";
import Data from "../components/Data";
import { useFetch } from "../hook/fetchData";
import { fetchCommentsData } from "../http/apiService";

const CommentPage = () => {
    const {fetchedData,isLoading} = useFetch(fetchCommentsData,[]);
  return (
    <LayoutWrapper>
      <Url url={"https://jsonplaceholder.typicode.com/comments"} />
      <Data data={fetchedData} isLoading={isLoading} />
    </LayoutWrapper>
  );
};

export default CommentPage;
