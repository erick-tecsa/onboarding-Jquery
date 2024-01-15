import toastMessage from "../view/view.js";
import listContacts from "../controllers/listController.js";
import validateData from "../assets/js/utils/validation.js";

export default function createContact() {
  try {
    const name = $("#createName").val();
    const lastName = $("#createLastName").val();
    const email = $("#createEmail").val();
    const phone = $("#createPhone").val();
    const title = $("#createTitle").val();

    const contact = {
      name,
      lastName,
      email,
      phone,
      title,
    };

    const validation = validateData(contact);
    console.log(validation);
    if (typeof validation === "undefined") {
      $.ajax({
        url: "api/criarContato.php",
        method: "POST",
        data: contact,
      }).done(function (response) {
        console.log(response);
        $("#createModal").modal("hide");
        $("#tbodyList").html("");
        toastMessage("success", "Sucesso", "Contato cadastrado com sucesso!");
        $("#toast-place").addClass("active");

        $(".toast").toast("show");
        setTimeout(() => {
          $("#toast-place").empty();
          $("#toast-place").removeClass("active");
        }, 3000);
        listContacts();

        $("#createName").val("");
        $("#createLastName").val("");
        $("#createEmail").val("");
        $("#createPhone").val("");
        $("#createTitle").val("");
      });
    }
  } catch (e) {
    console.log(e);
  }
}
