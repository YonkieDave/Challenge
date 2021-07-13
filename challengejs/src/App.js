import { Rentas } from "./Rentas.js";
import { UIRentas } from "./UI.js";

document
.getElementById("rentas-form")
  .addEventListener("submit", function (e) {

    e.preventDefault();


    const ciudad = document.getElementById("ciudad").value,
      vehiculo = document.getElementById("vehiculo").value,
      cantidad = document.getElementById("cantidad").value;
      horas = document.getElementById("horas").value;


    const rentas = new Rentas(ciudad, vehiculo, cantidad,horas);


    const uiRentas = new UIRentas();

    if (ciudad === "" || vehiculo === "" || cantidad === "" || horas === "") {
      uiRentas.showMessage("Por favor inserte los datos solicitados", "Atención");
    }

    uiRentas.addRenta(rentas);
    uiRentas.showMessage("Registro añadido", "Procesado");
    uiRentas.resetForm();
  });

document.getElementById("rentas-list").addEventListener("click", (e) => {
  const uiRentas = new UIRentas();
  uiRentas.deleteRentas(e.target);
  e.preventDefault();
});
