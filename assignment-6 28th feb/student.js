let students = [
    { name: "Rahul", marks: [80, 75, 90] },
    { name: "Anjali", marks: [85, 70, 95] },
    { name: "Kiran", marks: [60, 65, 70] }
];

for (let i = 0; i < students.length; i++) {

    let student = students[i];
    let total = 0;
    for (let j = 0; j < student.marks.length; j++) {
        total += student.marks[j];
    }
    let average = total / student.marks.length;
    console.log("Student:", student.name);
    console.log("Average Marks:", average);
    console.log("----------------------");
}