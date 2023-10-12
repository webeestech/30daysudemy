const container = document.querySelector(".container");
searchInput = container.querySelector("input");
synonyms = container.querySelector(".synonyms .list");
infoText = container.querySelector(".info");
volumeIcon = container.querySelector(".word .voice");
let audio;
removeIcon = container.querySelector(".search .cancel");

function data(result,word){
    if(result.title){
        infoText.innerHTML = `Couldn't find <span>${word}</span>. Please check the word.`
    } else {
        container.classList.add("active");
        console.log(result);
        let definitions = result[0].meanings[0].definitions[0],
        phonetics = `${result[0].meanings[0].partOfSpeech} /${result[0].phonetics[0].text}`

        document.querySelector(".word p").innerText = result[0].word;
        document.querySelector(".word span").innerText = phonetics;
        document.querySelector(".meaning span").innerText = definitions.definition;
        document.querySelector(".example span").innerText = definitions.example;
        audio = new Audio(result[0].phonetics[0].audio);
        if(definitions.synonyms[0] == undefined){
            synonyms.parentElement.style.display = "none";
        } else {
            synonyms.parentElement.style.display = "block";
            synonyms.innerHTML = "";
            for(let i = 0; i<5; i++){
                let tag = `<span onClick=search('${definitions.synonyms[i]}')>${definitions.synonyms[i]}</span>`
                synonyms.insertAdjacentHTML("beforeend",tag);
            }
        }

        
    }
    
}

function search(word){
    searchInput.value = word;
    fetchApi(word)
}

function fetchApi(word){
    infoText.innerHTML = `Searching <span>"${word}"</span>`
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    fetch(url)
    .then(res => res.json())
    .then(result => data(result,word))
}


searchInput.addEventListener("keyup",e => {
    if(e.key === "Enter" && e.target.value){
        fetchApi(e.target.value);
    }
})

volumeIcon.addEventListener("click",() => {
    audio.play();
})

removeIcon.addEventListener("click",() => {
    searchInput.value = "";
    searchInput.focus();
})