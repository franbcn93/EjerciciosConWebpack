(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})([function(a,b,c){'use strict';function d(){var a=document.getElementsByName('eleccion');console.log(a);for(let b=0;b<a.length;b++)a[b].checked&&alert(a[b].value)}c.r(b);const e=document.body;let f;const g=()=>{f=document.querySelectorAll('input'),f.forEach(function(a){a.addEventListener('click',async()=>{console.log(a),console.log('item.value: '+a.value),console.log('item.id: '+a.id),'opcion1'==a.value?(console.log('opcion1 pulsada'),e.style.backgroundColor='red'):'opcion2'==a.value?e.style.backgroundColor='green':e.style.backgroundColor='white'})})};(()=>{d(),g()})()}]);