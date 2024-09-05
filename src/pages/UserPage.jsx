import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import Url from "../components/Url";
import Data from "../components/Data";
import { useFetch } from "../hook/fetchData";
import { fetchUsersData } from "../http/apiService";

const UserPage = () => {
  const { fetchedData, isLoading } = useFetch(fetchUsersData, []);
  return (
    <LayoutWrapper>
      <Url url={"https://jsonplaceholder.typicode.com/users"} />
      <Data data={fetchedData} isLoading={isLoading} />
    </LayoutWrapper>
  );
};

export default UserPage;
