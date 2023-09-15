var seconds = 0; // 初始化秒数

// 更新计时器显示的函数
function updateTimer() {
    document.getElementById("timer").innerHTML = seconds + " 秒";
    seconds++;
}

// 自动开始计时
window.onload = function() {
    // 每隔一秒执行一次updateTimer函数
    setInterval(updateTimer, 1000);
};
