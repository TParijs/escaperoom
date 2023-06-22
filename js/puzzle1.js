{let btn = document.createElement("button")
btn.innerHTML = "Back";

btn.onclick = function () {

    const result = confirm('Back to start?');
    if (result) { location.replace(`./room1.html`)
}
}

document.body.appendChild(btn);
}