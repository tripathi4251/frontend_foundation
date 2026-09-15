const mypromise=new promise((resolve,reject)=> {
    let success=true;
    if (success) {
        resolve("task completed successfully");
} else {
    reject ("task failed");
}
});

mypromise
   .then((result) => {
    console.log(result);
   })