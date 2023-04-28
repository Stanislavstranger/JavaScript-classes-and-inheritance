/* Create a base class that will contain common methods. */

class BaseBuilder {

    constructor(value) {
        this.value = value;
    }

    get() {
        return this.value;
    }

}

/* create child class (inherit from base): IntBuilder in ES6 style */

class IntBuilder extends BaseBuilder {

    constructor(int) {
        super(int);
    }

    plus(...int) {
        this.value = int.reduce((sum, int) => {
            return sum + int;
        }, this.value);
        return this;
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
/* intBuilder
  .plus(2, 3, 2)                     // 17;
  .minus(1, 2)                       // 14;
  .multiply(2)                       // 28;
  .divide(4)                         // 7;
  .mod(3)                            // 1;
  .get(); */

console.log(intBuilder.plus(2, 3, 2));
console.log(intBuilder.minus(1, 2));
console.log(intBuilder.multiply(2));
console.log(intBuilder.divide(4));
console.log(intBuilder.mod(3));
console.log(intBuilder.exp(3));
console.log(IntBuilder.random(10, 100));

/* create child class (inherit from base): StringBuilder in ES5 style */


