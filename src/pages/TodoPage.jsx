import React from 'react'
import LayoutWrapper from '../components/LayoutWrapper'
import Url from '../components/Url'
import Data from '../components/Data'
import { useFetch } from '../hook/fetchData'
import { fetchTodoData } from '../http/apiService'

const TodoPage = () => {
  const {fetchedData,isLoading} = useFetch(fetchTodoData,[]);
  return (
    <LayoutWrapper>
      <Url url={"https://jsonplaceholder.typicode.com/todos"} />
      <Data data={fetchedData} isLoading={isLoading} />
    </LayoutWrapper>
  )
}

export default TodoPage