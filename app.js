//variables confettis :

const containerConfettis = document.querySelector('.containerConfettis');
const btnConfettis = document.querySelector('.btnConfettis');
const emojisConfettis =['🟥','🟧','🟨','🟩','🟦','🟪'];
btnConfettis.addEventListener('click', confettisParty)

// -------------------------------------------------------------------------------------

//functions confettis :

function confettisParty(){

    if(isTweeningConfettis()) return;

    for (let i = 0; i < 150; i++){
        const addConfettis = document.createElement('div');
        addConfettis.innerText = emojisConfettis[Math.floor(Math.random()*emojisConfettis.length)];
        containerConfettis.appendChild(addConfettis);
    }
    animateConfettis();
}

function animateConfettis() {
  
    const TLCONF = gsap.timeline();
  
    TLCONF.to(".containerConfettis div", {
      y: "random(-100,100)",
      x: "random(-100,100)",
      z: "random(0,1000)",
      rotation: "random(-90,90)",
      duration: 1,
    })
      .to(".containerConfettis div", { autoAlpha: 0, duration: 0.3 }, "-=0.2")
      .add(() => {
        containerConfettis.innerHTML = "";
      });
  }
  
  function isTweeningConfettis(){
    return gsap.isTweening('.containerConfettis div');
}

// -------------------------------------------------------------------------------------

//variables confettis animals :

const containerConfettisAnimals = document.querySelector('.containerConfettisAnimals');
const btnConfettisAnimals = document.querySelector('.btnConfettisAnimals');
const emojisConfettisAnimals = ['🦊','🐹','🐳','🐙','🐻','🐼','🦖 ','🦁','🐷'];
btnConfettisAnimals.addEventListener('click', confettisAnimalsParty)

// -------------------------------------------------------------------------------------

//fonctions confettis animals :

function confettisAnimalsParty(){

    if(isTweeningConfettisAnimals()) return;

    for (let i = 0; i < 150; i++){
        const addConfettisAnimals = document.createElement('div');
        addConfettisAnimals.innerText = emojisConfettisAnimals[Math.floor(Math.random()*emojisConfettisAnimals.length)];
        containerConfettisAnimals.appendChild(addConfettisAnimals);
    }
    animateConfettisAnimals();
}

function animateConfettisAnimals() {
  
    const TLCONFANIMALS = gsap.timeline();
  
    TLCONFANIMALS.to(".containerConfettisAnimals div", {
      y: "random(-100,100)",
      x: "random(-100,100)",
      z: "random(0,1000)",
      rotation: "random(-90,90)",
      duration: 1,
    })
      .to(".containerConfettisAnimals div", { autoAlpha: 0, duration: 0.3 }, "-=0.2")
      .add(() => {
        containerConfettisAnimals.innerHTML = "";
      });
  }
  
  function isTweeningConfettisAnimals(){
    return gsap.isTweening('.containerConfettisAnimals div');
}

// -------------------------------------------------------------------------------------

//variables confettis food

const containerConfettisFood = document.querySelector('.containerConfettisFood');
const btnConfettisFood = document.querySelector('.btnConfettisFood');
const emojisConfettisFood = ['🥐','🥞','🌭','🍔','🍟','🍕','🥪','🌯','🍣'];
btnConfettisFood.addEventListener('click', confettisFoodParty)

// -------------------------------------------------------------------------------------

//fonctions confettis food

function confettisFoodParty(){

    if(isTweeningConfettisFood()) return;

    for (let i = 0; i < 150; i++){
        const addConfettisFood = document.createElement('div');
        addConfettisFood.innerText = emojisConfettisFood[Math.floor(Math.random()*emojisConfettisFood.length)];
        containerConfettisFood.appendChild(addConfettisFood);
    }
    animateConfettisFood();
}

function animateConfettisFood() {
  
    const TLCONFFOOD = gsap.timeline();
  
    TLCONFFOOD.to(".containerConfettisFood div", {
      y: "random(-100,100)",
      x: "random(-100,100)",
      z: "random(0,1000)",
      rotation: "random(-90,90)",
      duration: 1,
    })
      .to(".containerConfettisFood div", { autoAlpha: 0, duration: 0.3 }, "-=0.2")
      .add(() => {
        containerConfettisFood.innerHTML = "";
      });
  }
  
  function isTweeningConfettisFood(){
    return gsap.isTweening('.containerConfettisFood div');
}