function mostCommonNum (arr) {
    let counter={};
    arr.forEach(function(element){
            if(counter[element]){
                counter[element]++;
            }
            else{
                counter[element]= 1;
            }
    });

    let maxCount = Math. max(...Object.values(counter));
    let mostCommonElements = Object.keys(counter).filter( key => counter[key] == maxCount);
    let result = mostCommonElements.map(key => ({ value: parseInt(key), count: maxCount}));
    return result;
}

let inputArray = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]
let outputResult = mostCommonNum(inputArray);
console.log(outputResult);