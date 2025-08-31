// get it bonne as in "bønne" as in java bean

//IMMEDIATE VIEW

topView()
pageMain();
foot();


function topView(){
    document.getElementsByClassName("bleeeh")[0].innerHTML = /*HTML*/`
    <div style="height: 180px;">
      <a href="index.html"><img id = "logo" src="ClaDreCarLogo.png" alt="logo: Classic Dream Cars" onclick="pageMain(); mainForLoops()"></a>
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
  };

  document.getElementById("navibar").innerHTML = /*HTML*/ `
    <table class="navibar">
      <tr> <!-- Om   Biler   Filmer   Kjøreturer  YouTube Tips   Kontakt-->
        ${aaaa}
      </tr>
    </table>
  `;
};

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
    document.getElementsByClassName("bleeeh")[0].style = `background-image: url("cars/1978 Clenet Series I Roadster¨ 105250.jpg");`;
    mainForLoops();
    carGallery();
    ifScrolledEnough();
};

// BODY end
// the footer BEGIN
function foot(){
  let a = `<div style="background-color: orange;">Nettside utviklet 2024-2025.<br><span style="font-size: .8em;">Sist oppdatert: 31.august 2025</span></div>`;
  
  document.getElementById("mehehehe").innerHTML = `${a}`;
};
// the footer END