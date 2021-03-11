import { obtenerUsuarios, obtenerChiste } from "./http-provider";

const urlCRUD = "https://reqres.in/api/users";

const body = document.body;
let miUsuario, btnOtro, olList;

const getUsuario = async (id) => {
  const resp = await fetch(`${urlCRUD}/${id}`);
  const { data } = await resp.json();

  return data;
};

const crearUsuario = async (usuario) => {
  const resp = await fetch(urlCRUD, {
    method: "POST",
    body: JSON.stringify(usuario),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
};

const actualizarUsuario = async (id, usuario) => {
  const resp = await fetch(`${urlCRUD}/${id}`, {
    method: "PUT",
    body: JSON.stringify(usuario),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
};

const crearUsuariActualizado = () => {
  const html = `<h1 class="mt-5">Mi usuario:</h1>
    <hr>
    <button class="btn btn-primary">Ver usuario creado</button>
    <ol class="mt-2 list-group">
    </ol>`;

  // Creo mi usuario
  actualizarUsuario(1, {
    name: "Yaz",
    job: "Integradora Social",
  }).then(console.log);

  const divUsuario = document.createElement("div");
  divUsuario.innerHTML = html;
  body.append(divUsuario);
};

const usuarioHtml = () => {
  olList = document.querySelector("ol");
  btnOtro = document.querySelector("button");

  btnOtro.addEventListener("click", async () => {
    btnOtro.disabled = true;
    dibujarChiste(await obtenerChiste());
    obtenerUsuarios().then(console.log);
    // getUsuario(1).then(console.log);
    btnOtro.disabled = false;
  });

  const crearFilaUsuario = (usuario) => {
    // En la tabla deben de colocar un correlativo empezando en 1
    // También deben de colocar el avatar
    correlativo++;

    const html = `
          <td scope="col"> ${usuario.email} </td>
          <td scope="col"> ${usuario.first_name} ${usuario.last_name} </td>
          <td scope="col" >
              <img class="img-thumbnail" src="${usuario.avatar}">
          </td>
      `;

    const tr = document.createElement("tr");
    tr.innerHTML = html;

    // Añadir el table row (tr) dentro del TBody creado anteriormente
    body.appendChild(tr);
  };

  // const olItem = document.createElement("li");
  // olItem.addEventListener
  // olItem.innerHTML = `<b>Hola</b>: Que tal.`;
  // olItem.classList.add("list-group-item");

  // olItem.append(miUsuario);
};

const dibujarChiste = (chiste) => {
  const contador = "Chiste nº" + (document.querySelectorAll("li").length + 1);
  const olItem = document.createElement("li");
  olItem.innerHTML = `<b>${contador}</b>: ${chiste.value}`;
  // olItem.innerHTML = `<b>${contador} ${chiste.id}</b>: ${chiste.value}`;
  olItem.classList.add("list-group-item");

  olList.append(olItem);
};

const borrarUsuario = async (id) => {
  const resp = await fetch(`${urlCRUD}/${id}`, {
    method: "DELETE",
  });
  return resp.ok ? "Borrado" : "No se pudo eliminar";
};

export {
  getUsuario,
  crearUsuario,
  actualizarUsuario,
  borrarUsuario,
  crearUsuariActualizado,
  usuarioHtml,
  prueba,
};

const prueba = async () => {
  const usuarios = await obtenerUsuarios();
  usuarios.forEach(crearFilaUsuario);
};
