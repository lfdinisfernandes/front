
    const express = require('express');

    function on(element, event, callback) {
        document.querySelector(element)
        .addEventListener(event, callback, false);
    }
    var login = 'admin';
    var password = '123456';

    //botão
    on(' [data-js="but"]','click', function(event) {
        event.preventDefault();
        if (login == on('[data-js="login"]')) {
            console.log('logado!')
       }else{
           console.log("errou")
       }  
    });

    //login
    on(lo ='[data-js="login"]','click', function(event) {
        event.preventDefault();
        if (lo == login) {
             console.log('logado!')
        }    
            });

    //password
    on('[data-js="password"]','click', function(event) {
        event.preventDefault();
        alert('password')
    });