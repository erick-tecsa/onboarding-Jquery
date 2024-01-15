export default function toastMessage(background, title, message) {
  $("#toast-place")
    .append(` <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
      <div class="rounded me-2 bg-${background} custom-toast"></div>
      <strong class="me-auto">${title}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
      ${message}
  </div>
</div>`);
}
