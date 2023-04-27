/* Create a base class that will contain common methods. */

class BaseBuilder {

    constructor(value) {
        this.value = value;
    }

}

/* create child class (inherit from base): IntBuilder in ES6 style */

class IntBuilder extends BaseBuilder {

    constructor(int) {
        super(int);
    }



}

/* create child class (inherit from base): StringBuilder in ES5 style */
