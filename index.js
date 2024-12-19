// LeetCode Challenge Week 1

// Problem To Solve: 
// Given an object or an array, return if it is empty.
//  An empty object contains no key-value pairs.
//  An empty array contains no elements.
//  You may assume the object or array is the output of JSON.parse.

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // Check if the input is an object or an array
    if (Array.isArray(obj)) {
        // An array is empty if its length is 0
        return obj.length === 0;
    } else if (typeof obj === 'object' && obj !== null) {
        // An object is empty if it has no own properties
        return Object.keys(obj).length === 0;
    }
    // If it's neither an array nor a valid object, return false
    return false;
};
