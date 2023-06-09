/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let ans = init;
    var increment = function()
    {
        ans = ans+1
        return ans;
    }
    var decrement = function()
    {
        ans=ans-1
        return ans;
    }
    var reset = function()
    {
        ans=init
        return ans;
    }
    return{increment, decrement, reset}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */