function CommentItem(props) {
  return (
    <div>
      {props.comment.author}
      {props.comment.content}
    </div>
  );
}

export default CommentItem;
