/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const result = [];
    const flatten = (currArr, currDepth) => {
        for (const item of currArr) {
            if (Array.isArray(item) && currDepth < n) flatten(item, currDepth + 1);
            else result.push(item);
        }
    }
    flatten(arr, 0);
    return result;
};