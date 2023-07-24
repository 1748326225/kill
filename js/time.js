function updateTime() {
						const year = new Date().getFullYear();
						document.getElementById("year").innerHTML = year;
		
						const birthDay = new Date("01/01/2023 00:00:00");
						const timeDiff = Math.abs(new Date() - birthDay);
						const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
						const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
						const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
						const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
		
						document.getElementById("t").innerHTML = days;
						document.getElementById("s").innerHTML = hours;
						document.getElementById("f").innerHTML = minutes;
						document.getElementById("m").innerHTML = seconds;
					}
		
					updateTime();
					setInterval(updateTime, 1000);