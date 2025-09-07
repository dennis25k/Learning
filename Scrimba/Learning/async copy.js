async function getBlogPost() {
  const promise = new Promise((resolve, reject) => {
    resolve('blog post');
  });

  //await can only be used in a function that uses async to start
  const result = await promise
    console.log(result);
    console.log("Done");
  
}

getBlogPost();
