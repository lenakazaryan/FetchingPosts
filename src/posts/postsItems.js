import fetchCommentsOfPost from "../servises/comments";
import { useState } from "react";
import CommentsItemList from './commentsItemList';

function PostsItems(props) {
  const [comments, setComment] = useState([]);

  function onPostSelect() {
    fetchCommentsOfPost(props.postik.id).then((value) => {
      setComment(value);
    });
  }

  return (
    <div className="posts" onClick={onPostSelect}>
      <p>{props.postik.title}</p>
      <p>{props.postik.content}</p>
      <CommentsItemList comments={comments} />
    </div>
  );
}

export default PostsItems;
