// Bài tập 1
// function calculateBMI(weight,height){
//     const bmi = weight / (height * height);
//     let category ="";
//     if(bmi<18.5){
//         category ="thiếu cân";
//     }
//     else if(bmi >= 18.5 && bmi < 25){
//         category="Bình thường";
//     }
//     else if(bmi >= 25 && bmi < 30 ){
//         category="Thừa cân";
//     }
//     else{   
//         category="Béo phì";
//     }
//   return `BMI: ${bmi.toFixed(2)} - Phân loại: ${category}`;
// }

// console.log(calculateBMI(70, 1.75));

// Bài tập 2
function createBook(title, author, year, price) {
  // Sử dụng shorthand properties (tên biến trùng với tên key)
  const book = {
    title,
    author,
    year,
    price,

    // Thêm method getBookInfo() — trả về thông tin sách
    getBookInfo() {
      return ` ${this.title} - ${this.author} (${this.year}) - Giá: ${this.price.toLocaleString()}đ`;
    },

    // Dùng computed property name cho phương thức giảm giá
    ["calculateDiscount"](discount) {
      const discountedPrice = this.price - (this.price * discount) / 100;
      return `Giá sau khi giảm ${discount}%: ${discountedPrice.toLocaleString()}đ`;
    }
  };

  return book;
}

// Ví dụ sử dụng
const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10));
