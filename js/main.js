function change(str){
  localStorage.setItem("data",str);
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

}

const render = localStorage.getItem("data");
changeI(render);

function expand(src) {
  document.getElementById('expandImg').src = src;
}


function imgchange(source) {

  document.getElementById('prod').src = source;
}
function changeI(any) {
  const change = document.getElementById(any);
  document.getElementById("visible").innerHTML = change.innerHTML;
}
