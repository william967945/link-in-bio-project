
window.addEventListener('DOMContentLoaded', () => {
    VANTA.WAVES({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 614.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x5c8ea0,
        shininess: 50.00,
        waveHeight: 10.00,
        zoom: 0.65
    })
    setTimeout(() => {
        const main = document.querySelector('main')
        main.style.opacity = 1;
        main.style.filter = 'blur(0px)';
    }, 500);
});

function myFunction() {
    var copyText = document.getElementById('button-gmail');
    const content = copyText.textContent.trim();
    navigator.clipboard.writeText(content);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.textContent;
    tooltip.className = "tooltiptext tooltiptext2";

    setTimeout(() => {
        const main = document.querySelector('span');
        main.style.opacity = 0;
        main.style.filter = 'blur(0px)';
    }, 1500);

    const main = document.querySelector('span');
    main.style.opacity = 1;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "";
    tooltip.className = "tooltiptext";
}

function hover(id) {
    const element = document.getElementById("img-" + id);
    element.setAttribute('src', `./images/${id}-logo-colored.gif`);

    // check if cursor pointer is true
    // if is true, do note reset gif
}

function unhover(id) {
    const element = document.getElementById("img-" + id);

    const liElement = document.getElementById(id);

    const li = liElement; //index 1s change once
    const liClassName = li.className;
    console.log(liClassName);

    if (liClassName === `${color[index]}`) {
        element.setAttribute('src', `./images/${id}-logo-colored.gif`);
    } else if (liClassName === "color-fffa") {
        element.setAttribute('src', `./images/${id}-logo.gif`);
    }

    let isCalled = true;

}

let index = -1;
let prevIndex = -1;

function incrementLoop() {
    if (index >= 4) {
        index = 0;
    } else {
        index += 1;
    }

    if (index === 0) {
        prevIndex = 4;
    } else {
        prevIndex = index - 1;
    }
}

function changeColor() {
    setInterval(incrementLoop, 4000);
    nIntervId = setInterval(flashButton, 4000);
    colorList();
}

const buttonList = document.querySelectorAll('li');
const color = [];

function colorList() {
    buttonList.forEach(button => {
        color.push(button.className);
    });

    buttonList.forEach(button => {
        button.className = 'color-fffa';
    });
    return color;
}

function flashButton() {
    // 0, 1, 2, 3, 4, 0, 1, 2....

    const currentElement = buttonList[index];
    const prevElement = buttonList[prevIndex];

    currentElement.className = currentElement.className === "color-fffa" ? `${color[index]}` : "color-fffa";
    console.log(currentElement.className);

    const currentA = currentElement.childNodes[1]; // gmail is undefind
    const prevA = prevElement.childNodes[1];

    if (currentA.className !== 'tooltip') {
        currentA.className = currentA.className === "link" ? "link-white" : "link";

        if (currentElement.className === `${color[index]}`) {
            const currentImg = document.getElementById("img-" + buttonList[index].id);
            currentImg.setAttribute('src', `./images/${buttonList[index].id}-logo-colored.gif`);

            // if cursor is on li , do not reset 
            // console.log(buttonList[index].getAttribute('onmouseover'));
            // const onMouseOver = buttonList[index].getAttribute('onmouseover');
        }
    } else {
        const button = document.getElementById('button-gmail');
        button.className = button.className === "button" ? "button-white" : "button";

        if (currentElement.className === `${color[index]}`) {
            const currentImg = document.getElementById("img-" + buttonList[index].id);
            currentImg.setAttribute('src', `./images/${buttonList[index].id}-logo-colored.gif`);
        } else {
            const currentImg = document.getElementById("img-" + buttonList[index].id);
            currentImg.setAttribute('src', `./images/${buttonList[index].id}-logo.gif`);
        }
    }

    // 0, 1, 2, 3, x, 0, 1, 2, 3, x...
    if (currentElement.className === `${color[index]}`) {
        prevElement.className = "color-fffa";

        const prevImg = document.getElementById("img-" + buttonList[prevIndex].id);
        prevImg.setAttribute('src', `./images/${buttonList[prevIndex].id}-logo.gif`);

        if (prevIndex !== 4) {
            prevA.className = "link";
        } else {
            const button = document.getElementById('button-gmail');
            button.className = "button";
        }
    }

}

function stopTextColor() {
    clearInterval(nIntervId);
}
