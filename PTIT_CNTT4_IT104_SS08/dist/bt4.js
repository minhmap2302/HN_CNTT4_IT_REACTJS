function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let person = { name: "Minh", age: 22 };
let job = { title: "Developer", salary: 2000 };
let merged = mergeObjects(person, job);
console.log(merged);
