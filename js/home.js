const motionToggle = document.querySelector(".motion-toggle");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (motionToggle) {
  const updateMotionControl = () => {
    motionToggle.hidden = reducedMotion.matches;
    const paused = document.body.classList.contains("motion-paused");
    motionToggle.setAttribute("aria-pressed", String(paused));
    motionToggle.textContent = paused ? "Resume animations" : "Pause animations";
  };

  motionToggle.addEventListener("click", () => {
    document.body.classList.toggle("motion-paused");
    updateMotionControl();
  });

  reducedMotion.addEventListener("change", updateMotionControl);
  updateMotionControl();
}
