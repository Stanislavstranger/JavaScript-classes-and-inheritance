/* Create a base class that will contain common methods. */

class BaseBuilder {

    constructor(value) {
        this.value = value;
    }

    get() {
        return this.value;
    }

    plus(...n) {
        this.value = n.reduce((sum, n) => {
            return sum + n;
        }, this.value);
        return this;
    }

/* if */

    isNumber(value) {
        return typeof value === "number";
    }

    static isNumber(value) {
        return typeof value === "number";
    }

    areNumbers(values) {
        return (
            values.length && values.every((values) => this.isNumber(values))
        );
    }

    isString(value) {
        return typeof value === "string";
    }
}

/* create child class (inherit from base): IntBuilder in ES6 style */

class IntBuilder extends BaseBuilder {

    constructor(int = 0) {
        super(int);
    }

    minus(...number) {
        if (this.areNumbers(number)) {
            this.value = number.reduce((diff, num) => {
                return diff - num;
            }, this.value);
            return this;
        } else {
            throw new Error('The entered value is not a numbers');
        }
    }

    multiply(number) {
        if (this.isNumber(number)) {
            this.value *= number;
            return this;
        } else {
            throw new Error('The entered value is not a number');
        }
    }

    divide(number) {
        if (this.isNumber(number)) {
            this.value = Math.floor(this.value / number);
            return this;
        } else {
            throw new Error('The entered value is not a number');
        }
    }

    mod(number) {
        if (this.isNumber(number)) {
            this.value %= number;
            return this;
        } else {
            throw new Error('The entered value is not a number');
        }
    }

    exp(number) {
        if (this.isNumber(number)) {
            this.value **= number;
            return this;
        } else {
            throw new Error('The entered value is not a number');
        }
    }

    static random(from, to) {
        if (IntBuilder.isNumber(from) && IntBuilder.isNumber(to)) {
            return Math.round(from + Math.random() * (to - from));
        } else {
            throw new Error('The entered value is not a numbers');
        }
    }
}

let intBuilder = new IntBuilder(10);

console.log(intBuilder.plus(2, 3, 2));
console.log(intBuilder.minus(1, 2));
console.log(intBuilder.multiply(2));
console.log(intBuilder.divide(4));
console.log(intBuilder.mod(3));
console.log(intBuilder.exp(3));
console.log(intBuilder.get());
console.log(IntBuilder.random(10, 100));

/* create child class (inherit from base): StringBuilder in ES5 style */

function StringBuilder(str = "") {
    if (this.isString(str)) {
        this.value = str;
    } else {
        throw new Error('The entered value is not a string');
    }
}

StringBuilder.prototype = Object.create(BaseBuilder.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.minus = function (number) {
    if (this.isNumber(number)) {
        this.value = this.value.slice(0, -number);
        return this;
    } else {
        throw new Error('The entered value is not a number');
    }
}

StringBuilder.prototype.multiply = function (number) {
    if (this.isNumber(number)) {
        this.value = this.value.repeat(number);
        return this;
    } else {
        throw new Error('The entered value is not a number');
    }
}

StringBuilder.prototype.divide = function (number) {
    if (this.isNumber(number)) {
        this.value = this.value.slice(0, Math.floor(this.value.length / number));
        return this;
    } else {
        throw new Error('The entered value is not a number');
    }
}

StringBuilder.prototype.remove = function (str) {
    if (this.isString(str)) {
        this.value = this.value.split(str).join("").trim();
        return this;
    } else {
        throw new Error('The entered value is not a string');
    }
}

StringBuilder.prototype.sub = function (from, length) {
    if (this.isNumber(from) && this.isNumber(length)) {
        this.value = this.value.slice(from, from + length);
        return this;
    } else {
        throw new Error('The entered value is not a number');
    }
}

let strBuilder = new StringBuilder('Hello');

console.log(strBuilder.plus(' all', '!'));
console.log(strBuilder.minus(4));
console.log(strBuilder.multiply(3));
console.log(strBuilder.divide(4));
console.log(strBuilder.remove('l'));
console.log(strBuilder.sub(1, 1));
console.log(strBuilder.get());