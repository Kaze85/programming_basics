window.addEventListener('load', init);

function init() {
    console.log('DOM is loaded');
    const button = document.getElementById("submit");
    button.addEventListener("click", testFunction);
}

binaryQuestions = [
    {
        question: '01101000 01100101 01101100 01101100 01101111',   
        answer: 'Hello'
    },
    {
        question: '01010111 01100101 01101100 01101011 01101111 01101101',   
        answer: 'Welkom'
    },
    {
        question: '01010100 01101111 01110100 00100000 01111010 01101001 01100101 01101110 01110011',   
        answer: 'Tot ziens'
    },
    {
        question: '01000111 01110010 01101111 01100101 01110100 01101010 01100101 01110011', 
        answer: 'Groetjes' 
    }
];



function testFunction(e) {
    e.preventDefault();

    const questionText = document.getElementById("questionText");
    const inputAnswer =  document.getElementById("inputAnswer");
    const answerText = document.getElementById("answerText");
    const container = document.getElementById("container");
    let answerWord = document.getElementById("test").innerText;
    let output = document.createElement("SPAN");

    let answers;
    

    inputAnswer.setAttribute("value", "");
    for (let i = 0; i < binaryQuestions.length; i++) {
        let item = binaryQuestions[i];
        console.log(item.question);
        questionText.innerText = item.question;
        answers = item.answer;
    }
    
    if (inputAnswer.value == answers) {
        answerWord = inputAnswer.value;
        output.setAttribute("class", "bg-green");
        output.setAttribute("id", "test");
        output.append(answerWord);
        console.log(output)
        answerText.innerHTML = `Je antwoord `;
        answerText.append(output);
        answerText.append(` is helemaal goed!`);
        container.className = "container bg-green";
        console.log("hello");
    } else {
        console.log(answerWord)
        answerWord = inputAnswer.value;
        output.setAttribute("class", "bg-red");
        output.setAttribute("id", "test");
        output.append(answerWord);
        console.log(output)
        answerText.innerHTML = `Helaas, `;
        answerText.append(output);
        answerText.append(` is niet juist, probeer het nog eens`);
        container.className = "container bg-red";
        console.log(document.getElementById("body"));
    }
}