function callButton () {

    const inputUm = document.querySelector(".input-1").value
    const inputDois = document.querySelector(".input-2").value
    const result = document.querySelector(".result")

    const random = (inputUm) => Math.floor(Math.random() * inputUm);

    result.innerHTML = (random(inputDois));

    
}












