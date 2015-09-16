'use strict';
$(document).ready(function(){

var username = $('.username');
var password = $('.password');
var one = {
	un: 'aaron@theironyard.com',
	pw: 'password123'
};
var two = {
	un: 'admin@google.com',
	pw: 'pandas'
};
var three = {
	un: 'noel.farris@gmail.com',
	pw: 'honeycrisp'
};
$('.hidden').hide();
function validate() {
	if ((username.val() === one.un && password.val() === one.pw) || (username.val() === two.un && password.val() === two.pw) || (username.val() === three.un && password.val() === three.pw)) {
		window.location.replace('http://theironyard.com')
}
if (username.val() === '') {
	$('.iUn').hide();
	$('.un').show();
} else {
	$('.un').hide();
	$('.iUn').show();
}
if (password.val() === '') {
	$('.iPw').hide();
	$('.pw').show();
} else {
	$('.pw').hide();
	$('.iPw').show();
}
}
$('form').on('submit', function(e) {
	e.preventDefault();
	validate();
});
})

