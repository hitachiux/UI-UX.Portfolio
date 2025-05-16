function animateValue(id, start, end, duration) {
  let obj = document.getElementById(id);
  let startTimestamp = null;
  const step = (timestamp) => {
	if (!startTimestamp) startTimestamp = timestamp;
	const progress = Math.min((timestamp - startTimestamp) / duration, 1);
	obj.innerText = Math.floor(progress * (end - start) + start) + "%";
	if (progress < 1) {
	  window.requestAnimationFrame(step);
	}
  };
  window.requestAnimationFrame(step);
}

window.addEventListener("load", () => {
  animateValue("stat1", 0, 100, 1500);
  animateValue("stat2", 0, 50, 1500);
  animateValue("stat3", 0, 50, 1500);

});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
	if (entry.isIntersecting) {
	  entry.target.classList.add('visible');
	}
  });
});

document.querySelectorAll('.stat, .card, .custom-block, .final-cta').forEach(el => {
  observer.observe(el);
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".top-bar");
  if (window.scrollY > 20) {
	header.classList.add("scrolled");
  } else {
	header.classList.remove("scrolled");
  }
});