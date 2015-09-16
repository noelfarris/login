(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
$(document).ready(function () {

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
		if (username.val() === one.un && password.val() === one.pw || username.val() === two.un && password.val() === two.pw || username.val() === three.un && password.val() === three.pw) {
			window.location.replace('http://theironyard.com');
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
	$('form').on('submit', function (e) {
		e.preventDefault();
		validate();
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map