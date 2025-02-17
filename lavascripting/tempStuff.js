const dreamcarRules = [
  "Bilen må være i svært god stand",
  "Bilen må kun ha to dører",
  "Bilen må ha minst seks sylindre",
  "Bilen må være spesiell, det skal være en “dream car” – kjører man en times tur skal sjansen for å møte en tilsvarende bil være marginal"
];
const YTreccs = ["Jay Leno's Garage*", "Doug Demuro*", "Seen Through Glass*", "Schmee150*", "Top Gear", "Car TV", "Car WOW", "Daily Driven Exotics", "Harry's Garage*", "Vehicle Virgins", "Petrolicious*", "Dreamcars daily", "Classic Cars", "Series No Cuts*", "Car News TV", "The Drive*", "Curves Magazin*", "Amazing Scenic Drives*", "Roadtrip Through the Lens*"];

function usersLists(listparam){
  let xx = "";
  for(let i = 0; i < listparam.length; i++){
    xx += `<li>${listparam[i]}</li>`;
  }
  return `<ul>${xx}</ul>`;
}

const txtOm = `
  Min interesse for bil og motor begynte tidlig. Da jeg var fem år kunne jeg navnet på de fleste bilmerkene. Den første bilen (en BMW 2002 tii, 1972 modell) ble kjøpt da jeg var 16 år og møysommelig satt i topp stand til den store dagen (18 år og førerkort). Siden har det blitt svært mange biler, rundt 40 totalt.
  <br><br>
  De siste årene har interessen for klassiske biler og sportsbiler vokst frem. Hva som kan sies å være en “klassisk” bil, har neppe noen fast definisjon. Det samme gjelder hva som kan sies å være en klassisk “drømmebil” (classic dream car). Med sportsbil tenker jeg på biler lagd for sportslig kjøring, dvs. kraftig motor og gode kjøreegenskaper. Fellesbetegnelsen blir “dream car” Jeg anser at følgende kriterier bør være på plass før betegnelsen “dream car” kan forsvares:
  ${usersLists(dreamcarRules)}
  Min nåværende “samling” av drømmebiler finnes under “biler” på denne nettsiden. Som det fremgår er den eldste bilen over 50 år og den nyeste er rundt fem år. Alle bilene har sin spesielle historie. Det er vanskelig å peke ut en favoritt. De er alle spesielle og kjære. Samtlige biler lagres varmt innendørs om vinteren. I løpet av vår-, sommer- og høstsesongen, kjøres de kun i pent vær og maksimalt et par tusen kilometer.
  <br><br>
  Som man vil skjønne er dette min lille private nettside. Jeg håper entusiaster kan ha litt glede av den og at nettsiden kan inspirere noen til å realisere sine bildrømmer. Livet er kort og bør leves til det fulle mens man kan. For noen er det likegyldig hvilken bil de kjører. Slik er det ikke for meg.
  <div style="padding-top: 40px; padding-bottom: 40px;">
  Enjoy the website! This is a site for my hobby.
  </div>
`;

//document.getElementById("ytreccsList").innerHTML = xx;

const txtYT = `
  På YouTube er det mange fine «car channels». Du finner noen av disse ved å søke på ordene/navnene nedenfor. De som er merket med * er mine personlige favoritter:
  <br><br>
  ${usersLists(YTreccs)}
`;

