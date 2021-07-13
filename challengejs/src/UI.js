export class UIRentas {

  addRenta(Rentas) {
    const rentasList = document.getElementById("rentas-list");
    const elementRentas = document.createElement("div");
    elementRentas.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Ciudad</strong>: ${Rentas.ciudad} -
                    <strong>Vehiculo</strong>: ${Rentas.vehiculo} -
                    <strong>Cantidad</strong>: ${Rentas.cantidad} -
                    <strong>Tiempo</strong>: ${Rentas.horas}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
    rentasList.appendChild(elementRentas);

    var arrayRentas = elementRentas;
    alert(JSON_encode(arrayRentas));
    console.log(arrayRentas);
  }

  resetForm() {
    document.getElementById("rentas-form").reset();
  }

  deleteRentas(elementRentas) {
    if (elementRentas.name === "delete") {
      elementRentas.parentElement.parentElement.remove();
      this.showMessage("Renta eliminada", "Procesado");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    container.insertBefore(div, app);

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }



}
