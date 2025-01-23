// bonne as in "bønne" as in java bean
let hmm = "The fucking car website!";
let gg = "Bring brang ba bring bram ba bring bram ba-bom";

document.getElementsByTagName("title")[0].innerHTML = hmm;
document.getElementById("hi").innerHTML += "" + gg;
let ahaaa = document.getElementById("two");
ahaaa.innerHTML = "gyg";
ahaaa.style = "color: cadetblue";


function dadCar(name, model, year, image){
    this.carName = name;
    this.carModel = model;
    this.carYear = year;
    this.carImg = image;
}

const MrgnPlus = new dadCar("Morgan Plus", 8, 1994, `<img src="cars\\1994 morgan plus 8.jpg" alt="Morgan">`);
const PrwlrMull = new dadCar("Prowler Mullholland", "Edition", 2001, `<img src="cars\\2001 Prowler Mullholland Edition.jpeg"></img>`);

document.getElementById("car1").innerHTML = MrgnPlus.carImg;
