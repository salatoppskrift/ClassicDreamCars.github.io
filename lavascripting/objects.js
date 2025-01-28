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

const MerceBnz = new dadCar(`1970 Mercedes-Benzs SL 280.JPG`);
const BmwRS = new dadCar(`1978 BMW R100 RS.JPG`);
const Clenet = new dadCar(`1978 Clenet Series I Roadster¨ 105250.jpg`);
const JagXJS = new dadCar(`1989 Jaguar XJS¨ V12.jpg`);

const Bmw850 = new dadCar(`1991 BMW¨ 850i.JPG`);

const DodgVipr = new dadCar(`1997 Dodger Viper GTS.JPG`);
const PrwlrMull = new dadCar(`2001 Prowler¨ Mullholland Edition.jpeg`);

const AstMart = new dadCar(`2002 Aston Martin¨ Vantage Stratstone Jubilee Limited Edition.JPG`);

const Shelby = new dadCar(`2013 Shelby American.JPG`);
const Corvtte = new dadCar('2016 Corvette.jpg');
const MerceGTR = new dadCar(`2019 Mercedes¨AMG GTR.jpeg`);

const Porsche911 = new dadCar(`2020 Porsche 911 Turbo S.jpg`);

const IndFTR = new dadCar(`2022 Indian FTR 1200 Carbon Limited Edition.jpg`);

/*
const PrwlrMull = new dadCar(`2001 Prowler¨ Mullholland Edition.jpeg`);
const MerceGTR = new dadCar(`2019 Mercedes¨AMG GTR.jpeg`);
const MerceBnz = new dadCar(`1970 Mercedes-Benzs SL 280.JPG`);
const Shelby = new dadCar(`2013 Shelby American.JPG`);
const DodgVipr = new dadCar(`1997 Dodger Viper GTS.JPG`);
const Corvtte = new dadCar('2016 Corvette.jpg');
const IndFTR = new dadCar(`2022 Indian FTR 1200 Carbon Limited Edition.jpg`);
const Clenet = new dadCar(`1978 Clenet Series I Roadster¨ 105250.jpg`);
const BmwRS = new dadCar(`1978 BMW R100 RS.JPG`);
const JagXJS = new dadCar(`1989 Jaguar XJS¨ V12.jpg`);
*/

const car2 = new dadCar("3008 Ooooghashaahaha");

// array til å hente biler.
const vehicleCollection = [PrwlrMull, MerceGTR, Shelby, car2, car2
];


// bruker constructor fra dadCar til å lage videosider
const vid1 = new dadCar("Driveout 1");
const vid2 = new dadCar("Driveout 2");
const vid3 = new dadCar("Driveout 3");
const vid4 = new dadCar("Driveout 4");

// array, henter videoer
const driveoutVideos = [vid1, vid2, vid3, vid4];