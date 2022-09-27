let allQuotes = ["People are like plants; we all lean toward the light.", "You gotta water your plants. Nobody can water them for you.", "Plant and your spouse plants with you; weed and you weed alone.", "Plants are not like us.", "Plants and organisms that make shells, coral, think of CO2 as a building block.", "I can take care of these plants really easily because they are all fake."];

i = 0;
setInterval(nextQuote, 5000);
headerQuotes.innerHTML = `"${allQuotes[0]}" - `
// Funksjonen for quotes
function nextQuote(){
  headerQuotes.innerHTML = `"${allQuotes[i]}" - `;
  i += 1;
  if(i == allQuotes.length){i = 0;};
}
