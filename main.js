// It is always helpful to use comments in your code!
var myMainNavLinks = document.getElementsByClassName('main-menu-labels1');

function toggleSubMenu()  {
  console.log(this.nextElementSibling);
  this.nextElementSibling.classList.toggle('hide');
}

for (i = 0; i <myMainNavLinks.length; i++)  {
  myMainNavLinks[i].addEventListener('click', toggleSubMenu);
}


/* My attempt at transition...

var transition = document.getElementById('transition');

function toggleTransition() {
  this.nextElementSibling.classList.toggle('hide');
}

for (i = 0; i <transition.length; i++)  {
  transition[i].addEventListener('mouseover', toggleTransition);
}

*/


var myMainNavLinks = document.getElementsByClassName('main-menu-labels2');

function toggleSubMenu()  {
  console.log(this.nextElementSibling);
  this.nextElementSibling.classList.toggle('hide');
}

for (i = 0; i <myMainNavLinks.length; i++)  {
  myMainNavLinks[i].addEventListener('click', toggleSubMenu);
}


var myMainNavLinks = document.getElementsByClassName('main-menu-labels3');

function toggleSubMenu()  {
  console.log(this.nextElementSibling);
  this.nextElementSibling.classList.toggle('hide');
}

for (i = 0; i <myMainNavLinks.length; i++)  {
  myMainNavLinks[i].addEventListener('click', toggleSubMenu);
}
