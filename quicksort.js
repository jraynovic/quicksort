function partition(arr, start, end) {
    const pivotValue = arr[start] // set to value of the first item in array to sort. 
    let swapIndex = start // set swap index to the first index of the partioned array or array to be sorted.
    
    for (let i  = start + 1; i <= end; i++) { // run for loop and ignore first value

      if (pivotValue > arr[i]) { // if arr[i](value) is less than the pivot value

        swapIndex++ // increment the swap index

        if (i !== swapIndex) { //if we skipped over larger values and then found a smaller value
          [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]] //swap the values
        }
      }
    }

    if (swapIndex !== start) { //found values less than swap index so move swap index into its final position
      [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]] //swap the values
    }

    return swapIndex
  }

  function quickSort(array, start = 0, end = array.length - 1) {
    console.log(array)// track the array through its changes

    if (start >= end){// base case
      /*
      As we split the array and we subtract from the end and add to the start
      in the left and right calls, eventutally start will be larger than the end
      this is what stops the recursive calls.
       */
      return 
    }
    let pivotIndex = partition(array, start, end) //call partition function, returns a index used to identify the left and right
  
    quickSort(array, start, pivotIndex - 1, 'left')// Left run quicksort on array from start up to but NOT including pivot index
    
    quickSort(array, pivotIndex + 1, end, 'right')// Right run quicksort on  array from pivot index +1 to the end of array
    
    return array
  }

  const array = [3,2,5,6,1]//array to sort

  console.log('===Sorted Array===\n',quickSort(array)) //call quicksort