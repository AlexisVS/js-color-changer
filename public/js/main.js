let input = document.getElementById("input")
let chooseColor = () => {
    let input = document.getElementById("input")
    let inputValue = input.value;

    inputValue.trim();

    if (inputValue[0] == "#") {
        inputValue = inputValue.substring(1,inputValue.length)
    }
    
    let background = document.body;
    background.style.backgroundColor = "#" + inputValue;

    }

    document.addEventListener("click", chooseColor());