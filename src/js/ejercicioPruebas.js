const body = document.body;
let opcion;

const checkOpcion = () => {
  const html = `<input type="radio" name="eleccion" value="opcion1">Opcion1<br/>
    <input type="radio" name="eleccion" value="opcion2" >Opcion2<br/>
    <input type="radio" name="eleccion" value="opcion3">Opcion3<br/>`;

  const div = document.createElement("div");
  div.innerHTML = html;
  body.append(div);
};

function muestraOpcion() {
  var opciones = document.getElementsByName("eleccion");
  console.log(opciones);
  for (let i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      alert(opciones[i].value);
    }
  }
}

const elegido = () => {
  opcion = document.querySelectorAll("input");

  opcion.forEach(function (item) {
    item.addEventListener("click", async () => {
      console.log(item);
      console.log("item.value: " + item.value);
      console.log("item.id: " + item.id);
      //alert("Has pulsado la: " + item.value);
      if (item.value == "opcion1") {
        console.log("opcion1 pulsada");
        body.style.backgroundColor = "red";
      } else if (item.value == "opcion2") {
        body.style.backgroundColor = "green";
      } else {
        body.style.backgroundColor = "white";
      }
    });
  });
};

export const init = () => {
  //   checkOpcion();
  muestraOpcion();
  elegido();
};
