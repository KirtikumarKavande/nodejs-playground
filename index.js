setTimeout(cb2=() => {
  process.nextTick(cb3=() => {
    console.log("tick is executed1");
  });
  console.log("interesting cb");

}, 0);
setTimeout(cb1=() => {
    console.log("time out executed");
  }, 0);

Promise.resolve().then(cb4=() => {
  console.log("promise execution done");
});
process.nextTick(cb5=() => {
  console.log("tick is executed2");
});

console.log("end of programme");
