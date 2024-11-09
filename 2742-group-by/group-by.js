/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const returnObj = {}
    for (const item of this) {
        const key = fn(item);
        if (key in returnObj) returnObj[key].push(item);
        else returnObj[key] = [item];
    }
    return returnObj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */