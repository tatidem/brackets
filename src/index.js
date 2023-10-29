module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingBrackets = {};
  const closingBrackets = {};
  
  for (const pair of bracketsConfig) {
    openingBrackets[pair[0]] = pair[1];
    closingBrackets[pair[1]] = pair[0];
  }
  
  for (const char of str) {
    if (openingBrackets[char] && closingBrackets[char]) {
      if (stack.length > 0 && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (openingBrackets[char]) {
      stack.push(char);
    } else if (closingBrackets[char]) {
      if (stack.length === 0 || stack.pop() !== closingBrackets[char]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
