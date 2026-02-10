function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

const students = [
    { name: 'Aaron Andrus', grades: ['A', 'B', 'A'] },
    { name: 'Manny Masa', grades: ['B', 'C', 'C'] },
    { name: 'Tamanda Tanda', grades: ['A', 'A', 'B'] }
];

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
words.sort();
console.log(words);

const results = students.map(student => {
    const numbers = student.grades.map(convert);
    const avg = numbers.reduce((a, b) => a + b) / numbers.length;
    return { name: student.name, avg };
});

results.sort((a, b) => b.avg - a.avg);

const output = document.querySelector('#output')
results.forEach((s, i) => {
    output.innerHTML += `<p>${i + 1}. ${s.name} — ${s.avg.toFixed(2)}</p>`;
});