interface Lecturer {
    name:string,
    surname: string,
    position: string,
    company: string,
    experience: string,
    courses: string,
    contacts: string,
};

class School {
    private _areas: Area[] = [];
    private _lecturers: Lecturer[] = [];

    get areas(): Area[] {
        return this._areas;
    }

    get lecturers(): Lecturer[] {
        return this._lecturers;
    }

    addArea(area: Area): void {
        this._areas.push(area);
    }

    removeArea(area: Area): void {
        const index = this._areas.indexOf(area);
        if (index > -1) {
            this._areas.splice(index, 1);
        }
    }

    addLecturer(lecturer: Lecturer): void {
        this._lecturers.push(lecturer);
    }

    removeLecturer(lecturer: Lecturer): void {
        const index = this._lecturers.indexOf(lecturer);
        if (index > -1) {
            this._lecturers.splice(index, 1);
        }
    }
}

class Area {
    private _levels: Level[] = [];
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get levels(): Level[] {
        return this._levels;
    }

    get name(): string {
        return this._name;
    }

    addLevel(level: Level): void {
        this._levels.push(level);
    }

    removeLevel(level: Level): void {
        const index = this._levels.indexOf(level);
        if (index > -1) {
            this._levels.splice(index, 1);
        }
    }
}

class Level {
    private _groups: Group[] = [];
    private _name: string;
    private _description: string;

    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
    }

    get groups(): Group[] {
        return this._groups;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    addGroup(group: Group): void {
        this._groups.push(group);
    }

    removeGroup(group: Group): void {
        const index = this._groups.indexOf(group);
        if (index > -1) {
            this._groups.splice(index, 1);
        }
    }
}

interface Student  {
    firstName: string,
    lastName: string,
    birthYear: number,
    grades: number,
    visits: (boolean),
};

class Group {
    private _area: string;
    private _status: string;
    private _students: Student[] = [];

    constructor(directionName: string, levelName: string) {
        this._area = directionName;
        this._status = levelName;
    }

    get area(): string {
        return this._area;
    }

    get status(): string {
        return this._status;
    }

    get students(): Student[] {
        return this._students;
    }

    addStudent(student: Student): void {
        this._students.push(student);
    }

    removeStudent(student: Student): void {
        const index = this._students.indexOf(student);
        if (index > -1) {
            this._students.splice(index, 1);
        }
    }

    setStatus(status: string): void {
        this._status = status;
    }

    showPerformance(): Student[] {
        return this._students.sort((a, b) => this.getPerformanceRating(b) - this.getPerformanceRating(a));
    }

    private getPerformanceRating(student: Student): number {
        const gradeValues = Object.values(student.grades);

        if (!gradeValues.length) return 0;

        const averageGrade: (number | string) = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage = (Object.values(student.visits).filter(present => present).length / Object.values(student.visits).length) * 100;

        return (averageGrade + attendancePercentage) / 2;
    }
}