import axios from "axios";

export default async function getData(user_id) {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${user_id}`
  );
  const { data: user_posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
  );
  console.log("USER", user, "UserPOSTS", user_posts);
}
