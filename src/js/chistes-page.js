import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro, olList;

const crearChistesHtml = () => {
  const html = `<h1 class="mt-5">Chiste</h1>
    <hr>
    <button class="btn btn-primary">Otro chiste</button>

    <ol class="mt-2 list-group">
    </ol>`;

  const divChistes = document.createElement("div");
  divChistes.innerHTML = html;
  body.append(divChistes);
};

const eventos = () => {
  olList = document.querySelector("ol");
  btnOtro = document.querySelector("button");

  btnOtro.addEventListener("click", async () => {
    btnOtro.disabled = true;
    dibujarChiste(await obtenerChiste());
    btnOtro.disabled = false;
  });
};

const dibujarChiste = (chiste) => {
  const contador = "Chiste nº" + (document.querySelectorAll("li").length + 1);
  const olItem = document.createElement("li");
  olItem.innerHTML = `<b>${contador}</b>: ${chiste.value}`;
  // olItem.innerHTML = `<b>${contador} ${chiste.id}</b>: ${chiste.value}`;
  olItem.classList.add("list-group-item");

  olList.append(olItem);
};

export const init = () => {
  crearChistesHtml();
  eventos();
};
