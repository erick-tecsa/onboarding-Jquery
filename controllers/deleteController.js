import listContacts from "./listController.js";
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
        });
    });
  } catch (e) {
    console.log(e);
  }
}
