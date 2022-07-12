const root = document.getElementById('root');
const buttonEnter = document.createElement('button');
const buttonChange = document.createElement('button');
const div = document.createElement("div");

const handleChange = () => {
  document.getElementById('slava').innerText = "Slava Kozlov";
  document.getElementById('anna').innerText = "Anna H.";
}

const handleChangeColor = () => {
  const one = document.getElementById('slava');
  const two = document.getElementById('anna');
  if (one.hasAttribute("style") && two.hasAttribute("style")) {
    one.removeAttribute("style");
    two.removeAttribute("style");
  } else {
    one.style.color = "#f00";
    two.style.color = "#f00";
  }
}

div.innerHTML = "<h1 id='slava'>Slava</h1><h1 id='anna'>Anna</h1>";
buttonEnter.innerText = "Enter";
buttonChange.innerText = "Change color"
buttonEnter.onclick = handleChange;
buttonChange.onclick = handleChangeColor;
root.append(div, buttonEnter, buttonChange);