import axios from "axios";

  const getData = (async(id) => {
  var data = {};
  let users = await axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)

  let posts = await axios
    .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    

    data = { ...users.data , posts: [...posts.data]};

  return data;

  });

export default getData;