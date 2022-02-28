let screen = document.getElementById("screen");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        screen.innerText = "";
        break;
      case "←":
        if (screen.innerText) {
          screen.innerText = screen.innerText.slice(0, -1);
        }
        break;
      case "=":
          try {
              screen.innerText = eval(screen.innerText);
              
          } catch (error) {
              screen.innerText = 'Error!'; 
              setTimeout(() => error.remove(), 3000);   
          }     
        break;

      default:
        screen.innerText += e.target.innerText;
    }
  });
});

/*
 console.log('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);

*/
