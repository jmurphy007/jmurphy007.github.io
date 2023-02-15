const template = document.createElement('template');

const currentFile = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

if (currentFile == "about.html"){
	template.innerHTML = `
		<div class = "topnav">
			<a href="../index.html">Home</a>
			<a class = "active" href="about.html">About</a>
			<div class = "dropdown">
				<button onclick = "openGame()" class = "dropbtn dropbtnGame">Game Dev<i class="fa fa-caret-down"></i></button>
				<div id = "myDropdown" class = "dropdown-content">
					<a href="gameDevGames.html">Game Projects</a>
					<a href="gameDevModels.html">3D Models</a>
					<a href="gameDevTools.html">My Tools</a>
				</div>
			</div>
			<div class = "dropdown">
				<button onclick = "openPhoto()" class = "dropbtn dropbtnPhoto ">Photography<i class="fa fa-caret-down"></i></button>
				<div id = "myDropdown" class = "dropdown-content">
					<a href="photo.html">Gallery</a>
					<a href="photoTools.html">My Tools</a>
				</div>
			</div>
		</div>
	`;
} else if (currentFile == "photo.html"){
	template.innerHTML = `
		<div class = "topnav">
			<a href="../index.html">Home</a>
			<a href="about.html">About</a>
			<div class = "dropdown">
				<button onclick = "openGame()" class = "dropbtn dropbtnGame">Game Dev<i class="fa fa-caret-down"></i></button>
				<div id = "myDropdownGame" class = "dropdown-content">
					<a href="gameDevGames.html">Game Projects</a>
					<a href="gameDevModels.html">3D Models</a>
					<a href="gameDevTools.html">My Tools</a>
				</div>
			</div>
			<div class = "dropdown">
				<button onclick = "openPhoto()" class = "dropbtn dropbtnPhoto active">Photography<i class="fa fa-caret-down"></i></button>
				<div id = "myDropdownPhoto" class = "dropdown-content">
					<a class = "active" href="photo.html">Gallery</a>
					<a href="photoTools.html">My Tools</a>
				</div>
			</div>
		</div>
	`;
} else if (currentFile == "photoTools.html"){
	template.innerHTML = `
		<div class = "topnav">
			<a href="../index.html">Home</a>
			<a href="about.html">About</a>
			<div class = "dropdown">
				<button onclick = "openGame()" class = "dropbtn dropbtnGame">Game Dev<i class="fa fa-caret-down"></i></button>
				<div id = "myDropdownGame" class = "dropdown-content">
					<a href="gameDevGames.html">Game Projects</a>
					<a href="gameDevModels.html">3D Models</a>
					<a href="gameDevTools.html">My Tools</a>
				</div>
			</div>
			<div class = "dropdown">
				<button onclick = "openPhoto()" class = "dropbtn dropbtnPhoto active">Photography<i class="fa fa-caret-down"></i></button>
				<div id = "myDropdownPhoto" class = "dropdown-content">
					<a href="photo.html">Gallery</a>
					<a class = "active" href="photoTools.html">My Tools</a>
				</div>
			</div>
		</div>
	`;
} else if ((currentFile == "gameDevGames.html")){
	template.innerHTML = `
		<div class = "topnav">
			<a href="../index.html">Home</a>
			<a href="about.html">About</a>
			<div class = "dropdown">
				<button onclick = "openGame()" class = "dropbtn dropbtnGame active">Game Dev<i class="fa fa-caret-down"></i></button>
				<div id = "myDropdownGame" class = "dropdown-content">
					<a class = "active" href="gameDevGames.html">Game Projects</a>
					<a href="gameDevModels.html">3D Models</a>
					<a href="gameDevTools.html">My Tools</a>
				</div>
			</div>
			<div class = "dropdown">
				<button onclick = "openPhoto()" class = "dropbtn dropbtnPhoto">Photography<i class="fa fa-caret-down"></i></button>
				<div id = "myDropdownPhoto" class = "dropdown-content">
					<a href="photo.html">Gallery</a>
					<a href="photoTools.html">My Tools</a>
				</div>
			</div>
		</div>
	`;
} else if ((currentFile == "gameDevModels.html")){
	template.innerHTML = `
		<div class = "topnav">
			<a href="../index.html">Home</a>
			<a href="about.html">About</a>
			<div class = "dropdown">
				<button onclick = "openGame()" class = "dropbtn dropbtnGame active">Game Dev<i class="fa fa-caret-down"></i></button>
				<div id = "myDropdownGame" class = "dropdown-content">
					<a href="gameDevGames.html">Game Projects</a>
					<a class = "active" href="gameDevModels.html">3D Models</a>
					<a href="gameDevTools.html">My Tools</a>
				</div>
			</div>
			<div class = "dropdown">
				<button onclick = "openPhoto()" class = "dropbtn dropbtnPhoto">Photography<i class="fa fa-caret-down"></i></button>
				<div id = "myDropdownPhoto" class = "dropdown-content">
					<a href="photo.html">Gallery</a>
					<a href="photoTools.html">My Tools</a>
				</div>
			</div>
		</div>
	`;
} else if ((currentFile == "gameDevTools.html")){
	template.innerHTML = `
		<div class = "topnav">
			<a href="../index.html">Home</a>
			<a href="about.html">About</a>
			<div class = "dropdown">
				<button onclick = "openGame()" class = "dropbtn dropbtnGame active">Game Dev<i class="fa fa-caret-down"></i></button>
				<div id = "myDropdownGame" class = "dropdown-content">
					<a href="gameDevGames.html">Game Projects</a>
					<a href="gameDevModels.html">3D Models</a>
					<a class = "active" href="gameDevTools.html">My Tools</a>
				</div>
			</div>
			<div class = "dropdown">
				<button onclick = "openPhoto()" class = "dropbtn dropbtnPhoto">Photography<i class="fa fa-caret-down"></i></button>
				<div id = "myDropdownPhoto" class = "dropdown-content">
					<a href="photo.html">Gallery</a>
					<a href="photoTools.html">My Tools</a>
				</div>
			</div>
		</div>
	`;
} else {
	template.innerHTML = `
		<div class = "topnav">
			<a class = "active" href="index.html">Home</a>
			<a href="Pages/about.html">About</a>
			<div class = "dropdown">
				<button onclick = "openGame()" class = "dropbtn dropbtnGame">Game Dev<i class="fa fa-caret-down"></i></button>
				<div id = "myDropdownGame" class = "dropdown-content">
					<a href="Pages/gameDevGames.html">Game Projects</a>
					<a href="Pages/gameDevModels.html">3D Models</a>
					<a href="Pages/gameDevTools.html">My Tools</a>
				</div>
			</div>
			<div class = "dropdown">
				<button onclick = "openPhoto()" class = " dropbtn dropbtnPhoto">Photography<i class="fa fa-caret-down"></i></button>
				<div id = "myDropdownPhoto" class = "dropdown-content">
					<a href="Pages/photo.html">Gallery</a>
					<a href="Pages/photoTools.html">My Tools</a>
				</div>
			</div>
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

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function openGame() {
  document.getElementById("myDropdownGame").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtnGame')) {
  var myDropdownGame = document.getElementById("myDropdownGame");
    if (myDropdownGame.classList.contains('show')) {
      myDropdownGame.classList.remove('show');
    }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function openPhoto() {
  document.getElementById("myDropdownPhoto").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtnPhoto')) {
  var myDropdownPhoto = document.getElementById("myDropdownPhoto");
    if (myDropdownPhoto.classList.contains('show')) {
      myDropdownPhoto.classList.remove('show');
    }
  }
}

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