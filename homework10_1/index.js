class People {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;

        if (!Date.parse(dateOfBirth)) {
            throw Error("Incorrect date format");            
        } else if (new Date() - Date.parse(dateOfBirth) < 0) { // на случай, если дата рождения указана больше текущей даты
            throw Error("Invalid Date");
        } else {
            this.dateOfBirth = new Date(dateOfBirth);
        }

    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    introduction() {
        console.log(this.getFullName());
    }

    calcAges() {
        const ages = new Date(new Date() - this.dateOfBirth).getFullYear() - 1970;

        console.log("Количество лет: ", ages);
    }

    say(msg) {
        console.log(`${this.getFullName()}: ${msg}`);
    }
}

class Student extends People {
    constructor(firstName, lastName, dateOfBirth, startDateOfStudy) {
        super(firstName, lastName, dateOfBirth);

        if (!Date.parse(startDateOfStudy)) {
            throw Error("Incorrect date format");            
        } else if (new Date() - Date.parse(startDateOfStudy) < 0) {
            throw Error("Invalid Date");
        } else {
            this.startDateOfStudy = new Date(startDateOfStudy);
        }
    }

    introduction() {
        console.log(`Студент ${this.getFullName()}`);
    }

    calcMonthsOfEducation() {
        const currentDate = new Date();
        const months = (currentDate.getFullYear() - this.startDateOfStudy.getFullYear()) * 12 + (currentDate.getMonth() - this.startDateOfStudy.getMonth());
        console.log("Количество месяцев обучения: ", months);
    }

    learn(subject) {
        console.log(`В данный момент студент ${this.getFullName()} изучает предмет ${subject}.`);
    }
}

class Teacher extends People {
    constructor(firstName, lastName, dateOfBirth, startDateOfTeaching) {
        super(firstName, lastName, dateOfBirth);

        if (!Date.parse(startDateOfTeaching)) {
            throw Error("Incorrect date format");            
        } else if (new Date() - Date.parse(startDateOfTeaching) < 0) {
            throw Error("Invalid Date");
        } else {
            this.startDateOfTeaching = new Date(startDateOfTeaching);
        }
    }

    introduction() {
        console.log(`Преподаватель ${this.getFullName()}`);
    }

    calcMonthsOfTeaching() {
        const currentDate = new Date();
        const months = (currentDate.getFullYear() - this.startDateOfTeaching.getFullYear()) * 12 + (currentDate.getMonth() - this.startDateOfTeaching.getMonth());
        console.log("Количество месяцев преподавания: ", months);
    }

    teach(subject) {
        console.log(`Преподаватель ${this.getFullName()} в данный момент преподаёт предмет ${subject}`);
    }

    ask(question, student) {
        console.log(`Студент ${student.getFullName()} спрашивает: ${question}`);
    }
}

class LearningGroup {
    constructor(groupName, teacher) {
        this.groupName = groupName;
        this.students = [];
        if (teacher instanceof Teacher) {
            this.teacher = teacher;
        } else {
            throw Error ("object is not an instance of Teacher class");
        }
    }

    addStudent(student) {
        if (student instanceof Student) {
            this.students.push(student)
        } else {
            throw Error ("object is not an instance of Student class");
        }
    }

    printGroupInfo() {
        let studentsArray = [];
        this.students.forEach(std => {
            studentsArray.push(std.getFullName());
        });

        let studentsString = studentsArray.join(", ");

        console.log(`Группа ${this.groupName}. Преподаватель ${this.teacher.getFullName()}. Студенты: ${studentsString}`);
    }
}

console.log("PERSON");
const person1 = new People("john", "Doe", "1987/06/23");
person1.introduction();
person1.calcAges();
person1.say("Привет");

const person2 = new People("Виталий", "Витальев", "2001/03/11");
person2.introduction();
person2.calcAges();
person2.say("Я что-то говорю");

console.log("STUDENT");
const student1 = new Student("Вася", "Васильев", "1999/06/23", "2017/09/01");
student1.introduction();
student1.calcAges();
student1.calcMonthsOfEducation();
student1.say("Привет");
student1.learn("Математика");

const student2 = new Student("Анатолий", "Анатольев", "1998/02/03", "2016/10/04");
student2.introduction();
student2.calcAges();
student2.calcMonthsOfEducation();
student2.say("Loren ipsum");
student2.learn("Биология");

console.log("TEACHER");
const teacher1 = new Teacher("Геннадий", "Геннадьев", "1968/11/05", "2004/06/17");
teacher1.introduction();
teacher1.calcAges();
teacher1.calcMonthsOfTeaching();
teacher1.say("Не спать на задних партах!");
teacher1.teach("История");
teacher1.ask("Какое домашнее задание на следующее занятие?", student1);

const teacher2 = new Teacher("Аркадий", "Аркадьев", "1987/07/27", "2004/06/17");
teacher2.introduction();
teacher2.calcAges();
teacher2.calcMonthsOfTeaching();
teacher2.say("Loren ipsum");
teacher2.teach("Квантовая физика");
teacher2.ask("Какие вопросы будут на контрольной?", student2);

const group1 = new LearningGroup("Тестовая группа", teacher1);
const group2 = new LearningGroup("Тестовая группа 2", teacher2);

const student3 = new Student("Вова", "Степанов", "1999/06/23", "2017/09/01");
const student4 = new Student("Степан", "Вовченко", "1999/03/12", "2017/09/01");
const student5 = new Student("Егор", "Егорченко", "1999/09/11", "2017/09/01");

group1.addStudent(student1);
group1.addStudent(student2);
group1.addStudent(student3);
group1.addStudent(student4);
group1.addStudent(student5);

group2.addStudent(student1);
group2.addStudent(student2);
group2.addStudent(student3);
group2.addStudent(student4);
group2.addStudent(student5);

group1.printGroupInfo();
group2.printGroupInfo();