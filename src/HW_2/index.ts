class School {
    // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods
    _areas: string[]  = [];
    _lecturers: (string | number)[] = ['Oleg', 'Sokil', 'JN', 'IT-step', '5 years', 'TypeScript', 38023321]; // Name, surname, position, company, experience, courses, contacts

    get areas() {
        return this._areas;
    }

    get lecturers() {
        return this._lecturers;
    }

    addArea(area: string) {
        this._areas.push(area);
    }

    removeArea(area: string) {
        const index = this._areas.indexOf(area);
        if(index > -1)
        {
            this._areas.splice(index,1);
        }
    }

    addLecturer(lecturer: string) {
        this._lecturers.push(lecturer);
    }

    removeLecturer(lecturer: string) {
        const index = this._lecturers.indexOf(lecturer);
        if(index > -1)
        {
            this._lecturers.splice(index,1);
        }
    }
    
}

class Area {
    // implement getters for fields and 'add/remove level' methods
    _levels: (string)[] = [];
    _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    addLevel(level: string) {
        this._levels.push(level);
    }

    removeLevel(level: string) {
        const index = this._levels.indexOf(level);
        if(index > -1) {
            this._levels.splice(index,1);
        }
    }
}

class Level {
    // implement getters for fields and 'add/remove group' methods

    _groups:string[] = [];
    _name:string;
    _description:string;

    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
    }

    get name() {
        return this._name;
    }

    addGroup(group: string) {
        this._groups.push(group);
    }

    removeGroup(group: string) {
        const index = this._groups.indexOf(group);
        if(index > 1) {
            this._groups.splice(index,1);
        }
    }
}

class Group {
    // implement getters for fields and 'add/remove student' and 'set status' methods

    _area: string;
    _status: string;
    _students: (Student)[] = []; // Modify the array so that it has a valid toSorted method*
    directionName: string;
    levelName: string;
    

    constructor(directionName: string, levelName: string) {
        this.directionName = directionName;
        this.levelName = levelName;
        this._area = this.area;
        this._status = this.status;
    }

    get area() {
        return this._area;
    }


    set status(status:string) {
        this._status = status; 
    }

    showPerformance() {
        const sortedStudents = this._students.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
        return sortedStudents;
    }

    addStudent(student: Student) {
        this._students.push(student);
    }

    removeStudent(student: Student) {
        const index = this._students.indexOf(student);
        if(index > -1) {
            this._students.splice(index,1);
        }
    }
}

class Student {
    // implement 'set grade' and 'set visit' methods

    _firstName: string;
    _lastName: string;
    _birthYear: number;
    _grades: (number)[] = []; // workName: mark
    _visits: (boolean)[] = []; // lesson: present

    constructor(firstName:string, lastName: string, birthYear: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    get fullName() {
        return `${this._lastName} ${this._firstName}`;
    }

    set fullName(value) {
        [this._lastName, this._firstName] = value.split(' ');
    }

    get age() {
        return new Date().getFullYear() - this._birthYear;
    }

    set grade(grade: number) {
        this._grades.push(grade);
    }

    set visit(visit: boolean) {
        this._visits.push(visit);
    }

    getPerformanceRating() {

        if (!this._grades.length) return 0;
        const averageGrade: number = this._grades.reduce((sum, grade) => sum + grade, 0) / this._grades.length;
        const attendancePercentage: number = (this._visits.filter(present => present).length / this._visits.length) * 100;

        return (averageGrade + attendancePercentage) / 2;
    }
}