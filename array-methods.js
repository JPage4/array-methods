const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetEl = document.getElementById("solarSystem")

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
//  WHATEVER IS THE FUNCTION ARGUMENT
planets.forEach(function(whatever) {
    planetEl.innerHTML += `
    <section id="planets">${whatever}</section>
    `
});

/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const capPlanets = planets.map(function(blah) {
    console.log(blah.charAt(0).toUpperCase()+blah.slice(1))
    
});
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const EPlanets = planets.filter(function(tacoCat){
    hasDatE = (tacoCat.includes('e'));
    return hasDatE;
})
console.log(EPlanets)

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]
const sentence = words.reduce(function(sum, next){
    return sum + " " + next 
})
console.log(sentence)
