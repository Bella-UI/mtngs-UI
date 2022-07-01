//bottom bar on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("mobile-float").style.bottom = "32px";
  } else {
    document.getElementById("mobile-float").style.bottom = "-5em";
  }
}

function handleOpenMenu(ev: any){
    
}