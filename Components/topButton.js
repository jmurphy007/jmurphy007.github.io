const template = document.createElement('template');

template.innerHTML = `
	<button onclick="toTop()" id="topBtn" title="Go to top">&#8593;</button>
`;

document.body.appendChild(template.content);

let mybutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
		mybutton.style.opacity = 1;
	} else {
		mybutton.style.display = "none";
		mybutton.style.opacity = 0;
	}
}
function toTop() {
	smoothscroll();
}
function smoothscroll(){
	var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
	if (currentScroll > 0) {
		window.requestAnimationFrame(smoothscroll);
		window.scrollTo (0,currentScroll - (currentScroll/20));
		}
}