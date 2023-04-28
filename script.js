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

}

/* create child class (inherit from base): IntBuilder in ES6 style */

class IntBuilder extends BaseBuilder {

    constructor(int) {
        super(int);
    }

    minus(...int) {
        this.value = int.reduce((diff, int) => {
            return diff - int;
        }, this.value);
        return this;
    }

    multiply(n) {
        this.value *= n;
        return this;
    }

    divide(n) {
        this.value /= n;
        return this;
    }

    mod(n) {
        this.value %= n;
        return this;
    }

    exp(n) {
        this.value **= n;
        return this;
    }

    static random(from, to) {
        return Math.round(from + Math.random() * (to - from));
    }

}

let intBuilder = new IntBuilder(10); // 10;

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
    this.value = str;
}

StringBuilder.prototype = Object.create(BaseBuilder.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.minus = function (...str) {
    this.value = this.value.slice(0, -str);
    return this;
}

StringBuilder.prototype.multiply = function (...str) {
    this.value = this.value.repeat(str);
    return this;
}

StringBuilder.prototype.divide = function (...str) {
    this.value = this.value.slice(0, Math.floor(this.value.length / str));
    return this;
}

StringBuilder.prototype.remove = function (...str) {
    this.value = this.value.split(str).join("").trim();
    return this;
}

StringBuilder.prototype.sub = function (from, length) {
    this.value = this.value.slice(from, from + length);
    return this;
}

let strBuilder = new StringBuilder('Hello'); // 'Hello';

/* strBuilder
  .plus(' all', '!')                         // 'Hello all!'
  .minus(4)                                  // 'Hello '
  .multiply(3)                               // 'Hello Hello Hello '
  .divide(4)                                 // 'Hell';
  .remove('l')                               // 'He';
  .sub(1,1)                                  // 'e';
  .get();                                    // -> 'e'; */

console.log(strBuilder.plus(' all', '!'));
console.log(strBuilder.minus(4));
console.log(strBuilder.multiply(3));
console.log(strBuilder.divide(4));
console.log(strBuilder.remove('l'));
console.log(strBuilder.sub(1, 1));
console.log(strBuilder.get());