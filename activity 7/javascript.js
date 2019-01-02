function inclass(){
			var d = new Date();
			var h = d.getHours();

			if(h < 10 ){
				document.write("good morning!");
			}
			else if(h < 20){
				document.write("good afternoon!");
			}
			else{
				document.write("good night!");
			}
		}