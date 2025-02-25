// the various functions pulled in the View functions

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
    let a = 0; a++;
    document.getElementsByClassName("gridalicious")[0].innerHTML += /*HTML*/ `
        <div class="dish cGal" onclick = "viewCar((vehicleCollection[${i}]), 'cars', vehicleCollection)">
          <div>
            <a>
              ${(vehicleCollection[i]).makeDishImg("cars")}
              <!--<div class="invisi" id="imgtxt${a}">${(vehicleCollection[i]).getFullName()}</div>---->
            </a>
          </div>
        </div>
    `;
  };
    if (vehicleCollection.length % 3 == 1) document.getElementsByClassName("cGal")[vehicleCollection.length - 1].classList.add("dishMid");
    else if (vehicleCollection.length % 3 == 2) {
      document.getElementsByClassName("cGal")[vehicleCollection.length - 1].classList.add("dishTwoMidTwo");
      document.getElementsByClassName("cGal")[vehicleCollection.length - 2].classList.add("dishTwoMidOne");
    };

  for(let i = 0; i < driveoutVideos.length; i++){
    document.getElementsByClassName("gridalicious")[1].innerHTML += /*HTML*/ `
        <div class="dish vGal" onclick = "viewCar((driveoutVideos[${i}]), 'movPreviews', driveoutVideos)">
          <div>
            ${(driveoutVideos[i]).makeDishImg("movPreviews")}
          </div>
        </div>
    `;
  };
    if (driveoutVideos.length % 3 == 1) document.getElementsByClassName("vGal")[driveoutVideos.length - 1].classList.add("dishMid");
    else if (driveoutVideos.length % 3 == 2) {
      document.getElementsByClassName("vGal")[driveoutVideos.length - 1].classList.add("dishTwoMidTwo");
      document.getElementsByClassName("vGal")[driveoutVideos.length - 2].classList.add("dishTwoMidOne");
    };
};

function ifScrolledEnough(){
  let bttmNote = document.getElementById("bttmNote");
  let scrollToNote = function() {
    let y = window.scrollY;
    if (y >= 600) bttmNote.className = "note show";
    else bttmNote.className = "note hide";
  }
  window.addEventListener("scroll", scrollToNote);  
};
// onclick = driveoutVideos[i].dddd('movPreviews', driveoutVideos)
function viewCar(car, folder, carOrDriveCollection){
  car.dddd(folder);

  //TIDLIGERE (24-5.februar): this.gråGalleriet; se i constructs-filen for mer
  document.getElementById("it3").innerHTML = `
    <div id = "grTmp1pan">
      ${gråGalleriet(carOrDriveCollection, folder)}
    </div>
  `;
};

/*
function visib(){
  for(let i = 0; i < vehicleCollection.length; i++){
    document.getElementById(`imgtxt${i}`).classList.add("imgtxt");
  }

  //note to self is it possible to use the add/remove as parameters?
}
function invisib(){
  /*for(let i = 0; i < vehicleCollection.length; i++){
    document.getElementById(`imgtxt${i}`).classList.remove("imgtxt");
  }
  //document.getElementById("imgtxt").classList.remove("imgtxt")
}
*/