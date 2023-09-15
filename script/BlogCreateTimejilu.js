// 博客创建日期（2023/9/14）
const blogCreatedDate = new Date("2023-09-14");

// 获取当前日期
const currentDate = new Date();

// 计算日期差（以天为单位）
const timeDifference = currentDate - blogCreatedDate;
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// 将日期差显示在网页上
document.getElementById("dateDifference").innerHTML = `博客创建于 2023年9月14日，距离现在已经过去了 ${daysDifference} 天。`;
ById("dateDifference").innerHTML = `博客创建于 2023年9月14日，距离现在已经过去了 ${daysDifference} 天。`;