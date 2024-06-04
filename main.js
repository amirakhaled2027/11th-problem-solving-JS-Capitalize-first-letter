//Capitalize each word in the sentence 

function capitalizeWords(first) {
    let words = first.split(" ").map(word => {
        let firstLetter = word.slice(0,1);
        let restWord = word.slice(1);
           firstLetter = firstLetter.toUpperCase();

        return `${firstLetter}${restWord}`
    })

    return words.join(" ");
}




console.log(capitalizeWords("The rain poured relentlessly all night"));
console.log(capitalizeWords("The wind howled through the barren trees"));