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


// Bài tập Array Destructuring
// Bai 1
function getFirstLast(array) {
if(!Array.isArray(array) || array.length ===0 ){
    return[];
};
return array.slice(0,1).concat(array.slice(-1)) // Your code here
}

console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]

// Bài 2: Hoán đổi vị trí phần tử thứ 2 và thứ 4 trong mảng

function swapElements(arr) {
  if (!Array.isArray(arr)) return [];
  const res = [...arr];
  if (res.length >= 4) {
    [res[1], res[3]] = [res[3], res[1]];
  }
  return res;
}

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]


// Oject Destructuring
// const person = {
//   name: "hoadv",
//   age: 30,
//   city: "Viet Nam",
// };

// const { name, age } = person;
// console.log(name, age); // 'hoadv' 30


// Bài tập 2: Object Destructuring
//Bài 3: Viết hàm extract thông tin user
const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};
function getUserInfo(userData) {
  const {
  personalInfo:{
    name,
    contact: {email},
  },

}=userData;
return {name,email};// Your code here
}
console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }

// Bài 2: Viết hàm với tham số mặc định

function createProduct(
  { name,
    price, 
    category = "general", 
    inStock = true }) {
  return{
  name,
  price,
  category,
  inStock  } ;   // Your code here
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);
// { name: 'Laptop', price: 999, category: 'general', inStock: true }




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
// function fetchUserData(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId > 0) {
//         resolve({ id: userId, name: "hoa dv" });
//       } else {
//         reject("Invalid user ID");
//       }
//     }, 1000);
//   });
// }
// fetchUserData(1)
//   .then((user) => {
//     console.log("User data:", user);
//     return user.name;
//   })
//   .then((userName) => {
//     console.log("User name:", userName);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   })
//   .finally(() => {
//     console.log("Operation completed");
//   });

  // Bài tập 3: Promises
  // Bài 1: Viết hàm delay trả về Promise

function delay(ms) {
  return new Promise(resolve =>{
    setTimeout(()=>{
      resolve();
    },ms)
  })
 // Your code here
}

delay(2000).then(() => console.log("2 seconds passed"));



// Bài 2: Viết hàm fetchMultipleData

function fetchMultipleData(urls) {
    
  // Your code here
}

fetchMultipleData(["/api/user/1", "/api/user/2"]).then((users) =>
  console.log(users)
);



// Async/await
// Bài tập Async/Await
// Bài 1: Viết lại callback hell thành async/await

// Viết lại hàm này sử dụng async/await
async function processOrder(orderId) {``
  try{
    const order = await getOrder(orderId);
    const user = await getUser(order.userId); 
    const products = await getProducts(order.productIds)
  return{
    order,
    user,
    products
  };

  }
  catch(error){
    console.log("failed",error);
    throw error;
  }
}