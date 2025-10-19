

function pow(exp) {
    function inner(base){
        return base**exp;
    }
    return inner;
}

var square=pow(2);
var cube=pow(3);
console.log(square(2));
console.log(square(3));
console.log(cube(3));