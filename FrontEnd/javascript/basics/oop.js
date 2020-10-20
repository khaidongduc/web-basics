/// Object
obj = {
    name: "Khai",
    age: 19,

    getName: function () {
        return this.name;
    }
};

// add function into object from outside the object
obj.getAge = function () {
    return this.age;
};

// all of the variables is public
console.log(obj.getName(), obj.getAge(), obj.name, obj.age);


/// Class
class Obj1 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.width * this.height;
    }
}

rect = new Obj1(4, 5);
// every variable is public
console.log(rect.area, rect.calcArea(), rect.width, rect.height);

function Obj2(objHeight = 5, objWidth = 5) {
    var height = objHeight;
    var width = objWidth;
    this.getArea = function () {
        return this.getHeight() * this.getWidth();
    };
    this.getHeight = function () {
        return height;
    }
    this.getWidth = function () {
        return width;
    }
}
rect = new Obj2(6, 7);
// only getArea getWidth getHeight is public
console.log(rect.getArea(), rect.getWidth(), rect.getHeight(), rect.width, rect.height);

function Obj3(objHeight = 5, objWidth = 5) {
    var height = objHeight;
    var width = objWidth;
    return {
        height, width,
        getArea: function () {
            return this.getHeight() * this.getWidth();
        },
        getHeight: function () {
            return this.height;
        },
        getWidth: function () {
            return this.width;
        }
    }
}
rect = Obj3(6, 7);
// everything is public
console.log(rect.getArea(), rect.getWidth(), rect.getHeight(), rect.width, rect.height); 