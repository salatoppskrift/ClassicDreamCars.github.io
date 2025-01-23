// bonne as in "bønne" as in java bean
//immediate view
topView()
pageMain();
foot();

  //Dear diary, today (21-22.January) I fixed the DRY thing I had going!

//const titleItems = ["Om", "Biler", "Filmer", "Kjøreturer", "YouTube Tips", "Kontakt"];

function topView(){
    document.getElementsByClassName("bleeeh")[0].innerHTML = /*HTML*/`
    <div onclick="pageMain(); mainForLoops()" style="height: 180px;">Classic Dream Cars</div>
    <div>
        <table class="navibar">
            <tr>
                <td><a href="#Om" class="noStyleA">Om</a></td>
                <td><a href="#Biler" class="noStyleA">Biler</a></td>
                <td><a href="#Filmer" class="noStyleA">Filmer</a></td>
                <td><a href="#Kjoreturer" class="noStyleA">Kjøreturer</a></td>
                <td><a href="#YouTubeTips" class="noStyleA">YouTube Tips</a></td>
                <td><a href="#Kontakt" class="noStyleA">Kontakt</a></td>
            </tr>
        </table>
    </div>
  `;
/*  Dear diary, today (22-23jan 25) I recall my hubris from previous DRY mistake...
  for (let i = 0; i <= titleItems.length; i++){
    document.getElementsByClassName("navibar")[0].innerHTML += `
      <td><a href="#${titleItems[i]}" class="noStyleA">${titleItems[i]}</a></td>
    `;
  };*/
};

function pageMain(){
    document.getElementById("page").innerHTML = /*HTML*/`
      <div class="shift" id = "Om">Om</div>
      <div class="bleeeh"></div>
      <div class="shift" id = "Biler">
        Biler
      </div>
      <div class="shift">
        <div class="gridalicious">
            <!--see "lavaskript.js" from "new car website" folder on local computer to see how we used to live-->
        </div>
      </div>
      <div class="shift" id = "Filmer">Filmer</div>
      <div class="shift">
        <div class="gridalicious">
            <div class="dish">item1</div>
            <div class="dish">item2</div>
            <div class="dish">item1</div>
            
            <div class="dish">item1</div>
            <div class="dish">item2</div>
            <div class="dish">item1</div>
  
            <div class="dish">item1</div>
            <div class="dish">item2</div>
            <div class="dish">item3 (anxiety purged)</div>
            <div class="dish dishMid">item4</div>
            </div>
        </div>
      <div class="shift" id = "YouTubeTips">
        YT Tips
      </div>
      <div class="shift" id = "Kjoreturer">
        Kjøreturer
      </div>
      <div class="bleeeh"></div>
      <div class="shift" id = "Kontakt">
        Kontakt
      </div>
    `;
    mainForLoops();
    carGallery();
};

// BODY end
// the footer BEGIN
function foot(){
  let audi = `<div style="background-color: orange;">Audi 8 v10</div>`
  
  document.getElementById("mehehehe").innerHTML = `${audi}`;
};
// the footer END