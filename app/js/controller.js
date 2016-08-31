triggers = document.getElementsByClassName('trigger');
triggers[0].addEventListener('click', function(){
    triggers[0].classList.toggle('clicked');

  })
var body = document.getElementsByTagName('body');
body[0].addEventListener('click', function(){
  var div = document.createElement('div');
  div.classList.add('box');
  body[0].appendChild(div);
})
var myName = "Tee";
var menuTexts = ['Music', 'Tech', 'Books', 'Games'];
