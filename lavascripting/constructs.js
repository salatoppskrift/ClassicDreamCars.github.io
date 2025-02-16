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
    /*this.getPureYTlink = function(){
      let ytVidId = ""
      for(let i = 0; i < this.driveFilm.indexOf("."); i++){
        let letter = this.driveFilm[i];
        ytVidId += letter;
      }
      return ytVidId;
    }*/
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
    this.giveXfromFile = function(cond1, cond2){
      // WHITE WHALE: trying to cobble getMod, getName, and getYear into ONE FUNCTION.
      // okay wait. maybe this is solvable by just changing the stopper? the year can be created by its own for loop, same with the name, same with the model/extra...
      // year: start [0] end when reaches [3] but somehow turn this into a string... test it out on w3school.
          // I could set the parameter in getYear to 4 but that's not a solution, we'll just get the same issue as with 4 whenever we get a car with a 4 in it!!
      // name: start at [5], keep going until ¨ or . is reached. (cond2, cond3)
      // model/extra: look up how to look up a value in a string, and seeking how one can find the index of it. Like a reverse string[index] giving me the value of the index, here i want to look for a value and get its index. Then add 2, and then stop when . is reached.
      let namus = "";
      let letter = "";
      let cond3 = ".";
      for(let i = 0; i < (this.carName).length; i++){
        letter = (this.carName)[i];
        //skips letters preceding whatever part you like: if you want the name itself without the year, see giveName
        if (i < cond1) continue;

        // year
        if (i > cond2) break; // ERROR HERE: IT READS THE YEAR'S INDIVIDUAL CHARACTERS AS NUMBERS, POSSIBLY BECAUSE IM TELLING IT TO COMPARE IT NUMERICALLY. BY CASTING 3 AS A PARAMETER ENTRY IN GIVEYEAR, I AM NOT ONLY TELLING THE FUNCION TO STOP WHEN THE ENTRY HAS COME TO INDEX[3], THE LAST PLACE IN THE YEAR, I AM ALSO TELLING IT TO BREAK THE LOOP IF IT HAS THE VALUE OF 3!!!
        // name
        // formerly new one: if ((cond2 == "¨") && (letter == cond2)) break;
        if (letter == cond2) break;
        if (letter == cond3) break;
      namus += letter;
      }
      return namus;
    }
    this.makeDishImg = function(folderName){
      // gives the image settings for the galleries on the main page
      return `<img class="dishImg" src="${folderName}/${this.carName}" alt="${this.getAlt()}"></img>`; // wo onmouseenter and onmouseleave

      //return `<img class="dishImg" onmouseenter="visib()" onmouseleave="invisib()" src="cars/${this.carName}" alt="${this.getAlt()}"></img>`;
    }
    
    this.gråGalleriet = function(arrayName, folderName){
      let sourceVal = folderName;
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
            <div class = "panhght" onclick = "">
              <img class = "smallGrey" src="${sourceVal}/${arrayName[i].carName}" alt="${arrayName[i].getAlt()}">
            </div>
            `;
          };
        return entry;
    };

    this.dddd = function(prm){
      stylebleeeh0LikeSo();
      
      document.getElementById("page").innerHTML = /*HTML*/`
      <div class = "gridTemp1" id="${this.getAlt()}">
        ${this.createIt1()}

        ${this.createIt2(prm)}

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
      return /*HTML*/`
      <div id = "it1" class="pTxt" style="padding-left: 45px;">
          <span style="color: purple">
            File name when the tags, the year, and its addition is removed:
          </span>
            ${this.getName()}
          <br>
            .... file name is ${this.carName.length} units long, the actual name is
            <span style="color: goldenrod;">
              ${this.carName}</span>.
          <br>
          The car is from ${this.getYear()}; an okay year! <b>Meanwhile, here I'd like to get just the ending? The ending: <span style="color: darkviolet;">${this.getEnd(this.carName)}</span></b>
          <br><br>
          The full name of this car is: <span style="color: brown">${this.getFullName()}</span><br>
          Meanwhile, the extra bit at the end should be: <span style="color: darkcyan">
            ${this.getMod()}
          </span><br>
          ID: ${this.getAlt()}
      </div>
      `;
    }
    // formerly "this.makeImgWclass_it2"
    this.createIt2 = function(folderName){
      // gives the INDIVIDUAL image for the object given to it
      let x = "something should be here";
      if(this.driveFilm === undefined){ //checks if Ive given the object a driveFilm or not
        x = `<img class="it2" src="${folderName}/${this.carName}" alt="${this.getAlt()}"></img>`;
      } else if (this.driveFilm == "CE4ZdZgBWC8"){
        x = `
        <iframe class="it2" style="height: 562px;"
          src="https://www.youtube.com/embed/${this.driveFilm}">
        </iframe>
        `;
      } else {
        //if (this.getEnd(this.driveFilm) == ".mp4")
        x = `
        <video class="it2" controls>
          <source src="movies/${this.driveFilm}" type="video/mp4">
          <source src="movies/${this.driveFilm}}" type="video/ogg">
          Your browser does not support the video tag.
        </video>
        `;
        
      }

      return /*HTML*/`
      <div id = "it2">
        ${x} <!---The actual individual car/driveout video being displayed---->
      </div>
      `;
    }
}