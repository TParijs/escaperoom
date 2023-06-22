alert("So you have finally arrived at the last room very well done. Now for your last challenge try to capture me. The stage has been set, now let us begin!!!!!")
{let btn = document.createElement("button")

btn.innerHTML = "back";

btn.onclick = function () {

    const result = confirm('Do u want to go back?');
    if (result) { location.replace(`.room2.html`)
}
}

document.body.appendChild(btn);
}
{let btn = document.createElement("button")
btn.setAttribute('class', 'button1')
btn.innerHTML = "Rules";

btn.onclick = function () {
alert("So you have finally arrived at the last room very well done. Now for your last challenge try to capture me. The stage has been set, now let us begin!!!!!")
}


document.body.appendChild(btn);
}

