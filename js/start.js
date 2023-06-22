let btn = document.createElement("button")

btn.innerHTML = "Start";

btn.onclick = function () {

    const result = confirm('Do u want to start?');
    if (result) { location.replace(`./room1.html`)
}
    

};

document.body.appendChild(btn);

{let btn = document.createElement("button")
btn.setAttribute('class', 'button1')
btn.innerHTML = "story";

btn.onclick = function () {
alert(`You are batman and you have received a message from robin to meet him outside when u get to the place you hear a sinister laugh as you turn around you suddenly see the joker before you can do anything he knocks you out… `)
}


document.body.appendChild(btn);
}
