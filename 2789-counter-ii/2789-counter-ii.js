/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let number = init;

    function increment(){
        return number +=1;
    }

    function decrement(){
        return number -=1;
    }

    function reset(){
        return number = init;
    }
    
    return { increment, decrement, reset };

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */