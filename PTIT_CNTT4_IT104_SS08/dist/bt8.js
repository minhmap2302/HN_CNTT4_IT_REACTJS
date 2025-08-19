function partialUpdate(obj, updates) {
    return Object.assign(Object.assign({}, obj), updates);
}
let person1 = partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { age: 31 });
console.log(person1);
let person2 = partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { name: 'Bob', job: 'Designer' });
console.log(person2);
