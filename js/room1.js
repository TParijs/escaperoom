alert(`There are 3 rooms total 2 rooms have its own puzzle and the 3rd has a boss battle It is up to you to escape and get out of the rooms If you do not make it out in time the room will be filled up with toxic laughing gas And then you will laugh until your last breath.`);

{let btn = document.createElement("button")
btn.setAttribute('class', 'button1')
btn.innerHTML = "Back";

btn.onclick = function () {

    const result = confirm('Back to start?');
    if (result) { location.replace(`index.html`)
}
}

document.body.appendChild(btn);
}
{let btn = document.createElement("button")
btn.setAttribute('class', 'button1')
btn.innerHTML = "rules";

btn.onclick = function () {
alert(" Use the flashlight and numbers on the wall to figure out the code of the locked box and free yourself using the key that is inside of the box. If you fail to put in a correct code the room will be filled with gas")
    
}


document.body.appendChild(btn);
}


{let btn = document.createElement("button")

btn.innerHTML = "flashlight";

btn.onclick = function () {

    const result = confirm('Do u want to use the flashlight');
    if (result) { location.replace(`puzzle1.html`)
}
};

document.body.appendChild(btn);
}


{let btn = document.createElement("button")
btn.setAttribute('class', 'button2')
btn.innerHTML = "Box";
btn.onclick = function () {
    const promptcode = prompt(`Fill in the code `,`0000`) 
    const code = 4786
    console.log(promptcode)
    if(promptcode == code) {
      alert("Code correct");
      location.replace(`room2.html`)
    } else{
        alert("Code incorrect");
    }
    
    }
document.body.appendChild(btn);
}