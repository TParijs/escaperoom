alert(`As you go into the next room you see that it is The Riddler’s cell. There are green question marks all over on the walls of the cell. Suddenly you hear a voice again it’s the jokers: "I’ve borrowed this cell from a good ol friend of mine The Riddler. As you can see there’s question marks all over on the walls as buttons find the right button to get into the next room if you fail the cell shall be filled with my lovely gas, bye bye and don’t die or ill get bored” as he ends the voice message with his sinister laugh.`)
{let btn = document.createElement("button")
btn.setAttribute(`class`, `button1`)
btn.innerHTML = "Back";

btn.onclick = function () {

    const result = confirm('Back to room 1?');
    if (result) { location.replace(`.room1.html`)
}
}

document.body.appendChild(btn);
}
{let btn = document.createElement("button")
btn.setAttribute(`class`, `button1`)
btn.innerHTML = "rules";

btn.onclick = function () {
alert("Rules: Find the right question mark button in order to open the door into the next room.")
    
}


document.body.appendChild(btn);
}

{let btn = document.createElement("button")

btn.innerHTML = "?";

btn.onclick = function () {

    const result = confirm('Congrats you haveve found the button');
    if (result) { location.replace(`.room3.html`)
}
}

document.body.appendChild(btn);
}