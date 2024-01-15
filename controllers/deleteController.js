import listContacts from "./listController.js";
import toastMessage from "../view/view.js";

function deleteContactFromDatabase(id) {
  try {
    $.ajax({
      url: "api/deletarContato.php",
      method: "POST",
      data: { id },
    }).done(function (response) {
      console.log(response);
      $("#deleteModal").modal("hide");
      $("#tbodyList").html("");
      listContacts();
    });
  } catch (e) {
    console.log(e);
  }
}

export default function deleteContact(index) {
  try {
    $.ajax({
      url: "api/carregarContatos.php",
      method: "GET",
    }).done(function (response) {
      const data = JSON.parse(response);
      const dataToEdit = data[index];
      $(".deleteButton")
        .off("click")
        .on("click", function () {
          deleteContactFromDatabase(dataToEdit.id);
          toastMessage("danger", "Sucesso", "contato deletado com sucesso");
          $("#toast-place").addClass("active");

          $(".toast").toast("show");
          setTimeout(() => {
            $("#toast-place").empty();
            $("#toast-place").removeClass("active");
          }, 3000);
        });
    });
  } catch (e) {
    console.log(e);
  }
}
