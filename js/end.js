alert(`WOW YOU DID IT YOU CAUGHT THE JOKER AND ESCAPED`)

{let btn = document.createElement("button")
btn.setAttribute('class', 'button1')
btn.innerHTML = "Back to the beginning";

btn.onclick = function () {

    const result = confirm('Back to start?');
    if (result) { location.replace(`start.html`)
}
}

document.body.appendChild(btn);
}

