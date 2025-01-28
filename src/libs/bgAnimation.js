// service animation
export const serviceBgAnimation = () => {
  const servicesWidget = document.querySelector(".services-widget");
  const activeBg = document.querySelector(".services-widget .active-bg");
  let currentElement = document.querySelector(".services-widget .current");

  function activeService(activeBg, element) {
    if (activeBg && element) {
      const rect = element.getBoundingClientRect();
      const widgetRect = servicesWidget.getBoundingClientRect();
      activeBg.style.width = `${rect.width}px`;
      activeBg.style.height = `${rect.height}px`;
      activeBg.style.left = `${rect.left - widgetRect.left}px`;
      activeBg.style.top = `${rect.top - widgetRect.top}px`;
    }
  }

  servicesWidget.addEventListener(
    "mouseenter",
    (event) => {
      if (event.target.classList.contains("service-item")) {
        const target = event.target;
        activeService(activeBg, target);
        document
          .querySelectorAll(".services-widget .service-item")
          .forEach((item) => {
            item.classList.remove("current");
          });
        target.classList.add("current");
      }
    },
    true
  );

  servicesWidget.addEventListener("mouseleave", () => {
    currentElement = document.querySelector(".services-widget .current");
    activeService(activeBg, currentElement);
    document.querySelectorAll(".service-item").forEach((item) => {
      item.classList.remove("mleave");
    });
  });

  activeService(activeBg, currentElement);
};

// butotn animation
export function buttonBgAnimation() {
  const buttonGroup = document.querySelector(".portfolio-filter .button-group");
  const activeBg = document.querySelector(
    ".portfolio-filter .button-group .active-bg"
  );
  const buttons = document.querySelectorAll(
    ".portfolio-filter .button-group button"
  );

  const activeFilterBtn = (activeBg, element) => {
    if (activeBg && element) {
      const rect = element.getBoundingClientRect();
      const parentRect = buttonGroup.getBoundingClientRect();

      activeBg.style.width = `${rect.width}px`;
      activeBg.style.height = `${rect.height}px`;
      activeBg.style.left = `${rect.left - parentRect.left}px`;
      activeBg.style.top = `${rect.top - parentRect.top}px`;
    }
  };

  // Event listener for button clicks
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove the 'active' class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));

      // Add the 'active' class to the clicked button
      button.classList.add("active");

      // Update the position of the active background
      activeFilterBtn(activeBg, button);
    });
  });

  // Initialize with the currently active button
  const activeElement = document.querySelector(
    ".portfolio-filter .button-group .active"
  );
  activeFilterBtn(activeBg, activeElement);
}
