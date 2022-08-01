
// 01-base/03-prompt-if/script.js - 1.3: promp & if

(() => {
  // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
  console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
  console.log('Hello Keller programmer');

  // YOUR CODE HERE
  let mess_cake = prompt("cake?", "Do you want some cake?");
  if(mess_cake == "yes" || mess_cake == "Yes" || mess_cake == "Y" || mess_cake == "oui" || mess_cake == "Oui") {
    alert("Yeah, congratulation!"); 
  } else {
    alert("Make more cake!");
  }
})();

