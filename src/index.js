
exports.min = function min (array=[]) {  
    if(!(Array.isArray(array) && array.length)){
        return 0;
    }
    return Math.min.apply(Math, array);
}


exports.max = function max (array) {
    if(!(Array.isArray(array) && array.length)){
        return 0;
    }
  return  Math.max.apply(Math, array);
}

exports.avg = function avg (array) {
    if(!(Array.isArray(array) && array.length)){
        return 0;
    }
    return array.reduce((a, b) => (a + b)) / array.length;
}
