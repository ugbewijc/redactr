/**
 * 
 */

const scrambleForm = document.getElementById('scramble_form');
scrambleForm.addEventListener("submit",(e)=>{
    const startTime = performance.now();
    e.preventDefault();
    // console.log("Form Submitted");
    let newContent;
    const content = document.getElementById("content").value;
    const scrambleWord = document.getElementById('scramble_words').value;
    const replacementWord = document.getElementById('replacement_word').value || "****";
    const scrambleWordsList = scrambleWord.replaceAll(" ","|");
    const scrambledWordsRegex = new RegExp(scrambleWordsList,"gi");
    const resultTag = document.getElementById('result');

    // how many words were scaned
    const totalWords = content.match(/\S+/g).length;
    // console.log(`Total words: ${totalWords}`);
    // console.log(content.match(scrambledWordsRegex));
    // how many matched the words to be scrambled
    const totalScrambledWords = content.match(scrambledWordsRegex);
    // console.log(`Total Scrambled Words ${totalScrambledWords.length}`);
    // console.log(`Total characters Scrambled ${totalScrambledWords.join('').length} `);   
    newContent = content.replace(scrambledWordsRegex, replacementWord);
    const endTime = performance.now();
    resultTag.innerHTML = `
    <p>Scrambled Content<p>
    <div class="new-content">
        <p> ${newContent}</p>
    </div>
    <p>Stats:</p>
    <div class="stats">
        <p>Total words Scanned: ${totalWords}</p>
        <p>Total matched the words scrambled: ${totalScrambledWords?.length || 0}</p>
        <p>Total characters scrambled: ${totalScrambledWords?.join('').length || 0}</p>
        <p>Total time scrambling: ${((endTime - startTime)/1000).toFixed(5)}sec</p>
    </div>
    `;
});