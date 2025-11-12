// const colors = ["red", "green", "blue"];

// // const red =colors[0];

// // console.log(red);
// // Array Destructuring
// const [red, green, blue, yellow]= colors;

// console.log(red,green,blue,yellow);

// const numbers = [1, 2, 3, 4, 5];
// const[,second,,four]=numbers;
// console.log(second,four);

// const user =["password", "email", "age", "name"];
// const [pass, ...userInfo]=user;
// console.log(userInfo);

// Bai 1
// function getFirstLast(array) {
// if(!Array.isArray(array) || array.length ===0 ){
//     return[];
// };
// return array.slice(0,1).concat(array.slice(-1)) // Your code here
// }

// console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]

// // Bài 2: Hoán đổi vị trí phần tử thứ 2 và thứ 4 trong mảng

// function swapElements(arr) {
//   if (!Array.isArray(arr)) return [];
//   const res = [...arr];
//   if (res.length >= 4) {
//     [res[1], res[3]] = [res[3], res[1]];
//   }
//   return res;
// }

// console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]

// const person = {
//   name: "hoadv",
//   age: 30,
//   city: "Viet Nam",
// };

// const { name, age } = person;
// console.log(name, age); // 'hoadv' 30

// //Bài 3: Viết hàm extract thông tin user
// const user = {
//   id: 1,
//   personalInfo: {
//     name: "javascript",
//     contact: {
//       email: "javascript@email.com",
//       phone: "123-456-7890",
//     },
//   },
// };

// function getUserInfo(user) {
//      // Your code here
// }

// console.log(getUserInfo(user));
// // { name: 'javascript', email: 'javascript@email.com' }




// // Callback cơ bản
// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { id: 1, name: "hoadv" };
//     callback(null, data);
//   }, 1000);
// }

// fetchData((error, data) => {
//   if (error) {
//     console.error("Error:", error);
//   } else {
//     console.log("Data:", data);
//   }
// })

// // Promise
// new Promise((resolve, reject) => {
//   // Async operation
// })
//   .then((result) => {
//     /* handle success */
//     // resolve
//   })
//   .catch((error) => {
//     /* handle error */
//     // reject
//   })
//   .finally(() => {
//     /* always execute */
//     // code luôn chạy
//   });
  // Tạo Promise
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "hoa dv" });
      } else {
        reject("Invalid user ID");
      }
    }, 1000);
  });
}
fetchUserData(1)
  .then((user) => {
    console.log("User data:", user);
    return user.name;
  })
  .then((userName) => {
    console.log("User name:", userName);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Operation completed");
  });