import Routes from "../routes/routes.js";
import formatData from "../assets/js/utils/dateFormat.js";

export default function listContacts() {
  $.ajax({
    url: "api/carregarContatos.php",
    method: "GET",
  })
    .done(function (response) {
      try {
        const data = JSON.parse(response);
        const tbody = $("#tbodyList");

        const formattedData = $.map(data, function (element, index) {
          const formattedCreatedAt = formatData(element.createdAt);
          element.createdAt = formattedCreatedAt;
          return element;
        });

        $.each(formattedData, function (index, element) {
          const tr = $("<tr/>");
          tbody.append(tr);
          tr.append($("<td/>").text(index));
          for (let column in element) {
            tr.append($("<td/>").text(element[column]));
          }
          tr.append(
            $("<td/>")
              .attr("data-bs-toggle", "modal")
              .attr("data-bs-target", "#updateModal").html(`
            <span class="material-symbols-outlined edit">
              edit
            </span>
          `)
          );

          tr.append(
            $("<td/>")
              .attr("data-bs-toggle", "modal")
              .attr("data-bs-target", "#deleteModal").html(`
            <span class="material-symbols-outlined delete">
              delete
            </span>
          `)
          );
        });
        const edit = $(".edit");
        Routes.update(edit);
        const deleteContact = $(".delete");
        Routes.delete(deleteContact);
      } catch (error) {
        console.error("Erro ao processar JSON:", error);
      }
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.error("Erro na requisição:", textStatus, errorThrown);
    });
}
