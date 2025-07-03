// Hàm delay sử dụng Promise
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
