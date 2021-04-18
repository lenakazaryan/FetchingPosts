export function wait(second) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, second);
  });
}
 
 