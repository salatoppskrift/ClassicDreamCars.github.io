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
      // prm should be this.carName or this.driveFilm!!! Otherwise it'll probably return an error.
      if (prm == this.carName || prm == this.driveFilm) {
        let punctuation = (prm).indexOf(".");
        let ending = "";
        for(let i = punctuation; i < (prm).length; i++){
          let letter = prm[i];
          ending += letter;
        }
      } else ending = "ERROR: parameter must be the .carName/.driveFilm property.";
      
      // prm should be this.carName or this.driveFilm!!! Otherwise it'll probably return an error.
      if (prm == this.carName || prm == this.driveFilm) {
        let punctuation = (prm).indexOf(".");
        let ending = "";
        for(let i = punctuation; i < (prm).length; i++){
          let letter = prm[i];
          ending += letter;
        }
      } else ending = "ERROR: parameter must be the .carName/.driveFilm property.";
      
      return ending;
    }
    this.getPureYTlink = function(){
      let ytVidId = "";
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
    this.getName = function(){ //removes the year from the name and stops when there's a ¨ or a .
      let namus = "";
      for(let i = this.carName.indexOf(" "); i < this.carName.indexOf("."); i++){
        if (i == this.carName.indexOf("¨")) break;
        let letter = this.carName[i];
        namus += letter;
      }
      return namus;
    };
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
    // WHITE WHALE FUNCTION: a function attempting to put getName(), getYear(), getMod(), (and I suppose getEnd() too if I'd the mind to think of that at the time of first writing out the code) all into ONE. See changes older than Feb 22 for the function giveXfromFile().
    // WHITE WHALE FUNCTION: a function attempting to put getName(), getYear(), getMod(), (and I suppose getEnd() too if I'd the mind to think of that at the time of first writing out the code) all into ONE. See changes older than Feb 22 for the function giveXfromFile().
    this.makeDishImg = function(folderName){
      // gives the image settings for the galleries on the main page
      return `<img class="dishImg" src="${folderName}/${this.carName}" alt="${this.getAlt()}"></img>`; // wo onmouseenter and onmouseleave

      //return `<img class="dishImg" onmouseenter="visib()" onmouseleave="invisib()" src="cars/${this.carName}" alt="${this.getAlt()}"></img>`;
    }
    
    tempFunction = function(prm){
      if(this.driveFilm === undefined) { // <- her dukker opp litt problemer. hvis funksjonen IKKE er en this.funksjon, så funker den og den kjører altså endringen med it1and2, men da funker ikke lengre this.parameterne med den, it doesn't want to play w them!
        x = /*HTML*/ `
        <div id = "it1" class="pTxt" style="padding-left: 45px">
          ggg
          <div style="padding-top: 10px;">
            hhhh
          </div>
        </div>
      `;
      } else {
        let top = "topping"; let title = "tittel"; let bottom = "bottle";
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

      document.getElementById("it1and2").innerHTML = x;
    }

    
    tempFunction = function(prm){
      if(this.driveFilm === undefined) { // <- her dukker opp litt problemer. hvis funksjonen IKKE er en this.funksjon, så funker den og den kjører altså endringen med it1and2, men da funker ikke lengre this.parameterne med den, it doesn't want to play w them!
        x = /*HTML*/ `
        <div id = "it1" class="pTxt" style="padding-left: 45px">
          ggg
          <div style="padding-top: 10px;">
            hhhh
          </div>
        </div>
      `;
      } else {
        let top = "topping"; let title = "tittel"; let bottom = "bottle";
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

      document.getElementById("it1and2").innerHTML = x;
    }

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
          entry += /*HTML*/ `
            <div class = "panhght" onclick = "tempFunk2(${arrayName[i]}, folderName})">
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
    this.createIt1 = function(temparg1){

      if(temparg1.driveFilm === undefined) {
        
        let modDef = ""; let hyphen = " - "
        if (temparg1.getMod() !== undefined) modDef = `${temparg1.getMod()}${hyphen}`;

        if (temparg1.carName == Clenet.carName) modDef = `Nr.105/250${hyphen}`;
        else if (temparg1.carName == AstMart.carName) modDef = `Nr. 4 av 5${hyphen}`;
        else if (temparg1.carName == MerceGTR.carName) modDef = `${temparg1.getMod()} `; //OR make the " - " into a string and put it as let hyphen = " - " before the if-else block hereand in the else if-statement on line 172, put hyphen = " ";
        else if (
          //GONE this.carName == PrwlrMull.carName ||
          temparg1.carName == IndFTR.carName ||
          temparg1.carName == Porsche911.carName
        )
        modDef = "";

        if (temparg1.carName == DodgVipr.carName) extrabit = `<span style="margin-left: 68px">- ${temparg1.getYear()} -<span>`;
        else
          extrabit = `${modDef}${temparg1.getYear()}`;
        
        x = /*HTML*/`
        <div id = "it1" class="pTxt" style="padding-left: 45px">
          <div>
            ${temparg1.getName()}
          </div>
          <div style="padding-top: 10px;">
            ${extrabit}
          </div>
        </div>
        `;
      } else {
        let top = ""; let bottom = "";
        let title = temparg1.getName();
        if (temparg1.carName == vid5.carName) {
          top = `Filmet ${temparg1.getYear()}`;
          bottom = temparg1.getMod();
        }
        else if (
          temparg1.carName == vid6.carName ||
          temparg1.carName == vid7.carName ||
          temparg1.carName == vid8.carName ||
          temparg1.carName == vid9.carName
        ) {
          top = `Filmet ${temparg1.getYear()}`;
          bottom = "";
        }
        else {
          top = temparg1.getMod();
          bottom = temparg1.getYear();
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
    this.createIt2 = function(temparg1, folderName){
      // gives the INDIVIDUAL image for the object given to it
      let x = "Object error! driveVideo namefile missing from objects.js, or the name has been incorrectly put in so it lacks tails (.mp4, .yt (not real))";
      if(temparg1.driveFilm === undefined){ //checks if Ive given the object a driveFilm or not
        x = `<img class="it2" src="${folderName}/${temparg1.carName}" alt="${temparg1.getAlt()}"></img>`;
      } else {
        if (temparg1.getEnd(temparg1.driveFilm) == ".yt"){
          x = `
          <iframe class="it2" style="height: 562px;"
            src="https://www.youtube.com/embed/${temparg1.getPureYTlink()}">
          </iframe>
          `;
        } else if (temparg1.getEnd(temparg1.driveFilm) == ".mp4"){
          x = `
          <video class="it2" controls>
            <source src="movies/${temparg1.driveFilm}" type="video/mp4">
            <source src="movies/${temparg1.driveFilm}}" type="video/ogg">
            Your browser does not support the video tag.
          </video>
          `;
        } else {
          x = `
          <embed type="video/webm" src="${temparg1.driveFilm}" class="it2">
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