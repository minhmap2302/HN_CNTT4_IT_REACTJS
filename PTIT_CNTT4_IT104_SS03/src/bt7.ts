let string: string = "banana";
let unique: string = "";
for (let word of string) {
    if(!unique.includes(word)) {
        unique += word;
    }

}
console.log(unique);
