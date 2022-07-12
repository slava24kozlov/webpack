const root = document.getElementById('root');
const button = document.createElement('button');
const div = document.createElement("div");

const handleChange = () => {
  document.getElementById('slava').innerText = "Slava Kozlov";
  document.getElementById('anna').innerText = "Anna H.";
}

div.innerHTML = "<h1 id='slava'>Slava</h1><h1 id='anna'>Anna</h1>";
button.innerText = "Enter";
button.onclick = handleChange;
root.append(div, button);