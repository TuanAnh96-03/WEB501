// var - function scoped functioc{}
// block scoped {} function {}, if() {}
// function varExample(){
//     if(true){
//         var x = 10;
//     }
//     console.log(x); 
// }
// varExample();

// Bài 1
// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 100);
// }


// // Bài 2
// // Tạo một object student với const
// // Thêm thuộc tính điểm và in ra
// const student = {
//   name: "ThuyTien",
//   age: 20,
// };
// // Thực hiện các thao tác sau:
// // 1. Thêm thuộc tính grade với giá trị "A"
// student.grade="A";
// // 2. Thay đổi tuổi thành 21
// student.age=21;
// // 3. In ra toàn bộ thông tin student
// console.log(student)


// Bài 3
// Tạo template cho email thông báo
// const user = {
//   firstName: "Nguyen",
//   lastName: "Van A",
//   product: "Laptop Dell XPS",
//   price: 25000000,
//   orderDate: "2024-01-15",
// };

// // Tạo template string cho email
// const emailTemplate = `
// Xin chào ${user.firstName} ${user.lastName}
// Cảm ơn đã bạn đã đặt đơn hàng!
// Thông tin đơn hàng:
// Sản phẩm: ${user.product}
// Giá:${user.price}
// Ngày đặt:${user.orderDate}
// `; // Viết template ở đây
// console.log(emailTemplate);


// // Bài 4
// // Tạo HTML template cho card sản phẩm
// const product = {
//   name: "iPhone 15",
//   price: 20000000,
//   discount: 10,
//   inStock: true,
// };

// // Tính giá sau giảm
// const finalPrice = product.price * (1 - product.discount / 100);

// // Tạo template HTML
// const productCard = `
// <div class="product-card">
//   <h2>${product.name}</h2>
//   <p>Giá gốc: <del>${product.price.toLocaleString()}₫</del></p>
//   <p>Giảm giá: <strong>${product.discount}%</strong></p>
//   <p>Giá sau giảm: <span>${finalPrice.toLocaleString()}₫</span></p>
//   <p>Tình trạng: ${
//     product.inStock
//       ? '<span style="color:green;">Còn hàng</span>'
//       : '<span style="color:red;">Hết hàng</span>'
//   }</p>
//   <button>
//     Mua ngay
//   </button>
// </div>
// `; // Viết template ở đây

// console.log(productCard);


// Bài 5
// Viết lại object sau sử dụng ES6 enhanced object literals
const width = 100;
const height = 200;
const color = "red";

const rectangle = {
  width,
  height,
  color,
  calculateArea() {
    return this.width * this.height;
  },
  describe() {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};
// Kiểm tra
console.log(rectangle.describe());
console.log("Diện tích:", rectangle.calculateArea());

// bài 6