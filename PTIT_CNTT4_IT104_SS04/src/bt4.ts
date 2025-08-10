let word: string | number;
function check(word: string | number): void {
   if(typeof word === "string") {
       console.log(`Length of the string: ${word.length}    `);
   } else if (typeof word === "number") {
       console.log(` ${word % 2 === 0 ? "Even" : "Odd"}`);
   }
       
}
check("Hello");
check(12345);
check(1234567890);