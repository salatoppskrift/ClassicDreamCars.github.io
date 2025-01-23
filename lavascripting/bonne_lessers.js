// the various functions pulled in the View functions


// topView functions
function gotoAbt(){ // sends you to the about page!
    document.getElementById("page").innerHTML = "om";
  };
  
function gotoCars(){ //sends you to the cars!
    document.getElementById("page").innerHTML = "biler";
  };

// mainView functions
function mainForLoops()
  {
    for(let i = 0; i < deler.length; i++){
      if (i == 2 || i == 4) continue;
      document.getElementsByClassName("shift")[i].innerHTML = deler[i].sammen();
      if(i == 5){ //YT tips, the special princess section (padding fra sidene er mindre)
        document.getElementsByClassName("pTxt")[3].style.paddingLeft = "30px";
        document.getElementsByClassName("pTxt")[3].style.paddingRight = "30px";
      };
    };
    for(let i = 0; i<3; i++){
      let size = "44rem";
      if (i == 1) size = "48rem";
      if (i == 2) size = "28rem";
      document.getElementsByClassName("bleeeh")[i].style.height = size;
    };
};
  
function carGallery(){
    for(let i = 0; i < vehicleCollection.length; i++){
      /*let equalsOneOverThree = i % 3;
      if(equalsOneOverThree == 1) document.getElementsByClassName("dish")[i].classList.add("dishMid");*/
      document.getElementsByClassName("gridalicious")[0].innerHTML += /*HTML*/ `
        <div class="dish" onclick = "viewCar(vehicleCollection[${i}])">item${i}</div>
      `;
    };
};

function viewCar(car){
  car.dddd();
};