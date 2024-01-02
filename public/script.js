document.body.addEventListener("click", function (event) {
  const clickedElement = event.target;

  // Check if the clicked element or any of its ancestors has the class 'sidebar-item'
  if (
    clickedElement.closest(".sidebar-item") ||
    clickedElement.classList.contains("sidebar-item")
  ) {
    return; // Skip collapsing for elements inside 'sidebar-item'
  }
  if (document.querySelector("details")) {
    // Fetch all the details elements
    const details = document.querySelectorAll("details");

    // Add onclick listeners
    details.forEach((targetDetail) => {
      if (targetDetail.parentElement.className === "sidebar-item") {
        return;
      }
      // Close all details that are not targetDetail
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    });
  }
});
