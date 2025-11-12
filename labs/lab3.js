// //Bài 1
// // Function 1
// const multiply = (a, b) => a * b  ;

// // Function 2
// const isPositive = number => number >= 0;

// // Function 3
// const getRandomNumber = () =>  Math.random();

// // Function 4
// const handleClick = () =>{console.log("Clicked!")}; 
// document.addEventListener("click", handleClick);  

// Bài tập 2: Sử dụng Default Parameters
//Viết lại hàm sau sử dụng default parameters:

// function createUser(name = "Anonymous", age=18, isAdmin="False") {

//   return {
//     name,
//     age,
//     isAdmin,
//   };
// }
 

// Bài tập 3: Rest và Spread
// Viết các hàm sau:

// // Hàm mergeArrays nhận nhiều mảng và trả về mảng hợp nhất
// const mergeArrays = (...arrays) => [].concat(...arrays)
// console.log(mergeArrays([1, 2], [3, 4], [5])); 
// // Hàm sumAll tính tổng tất cả tham số truyền vào
// const sumAll=(...numbers) =>numbers.reduce((total, num) => total + num, 0);
// console.log(sumAll(1,2,3,4,5));
// // Hàm createProduct nhận thông tin sản phẩm và trả về object sản phẩm với giá trị mặc định
// const createProduct =({
//     name = "Unknow Product",
//     price = 0,
//     category = "General",
//     inStock = true,
    
// }={})=>({
//     name,
//     price,
//     category,
//     inStock
// });
// console.log(createProduct());

// Bài tập 4: Ứng dụng thực tế
// Tạo hàm shoppingCart với:

// Tham số đầu tiên là tên khách hàng
// Các tham số tiếp theo là các sản phẩm
// Sử dụng rest parameters để thu thập sản phẩm
// Trả về object chứa thông tin đơn hàng
const shoppingCart=(customerName, ...products)=>{
    return{
    customerName,
    products,
    totalItems : products.length
}};
console.log(
  shoppingCart("Linh")
);