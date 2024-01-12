import listContacts from "../controllers/listController.js";
import createContact from "../controllers/createController.js";
import updateContact from "../controllers/updateController.js";
import deleteContact from "../controllers/deleteController.js";

export default class Routes {
  static list() {
    listContacts();
  }

  static create() {
    createContact();
  }

  static update(clickedElement) {
    $.each(clickedElement, function (index, element) {
      $(element).on("click", function () {
        updateContact(index);
      });
    });
  }

  static delete(clickedElement) {
    $.each(clickedElement, function (index, element) {
      $(element).on("click", function () {
        deleteContact(index);
      });
    });
  }
}

$(".saveButton").on("click", function (event) {
  event.preventDefault();
  Routes.create();
});
Routes.list();
