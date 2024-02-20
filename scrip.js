

const button = document.getElementById("button-submit")


const inputName = document.getElementById("titulek")

const inputVaha = document.getElementById("value")

const inputDatum = document.getElementById("datum")


button.addEventListener("click", (event) => {

function logovani() {
    const inputName = document.getElementById("titulek")

    const inputVaha = document.getElementById("value")

    const inputDatum = document.getElementById("datum")

}
    console.log(inputName.value)
    console.log(inputVaha.value)
    console.log(inputDatum.value)
} )

//vzal jsem někde na internetu//

let submitButton = document.querySelector("#button-submit"),
    showResult = document.getElementById("result").innerHTML,
    weightsForLeftAndRightSides = document.querySelector("#firstinput").value;


function weightBalancer() {
    showResult = weightsForLeftAndRightSides;
    console.log(weightsForLeftAndRightSides);
}


