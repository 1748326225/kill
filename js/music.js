var audio = document.getElementById("myAudio"); 
		var currentPage = 1;

		function loadAndPlayAudio() { 
		  if(audio.readyState === 4 || audio.src){
		  	audio.play(); 
		  }else{
		  	audio.src = "http://music.163.com/song/media/outer/url?id=35345243.mp3";
		  	audio.load();
		  	audio.addEventListener('canplaythrough', function() {
			    audio.play();
			});
		  }
		} 

		function goToPage(pageNumber) {
			document.getElementById("page" + currentPage).style.display = "none";
			currentPage = pageNumber;
			document.getElementById("page" + currentPage).style.display = "block";
		}

		goToPage(1);