//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
    document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll(".side-nav__link");
        const sections = document.querySelectorAll(".content-section");

        links.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();

                // Remove active class from all nav items
                document.querySelectorAll(".side-nav__item").forEach(item => {
                    item.classList.remove("side-nav__item--active");
                });

                // Add active class to clicked item
                this.parentElement.classList.add("side-nav__item--active");

                // Hide all sections
                sections.forEach(section => section.hidden = true);

                // Show the selected section
                const target = this.getAttribute("data-section");
                document.getElementById(target).hidden = false;
            });
        });
    });

})
