const student = {
  name: "Dev",
  age: 20,
  listSubject: [
    { subject: "Math", score: 9 },
    { subject: "English", score: 7.5 },
    { subject: "Physics", score: 6 },
    { subject: "Literature", score: 8.5 },
  ],
};
function displayStudentInfo(student) { 
    let { name, age, listSubject } = student;
    let totalScore = 0;
    let subjectCount = listSubject.length;
    for(let i = 0; i < subjectCount; i++) {
        totalScore += listSubject[i].score;
    }
    let averageScore = totalScore / subjectCount;
    let maxScore = Math.max(...listSubject.map(sub => sub.score));
    let minScore = Math.min(...listSubject.map(sub => sub.score));
    console.log(`${name} is ${age} years old, has an average score of ${averageScore.toFixed(2)}, the highest score is ${maxScore}, and the lowest score is ${minScore}.`);
    
}
displayStudentInfo(student);