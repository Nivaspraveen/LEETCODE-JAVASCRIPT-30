/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const groups = {};
    for (let i = 0; i < this.length; i++) {
        const key = fn(this[i]);
        groups[key] = groups[key] || [];
        groups[key].push(this[i]);
    }
    return groups;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */