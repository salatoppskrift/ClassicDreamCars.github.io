function tittlInnhold(tittel, innhold){
    this.tit = tittel;
    this.inn = innhold;
    this.sammen = function() {
      return `<div>
        <h2>${tittel}</h2>
      </div>
      <div>
        <p class="pTxt">${innhold}</p>
      </div>
    `;
    };
};

function dadCar(name, model, year, imageOrVideoFile){
    this.carName = name;
    this.carMod = model;
    this.carYear = year;
    this.carFile = imageOrVideoFile;
    this.dddd = function(){
      document.getElementsByClassName("bleeeh")[0].style.height = "300px";
      let entry = "";
      for(let i = 0; i < 4; i++)
        entry += `<div class = "panhght">panel</div>`;
      document.getElementById("page").innerHTML = /*HTML*/`
      <div class = "gridTemp1">
        <div id = "it1" class="pTxt">${this.carName} ${this.carMod}</div>
        <div id = "it2">${this.carFile}</div>
        <div id = "it3">
          <div id = "grTmp1pan">${entry}</div>
        </div>
      </div>
      `;
    };
};