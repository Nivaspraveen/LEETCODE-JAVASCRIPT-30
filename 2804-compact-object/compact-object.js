/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    return Array.isArray(obj) ? obj.filter(Boolean).map(compactObject) :
        (obj !== null && typeof obj === 'object') ?
            Object.fromEntries(
                Object.entries(obj)
                .filter(([_, val]) => Boolean(val))
                .map(([key, val]) => [key, compactObject(val)]) 
        ) : obj
};