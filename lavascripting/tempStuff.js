const xxx = `
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
<br><br>
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
<br><br>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`; // EXAMPLE TEXT. DELETE LATER.

/*
NOTES::

    - style alt text on the items in galleries so they're fully centered, and work on the hover.
    - make loop for the gallery items (both); generating ids and hrefs to them, so visitors can note the change in the URL and can easily link each other what car they're admiring in particular.
    - implement the images
    - style the images in the galleries, please!
*/

/*RECIPES FROM w3school LOOK AT THESE AGAIN PLS
Index:
  |   - mask-image property yahoo!!
  |   Wanted to see if I could standardise the imgs of the car image displays, bc I think they may be different sizes, but it would appear that it doesnt quite work how I want them to; the negative space left by the mask is still considered as "size" to the rest of the page, when I want them to be fully erased.
  |   - hover and its javascript cousins: onmouseenter, & onmouseleave



// The mask-image Property yahoo!!// BEGIN

<!DOCTYPE html>
<html>
<style>
body {background-color: lightblue;}

svg.svgClass {
  width: 600px;
  height: 400px;
}

</style>

<head>
</head>
<body>

<h1>The mask-image Property</h1>

<h3>An SVG mask layer (formed as a triangle):</h3>
<div id="svgEntry"></div>

<h3>Original image:</h3>
<img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400">

</body>

<script>
const images = ["img_5terre.jpg", "img_mountains.jpg", "img_lights.jpg"]


for(let i = 0; i < 3; i++){
  let ii = i + 1;
  document.getElementById("svgEntry").innerHTML += `
  <svg class = "svgClass">
  <mask id="svgmask${ii}">
    <polygon fill="#ffffff" points="500 80, 500 300, 40 300, 40 80"></polygon>
  </mask>
  <image style="width: 700px;" xlink:href=${images[i]} mask="url(#svgmask${ii})"></image>
</svg>
`;
}

</script>


</html>

// The mask-image Property // END

// HOVER AND ITS JAVASCRIPT COUSINS: ONMOUSEENTER, & ONMOUSELEAVE // BEGIN

<!DOCTYPE html>
<html>
<head>
<style>
img.imgClass {
  width: 300px; height: 300px;
  cursor: pointer;
} img.imgClass:hover {filter: brightness(90%);}
  img.imgClass:active {filter: brightness(80%);}
a {color: black; text-decoration: none;}

#imagio {position: relative;}
.invisi {
  position: absolute; top: 40%; left: 10px;
  font-size: 50px; color: white;
  text-align: center; //background-color: plum;
  width: 280px;
  display: none;
}
.imgtxt {
  display: block;
}
</style>
</head>
<body>

<h2 id="top">The Javascript Cousins</h2>

<p>Use the border-radius property to create rounded images:</p>

<div id="imagio"></div>

<div id="exTxt"></div>

<h2 id="sect1">
  <a href="#top">
    Hi, this is section 1, how can I help you??
  </a>
  :DD
</h2>

</body>
<script>
let imgAltName1 = "Paris";

document.getElementById("imagio").innerHTML = `
  <a href="#sect1">
    <img class="imgClass" onmouseenter="visib()" onmouseleave="invisib()" src="paris.jpg" alt=${imgAltName1}>
    <div class="invisi" id="imgTxt">${imgAltName1}</div>
  </a>
`;

function visib(){
  document.getElementById("imgTxt").classList.add("imgtxt");
}
function invisib(x){
  document.getElementById("imgTxt").classList.remove("imgtxt");
}


document.getElementById("exTxt").innerHTML = `
<p>
Lorum ipsum
</p>
`;

document.getElementById("sect1").outerHTML += "Click on the title above this sentence to return to top";

document.getElementById("sect1").style.hover
</script>
</html>

// HOVER AND ITS JAVASCRIPT COUSINS: ONMOUSEENTER, & ONMOUSELEAVE // END





*/



/*

////// THE DUMP //////

const MrgnPlus = new dadCar("Morgan Plus", 8, 1994, `<img src="cars\\1994 morgan plus 8.jpg" alt="Morgan">`);

 */

/*function deletethisLaterNeverUsethisplease(){
    document.getElementById("navibar").innerHTML = `
    <div id = "navibar">

    <table class="navibar">
      <tr> <!-- Om   Biler   Filmer   Kjøreturer  YouTube Tips   Kontakt-->
        <td><a href="#Om" class="noStyleA">${delerNav[0]}</a></td>
        <td><a href="#Biler" class="noStyleA">${delerNav[1]}</a></td>
        <td><a href="#Filmer" class="noStyleA">${delerNav[2]}</a></td>
        <td><a href="#Kjøreturer" class="noStyleA">${delerNav[3]}</a></td>
        <td><a href="#YouTubeTips" class="noStyleA">${delerNav[4]}</a></td>
        <td><a href="#Kontakt" class="noStyleA">${delerNav[5]}</a></td>
      </tr>
    </table>;

    </div>


    Meanwhile, here is the old Filmer set-up:
    <div class="shift" id = "Filmer"></div>
      <div class="shift">
        <div class="gridalicious">
            <div class="dish">item2</div>
            <div class="dish">item1</div>
            
            <div class="dish">item1</div>
            <div class="dish">item2</div>
            <div class="dish">item1</div>
  
            <div class="dish">item1</div>
            <div class="dish">item2</div>
            <div class="dish">item3 (anxiety purged)</div>
            <div class="dish dishMid">item4</div> <-- THIS IN PARTICULAR IS WHY WE KEEP NOTES.
            </div>
        </div>
}*/

/*
These served me well!! And now that I've simplified them, I don't need these, but they are enchanging reminders <3


function dadCar(name, model, imageOrVideoFile){
    this.carName = name;
    this.carMod = model;
    this.carFile = imageOrVideoFile;
    this.giveNameFromFile = function(){
      let namus = "";
      for(let i = 0; i < imageOrVideoFile.length; i++){
        let letter = imageOrVideoFile[i];
        if (i < 20) continue;
        if (letter == ".") break;
        namus += letter;
      }
      return namus;
    };
    this.giveYearFromFile = function(){
      let year = "";
      for(let i = 0; i < imageOrVideoFile.length; i++){
        let letter = imageOrVideoFile[i];
        if (i < 15) continue;
        if (i > 18) break;
        year += letter;
      }
      return year;
    }

*/