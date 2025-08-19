function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

let person = { name: "Minh", age: 22 };
let job = { title: "Developer", salary: 2000 };

let merged = mergeObjects(person, job);
console.log(merged);
