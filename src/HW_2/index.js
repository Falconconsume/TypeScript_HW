;
var School = /** @class */ (function () {
    function School() {
        this._areas = [];
        this._lecturers = [];
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
        this._levels = [];
        this._name = name;
    }
    Object.defineProperty(Area.prototype, "levels", {
        get: function () {
            return this._levels;
        },
        enumerable: false,
        configurable: true
    });
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
        this._groups = [];
        this._name = name;
        this._description = description;
    }
    Object.defineProperty(Level.prototype, "groups", {
        get: function () {
            return this._groups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Level.prototype.addGroup = function (group) {
        this._groups.push(group);
    };
    Level.prototype.removeGroup = function (group) {
        var index = this._groups.indexOf(group);
        if (index > -1) {
            this._groups.splice(index, 1);
        }
    };
    return Level;
}());
;
var Group = /** @class */ (function () {
    function Group(directionName, levelName) {
        this._students = [];
        this._area = directionName;
        this._status = levelName;
    }
    Object.defineProperty(Group.prototype, "area", {
        get: function () {
            return this._area;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "students", {
        get: function () {
            return this._students;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.addStudent = function (student) {
        this._students.push(student);
    };
    Group.prototype.removeStudent = function (student) {
        var index = this._students.indexOf(student);
        if (index > -1) {
            this._students.splice(index, 1);
        }
    };
    Group.prototype.setStatus = function (status) {
        this._status = status;
    };
    Group.prototype.showPerformance = function () {
        var _this = this;
        return this._students.sort(function (a, b) { return _this.getPerformanceRating(b) - _this.getPerformanceRating(a); });
    };
    Group.prototype.getPerformanceRating = function (student) {
        var gradeValues = Object.values(student.grades);
        if (!gradeValues.length)
            return 0;
        var averageGrade = gradeValues.reduce(function (sum, grade) { return sum + grade; }, 0) / gradeValues.length;
        var attendancePercentage = (Object.values(student.visits).filter(function (present) { return present; }).length / Object.values(student.visits).length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    };
    return Group;
}());
