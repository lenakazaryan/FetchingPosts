import data from "./data";

function FetchPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = data.map((item) => {
        let obj = {
          id: item.id,
          title: item.title,
          content: item.content,
        };
        return obj;
      });
      resolve(result);
    }, 2000);
  });
}


export default FetchPosts;



