window.addEventListener("load",checkTheme)
var theme = "light"; // 默认主题

// 检查cookie并设置默认值
function checkTheme() {
  var savedTheme = getCookie("theme");
  if (savedTheme != "") {
    theme = savedTheme;
  }
  setStyleSheet();
}

// 根据cookie设置样式表
function setStyleSheet() {
  var styleSheet = document.getElementById("styleSheet");
  if (theme === 'dark') {
    styleSheet.href = "css/dark.css";
  } else {
    styleSheet.href = "css/light.css";
  }
}

// 切换主题
function toggleTheme() {
  theme = (theme == "light") ? "dark" : "light";
  setCookie("theme", theme);
  setStyleSheet();
}

// 设置cookie
function setCookie(name, value) {
  document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
}

// 获取cookie
function getCookie(name) {
  var cookieValue = "";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.substring(0, name.length + 1) == (name + "=")) {
      cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
      break;
    }
  }
  return cookieValue;
}
