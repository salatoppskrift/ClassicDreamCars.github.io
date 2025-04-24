function usersLists(listparam){
  let xx = "";
  for(let i = 0; i < listparam.length; i++){
    xx += `<li>${listparam[i]}</li>`;
  }
  return `<ul>${xx}</ul>`;
};

// usersLists objects
const dreamcarRules = [
  "Bilen må være i svært god stand",
  "Bilen må kun ha to dører",
  "Bilen må ha minst seks sylindre",
  "Bilen må være spesiell, det skal være en “dream car” – kjører man en times tur skal sjansen for å møte en tilsvarende bil være marginal"
];
const YTreccs = ["Jay Leno's Garage*", "Doug Demuro*", "Seen Through Glass*", "Schmee150*", "Top Gear", "Car TV", "Car WOW", "Daily Driven Exotics", "Harry's Garage*", "Vehicle Virgins", "Petrolicious*", "Dreamcars daily", "Classic Cars", "Series No Cuts*", "Car News TV", "The Drive*", "Curves Magazin*", "Amazing Scenic Drives*", "Roadtrip Through the Lens*"];

function Kjøreturer_pdflinksStyled(){
  const lenkeSeksjon = /*HTML*/`
    <div>
      <h2>"Flotte Kjøreturer"  |  "Fantastiske kjøreturer i Vestfold <span style="margin-left: 218px;">og Telemark" |</span>
      </h2>
    <br>
      <div style="float: left; padding-right: 179px; margin-top: -33px; height: 40px;">
        <a href="pdfs/Flotte Kjøreturer.pdf">link 1</a>
      </div>
      <div style="float: left;">
        <a href="pdfs/Fantastiske kjøreturer i Vestfold og Telemark Mars 2025.pdf">link 2</a>
      </div>
    <br><br>
        <h2>"Norges 10 Beste Drive Outs"<span style="margin-left: 5px;"> |</span></h2>
      <br>
        <div style="float: left; padding-right: 293px;">
          <a href="pdfs/Norges Beste Drive Outs oktober 2024.pdf">link 3</a>
        </div>
    <br>
  </div>
  `;
  return lenkeSeksjon;
  /*
  <div id="kjøreturPDFlisteGridTESt">
    <div>
      <h2>"Tittleting"</h2>
      <br/>
      <div>link XYZ</div>
    </div>
    <div>
      <h2> | </h2>
    </div>
    <div>
      <h2>"Tittleting"</h2>
      <br/>
      <div>link XYZ</div>
    </div>
  </div>
  <br/>
  <br/>
  <br/>
  
  */
};

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
    ${Kjøreturer_pdflinksStyled()}
  <br><br>
  Jeg har skrevet en bok som heter "Flotte Kjøreturer" som omtaler kjøreturer i Norge, Europa og USA. Videre har jeg laget et hefte som omtaler "Sportslige kjøreturer i indre Vestfold". For det tredje har jeg skrevet en bok som heter "Norges 10 Beste Drive Outs". Klikker du på pdf-versjoner vedlagt ovenfor, kan du lese om disse kjøreturene.
  <div style="padding-top: 40px; padding-bottom: 40px;">
  Lets Go!
  </div>
`;

//const kntkStyles = "border: 1px solid black; margin-bottom: 15px; padding: 10px;";

function details(){
  const deets = ["Per", "9502119", `<div>Hvis du ønsker å sende meg en melding angående denne nettsiden, må du gjerne gjøre det på mobiltelefonnummeret angitt her.<div>`];
  let a = "";
  const kntkStyles = ["font-size: 1em; margin-bottom: 15px; padding: 10px; width: 680px;", "height: 100px; text-wrap: break-word; border: 1px solid gray; border-radius: 2px; color: gray; width: 682px;"];
  for(let i = 0; i < 3; i++){
    if (i == 2) {a += `<div style="${kntkStyles[0]} ${kntkStyles[1]}" class="prevent-select">${deets[i]}<div>`; break;}
    a += `<input type="text" placeholder="${deets[i]}" style="${kntkStyles[0]}"><br>`;
  }
  return `<form>${a}</form>`;
};

const txtKnkt = details();