// se constucts.js for konstruktor til tittlInnhold!

const om = new tittlInnhold("Om", txtOm);
const intet = new tittlInnhold("nei", "NEI");
const bilr = new tittlInnhold("Biler m.m.", "");
const filmr = new tittlInnhold("Filmer", "");
const ytbtip = new tittlInnhold("YouTube Tips", txtYT);
const drives = new tittlInnhold("Kjøreturer m.m.", txtKjrTurer);
const cntct = new tittlInnhold("Kontakt", txtKnkt);

// lagde en array for lettere å hente titler og innhold til de forskjellige delene av hovedsiden.
const deler = [om, bilr, intet, filmr, intet, ytbtip, drives, cntct];



// se constructs.js for konstruktor til dadCar!

const MerceBnz = new dadCar(`1970 Mercedes-Benzs¨ SL 280.JPG`);
const BmwRS = new dadCar(`1978 BMW R100 RS.JPG`);
const Clenet = new dadCar(`1978 Clenet Series I Roadster¨ 105250.jpg`);
const JagXJS = new dadCar(`1989 Jaguar XJS¨ V12.jpg`);

const Bmw850 = new dadCar(`1991 BMW¨ 850i.JPG`);

const DodgVipr = new dadCar(`1997 Dodger Viper GTS.JPG`);
//GONE const PrwlrMull = new dadCar(`2001 Prowler Mullholland Edition.jpeg`);

const AstMart = new dadCar(`2002 Aston Martin Vantage Stratstone Jubilee Limited Edition.JPG`);

const Shelby = new dadCar(`2013 Shelby American¨ GT500.JPG`);
const Corvtte = new dadCar('2016 Corvette¨ Z06.jpg');
const MerceGTR = new dadCar(`2019 Mercedes-AMG¨ GTR.jpeg`);

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

// array til å hente biler.
//const vehicleCollection = [PrwlrMull, MerceGTR, Shelby, car2, car2];
const vehicleCollection = [
    MerceBnz, BmwRS, Clenet,    JagXJS, Bmw850, DodgVipr,
    AstMart, Shelby, Corvtte,   MerceGTR, Porsche911, IndFTR
];


// bruker constructor fra dadCar til å lage videosider
const vid1 = new dadCar(`2019 CLASSIC DRIVE OUT¨ Day 2 Vestfold.jpg`,
    `2019 Day 2 Vestfold Classic Drive Out.mp4`);
const vid2 = new dadCar(`2019 JARLSØ DRIVE OUT.png`,
    `2019 Jarlsø Drive Out.mp4`);
const vid3 = new dadCar(`2019 NOEN av BILENE.png`,
    ``, // FILENAME MISSING
);

const vid4 = new dadCar(`2021 SHELBY GT500.png`,
    `2021 Shelby Gt500 Mustang.mp4`
);
const vid5 = new dadCar(`2022 CORVETTE C7 Z06 SUPERCHARGED¨ 2016.png`,
    `CE4ZdZgBWC8.yt`//got a method for making it pure AND for getting the tail
);
const vid6 = new dadCar(`2023 1- UK Garage.png`,
    `2023 1-Uk Garage.mp4`
);

const vid7 = new dadCar(`2023 2 - US Garage.png`,
    `2023 2-Us Garage.mp4`
);
const vid8 = new dadCar(`2023 3 - Germany Garage.png`,
    `2023 3-De Garage.mp4`
);
const vid9 = new dadCar(`2023 Aston Martin DB7 - Vantage Coupe v12.png`,
    `2023 Aston M Db7 - Hd.mp4`
);


// array, henter videoer
const driveoutVideos = [
    vid1, vid2, vid3,
    vid4, vid5, vid6,
    vid7, vid8, vid9
];