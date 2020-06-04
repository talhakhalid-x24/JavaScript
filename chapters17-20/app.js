var aNum = [ 
    [], 
    [], 
    [], 
 ];  
 for(var i = 0; i < aNum.length; i++) { 
     document.write(aNum[i] + "<br>"); 
}


document.writeln('<br><br>')
var aNum = [ 
    [0,1,2,3], 
    [1,0,1,2], 
    [2,1,0,1], 
 ];  
 for(var i = 0; i < aNum.length; i++) { 
     document.write(aNum[i] + "<br>"); 
}


document.writeln('<br><br>')
var aNum = [1,2,3,4,5,6,7,8,9,10];  
 for(var i = 0; i < aNum.length; i++) { 
     document.write(aNum[i] + "<br>"); 
}


document.writeln('<br><br>')
var table = parseInt(prompt('Enter a number to show its multiplication table'))
var lengthOfTable = parseInt(prompt('Enter length multiplication table'))
document.writeln('Multiplication table of '+table)
document.writeln('<br>Length '+lengthOfTable+'<br><br>')
for(var i=1;i<=lengthOfTable;i++){
    document.writeln(table+' * '+i+' = '+table*i+'<br>')
}


document.writeln('<br><br>')
var fruits = ['apple', 'banana', 'mango', 'orange','strawberry']
for(var i=0;i<fruits.length;i++){
    document.writeln(fruits[i]+'<br>')
}
document.writeln('<br>')
var number = [0,1,2,3,4]
for(var j=0;j<fruits.length && number.length;j++){
    document.writeln('Elements at index '+number[j]+' is '+fruits[j]+'<br>')
}


document.writeln('<br><br>')
var fruits = ['apple', 'banana', 'mango', 'orange','strawberry']
for(var i=0;i<fruits.length;i++){
    document.writeln(fruits[i]+'<br>')
}
document.writeln('<br>')
var number = [0,1,2,3,4]
for(var j=0;j<fruits.length && number.length;j++){
    document.writeln('Elements at index '+number[j]+' is '+fruits[j]+'<br>')
}


document.writeln('<br><br>')
var counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
document.writeln('<b>Counting:</b><br>'+counting+'<br><br>')

var reverseCounting = [1,2,3,4,5,6,7,8,9,10]
document.writeln('<b>Reverse Counting:</b><br>'+reverseCounting.reverse()+'<br><br>')

var even = [0,2,4,6,8,10,12,14,16,18,20]
document.writeln('<b>Even:</b><br>'+even+'<br><br>')

var odd = [1,3,5,7,9,11,13,15,17,19]
document.writeln('<b>Odd:</b><br>'+odd+'<br><br>')

var series = ['2k','4k','6k','8k','10k','12k','14k','16k','18k','20k']
document.writeln('<b>Series:</b><br>'+series)


document.writeln('<br><br>')
var arr = [24, 53, 78, 91, 12]
document.writeln('Array Items: '+arr)

var arrMax = Math.max(...arr);
document.writeln('<br>The largest number is '+arrMax)


document.writeln('<br><br>')
var arr = [24, 53, 78, 91, 12]
document.writeln('Array Items: '+arr)

var arrMin = Math.min(...arr);
document.writeln('<br>The smallest number is '+arrMin)


document.writeln('<br><br>')
var aNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
for(var i =0;i<aNumber.length;i++){
    if(aNumber[i] %5===0){
        document.writeln(aNumber[i])
    }
}