// 刷新页面
document.querySelector('.kzsx li.sx').addEventListener('click', function() {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.setTimeout(function() {
    location.reload({behavior: 'smooth'});
  }, 100);
});

// 回到顶部
document.querySelector('.kzsx li.top a').addEventListener('click', function(e) {
  e.preventDefault();
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo(0, 0);
  }
});

// 回到底部
document.querySelector('.kzsx li.bottom a').addEventListener('click', function(e) {
  e.preventDefault();
  var scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({ top: scrollHeight, behavior: 'smooth' });
  } else {
    window.scrollTo(0, scrollHeight);
  }
});
