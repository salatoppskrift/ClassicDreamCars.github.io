// bonne as in "bønne" as in java bean
//immediate view
topView()
pageMain();
foot();

  //Dear diary, today (21-22.January) I fixed the DRY thing I had going!

//const titleItems = ["Om", "Biler", "Filmer", "Kjøreturer", "YouTube Tips", "Kontakt"];

function topView(){
    document.getElementsByClassName("bleeeh")[0].innerHTML = /*HTML*/`
    <div style="height: 180px;" id = "Main">
      <a href="#Main"><img id = "logo" src="ClaDreCarLogo.png" alt="logo: Classic Dream Cars" onclick="pageMain(); mainForLoops()"></a>
    </div>
    <div id = "navibar"></div>
  `;
  navBarItems();
};

function navBarItems(){
  deler[1].tit = "Biler";
  deler[6].tit = "Kjøreturer";
  const delerNav = [deler[0].tit, deler[1].tit, deler[3].tit, deler[6].tit, deler[5].tit, deler[7].tit];
  let aaaa = "";

  for(let i = 0; i < delerNav.length; i++){
    let idNameIt = `#${delerNav[i]}`;
    if (i == 4) idNameIt = "#YouTubeTips";
    aaaa += /*HTML*/`<td><a href=${idNameIt} onclick="pageMain()" class="noStyleA">${delerNav[i]}</a></td>`;
  }

  document.getElementById("navibar").innerHTML = /*HTML*/ `
    <table class="navibar">
      <tr> <!-- Om   Biler   Filmer   Kjøreturer  YouTube Tips   Kontakt-->
        ${aaaa}
      </tr>
    </table>
  `;
}

//  Dear diary, today (22-23jan 25) I recall my hubris from previous DRY mistake...
// Dear diary, today (24jan 25) I realised I'd forgotten to instantialise the variable I needed to have to access the names for the contents on the page (Om, Filmer, etc), and realised that the array I was using was not compatible with the navBar's items, for example in the bar YTtips and Kjøreturer must switch places from how it is on the page, hence I made a new array with the new arrangement and lacking the "intet" ones.

function pageMain(){
    document.getElementById("page").innerHTML = /*HTML*/`
      <div class="shift" id = "Om"></div>
      <div class="bleeeh"></div>
      <div class="shift" id = "Biler"></div>
      <div class="shift">
        <div class="gridalicious">
            <!--see "lavaskript.js" from "new car website" folder on local computer to see how we used to live-->
        </div>
      </div>
      <div class="shift" id = "Filmer"></div>
      <div class="shift">
        <div class="gridalicious">
        </div>
      </div>
      <div class="shift" id = "YouTubeTips"></div>
      <div class="shift" id = "Kjøreturer"></div>
      <div class="bleeeh"></div>
      <div class="shift" id = "Kontakt"></div>
    `;
    mainForLoops();
    carGallery();
    ifScrolledEnough();
};



// BODY end
// the footer BEGIN
function foot(){
  let audi = `<div style="background-color: orange;">Audi 8 v10</div>`
  
  document.getElementById("mehehehe").innerHTML = `${audi}`;
};
// the footer END