var School = /** @class */ (function () {
    function School() {
        // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods
        this._areas = [];
        this._lecturers = ['Oleg', 'Sokil', 'JN', 'IT-step', '5 years', 'TypeScript', 38023321]; // Name, surname, position, company, experience, courses, contacts
    }
    Object.defineProperty(School.prototype, "areas", {
        get: function () {
            return this._areas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(School.prototype, "lecturers", {
        get: function () {
            return this._lecturers;
        },
        enumerable: false,
        configurable: true
    });
    School.prototype.addArea = function (area) {
        this._areas.push(area);
    };
    School.prototype.removeArea = function (area) {
        var index = this._areas.indexOf(area);
        if (index > -1) {
            this._areas.splice(index, 1);
        }
    };
    School.prototype.addLecturer = function (lecturer) {
        this._lecturers.push(lecturer);
    };
    School.prototype.removeLecturer = function (lecturer) {
        var index = this._lecturers.indexOf(lecturer);
        if (index > -1) {
            this._lecturers.splice(index, 1);
        }
    };
    return School;
}());
var Area = /** @class */ (function () {
    function Area(name) {
        // implement getters for fields and 'add/remove level' methods
        this._levels = [];
        this._name = name;
    }
    Object.defineProperty(Area.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Area.prototype.addLevel = function (level) {
        this._levels.push(level);
    };
    Area.prototype.removeLevel = function (level) {
        var index = this._levels.indexOf(level);
        if (index > -1) {
            this._levels.splice(index, 1);
        }
    };
    return Area;
}());
var Level = /** @class */ (function () {
    function Level(name, description) {
        // implement getters for fields and 'add/remove group' methods
        this._groups = [];
        this._name = name;
        this._description = description;
    }
    Object.defineProperty(Level.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Level.prototype.addGroup = function (group) {
        this._groups.push(group);
    };
    Level.prototype.removeGroup = function (group) {
        var index = this._groups.indexOf(group);
        if (index > 1) {
            this._groups.splice(index, 1);
        }
    };
    return Level;
}());
var Group = /** @class */ (function () {
    function Group(directionName, levelName) {
        this._students = []; // Modify the array so that it has a valid toSorted method*
        this.directionName = directionName;
        this.levelName = levelName;
        this._area = this.area;
        this._status = this.status;
    }
    Object.defineProperty(Group.prototype, "area", {
        get: function () {
            return this._area;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "status", {
        set: function (status) {
            this._status = status;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.showPerformance = function () {
        var sortedStudents = this._students.sort(function (a, b) { return b.getPerformanceRating() - a.getPerformanceRating(); });
        return sortedStudents;
    };
    Group.prototype.addStudent = function (student) {
        this._students.push(student);
    };
    Group.prototype.removeStudent = function (student) {
        var index = this._students.indexOf(student);
        if (index > -1) {
            this._students.splice(index, 1);
        }
    };
    return Group;
}());
var Student = /** @class */ (function () {
    function Student(firstName, lastName, birthYear) {
        this._grades = []; // workName: mark
        this._visits = []; // lesson: present
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return "".concat(this._lastName, " ").concat(this._firstName);
        },
        set: function (value) {
            var _a;
            _a = value.split(' '), this._lastName = _a[0], this._firstName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - this._birthYear;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "grade", {
        set: function (grade) {
            this._grades.push(grade);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "visit", {
        set: function (visit) {
            this._visits.push(visit);
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.getPerformanceRating = function () {
        if (!this._grades.length)
            return 0;
        var averageGrade = this._grades.reduce(function (sum, grade) { return sum + grade; }, 0) / this._grades.length;
        var attendancePercentage = (this._visits.filter(function (present) { return present; }).length / this._visits.length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    };
    return Student;
}());
