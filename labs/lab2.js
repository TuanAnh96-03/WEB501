// var - function scoped functioc{}
// block scoped {} function {}, if() {}
// function varExample(){
//     if(true){
//         var x = 10;
//     }
//     console.log(x); 
// }
// varExample();

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}