// Asociamos el evento "mouseover" al ícono para mostrar el tooltip
document.addEventListener("DOMContentLoaded", () => {
  const tooltipIcon = document.querySelector(".tooltip");
  const tooltipText = document.querySelector(".tooltiptext");

  tooltipIcon.addEventListener("mouseover", () => {
    tooltipText.style.visibility = "visible";
    tooltipText.style.opacity = "1";
  });

  tooltipIcon.addEventListener("mouseout", () => {
    tooltipText.style.visibility = "hidden";
    tooltipText.style.opacity = "0";
  });
});
