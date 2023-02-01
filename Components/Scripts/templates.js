const template = document.createElement('template');

const currentFile = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

if (currentFile == "index.html"){
	template.innerHTML = `
		<div class = "topnav">
			<a class = "active" href="index.html">Home</a>
			<a href="Pages/gameDev.html">Game Dev</a>
			<a href="Pages/photo.html">Photography</a>
			<a href="Pages/about.html">About</a>
		</div>
	`;
} else if (currentFile == "about.html"){
	template.innerHTML = `
		<div class = "topnav">
			<a href="../index.html">Home</a>
			<a href="gameDev.html">Game Dev</a>
			<a href="photo.html">Photography</a>
			<a class = "active" href="about.html">About</a>
		</div>
	`;
} else if (currentFile == "gameDev.html"){
	template.innerHTML = `
		<div class = "topnav">
			<a href="../index.html">Home</a>
			<a class = "active" href="gameDev.html">Game Dev</a>
			<a href="photo.html">Photography</a>
			<a href="about.html">About</a>
		</div>
	`;
} else if (currentFile == "photo.html"){
	template.innerHTML = `
		<div class = "topnav">
			<a href="../index.html">Home</a>
			<a href="gameDev.html">Game Dev</a>
			<a class = "active" href="photo.html">Photography</a>
			<a href="about.html">About</a>
		</div>
	`;
}
template.innerHTML += `
	<button onclick="toTop()" id="topBtn" title="Go to top">&#8593;</button>
	<div class = "bottomnav">
		<a href="https://instagram.com/jmurph_photos?igshid=Zjc2ZTc4Nzk= " class="fa fa-instagram"><div class = "bottomtext">Photos</div></a>
		<a href="https://www.linkedin.com/in/jordan-murphy-567519256/" class = "fa fa-linkedin-square"></a>
		<a href="https://github.com/jmurphy007" class = "fa fa-github"></a>
		<a href="mailto:murphyjo700@gmail.com" class="fa fa-envelope"></a>
		<p class = "desktop-display">This site was made by me from scratch using only HTML, CSS, and JavaScript.</p>
		<p class = "mobile-display">This site was made by me from scratch using only HTML, CSS, and JavaScript.</p>
	</div>
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