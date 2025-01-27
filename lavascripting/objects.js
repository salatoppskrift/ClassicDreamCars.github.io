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

const PrwlrMull = new dadCar("Prowler Mullholland", "Edition", 2001, `<img src="cars\\2001 Prowler Mullholland Edition.jpeg"></img>`);
const car2 = new dadCar("a", "b", 1, "d");

// array til å hente biler.
const vehicleCollection = [car2, car2, car2, car2, car2
];


// bruker constructor fra dadCar til å lage videosider
const vid1 = new dadCar("Driveout 1", "", "32.mai 2013", "videofile1");
const vid2 = new dadCar("Driveout 2", "", "30.januar 3013", "videofile2");
const vid3 = new dadCar("Driveout 3", "", "0.april 13", "videofile3");
const vid4 = new dadCar("Driveout 4", "", "5.desember 9013", "videofile4");

// array, henter videoer
const driveoutVideos = [vid1, vid2, vid3, vid4];