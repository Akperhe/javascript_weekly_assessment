function diffArray(arr1, arr2){
    let resultArr = arr1.concat(arr2);
    return resultArr.filter(item => !arr1.includes(item) || !arr2.includes(item));
}
