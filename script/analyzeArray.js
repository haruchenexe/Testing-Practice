var analyzeArrayObj = {
    analyzeArray(array) {
        if (array == null) {
            return 'missing array'
        } else {
            const cacheAvg = this.average(array);
            const cacheMin = this.minimum(array);
            const cacheMax = this.maximum(array);
            const cacheLength = this.length(array);
    
            const obj = {
                average: cacheAvg,
                length: cacheLength,
                minimum: cacheMin,
                maximum: cacheMax
            }
            return obj
        }
    },
    average(array) {
        const initialValue = 0;
        const sumWithInitial = array.reduce(
            (previousValue, currentValue) => previousValue + currentValue, 
            initialValue
        );
    
        const average = sumWithInitial / array.length;
        return average
    },
    minimum(array) {
        const sortedArray = array.sort(function(a, b) {return a - b});
        const minNum = sortedArray[0];
    
        return minNum
    },
    maximum(array) {
        const sortedArray = array.sort(function(a, b) {return b - a});
        const maxNum = sortedArray[0];
    
        return maxNum
    },
    length(array) {
        const length = array.length;
        return length
    }
}

module.exports = analyzeArrayObj