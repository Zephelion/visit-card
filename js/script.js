var sentence = "Russell Numo"
const codeblock = document.querySelector(".sentence");
const sentenceCurrent = document.querySelector(".sentence");

console.log("welcome back to my website");

const fetchStudent = async () => {
    const url = "https://wd-tribe-api.netlify.app/.netlify/functions/member?id=cldex18yd47ta0bw5jbmhatd6";

    await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

async function typeSentence(element){
    const letters = sentence.split("");

    console.log(letters);

    for(i = 0; i < letters.length; i++){
        document.querySelector(element).innerHTML += letters[i] + "";
        await new Promise(r => setTimeout(r, 100));
    }

    if(i = 11){
       await new Promise(r => setTimeout(r, 4000));
        await removeSentence(".sentence");

        sentence = "const student = {firstname: Russell, lastname: Numo, Discipline: CMD, role: Student,}";

        await new Promise(r => setTimeout(r, 3000));
        codeblock.classList.add("codeblock");
        typeSentence(".sentence");

    }
}

async function removeSentence(element){
    const letters = sentence.split("");

    
    for(i = 0; i < sentence.length; i++){
        await new Promise(r => setTimeout(r, 100));
        letters.pop();
        document.querySelector(element).innerHTML = letters.join("");

    }
}

window.addEventListener("domcontentloaded", fetchStudent());

typeSentence(".sentence");