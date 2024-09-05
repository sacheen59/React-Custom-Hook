import axios from "axios";

export async function fetchPostData() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
}

export async function fetchTodoData() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return data;
}

export async function fetchAlbumData(){
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/albums")
    return data;
}

export async function fetchUsersData(){
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    return data;
}

export async function fetchPhotosData(){
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/photos");
    return data;
}

export async function fetchCommentsData(){
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/comments");
    return data;
}