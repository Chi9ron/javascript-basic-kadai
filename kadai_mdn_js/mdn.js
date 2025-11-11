const today = new Date();

// 年を取得 (例: 2025)
const year = today.getFullYear();

// 月を取得 (0から11で返されるため、+1する。例: 10)
const month = today.getMonth() + 1;

// 日を取得 (例: 12)
const day = today.getDate();

// 指定の形式に整形
const formattedDate = `${year}年${month}月${day}日`;

console.log(formattedDate);