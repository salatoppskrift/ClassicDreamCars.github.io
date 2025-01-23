// se constucts.js for konstruktor til tittlInnhold!

const om = new tittlInnhold("Om", xxx);
const intet = new tittlInnhold("nei", "NEI");
const bilr = new tittlInnhold("Biler m.m.", "");
const filmr = new tittlInnhold("Filmer", "");
const ytbtip = new tittlInnhold("YouTube Tips", xxx);
const drives = new tittlInnhold("Kjøreturer m.m.", xxx);
const cntct = new tittlInnhold("Kontakt", xxx);

// lagde en array for lettere å hente titler og innhold til de forskjellige delene av hovedsiden.
const deler = [om, bilr, intet, filmr, intet, ytbtip, drives, cntct];



// se constructs.js for konstruktor til dadCar!

const MrgnPlus = new dadCar("Morgan Plus", 8, 1994, `<img src="cars\\1994 morgan plus 8.jpg" alt="Morgan">`);
const PrwlrMull = new dadCar("Prowler Mullholland", "Edition", 2001, `<img src="cars\\2001 Prowler Mullholland Edition.jpeg"></img>`);

// array til å hente biler.
const vehicleCollection = [MrgnPlus, PrwlrMull];