function closenav() {
  header.classList.remove("nav-open");
  body.classList.remove('scroll-hidden');
}

function togglenav() {
  header.classList.toggle("nav-open");
  if (header.classList.contains("nav-open")) {
    body.classList.add('scroll-hidden');
  } else {
    body.classList.remove('scroll-hidden');
  }
}
navBtn.addEventListener("click", togglenav);
const links = header.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', closenav);
});

document.addEventListener( 'click', (e) => {
  const withinBoundaries = e.composedPath().includes(header);
  if ( ! withinBoundaries ) {
    closenav();
  }
});
document.addEventListener('keydown', function(e) {
  if( e.keyCode == 27 ){
    closenav();
  }
});