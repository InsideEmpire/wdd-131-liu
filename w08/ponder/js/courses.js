// const aCourse = {
//     code: 'CSE121b',
//     name: 'Javascript Language',
//     logo: 'images/js-logo.png',
//     sections: [
//         { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
//         { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
//     ],
//     enrollStudent: function (sectionNum) {
//         // find the right section...Array.findIndex will work here
//         const sectionIndex = this.sections.findIndex(
//             (section) => section.sectionNum == sectionNum
//         );
//         if (sectionIndex >= 0) {
//             this.sections[sectionIndex].enrolled++;
//             renderSections(this.sections);
//         }
//     }
// };

class Section {
    constructor(sectionNum, roomNum, enrolled, days, instructor) {
        this.sectionNum = sectionNum;
        this.roomNum = roomNum;
        this.enrolled = enrolled;
        this.days = days;
        this.instructor = instructor;
    }
}

class Course {
    constructor(code, name, sections = []) {
        this.code = code;
        this.name = name;
        this.sections = sections;
    }

    enrollStudent(sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    }
    
    addSection(section) {
        this.sections.push(section);
    }
}

const aCourse = new Course('WDD131', 'Dynamics Web Fundamentals');
aCourse.addSection(new Section(1, 'STC 353', 0, 'TTh', 'Bro Keers'));
aCourse.addSection(new Section(2, 'STC 353', 0, 'MW', 'Bro Keers'))

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
          