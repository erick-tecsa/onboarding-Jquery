function deleteContactFromDatabase(id) {
  console.log("Esse é o id que eu quero deletar ", id);
}

export default function deleteContact(index) {
  try {
    $.ajax({
      url: "api/carregarContatos.php",
      method: "GET",
    }).done(function (response) {
      const data = JSON.parse(response);
      const dataToEdit = data[index];
      //   showModalWithInformation(dataToEdit);
      console.log(index);
      //   $(".updateButton")
      //     .off("click")
      //     .on("click", function () {
      //       deleteContactFromDatabase(dataToEdit.id);
      //     });
    });
  } catch (e) {
    console.log(e);
  }
}
