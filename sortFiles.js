// The File Type Sorter(Array Filtering & Pushing)
// You are building a file uploader.Write a function named sortFiles that takes an array of filenames(strings).It should return an object with two keys:
// images(an array of files ending in .png or.jpg) and docs(an array of files ending in .pdf).Ignore any other file types.
// (Hint: Create the return object first: let result = { images: [], docs: [] }.Then use .endsWith(".png") to check the strings before pushing them into 
// result.images or result.docs

function sortFiles(files) {
    let results ={images:[], docs:[]};
    for (let i=0;i<files.length;i++){
        if(files[i].endsWith(".jpg")||files[i].endsWith(".png")){
            results.images.push(files[i]);
        }else if(files[i].endsWith(".pdf")){
            results.docs.push(files[i]);
        }
    }
    return results;
}

// --- Test Cases ---
console.log(sortFiles(["cat.png", "report.pdf", "dog.jpg", "music.mp3", "tax.pdf"]));
// Should print: { images: ["cat.png", "dog.jpg"], docs: ["report.pdf", "tax.pdf"] }