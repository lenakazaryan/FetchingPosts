import FetchPosts from "./servises/posts";
import fetchCommentsOfPost from "./servises/comments";
import fetchReactionsOfComment from "./servises/reactions";
import { wait } from "./api";

async function onLoad() {
  const posts = await FetchPosts();
  await wait(2000);
  const comments = await fetchCommentsOfPost(posts[0].id);
  await wait(3000);
  const reactions = await fetchReactionsOfComment(posts[0].id);
  await wait(4000);

  return { posts, comments, reactions };
}

export default onLoad;
