function processInput(input: string | number | boolean): void { 
    if (typeof input === "string") {
        if(!isNaN(Number(input))) {
            const num = Number(input);
            console.log(num ** 2); // In ra bình phương của số
        } else {
           let count = 0;

           input.split("").forEach((char: string) => {
             if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
               count++;
             }
           });
              console.log(`Số ký tự chữ cái: ${count}`); // In ra số ký tự chữ cái
        }

    }
    else if (typeof input === "number") {
        const isPrime = (num: number): boolean => {
            if (num < 2) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        };
        console.log(isPrime(input) ? "Là số nguyên tố" : "Không phải số nguyên tố");
    } else if (typeof input === "boolean") {
        console.log(input ? "Giá trị là true - tiến hành xử lý" : "Giá trị là false - dừng xử lý");
    }
}
processInput("123"); // output: 15129
processInput("abc123!"); // output: 3 ký tự chữ cái
processInput(7); // output: Là số nguyên tố
processInput(false); // output: Giá trị là false - dừng xử lý
processInput(true); // output: Giá trị là true - tiến hành xử lý
processInput("Hello World!"); // output: Số ký tự chữ cái: 10
processInput("123abc!"); // output: Số ký tự chữ cái: 3