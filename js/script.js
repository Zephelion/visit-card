var sentence = "Russell Numo"

async function typeSentence(element){
    const letters = sentence.split("");

    console.log(letters);

    for(i = 0; i < letters.length; i++){
        document.querySelector(element).innerHTML += letters[i] + "";
        await new Promise(r => setTimeout(r, 100));
    }

    if(i = 11){
       await new Promise(r => setTimeout(r, 4000));
        removeSentence(".sentence");

        sentence = "Nu moet er iets anders komen te staan";
        await typeSentence(".sentence");
    }
}

async function removeSentence(element){
    const letters = sentence.split("");

    
    for(i = 0; i < sentence.length; i++){
        await new Promise(r => setTimeout(r, 100));
        letters.pop();
        document.querySelector(element).innerHTML = letters.join("");

        console.log(letters);
    }
}

typeSentence(".sentence");
// removeSentence(".sentence");