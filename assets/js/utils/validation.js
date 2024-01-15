export default function validateData({ name, lastName, email, phone, title }) {
  if (!name || !lastName || !email || !phone || !title) {
    $("#div-erro").show();
    return "Os campos não podem estar em branco";
  } else {
    return;
  }

  //   if (!email.includes("@")) {
  //     console.log("Não inclui @@@@ ");
  //     return;
  //   }
}
