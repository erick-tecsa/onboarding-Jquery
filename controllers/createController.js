export default function createContact() {
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

  $.ajax({
    url: "api/criarContato.php",
    method: "POST",
    data: contact,
  }).done(function (response) {
    try {
      console.log(response);
      location.reload();
    } catch (e) {
      console.log(e);
    }
  });
}
