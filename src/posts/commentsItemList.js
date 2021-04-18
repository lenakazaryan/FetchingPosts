import CommentItem from "./commentItem";

function CommentsItemList(props) {
  return (
    <div>
      {props.comments.map((comment, index) => {
        return <CommentItem key={index} comment={comment}/>;
      })}
    </div>
  );
}

export default CommentsItemList;
