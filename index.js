const touches =[... document.querySelectorAll('.butt')]
const keyCodeList= touches.map(touche => touche.dataset.key);
const screen = document.querySelector('.screen');

document.addEventListener('keydown',(e) => {
    const valeur = e.keyCode.toString();
    calcul(valeur)
})

document.addEventListener('click',(e) => {
    const valeur = e.target.dataset.key;
    calcul(valeur)
})

const calcul = (valeur)=>{
    if(keyCodeList.includes(valeur)){
        switch(valeur){
            case'8':
                screen.textContent="";
                break;
            case'13':
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;
            default:
                const indexKey = keyCodeList.indexOf(valeur);
                const key= touches[indexKey];
                screen.textContent += key.innerHTML

        }
    }
}

window.addEventListener(error,(e)=>{
    alert("Mauvaise entrée de calcul, merci de saisir un calcul valide")
})