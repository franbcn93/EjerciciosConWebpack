const body = document.body;
let opcion, boton_1;

// +++++++++++++++++++++++++++++++++++++++++++++++++

// Cambia de color de la página, dependiendo de que checkboxs pulses
const elegido = () => {
  opcion = document.querySelectorAll("input");

  opcion.forEach(function (item) {
    item.addEventListener("click", async () => {
      console.log(item);
      console.log("item.value: " + item.value);
      console.log("item.id: " + item.id);

      if (item.value == "opcion1") {
        body.style.backgroundColor = "antiquewhite";
      } else if (item.value == "opcion2") {
        body.style.backgroundColor = "beige";
      } else {
        body.style.backgroundColor = "white";
      }
    });
  });
};

// +++++++++++++++++++++++++++++++++++++++++++++++++

// crear un input y un button, cuando le demos al boton,
//  se añadira el texto que hemos puesto en el input en un div vacio.
// Recuerda se añadirá el texto, no se machaca lo que haya en el div.
function afegirText() {
  const html = `
  <div>Añade el texto introducido en el input una vez pulsado el botón:</div>
  <form>
    <input type="text" id="texto" />
    <button type="button" id="button_1">Añadir texto</button>
  </form>

  <div id="mostrar_texto"></div><hr>`;

  const div = document.createElement("div");
  div.innerHTML = html;
  body.appendChild(div);

  let texto = document.getElementById("texto");
  let div_2 = document.getElementById("mostrar_texto");
  boton_1 = document.getElementById("button_1");
  let textoAnadir = [];

  boton_1.addEventListener("click", function () {
    // div_2.innerHTML = texto += texto.value;
    textoAnadir.push(texto.value);
    div_2.innerHTML = textoAnadir;
  });
}

// +++++++++++++++++++++++++++++++++++++++++++++++++

// Crear dos input de números y un botón, al pulsar el botón, mostrar en un
// alert quien es el mayor de los dos.
function mayorNum() {
  const html = `
  <p>Crear dos input de números y un botón, al pulsar el botón, mostrar en un alert quien es el mayor de los dos.</p>
  <form>
      <input type="text" id="num1" style="margin-bottom: 20px";/>
      <br>
      <input type="text" id="num2" style="margin-bottom: 20px"/>
      <button type="button" id="mayor">¿Quien es el mayor?</button>
    </form>`;

  const div = document.createElement("div");
  div.innerHTML = html;

  body.appendChild(div);

  let boton_2 = document.getElementById("mayor");

  //Averiguem quin es major
  boton_2.addEventListener("click", function () {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    if (num1 > num2) {
      alert(`${num1} es mayor que ${num2}`);
    } else if (num2 > num1) {
      alert(`${num2} es mayor que ${num1}`);
    } else if (num1 == num2) {
      alert("Los dos números son iguales");
    }
    if (!num1.isNaN) {
      console.log(num2);
    }
  });
}

// +++++++++++++++++++++++++++++++++++++++++++++++++

// Crear un botón que al pulsarlo genere una lista de 10 números
// aleatorios en un select vacio. Al pulsar de nuevo, se reseteara la lista.
function generaLista() {
  const html = `
            <hr>
            <p>Crear un botón que al pulsarlo genere una lista de 10 números aleatorios en un select vacio. 
              Al pulsar de nuevo, se reseteara la lista.</p>
            <button type="button" id="generarLista">Generar lista</button>
              <select id="elementos"></select>
            <hr>`;
  const div = document.createElement("div");
  div.innerHTML = html;
  body.appendChild(div);

  const boton_3 = document.getElementById("generarLista");
  let cadaElemento = "";

  boton_3.addEventListener("click", function () {
    let elementos = document.getElementById("elementos");
    for (let i = 0; i < 10; i++) {
      cadaElemento += "<option>" + getRandomInt(1, 100) + "</option>";
    }
    elementos.innerHTML = cadaElemento;
  });
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// +++++++++++++++++++++++++++++++++++++++++++++++++

// Dado un input y un boton, escribir nombres de personas (no controlamos nada de momento)
//  y lo mostramos en una lista desordenada.
// <button onclick="insertarNombre(event)">Insertar</button>

function listaDesordenada() {
  const html = `
  <p>Dado un input y un boton, escribir nombres de personas (no controlamos nada de momento) 
    y lo mostramos en una lista desordenada.</p>
  <form>
    <input id="nombrePersona" type="text" placeholder="Insertar nombre..." />
    <button type="button" id="insertarNombre">Insertar</button>
  </form>
  <hr>`;

  const div = document.createElement("div");
  div.innerHTML = html;
  body.appendChild(div);

  const boton_4 = document.getElementById("insertarNombre");
  boton_4.addEventListener("click", function () {
    let nombre = document.getElementById("nombrePersona");
    if (nombre.value == "") {
      alert("El nombre no puede estar vacio");
    } else {
      const lista = document.createElement("div");
      let opcion = "<li> " + nombre.value + "</li>";

      lista.innerHTML += opcion;
      body.append(lista);
    }
  });
}

function claveContrasenya() {
  const html = `
              <p>Inserta una clave y vuelve a insertarla, si las dos son iguales... te sale un mensaje de alerta</p>
              <input id="ingresarClave" placeholder="Ingresar clave...primero">
              <button type="button" class="btn btn-primary btn-sm" id="botonClave">botonClave</button>
              <input id="botonConfirmacion" placeholder="Ingresar clave de nuevo..." type="password">
              <hr>`;
  const div = document.createElement("div");
  div.style.display = "visible";
  div.className = "clave";
  div.id = "claveId";
  div.innerHTML = html;
  body.append(div);

  const botonClave = document.getElementById("botonClave");
  const confirmacion = document.getElementById("botonConfirmacion");

  // const valor;

  botonClave.addEventListener("click", function () {
    const ingresar = document.getElementById("ingresarClave");
    const valor = ingresar.value;
    ingresar.value = "";

    let resultado = confirmacion.value;
    // confirmacion.placeholder = "";
    console.log(resultado);

    if (resultado == valor) {
      alert("La contraseña primera y segunda son correctas.");
    }
    confirmacion.value = "";
  });
}

// <input type=button onClick="location.href='index_2.html'"

function ocultar() {
  const html = `<p>Incluimos un nuevo botón, en el que oculta el div anterior al pulsar el input de tipo botón: </p>
  <p>Si volvemos a clickar de nuevo, volverremos a mostrar el div anterior. </p>
  <input id="botonOcultar" type=button value='clickaquí para ocultar el div'>
  <hr>`;

  const div = document.createElement("div");
  div.innerHTML = html;
  body.append(div);

  const clickOcultar = document.getElementById("botonOcultar");
  clickOcultar.addEventListener("click", function () {
    const divaOcultar = document.getElementById("claveId");
    // console.log(divaOcultar.style.visibility == "visible");

    if (divaOcultar.style.visibility == "visible") {
      divaOcultar.style.visibility = "hidden";
    } else {
      divaOcultar.style.visibility = "visible";
    }
  });
}

// +++++++++++++++++++++++++++++++++++++++++++++++++

export const init = () => {
  elegido();
  afegirText();
  mayorNum();
  generaLista();
  listaDesordenada();
  claveContrasenya();
  ocultar();
};
