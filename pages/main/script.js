

const menuQwert = document.querySelector('.menu-qwert')
const nav = document.querySelector('.nav')
const body = document.querySelector('body')
const bibi = document.querySelector('.bibi')
const navList = document.querySelector('.navl')
bibi.addEventListener('click', function () {
    bibi.classList.toggle("is-active")
  navList.classList.toggle("open")
  menuQwert.classList.toggle("menu-qwert-viz")
  body.classList.toggle("stop-scroll")
}
)
nav.addEventListener('click', closeMenu);
bibi.addEventListener('click', closeMenu);
menuQwert.addEventListener('click', ()=>{
    bibi.classList.remove("is-active");
    navList.classList.remove("open");
    menuQwert.classList.remove("menu-qwert-viz")
    body.classList.remove("stop-scroll")
});
function closeMenu(event) {

  if (event.target.classList.contains('navi-l')) {
    bibi.classList.remove("is-active");
    navList.classList.remove("open");
    menuQwert.classList.remove("menu-qwert-viz")
    body.classList.remove("stop-scroll")
  }

}
const pets = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];
let sliderWrap = document.querySelector('.pets-izvne');
let sliderLeftBtn = document.querySelector('.a-left');
let sliderRightBtn = document.querySelector('.a-right');
let x = sliderWrap.style.left;
let width = window.innerWidth;

let modal = document.querySelector('.modal');
let modalWindows = document.querySelectorAll('.modal-window');
let cancelBtn = document.querySelectorAll('.cancel');
let abtBtns = document.querySelectorAll('.pets-btn');

function getRandomNumber(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
let petStack = [];
function slideLoad(){
    let k = getRandomNumber(0,7);

    while(petStack.includes(k)){
        k = getRandomNumber(0,7);
    }

    if(petStack.length == 0){
        k = 4;
    } else if (petStack.length == 1){
        k = 0;
    } else if (petStack.length == 2){
        k = 2;
    }

    petStack.push(k);

    let petWrap = `<div class="pets-card">
        <div class="pets-card" onclick="openModal(${k})">
            
                <img class="pets-img" src="${pets[k].img}" alt="${pets[k].type} ${pets[k].name}">
            
            <h3 class="pets-name">${pets[k].name}</h3>
            <button class="pets-btn" data-modal="${k}">Learn more</button>
        </div>
    </div>`;

    sliderWrap.innerHTML += petWrap;  
}

document.addEventListener("DOMContentLoaded", () => {
    for(let i=0; i<6; i++){
        slideLoad();
    }
})
function slideAppend(petsWidth){
  sliderWrap.style.width = `${petsWidth}px`;
  
  if(width>=1280){
      petStack.shift();
      petStack.shift();
      petStack.shift();
      for(let i=0;i<3;i++){
          slideLoad();
      }
  }
  else if(width < 1280 && width >= 768){
      petStack.shift();
      petStack.shift();
      for(let i=0;i<2;i++){
          slideLoad();
      }
  }
  else if(width < 767){
      petStack.shift();
      slideLoad();
  }
}
function openModal(k){

  modal.classList.add('display-flex');

  let modalfront = `<div class="modal-window">
                          <div class="cancel" onclick="closeModal()">
                              <span class="first-x"></span>
                              <span class="second-x"></span>
                          </div>
                          <div class="modal-window__image">
                              <img src="${pets[k].img}" alt="${pets[k].name}" class="modal-window__image-img">
                          </div>
                          <div class="modal-window__content">
                              <div class="modal-window__content-title">
                                  <h2 class="modal-window__content-title-name">${pets[k].name}</h2>
                                  <p class="modal-window__content-title-breed">${pets[k].type} - ${pets[k].breed}</p>
                              </div>
                              <p class="modal-window__content-description">${pets[k].description}</p>
                              <ul class="modal-window__content-specifications">
                                  <li class="modal-window__content-specifications-item"><span>Age:</span> ${pets[k].age}</li>
                                  <li class="modal-window__content-specifications-item"><span>Inoculations:</span> ${pets[k].inoculations.join()}</li>
                                  <li class="modal-window__content-specifications-item"><span>Diseases:</span> ${pets[k].diseases.join()}</li>
                                  <li class="modal-window__content-specifications-item"><span>Parasites:</span> ${pets[k].parasites.join()}</li>
                              </ul>
                          </div>
                      </div>`;

  modal.innerHTML = modalfront 

  document.body.style.overflow = 'hidden';

  modal.addEventListener('click', (e) => {
      if(e.target.classList.contains('modal')){
          closeModal()
      }
      
  })
}

function closeModal(){
  modal.innerHTML = '';
  modal.classList.remove('display-flex');
  document.body.style.overflow = 'visible';
}


let petsWidth = sliderWrap.offsetWidth;

window.onresize = function(){
    width = window.innerWidth;
    if(width<768){
        sliderWrap.style.width = `${(sliderWrap.childNodes.length - 3) * 270}px`;
        petsWidth = (sliderWrap.childNodes.length - 3) * 270;
        x = 0 - (petsWidth - 1620);
        if(x>=0){
            x=0;
        }
        sliderWrap.style.left = `${x}px`;
    }
    else if (width < 1280 && width >=768){
        sliderWrap.style.width = `${(sliderWrap.childNodes.length - 3) * 310 - 40}px`;
        petsWidth = (sliderWrap.childNodes.length - 3) * 310 - 40;
        x = 0 - (petsWidth - 1820);
        if(x>=0){
            x=0;
        }
        sliderWrap.style.left = `${x}px`;
    }
    else if (width >=1280){
        sliderWrap.style.width = `${(sliderWrap.childNodes.length - 3) * 360 - 90}px`;
        petsWidth = (sliderWrap.childNodes.length - 3) * 360 - 90;
        x = 0 - (petsWidth - 2070);
        if(x>=0){
            x=0;
        }
        sliderWrap.style.left = `${x}px`;
    }
}

// slide to right

sliderRightBtn.addEventListener('click', () => {
    if(width<768){
        x = x - 270;
        petsWidth = sliderWrap.offsetWidth + 270;
        slideAppend(petsWidth);
    }
    else if(768<=width && width<1279){
        x = x - 310 * 2;
        petsWidth = sliderWrap.offsetWidth + 620;
        slideAppend(petsWidth);
    }
    else{
        x = x - 360*3;
        petsWidth = sliderWrap.offsetWidth + 1080;
        slideAppend(petsWidth)
    }
    sliderWrap.style.left = `${x}px`;
});

// slide to left

sliderLeftBtn.addEventListener('click', () => {
    if(width<768){
        x = x + 270;
    }
    else if(768<=width && width<1279){
        x = x + 310 * 2;
    }
    else{
        x = x + 360 * 3;
    }
    if(x > 0){
        x = 0;
    }
    sliderWrap.style.left = `${x}px`;
});
