//var express 	= require('express');
//var router 		= express.Router();
//var userModel	= require.main.require('./models/user-model');

function search(val){
			
				var xhttp = new XMLHttpRequest();
				xhttp.open("POST", "../model/user-model.js", true);
				xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				xhttp.send('key='+val);
			
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
					 	document.getElementById('result').innerHTML = this.responseText;					 
						
					}
					else {
						return false;
					}
				};
		}
