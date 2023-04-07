console.log($('#form'), '  form');
$('#form').submit((event) => {
	event.preventDefault();
	let age = 	$('#age').val()
	let name = $("#name").val()
	let mess = $('#messge').val()
	let email = $('#email').val()
	if(name.length<=0) {
		alert('Name can not be none')
		return false
	}
	if(age.length<=0){
		 alert('Age can not be none')
		 return false
	}
	if(mess.length<=0) {
		alert('Email can not be none')
		return false
	}
	if(email.length<=0) {
		alert('Message can not be none')
		return false
	}
	if(age <= 12){
		alert('Submission failed, age must be greater than 12,your age is '+age)
	} else if(age > 12 ){
		alert('Congratulations on your successful submission,'+name)
	} 
})
$('#color1').click(()=>{
	$('#head').css("background-color","yellow");
	$('#main').css("background-color","lightskyblue");
	$('#footer').css("background-color","indigo");
})
$('#color2').click(()=>{
	$('#head').css("background-color","antiquewhite");
		$('#main').css("background-color","lightcyan");
		$('#footer').css("background-color","beige");
})
$('#color3').click(()=>{
	$('#head').css("background-color","royalblue");
		$('#main').css("background-color","azure");
		$('#footer').css("background-color","DarkBlue");
})

$('#color4').click(()=>{
	$('#head').css("background-color","Pink");
	$('#main').css("background-color","SteelBlue");
	$('#footer').css("background-color","Gold");
})
$('#color5').click(()=>{
	$('#head').css("background-color","Aquamarine");
		$('#main').css("background-color","teal");
		$('#footer').css("background-color","tan");
})
$('#color6').click(()=>{
	$('#head').css("background-color","CornflowerBlue");
		$('#main').css("background-color","MediumPurple");
		$('#footer').css("background-color","AliceBlue");
})

$('#color7').click(()=>{
	$('#head').css("background-color","DarkTurquoise");
	$('#main').css("background-color","PaleTurquoise");
	$('#footer').css("background-color","DarkCyan");
})
$('#color8').click(()=>{
	$('#head').css("background-color","DeepSkyBlue");
		$('#main').css("background-color","PapayaWhip");
		$('#footer').css("background-color","Navy");
})
$('#color9').click(()=>{
	$('#head').css("background-color","BlueViolet");
		$('#main').css("background-color","Lavender");
		$('#footer').css("background-color","Indigo");
})