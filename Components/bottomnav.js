const template = document.createElement('template');

template.innerHTML = `
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