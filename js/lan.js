 const images = document.querySelectorAll('img');
		  		  
		  		  function isElementInViewport(el) {
		  		    const rect = el.getBoundingClientRect();
		  		    return (
		  		      rect.top >= 0 &&
		  		      rect.left >= 0 &&
		  		      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		  		      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		  		    );
		  		  }
		  		  
		  		  function loadImage(img) {
		  		    if (!img.src) {
		  		      img.src = img.dataset.src;
		  		    }
		  		  }
		  		
		  		  let isLazyLoading = false;
		  		  function lazyLoad() {
		  		    if (!isLazyLoading) {
		  		      isLazyLoading = true;
		  		      window.requestAnimationFrame(() => {
		  		        [...images].forEach(img => {
		  		          if (isElementInViewport(img)) {
		  		            loadImage(img);
		  		          }
		  		        });
		  		        isLazyLoading = false;
		  		      });
		  		    }
		  		  }
		  		
		  		  // 添加 loading="lazy" 属性
		  		  [...images].forEach(img => {
		  		    if (!img.getAttribute('loading')) {
		  		      img.setAttribute('loading', 'lazy');
		  		    }
		  		  });
		  		
		  		  window.addEventListener('scroll', lazyLoad);