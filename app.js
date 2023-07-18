const inputBox = document.getElementById('input-box');
const resultBox = document.querySelector('.result-box');

let keywords = [
    'HTML',
    'CSS',
    'Web design',
    'javascript',
    'Where to learn coding',
    'Where to learn web Design',
    'how to create a website',
    'how to make mney',
]

// Function Input Box
inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    
    if(input.length) {
        result = keywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        })
    }

    
    display(result);

    if(!result.length) {
        resultBox.innerHTML = '';
    }
}

// Function To display result
function display(result) {
    const content = result.map((list) => {
        return `<li onclick=selectInput(this)>${list}</li>`
    })

    resultBox.innerHTML = `<ul>${content.join('')}</ul>`
}

// Function Select List Item
function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}