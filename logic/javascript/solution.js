const nums = [1,1,1,1,1]

function looper (arr, i=0) {
  let [ splicedNum ] = arr.splice(i, 1)
  const sameNumIndex = arr.indexOf(splicedNum)  
  if (i > arr.length - 1) {
    arr.splice(i,0,splicedNum)    
    return arr.reduce((acc, cur) => acc += cur)
  } else if (sameNumIndex !== -1) {
    ++splicedNum
    arr.splice(i,0,splicedNum)
    return looper(arr, 0)
  } else {
    arr.splice(i,0,splicedNum)    
    return looper(arr, ++i)
  }
}

console.log(looper(nums))