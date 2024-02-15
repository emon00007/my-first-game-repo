function hiddenElementById (elementId){
    const element =document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementById (elementId){
    const element =document.getElementById(elementId)
    element.classList.remove('hidden')
}

function setBgColorByID(elementId){
    const element= document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}
function removeBgColorByID(elementId){
    const element= document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}

function getTextElementvalueById(elementId){
    const element = document.getElementById(elementId)
    const elemenetValueText = element.innerText;
    const value = parseInt(elemenetValueText)
    return value
}

function setTextElementValuById(elementId,value){
    const element = document.getElementById(elementId)
    element.innerText = value;

}


function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}


function gatARandomAlfabate(){
    // get or creatae a alfabate array 
    
    // const alfabates ='a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
    const alfabateString='abcdefghijklmnopqrstuvwxyz';
    const alfabates = alfabateString.split ('');
    // console.log(alfabates);

    const roundNumber = Math.random()*25
    const index = Math.round(roundNumber);
    const alfabate = alfabates[index]
    // console.log(index, alfabate)
    return alfabate

}