const repeatString = function(myString, num) {

    num = 3;

   if(num > 0) {
       return myString.repeat(num);
   }else {
       return "";
   }
    
};

repeatString("hello");

// Do not edit below this line
module.exports = repeatString;