const txtKjrTurer = `
  Biler er lagd for å kjøres. Det gjelder også for klassiske biler.
  <br><br>
  Avhengig av hvor man bor i Norge, er "kjøresesongen" som regel april-oktober. Resten av året er det, grunnet vær og kjøreforhold (herunder salting av veiene), å anbefale at bilen lagres innendørs. Noen enkle lagringstips er å fylle opp bensintanken, pumpe ca. 25-30 % ekstra luft i dekkene, bruke en vedlikeholdslader, la vinduene stå noen centimeter åpne samt bruke et trekk over bilen. Om mulig er det fint om bilen under vinterlagringen beveges/rulles litt omtrent en gang i måneden (for å unngå at dekkene blir "flate").
  <br><br>
  Ved begynnelsen av kjøresesongen anbefales det å sjekke oljenivå, bremsevæske, radiator, batteri og dekker osv. Om mulig bør bilen i kjøresesongen få seg en luftetur på minst 20 minutter hver 14. dag. Småturer (under 10 minutter) bør unngås. Når man begynner å kjøre, anbefales det å kjøre ca. fem minutter rolig slik at motortemperaturen kommer opp til normalt nivå og oljen osv. kommer godt ut i "systemet" osv. Innimellom kan det være greit å "dra på litt" i løpet av turen for å få blåst ut motoren litt, men nødvendig er det som regel ikke.
  <br><br>
  I Norge er det mange fine kjøreturer. Det er bare å søke på nettet. Ofte opplever man de fineste turene om man tar mindre og litt svingete veier, med lite trafikk. Et annet tips, særlig hvis man skal på langtur, er de nasjonale turistveiene (som har en egen nettside). Personlig synes jeg det er flott å kjøre til Vestlandet med en klassisk bil og overnatte på ulike historiske hotell hvis mulig.
  <br><br>
  I Europa finnes det også mange flotte kjøreturer. Et tips er å fly til München, og leie en sportsbil der (for eksempel på Sixt bilutleie). Derfra er det forholdsvis kort vei til blant annet Østerrike og Sveits, i tillegg til at man får kjørt på Autobahn. Det er mange fine fjellpass som kan kjøres. De mest kjente er Grossglockner (Østerrike), Furka (Sveits) og Stelvio i Italia. Ønsker man arrangerte turer over for eksempel en ukes tid, finnes det firmaer som arrangerer dette (og ordner fine biler). Igjen er det bare å søke på nettet, og så vil lommeboken og øvrige preferanser avgjøre hva du velger.
  <br><br>
  Også i USA er det en rekke fine kjøreturer. Highway 1 i California er kjent for de fleste, men også Blue Ridge Parkway på østkysten kan anbefales.
  <br><br>
  <h2>"Flotte Kjøreturer"  |  "Sportslige Kjøreturer i Indre Vestfold"</h2>
  <br>
    <div style="float: left; padding-right: 179px;">
      <a href="https://9b2cf235-d98b-477e-9c59-089def9c4371.filesusr.com/ugd/1eab53_2b1c30cfe7104a2f89fca00d67a95ab4.pdf">link 1</a>
    </div>
    <div style="float: left;">
      <a href="https://9b2cf235-d98b-477e-9c59-089def9c4371.filesusr.com/ugd/1eab53_54b6566eaf104a42b4ab70a8e3ffdcd3.pdf">link 2</a>
    </div>
  <br><br>
  Jeg har skrevet en bok som heter "Flotte Kjøreturer" som omtaler kjøreturer i Norge, Europa og USA. Videre har jeg laget et hefte som omtaler "Sportslige kjøreturer i indre Vestfold". Klikker du på pdf-versjoner vedlagt ovenfor, kan du lese om disse kjøreturene.
  <div style="padding-top: 40px; padding-bottom: 40px;">
  Lets Go!
  </div>
`;

//const kntkStyles = "border: 1px solid black; margin-bottom: 15px; padding: 10px;";

const deets = ["Per", "9502119", `<div>Hvis du ønsker å sende meg en melding angående denne nettsiden, må du gjerne gjøre det på mobiltelefonnummeret angitt her.<div>`];

function details(){
  let a = "";
  const kntkStyles = ["font-size: 1em; margin-bottom: 15px; padding: 10px; width: 680px;", "height: 100px; text-wrap: break-word; border: 1px solid gray; border-radius: 2px; color: gray; width: 682px;"];
  for(let i = 0; i < 3; i++){
    if (i == 2) {a += `<div style="${kntkStyles[0]} ${kntkStyles[1]}" class="prevent-select">${deets[i]}<div>`; break;}
    a += `<input type="text" placeholder="${deets[i]}" style="${kntkStyles[0]}"><br>`;
  }
  return `<form>${a}</form>`;
}

const txtKnkt = /*`
  <div style="background-color: lavender; ${kntkStyles}">
    Per
  </div>
  <div style="background-color: aliceblue; ${kntkStyles}">
    9502119
  </div>
  <div style="background-color: goldenrod; height: 100px; ${kntkStyles}">
    Hvis du ønsker å sende meg en melding angående denne nettsiden, må du gjerne gjøre det på mobiltelefonnummeret angitt her.
  </div>
`; */details();

/*
NOTES::

    - style alt text on the items in galleries so they're fully centered, and work on the hover.
    - make loop for the gallery items (both); generating ids and hrefs to them, so visitors can note the change in the URL and can easily link each other what car they're admiring in particular.
    - implement the images
    - style the images in the galleries, please!

diary: at least we still have paris! Re-size the video files so they're all less than 100 mb, that's what's making github so crybaby-like.
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

const MrgnPlus = new dadCar("Morgan Plus", 8, 1994, `<img src="cars/1994 morgan plus 8.jpg" alt="Morgan">`);

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