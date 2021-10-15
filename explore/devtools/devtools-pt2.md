1) The bug was that num1 and num2 were being inputted from the html form as strings. Therefore when summing the two it was being treated as string concatenation.
2) To fix this I would parse the input of num 1 and num2 to an integer using parseInt().
