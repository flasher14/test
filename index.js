let noBtn = document.getElementById('no-btn')
let yesBtn = document.getElementById('yes-btn')

function increaseSize(){
    let currSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    let newSize = currSize + 10;

    if(currSize > 65)
    {
        newSize = currSize + 5;
    }
    
    yesBtn.style.fontSize = newSize + "px";
}


noBtn.addEventListener('click',increaseSize);

yesBtn.addEventListener('click',changeImage)


function changeImage(){
    let image = document.getElementById('my-image')

    if (image.src.includes("images/white cat.gif")) {
        image.src = "images/giving heart.gif.jpg";
      } else {
        image.src = "images/white cat.gif";
      }

    let qsn = document.getElementById('question').innerHTML = "Love You Too! :)"

    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
}






