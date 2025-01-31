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

function dadCar(name){
    this.carName = name;
    this.getFullName = function(){
      let fullName = this.getYear() + " " + this.getName() + " " + this.getMod();
      
      return fullName;
    }
    this.getAlt = function(){
      let altNam = this.getName() + this.getYear();
      let CompleteAlt = (altNam.replaceAll(" ", "")).toLowerCase();

      return CompleteAlt;
    }
    this.getName = function(){ return this.giveXfromFile(5, "¨") }
    /*
    this.getName = function(){
      let namus = "";
      for(let i = 0; i < carName.length; i++){
        let letter = carName[i];
        if (i < 20) continue;
        if (letter == ".") break;
        namus += letter;
      }
      return namus;
    };
    */
    this.getYear = function(){ return this.giveXfromFile(0, 3); }
    /*
    this.getYear = function(){
      let year = "";
      for(let i = 0; i < carName.length; i++){
        let letter = carName[i];
        if (i < 15) continue;
        if (i > 18) break;
        year += letter;
      }
      return year;
    }
    */
    this.getMod = function(){
      let nammus = "";
      for(let i = 0; i < (this.carName).length; i++){
        let letter = (this.carName)[i];
        if (letter == "¨"){
          for(let ii = i + 2; ii < (this.carName.length); ii++){
            let newLetter = (this.carName)[ii];
            if((this.carName)[ii] == ".") break;
            nammus += newLetter;
          };
        };
      }
      return nammus;
    }
    this.giveXfromFile = function(cond1, cond2){
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
    this.makeDishImg = function(){
      return `<img class="dishImg" onmouseenter="visib()" onmouseleave="invisib()" src="cars\\${this.carName}" alt="${this.getAlt()}"></img>`;
    }
    this.makeImgWclass_it2 = function(){
      let imgPart = `<img class="it2" src="cars\\${this.carName}" alt="${this.getAlt()}"></img>`;
      
      return imgPart;
    }
    this.dddd = function(){
      document.getElementsByClassName("bleeeh")[0].style.height = "300px";
      let entry = "";
      for(let i = 0; i < 4; i++)
        entry += `<div class = "panhght">panel</div>`;
      document.getElementById("page").innerHTML = /*HTML*/`
      <div class = "gridTemp1" id="${this.getAlt()}">
        <div id = "it1" class="pTxt" style="padding-left: 45px;">
          <span style="color: purple">
            File name when the tags, the year, and its addition is removed:
          </span>
            ${this.getName()}
          <br>
            .... file name is ${this.carName.length} units long.
          <br>
          The car is from ${this.getYear()}; an okay year!<br><br>
          The full name of this car is: <span style="color: bisque">${this.getFullName()}</span><br>
          Meanwhile, the extra bit at the end should be: <span style="color: darkcyan">
            ${this.getMod()}
          </span><br>
          ID: ${this.getAlt()}
        </div>
        <div id = "it2">${this.makeImgWclass_it2()}</div>
        <div id = "it3">
          <div id = "grTmp1pan">${entry}</div>
        </div>
      </div>
      `;
    };
};