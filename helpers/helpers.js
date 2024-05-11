/**
 * Helper functions
 */

/**
 * Cheks if the element has the class
 * @param {doc element} element 
 * @param {class we are checking} clas 
 * @returns 
 */
 function hasClass(element, clas) {
    return element.className.match(new RegExp('(\\s|^)' + clas + '(\\s|$)'));
}

/**
 * Helper function for sorting derivative arrays - not used right now
 */
 sortDerivativeArrays = function(array1, array2) {
    console.log('now sorting: ', array1);
    for (let outer = 0; outer < array1.length; outer++) {
        let min = array1[outer];
        let indexMin = outer;
        for (let index = outer + 1; index <= array1.length - 1; index++) {
            if (array1[index] < min) {
                min = array1[index];
                indexMin = index;
            }
        }
        array1[indexMin] = array1[outer];
        array1[outer] = min;
    }
    console.log('sorted array1: ', array1);
    console.log('sorted array2: ', array2);
}

/**
     * Removes a class name from a collection of elements
     * @param {array of possible selections} array 
     * @param {class name to remove} _class 
     */
 removeClassFromElements = function(array, _class) {
    for (let i = 0; i < array.length; i++) {
        if (hasClass(array[i], _class)) {
            array[i].classList.remove(_class);
        }
    }
}