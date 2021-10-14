1) Line 12 will print out 3 to the console because in the for loop,
   i is a var meaning that it is accessible anyhere inside the function. i gets
   initialized with 0 but after going through the loop, it is incremented by 1 for 
   the amount of elements in the prices array. When the loop gets to the final element, i will be two
   however i will increment one more time and become 3 then check if 3 < 3 which is false so
   here it will exit the loop and i will be 3.  
2) Line 13 will print out 150 to the console because discountedPrice now holds the last value
   that it held when the loop finished. The loop finished when i = 3 so that last discounted prices 
   was when i =2 which comes out to 300*(1-0.5) which is 150.  
3) Line 14 will also print out 150 to the console because at the end of the loop discountedPrice 
   was 150 as explained above and when finalPrice is calculated using discountedPrice, it also comes out to 150.  
4) This function will return discounted which is an array of each finalPrice. In this case, it would  be [50, 100, 150].   
5) Line 12 would cause an error because i can only be accessed inside of its block, since i is declared with the let keyword. Since line 12 is out of the for loop, it can no longer access i.  
6) Line 13 would also cause an error because discountedPrice can only be accessed inside of its block, since i is declared with the let keyword. Since line 13 is also out of the for loop where discountedPrice is declared in, it can no longer access discountedPrice.  
7) Line 14 would print 150 to the console. Unlike the previous 2, finalPrice is declared at the beginning of the function. Line 14 accesses this variable in the same block that it is defined in therefore no error would occur.  
8) The function would return discounted which is an array of each finalPrice. In this case, it would be [50, 100, 150]. When returning discounted, it is in the same block that it is defined in therefore no error would occur.  
9) Line 11 would cause an error because i can only be accessed inside of its block, since i is declared with the let keyword. Since line 11 is out of the for loop, it can no longer access i.  
10) Line 12 would print 3 to the console. Since length is a const, it will take the length of the array that is passed in and you won't be able to modify that variable. In this case there are 3 elements in our array so length will be 3.  
11) This function will return discounted which is an array of each discountedPrice. In this case, it would  be [50, 100, 150]. Even though discounted is declared with the keyword const, you are still able to push to the array because you are not reassigning anything to it but rather manipulating it.   
12) A. student.name  
    B. student["Grad Year"]  
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13) A. '32' This output was given '32' since in JS a single variable can take on multiple different data types. In this case, the integers map to their exact string representation.  
    B. 1 This output was 1 since you cannot subtract strings. Therefore the 3 gets converted to an int and 3-2=1. 
    C. 3 This output is 3 since null is not assigned an actual number. Therefore it acts as a zero so 3+0=3.
    D. '3null' The output is '3null' since 3 is a string, null will also map to its string representation. Therefore this expression will act as string concatenation.  
    E. 4 This output is 4 because true has a numerical value of 1 therefore 1 + 3 = 4.    
    F. 0 This output is 0 because false has a value of 0 and null acts as a 0 as well so 0+0=0.   
    G. '3undefined' The output is '3undefined' since 3 is a string, undefined will also map to its string representation. Therefore this expression will act as string concatenation.  
    H. NaN This output is NaN(Not-a-Number) because since you cannot subtract strings, undefined cannot act as a string there. Therefore the ouput will be not a number.
14) A. true This output is true because '2' becomes the actual number 2 due to type conversion and since 2 > 1 is true, the output is true.
    B. false This is false since both numbers are strings, the first characters in each string are compared. If they are different, the string with the smallest first character is the lesser value. In this case we start off by comparing 2 and 1. We know 1 is less than 2 so '12' is actually less than '2' which makes the expression false.     
    C. true This is true because the string '2' becomes 2. Therefore 2 == 2 is true.
    D. false This is false because the === means strict equality. This means there will not be a type conversion so the int 2 does not equal '2'. 
    E. false This is false because true becomes a 1 and 1 does not equal 2. 
    F. true This is true because Boolean(2) has a value of true so true === true. For the Boolean(), as long as the value isn't 0, it will return true.
15) The difference between == and === is that == allows for type conversion while === is strict equality which means that no type conversion will be done.
17) The result of this would be that newArray would be [2, 4, 6]. First, modifyArray() is called with the array [1, 2, 3] passed in as the first parameter and the function doSomething() passed in as the second parameter. In modifyArray, we first declare an empty array called newArray with the const keyword. Then we enter to for loop. Currently i = 0. Line 4 will call the function doSomething since we passed that function in as the second parameter. The parameter for doSomething() will be 1 because array[0] = 1 which is the array we passed into the first parameter of modifyArray(). doSomething will multiply 1 by 2 and now 2 will be the first value of newArr. We continue this process for i = 1. When i = 1, 4 will be the next value in newArr. Lastly we do this for i = 2 which will give us 6 for the last element in newArr. Since array.length is 3, we cannot continue the loop for i = 3 because 3 is not less than 3 therefore we are finished with the loop and return newArr which is [2, 4, 6].
19) The output of the above code will first print 1 to the console then it will print 3 and then it will print 4 and lastly it will print 2. 2 comes last because it has a timeout of 1 second meaning it will delay for 1 second before it prints to the console. Even though 3 has a timeout too, its timeout is 0 ms meaning there will be no delay.