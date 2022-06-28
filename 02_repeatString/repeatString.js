const repeatString = function(string, times) {
   let repeatedString = "";
   while (times > 0) {
    repeatedString += string;
    times--;
   }
   return repeatedString;
};
repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
