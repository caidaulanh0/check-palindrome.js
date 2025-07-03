// Kiểm tra chuỗi có phải palindrome không
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
