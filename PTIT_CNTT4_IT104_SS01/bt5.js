// Áp dụng Destructuring Assignment làm việc với một data cho sẵn như sau :

// const response = {
//                 data: {
//                     id: 1,
//                     title: "Destructuring in JavaScript",
//                     author: {
//                         name: "Dev",
//                         email: "Dev@gmail.com",
//                     },
//                 },
//             };
// Trích xuất lấy ra title và author từ data có trong response .
// Từ author, trích xuất name và email vào các biến authorName và authorEmail.
// In tất cả các biến ra console.log
// Kết quả trả về như dưới:
const response = {
  data: {
    id: 1,
    title: "Destructuring in JavaScript",
    author: {
      name: "Dev",
      email: "Dev@gmail.com",
    },
  },
};

const {
  data: {
    title,
    author: { name: authorName, email: authorEmail },
  },
} = response;

console.log("Title:", title);
console.log("Author Name:", authorName);
console.log("Author Email:", authorEmail);