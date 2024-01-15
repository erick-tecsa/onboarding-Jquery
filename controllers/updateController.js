import listContacts from "../controllers/listController.js";
import toastMessage from "../view/view.js";

async function showModalWithInformation(dataToEdit) {
  try {
    $("#updateName").val(dataToEdit.name);
    $("#updateLastName").val(dataToEdit.lastName);
    $("#updateEmail").val(dataToEdit.email);
    $("#updatePhone").val(dataToEdit.phone);
    $("#updateTitle").val(dataToEdit.title);
  } catch (e) {
    console.log(e);
  }
}

function saveUpdateAtDatabase(id) {
  try {
    const name = $("#updateName").val();
    const lastName = $("#updateLastName").val();
    const email = $("#updateEmail").val();
    const phone = $("#updatePhone").val();
    const title = $("#updateTitle").val();

    const updateContact = {
      id,
      name,
      lastName,
      email,
      phone,
      title,
    };

    $.ajax({
      url: "api/editarContato.php",
      method: "POST",
      data: updateContact,
    }).done(function (response) {
      console.log(response);
      $("#updateModal").modal("hide");
      $("#tbodyList").html("");
      listContacts();
    });
  } catch (e) {
    console.log(e);
  }
}

export default function updateContact(index) {
  try {
    $.ajax({
      url: "api/carregarContatos.php",
      method: "GET",
    }).done(function (response) {
      const data = JSON.parse(response);
      const dataToEdit = data[index];
      showModalWithInformation(dataToEdit);

      $(".updateButton")
        .off("click")
        .on("click", function () {
          saveUpdateAtDatabase(dataToEdit.id);
          toastMessage("warning", "Sucesso", "Contato atualizado com sucesso");
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
