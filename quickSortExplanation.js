/*
using the values in the example code this is a breakdown of values
at certain points in the code. The condole logs come from 
line 21 that states "track the array through its changes"

First call to QS arr is [3,2,5,6,1] start=0 end=4
    **first console log [ 3, 2, 5, 6, 1 ]**
    passes base case start is NOT bigger than 4
    call partition start=0 end=4
    pivotValue=3 swapIndex = 0
    run for loop
    swap index increments to 2
    if(i !== swapIndex) swaps 5 and 1 leaving us with [3,2,1,5,6]
    if(swapIndex) 2 !==0 swaps 1 & 3
    returns 2 and [1,2,3,5,6]

      call qs on left side of the pivot(3) [1,2] start=0 end=1
        **second console log [ 1, 2, 3, 6, 5 ]**
        call partition pivotValue = 1 start = 0
        for loop i=1, end=1 skips skips for loop
        skips if(swapIndex !==start)si=0 & start=0

          call qs on the left start=0 pivot index = -1
            **third console log [ 1, 2, 3, 6, 5 ]**
            fails base case 0 >= -1 is true 
          call qs on the right start=1 end =1
            **fourth console log [ 1, 2, 3, 6, 5 ]**
            fails base case 1>=1 is true
      
      call qs on right side of the pivot(3) [6,5] start=3 end=4
          **fifth console log [ 1, 2, 3, 6, 5 ]**
          call parition pivotValue=6 swapIndex=3
          for loop i=4 end=4 
            increments swap index to 4
          if(swapIndex(4) !== start(3)) swaps index 4&3 partition is now [5,6]
          returns 3 array is now [ 1, 2, 3, 5, 6 ]
         
          call qs on left start=3 end =2
            **sixth console log [ 1, 2, 3, 5, 6 ]**
            fails base case 3 >- 2
          call qs on right start=4 end=4
            **seventh console log [ 1, 2, 3, 5, 6 ]**
            fails base case 4>=4
*/