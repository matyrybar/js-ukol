function getInnerText() {
    let element = document.getElementById("testElement")
    let result = document.getElementById("result")
    return  "result:" + element.innerText;
}

function getTextContent() {
    let element = document.getElementById("testElement")
    let result = document.getElementById("result")
    return "result:" + element.textContent;
}



function createElements(){
    const newDiv = document.createElement("div");

    newDiv.textContent = getTextContent();

    const newDiv2 = document.createElement("div");

    newDiv.innerText = getInnerText();

    const container = document.getElementById("container");

    newDiv.className = "newButton";

    container.appendChild(newDiv);
    container.appendChild(newDiv2)

}

let btn = document.querySelector("#elementButton")

btn.addEventListener("click", createElements)

