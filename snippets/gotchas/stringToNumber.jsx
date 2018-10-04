const stringNumber = '12.34'

parseInt(stringNumber) // -> 12
parseFloat(stringNumber) // -> 12.34

Number(stringNumber) // -> 12.34

Math.abs(stringNumber) // -> 12.34
Math.ceil(stringNumber) // -> 13
Math.floor(stringNumber) // -> 12

+stringNumber // -> 12.34
~~stringNumber // -> 12
stringNumber / 1 // -> 12.34
stringNumber * 1 // -> 12.34
stringNumber - 0 // -> 12.34
