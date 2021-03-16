(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})([function(a,b,c){'use strict';function d(){const a=`
  <div>Añade el texto introducido en el input una vez pulsado el botón:</div>
  <form>
    <input type="text" id="texto" />
    <button type="button" id="button_1" class="btn btn-outline-dark">Añadir texto</button>
  </form>

  <div id="mostrar_texto"></div><hr>`,b=document.createElement('div');b.innerHTML=a,l.appendChild(b);let c=document.getElementById('texto'),d=document.getElementById('mostrar_texto');n=document.getElementById('button_1');let e=[];n.addEventListener('click',function(){e.push(c.value),d.innerHTML=e})}function e(){const a=`
  <p>Crear dos input de números y un botón, al pulsar el botón, mostrar en un alert quien es el mayor de los dos.</p>
  <form>
      <input type="text" id="num1" style="margin-bottom: 20px";/>
      <br>
      <input type="text" id="num2" style="margin-bottom: 20px"/>
      <button type="button" id="mayor" class="btn btn-outline-dark">¿Quien es el mayor?</button>
    </form>`,b=document.createElement('div');b.innerHTML=a,l.appendChild(b);let c=document.getElementById('mayor');c.addEventListener('click',function(){let a=parseInt(document.getElementById('num1').value),b=parseInt(document.getElementById('num2').value);a>b?alert(`${a} es mayor que ${b}`):b>a?alert(`${b} es mayor que ${a}`):a==b&&alert('Los dos n\xFAmeros son iguales'),a.isNaN||console.log(b)})}function f(){const a=`
            <hr>
            <p>Crear un botón que al pulsarlo genere una lista de 10 números aleatorios en un select vacio. 
              Al pulsar de nuevo, se reseteara la lista.</p>
            <button type="button" id="generarLista" class="btn btn-outline-dark">Generar lista</button>
              <select id="elementos"></select>
            <hr>`,b=document.createElement('div');b.innerHTML=a,l.appendChild(b);const c=document.getElementById('generarLista');let d='';c.addEventListener('click',function(){let a=document.getElementById('elementos');for(let a=0;10>a;a++)d+='<option>'+g(1,100)+'</option>';a.innerHTML=d})}function g(a,b){return Math.floor(Math.random()*(b-a))+a}function h(){const a=`
  <p>Dado un input y un boton, escribir nombres de personas (no controlamos nada de momento) 
    y lo mostramos en una lista desordenada.</p>
  <form>
    <input id="nombrePersona" type="text" placeholder="Insertar nombre..." />
    <button type="button" id="insertarNombre" class="btn btn-outline-dark">Insertar</button>
  </form>
  <hr>`,b=document.createElement('div');b.innerHTML=a,l.appendChild(b);const c=document.getElementById('insertarNombre');c.addEventListener('click',function(){let a=document.getElementById('nombrePersona');if(''==a.value)alert('El nombre no puede estar vacio');else{const b=document.createElement('div');let c='<li> '+a.value+'</li>';b.innerHTML+=c,l.append(b)}})}function i(){const a=`
              <p>Inserta una clave y vuelve a insertarla, si las dos son iguales... te sale un mensaje de alerta</p>
              <input id="ingresarClave" placeholder="Ingresar clave...primero">
              <button type="button" class="btn btn-primary btn-sm" id="botonClave">botonClave</button>
              <input id="botonConfirmacion" placeholder="Ingresar clave de nuevo..." type="password">
              <hr>`,b=document.createElement('div');b.style.display='visible',b.className='clave',b.id='claveId',b.innerHTML=a,l.append(b);const c=document.getElementById('botonClave'),d=document.getElementById('botonConfirmacion');c.addEventListener('click',function(){const a=document.getElementById('ingresarClave'),b=a.value;a.value='';let c=d.value;console.log(c),c==b&&alert('La contrase\xF1a primera y segunda son correctas.'),d.value=''})}function j(){const a=`
  <a name="ocultar"></a>
  <p>Incluimos un nuevo botón, en el que oculta el div anterior al pulsar el input de tipo botón: </p>
  <p>Si volvemos a clickar de nuevo, volverremos a mostrar el div anterior. </p>
  <input id="botonOcultar" type=button value='clickaquí para ocultar el div'>
  <hr>`,b=document.createElement('div');b.innerHTML=a,l.append(b);const c=document.getElementById('botonOcultar');c.addEventListener('click',function(){const a=document.getElementById('claveId');a.style.visibility='visible'==a.style.visibility?'hidden':'visible'})}function k(){const a=`
  <p>PIDE UNA NOTA POR TECLADO Y LA GUARDA EN LA VARIABLE nota: </p>
  <input id="introduceNota" placeholder="Ingresar una nota...">
  <button type="button" class="btn btn-primary btn-sm" id="resultadoNota">resultado de la nota</button>
  `,b=document.createElement('div');b.innerHTML=a,l.append(b);const c=document.getElementById('resultadoNota');c.addEventListener('click',function(){const a=document.getElementById('introduceNota').value;0<a&&10>=a&&(3>a?alert('Muy deficiente'):5>a?alert('Insuficiete'):6>a?alert('Suficiente'):7>a?alert('Bien'):9>a?(alert('Notable'),5):9<=a&&alert('Sobresaliente'))})}c.r(b);const l=document.body;let m,n;const o=()=>{m=document.querySelectorAll('input'),m.forEach(function(a){a.addEventListener('click',async()=>{console.log(a),console.log('item.value: '+a.value),console.log('item.id: '+a.id),l.style.backgroundColor='opcion1'==a.value?'antiquewhite':'opcion2'==a.value?'beige':'white'})})};(()=>{o(),d(),e(),f(),h(),i(),j(),k()})()}]);