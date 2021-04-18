import FetchPosts from "../servises/posts";
import { useState } from "react";
import PostsItems from "./postsItems";

function PostsItemsList() {
  const [posts, setPosts] = useState([]);


  FetchPosts().then((value) => {
    setPosts(value);
  });

  return (
    <div>
      {posts.map((post, index) => {
        return <PostsItems key={index} postik={post} />;
      })}
    </div>
  );
}

export default PostsItemsList;
