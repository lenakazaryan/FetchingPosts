import data from "./data";

function fetchCommentsOfPost(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let res;
      data.forEach((el) => {
        if (el.id === id) {
          res = el;
        }
      });

      if(!res){
       return resolve([])
      }
      let wR = res.comments.map((comment) => {
        let withoutReactions = {
          author: comment.author,
          content: comment.content,
        };
        return withoutReactions;
      });
      resolve(wR);
    }, 3000);
  });
}
export default fetchCommentsOfPost;
