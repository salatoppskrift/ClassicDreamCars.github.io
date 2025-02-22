function tittlInnhold(tittel, innhold){
  this.tit = tittel;
  this.inn = innhold;
  this.sammen = function() {
    return `<div>
      <h2>${tittel}</h2>
    </div>
    <div>
      <div class="pTxt">${innhold}</div>
    </div>
  `;
  };
};

function dadCar(fileStill, fileVid){
  this.carName = fileStill;
  this.driveFilm = fileVid;
  this.getFullName = function(){
    let fullName = this.getYear() + " " + this.getName() + " " + this.getMod();
    
    return fullName;
  }
  this.getEnd = function(prm){ //returns the string filename's file type as a string;
    // PLEASE NOTE!!
    // prm should be this.carName or this.driveFilm!!!
    let punctuation = (prm).indexOf(".");
    let ending = "";
    for(let i = punctuation; i < (prm).length; i++){
      let letter = prm[i];
      ending += letter;
    }
    return ending;
  }
  this.getPureYTlink = function(){
    let ytVidId = ""
    for(let i = 0; i < this.driveFilm.indexOf("."); i++){
      let letter = this.driveFilm[i];
      ytVidId += letter;
    }
    return ytVidId;
  }
  this.getAlt = function(){
    let namus = "";
    for(let i = 0; i < 10; i++){
      if (i < 4 ) continue;
      let letter = this.carName[i];
      namus += letter;
    }
    let altNam = namus + "_" + this.getYear();
    let CompleteAlt = (((altNam.replaceAll(" ", "")).replaceAll("-", "")).replaceAll("¨", "")).toLowerCase();

    return CompleteAlt;
  }
  //this.getName = function(){ return this.giveXfromFile(5, "¨") }
  this.getName = function(){ //removes the year from the name and stops when there's a ¨ or a .
    let namus = "";
    for(let i = this.carName.indexOf(" "); i < this.carName.indexOf("."); i++){
      if (i == this.carName.indexOf("¨")) break;
      let letter = this.carName[i];
      namus += letter;
    }
    return namus;
  };
  //this.getYear = function(){ return this.giveXfromFile(0, 3); }
  
  this.getYear = function(){ // only returns the year from the name
    let year = "";
    for(let i = 0; i < this.carName.indexOf(" "); i++){
      let letter = this.carName[i];
      year += letter;
    }
    return year;
  }
  
  this.getMod = function(){ //clunky but works, this delivers the information past the ¨ character if the filename has one.
    let modl = "";
    for(let i = 0; i < (this.carName).length; i++){
      let letter = (this.carName)[i];
      if (letter == "¨"){
        for(let ii = i + 2; ii < (this.carName.length); ii++){
          let newLetter = (this.carName)[ii];
          if((this.carName)[ii] == ".") break;
          modl += newLetter;
        };
      };
    }
    return modl;
  }
  // White whale <3 getXfromFile().
  this.makeDishImg = function(folderName){
    // gives the image settings for the galleries on the main page
    return `<img class="dishImg" src="${folderName}/${this.carName}" alt="${this.getAlt()}"></img>`; // wo onmouseenter and onmouseleave

    //return `<img class="dishImg" onmouseenter="visib()" onmouseleave="invisib()" src="cars/${this.carName}" alt="${this.getAlt()}"></img>`;
  }
  tempoFunky = function(prm){
    document.getElementById("it1and2").innerHTML = `Okay so this works...${prm}`;
  };
  
  this.gråGalleriet = function(arrayName, folderName){
    /*if (folderName == "movPreviews") sourceVal = "movPreviewsWOtxt";
    else sourceVal = folderName;*/
    let entry = "";
      for(let i = 0; i < arrayName.length; i++){
        /*let p1 = arrayName;
        let p2 = sourceVal;
        let p3 = p1[i];
        onclick = "viewCar(${p3}, ${p2}, ${p1})";
        onclick = "viewCar('${}')"*/
        let tempyVal = `'${arrayName[i].carName}'`;
        entry += /*HTML*/ `
          <div class = "panhght" onclick = "tempoFunky(${tempyVal})">
            <img class = "smallGrey" src="${folderName}/${arrayName[i].carName}" alt="${arrayName[i].getAlt()}">
          </div>
          `;
        };
      return entry;
  };

  this.dddd = function(folderName){
    stylebleeeh0LikeSo();

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    document.getElementById("page").innerHTML = /*HTML*/`
    <div class = "gridTemp1" id="${this.getAlt()}">
      <div id = "it1and2">
        ${this.createIt1()}

        ${this.createIt2(folderName)}
      </div>

      <!---GRÅGALLERIET: se bonne_lessers for viewCar()--->
      <div id = "it3"></div>
    </div>
    `;
  };
  // functions within functions for dddd and eeee
  stylebleeeh0LikeSo = function(){
    document.getElementsByClassName("bleeeh")[0].style.height = "300px";
    document.getElementsByClassName("bleeeh")[0].style = `background-image: none; background-color: white;`;
  }
  this.createIt1 = function(){

    if(this.driveFilm === undefined) {
      
      let modDef = ""; let hyphen = " - "
      if (this.getMod() !== undefined) modDef = `${this.getMod()}${hyphen}`;

      if (this.carName == Clenet.carName) modDef = `Nr.105/250${hyphen}`;
      else if (this.carName == AstMart.carName) modDef = `Nr. 4 av 5${hyphen}`;
      else if (this.carName == MerceGTR.carName) modDef = `${this.getMod()} `; //OR make the " - " into a string and put it as let hyphen = " - " before the if-else block hereand in the else if-statement on line 172, put hyphen = " ";
      else if (
        //GONE this.carName == PrwlrMull.carName ||
        this.carName == IndFTR.carName ||
        this.carName == Porsche911.carName
      )
      modDef = "";

      if (this.carName == DodgVipr.carName) extrabit = `<span style="margin-left: 68px">- ${this.getYear()} -<span>`;
      else
        extrabit = `${modDef}${this.getYear()}`;
      
      x = /*HTML*/`
      <div id = "it1" class="pTxt" style="padding-left: 45px">
        <div>
          ${this.getName()}
        </div>
        <div style="padding-top: 10px;">
          ${extrabit}
        </div>
      </div>
      `;
    } else {
      let top = ""; let bottom = "";
      let title = this.getName();
      if (this.carName == vid5.carName) {
        top = `Filmet ${this.getYear()}`;
        bottom = this.getMod();
      }
      else if (
        this.carName == vid6.carName ||
        this.carName == vid7.carName ||
        this.carName == vid8.carName ||
        this.carName == vid9.carName
      ) {
        top = `Filmet ${this.getYear()}`;
        bottom = "";
      }
      else {
        top = this.getMod();
        bottom = this.getYear();
      }

      x = /*HTML*/`
      <div id = "it1" class="pTxt" style="padding-left: 45px;">
          <div style="height: 20px;">
              ${top}
          </div>
          <div style="margin-left: -2px;"><h1 style="font-family: 'Quicksand';">
              ${title}
          </h1></div>
          <div style="margin-top: 15px;">
              ${bottom}
          </div>
      </div>
    `;
    }
    return x;
  }
  // formerly "this.makeImgWclass_it2"
  this.createIt2 = function(folderName){
    // gives the INDIVIDUAL image for the object given to it
    let x = "Object error! driveVideo namefile missing from objects.js, or the name has been incorrectly put in so it lacks tails (.mp4, .yt (not real))";
    if(this.driveFilm === undefined){ //checks if Ive given the object a driveFilm or not
      x = `<img class="it2" src="${folderName}/${this.carName}" alt="${this.getAlt()}"></img>`;
    } else {
      if (this.getEnd(this.driveFilm) == ".yt"){
        x = `
        <iframe class="it2" style="height: 562px;"
          src="https://www.youtube.com/embed/${this.getPureYTlink()}">
        </iframe>
        `;
      } else if (this.getEnd(this.driveFilm) == ".mp4"){
        x = `
        <video class="it2" controls>
          <source src="movies/${this.driveFilm}" type="video/mp4">
          <source src="movies/${this.driveFilm}}" type="video/ogg">
          Your browser does not support the video tag.
        </video>
        `;
      } else {
        x = `
        <embed type="video/webm" src="${this.driveFilm}" class="it2">
        `;
      }
    }

    return /*HTML*/`
    <div id = "it2">
      ${x} <!---The actual individual car/driveoutvideo being displayed---->
    </div>
    `;
  }
}