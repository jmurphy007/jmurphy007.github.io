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
document.body.appendChild(template.content);