// function play(){
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')

//     const playGroundSection = document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden')
//     // console.log('game start now')

// }
// function ground(){

// }


// ______________--------------__________________
function handelKeybordPress(event) {
    const PlayerPressed = event.key;
    // console.log(PlayerPressed)

    // stop the game 
    if(PlayerPressed === 'Escape'){
        gameOver()

    }

    const currentAlfabateElement = document.getElementById('current-alfabate')
    const currentAlfabate = currentAlfabateElement.innerText;
    const expecttedAlpha = currentAlfabate.toLowerCase();
    // console.log(PlayerPressed, expecttedAlpha)

    //    chack match or not
    if (PlayerPressed === expecttedAlpha) {
        console.log('you got a point')
        removeBgColorByID(expecttedAlpha)

        // use function follow this way
        const currentScore = getTextElementvalueById('current-score')
        const updateScore = currentScore + 1;
        setTextElementValuById('current-score', updateScore)


        // ___________________________________________________
        // way no -2n

        //  get the currect score 

        // const currectScoreElement = document.getElementById('current-score')
        // const currentText = currectScoreElement.innerText
        // const currentScore = parseInt(currentText)
        // // added the score number by 1
        // const newScore =  currentScore + 1

        // currectScoreElement.innerText = newScore
        continueGame()


    }
    else {
        console.log('you loss a life ')
        // another way 
        const currentLife = getTextElementvalueById('current-life')
        const updatedlife = currentLife - 1
        setTextElementValuById ('current-life',updatedlife)

        if( updatedlife === 0 ){
            gameOver()
        }

        // __________________________________________________
        // easy way


        // //step:1 get the current life number
        // const currentLifeElement = document.getElementById('current-life')
        // const currenLifetText = currentLifeElement.innerText;
        // const currentLife = parseInt(currenLifetText)

        // // step:2 reduse the life count
        // const newLife = currentLife - 1;


        // // step:3 display the update life 
        // curentLifeElement.innerText = newLife
    }

}
// /cupture key up function\
document.addEventListener('keyup', handelKeybordPress)
// ______________---------------________________











function continueGame() {
    const alfabate = gatARandomAlfabate()
    console.log('youre alfabate ', alfabate)
    const currentAlfabateElement = document.getElementById('current-alfabate')
    currentAlfabateElement.innerText = alfabate;
    setBgColorByID(alfabate);
}


function play() {

    // height Every thing show only play ground
    hiddenElementById('home-screen')
    hiddenElementById('score')
    showElementById('play-ground')
    continueGame()
    // reset score 
    setTextElementValuById('current-life',5)
    setTextElementValuById('current-score',0)
    

}
function gameOver(){
    hiddenElementById('play-ground')
    showElementById('score')
    const lastScore = getTextElementvalueById('current-score')
    setTextElementValuById('last-score',lastScore)

    const currentAlfabate = getElementTextById('current-alfabate');
    removeBgColorByID(currentAlfabate);
}