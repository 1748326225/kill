// window.addEventListener("load", function() {
//   var loader = document.getElementById("loader");
//   var body=document.querySelector("body");
//   loader.style.display = "none";
// });
// 屏蔽F12 审查元素
document.onkeydown = function () {
    if (window.event && window.event.keyCode == 123) {
        alert("F12被禁用");
         event.keyCode = 0;
        event.returnValue = false;
    }
    if (window.event && window.event.keyCode == 13) {
         window.event.keyCode = 505;
    }
    if (window.event && window.event.keyCode == 8) {
        alert(str + "\n请使用Del键进行字符的删除操作！");
        window.event.returnValue = false;
    }
}
// 屏蔽右键菜单
document.oncontextmenu = function (event) {
        if (window.event) {
            event = window.event;
        }
        try {
            var the = event.srcElement;
            if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }
// 屏蔽粘贴
document.onpaste = function (event) {
        if (window.event) {
            event = window.event;
        }
        try {
            var the = event.srcElement;
            if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    } 
// 屏蔽复制
document.oncopy = function (event) {
        if (window.event) {
            event = window.event;
        }
        try {
            var the = event.srcElement;
            if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }
// 屏蔽剪切
document.oncut = function (event) {
        if (window.event) {
            event = window.event;
        }
        try {
            var the = event.srcElement;
            if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }
// 屏蔽选中	
document.onselectstart = function (event) {
        if (window.event) {
            event = window.event;
        }
        try {
            var the = event.srcElement;
            if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }	

window.addEventListener('resize', () => {
  if (window.innerWidth !== window.outerWidth || window.innerHeight !== window.outerHeight) {
    window.resizeTo(window.outerWidth, window.outerHeight);
  }
});


// function setTheme() {
//   var topic = document.getElementById("topic");
//   if (topic !== null && topic !== undefined) {
//     var lightHref = "css/light.css";
//     var darkHref = "css/dark.css";
//     var lightLink = document.createElement('link');
//     lightLink.type = 'text/css';
//     lightLink.rel = "stylesheet";
//     lightLink.href = lightHref;
//     lightLink.id = "light-topic";
//     head.appendChild(lightLink);
//     var darkLink = document.createElement('link');
//     darkLink.type = 'text/css';
//     darkLink.rel = "stylesheet";
//     darkLink.href = darkHref;
//     darkLink.id = "dark-topic";
//     head.appendChild(darkLink);

//     var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)color\s*\=\s*([^;]*).*$)|^.*$/, "$1");
//     if (cookieValue === "dark") {
//       lightLink.disabled = true;
//       darkLink.disabled = false;
//     } else {
//       lightLink.disabled = false;
//       darkLink.disabled = true;
//     }
//   }
// }

// // 切换主题
// function changeTheme() {
//   var lightLink = document.getElementById("light-topic");
//   var darkLink = document.getElementById("dark-topic");
//   if (lightLink !== null && lightLink !== undefined && darkLink !== null && darkLink !== undefined) {
//     if (lightLink.disabled) {
//       lightLink.disabled = false;
//       darkLink.disabled = true;
//       document.cookie = "color=light;expires=" + new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1) + ";path=/";
//     } else {
//       lightLink.disabled = true;
//       darkLink.disabled = false;
//       document.cookie = "color=dark;expires=" + new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1) + ";path=/";
//     }
//   }
// }

// window.addEventListener("load", function () {
//   setTheme();
// });


// 左侧控制栏
const cd = () => { 
  const c = document.getElementById("c");
  if (c) {
    c.style.width = "100%";
    // 防止页面滚动
    document.body.style.overflow = "hidden";
  }
};

const cd2 = () => { 
  const c = document.getElementById("c");
  if (c) {
    c.style.width = 0;
    // 恢复页面滚动
    document.body.style.overflow = "auto";
  }
};

// button弹窗
window.addEventListener("load", function(){
  var buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
      var ask = confirm("客服QQ:3288780587\n客服微信：yh17xb");
      if (ask == true) {
        window.location.href = "https://qm.qq.com/cgi-bin/qm/qr?k=l6Udq9LG0jBZsDmC77oenCrn6Yqz_ADl&noverify=0&personal_qrcode_source=4";
      }
    });
  }
});




