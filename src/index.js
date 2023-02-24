module.exports = function check(str, bracketsConfig) {
  // your solution


     let bracketsObj = {};
     let openBrackets = [];
     for (let i = 0; i < bracketsConfig.length; i++) {
       openBrackets.push(bracketsConfig[i][0]);
       bracketsObj[bracketsConfig[i][1]] = bracketsConfig[i][0];
     }

     console.log(openBrackets);
     console.log(bracketsObj);

     let stack = [];

     for (let i = 0; i < str.length; i++) {
       let currentSymbol = str[i];

       let lastStackElement = stack[stack.length - 1];

       if (openBrackets.includes(currentSymbol)) {
         if (
           bracketsObj[currentSymbol] === currentSymbol &&
           lastStackElement === currentSymbol
         ) {
           stack.pop();

         } else {
           stack.push(currentSymbol);

         }
       } else {
         if (stack.length === 0) {
           return false;
         }



         if (bracketsObj[currentSymbol] === lastStackElement) {
           stack.pop();

         } else {
            return false;
         }
       }
     }

     return stack.length === 0;
}
