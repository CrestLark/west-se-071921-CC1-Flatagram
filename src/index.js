const fgComments = document.getElementById('fg-comments');
const fgTitle = document.getElementById('fg-title');
const fgImage = document.getElementById('fg-image');

fetch('http://localhost:3000/images/1')
// I fetched the data from the above instead of just http://localhost:3000
//because when I tried to console.log the latter, it threw an error
    .then (res => res.json())
// I understand the above, but I don't understand the line below. How do I determine
// which function is going to take the place of the console.log? 
    .then (data => showFgInfo(data));
// This is more a point of confusion than anything, but in a challenge like this
// since the picture and the title are not going to be changing, why are we not 
// just hardcoding the title and img source? Or are we simply doing that in the 
// spirit that this is just a piece of a larger database of images, and we're just
// working on this given page.
function showFgInfo(data) {
    fgTitle.innerHTML = `
    <h2> ${data.title}</h2>`;
//so the section of code above worked, but the section of code below didn't. I don't
//really understand why. I was having trouble trying to figure out how to pull the title
//and images from a set of data that doesn't have a mother element, if that makes sense. 
//I couldn't figure out how to do this without dot notation, unless I don't need dot notation
//in which case I have no idea what's going on. 
    fgImage.innerHTML = `
    <img src = ${data.image}`;
//Okay, the entire comments section is a mystery to me. Because I know that ordered lists are
//numbered, and unordered lists are bulleted, so how can I take a bunch of comments and organize
//them without bullets or numbers? Unless I'm not supposed to compile them into one element...
//but either way, I'm completely lost in this section.     
    fgComments.innerHTML = `
    <li> ${comments.content} </li>`;

}
//as far as the rest of the challenge goes, I know the basic mechanics that are required, I just 
//don't know the proper syntax. I know that I need an eventListener that listens for the click on
//the heart button in the 'likes-section' that triggers a counter each time the button is clicked, 
//and the counter's value rewrites the current like value in increments of +1 per click. But again, 
//I may understand that, but I have no idea how to go about making it happen.

