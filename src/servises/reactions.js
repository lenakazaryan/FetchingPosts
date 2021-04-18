import data from './data';
function fetchReactionsOfComment(id, reactions = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let res;
      data.forEach((el) => {
        if (el.id === id) {
          res = el;
        }
      });

      resolve(res.comments[reactions]?.reactions)
    }, 3000);
  });
}

export default fetchReactionsOfComment;



