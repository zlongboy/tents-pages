
var content = document.querySelector('#content');

content.innerHTML = "President " + pres.fullName() + " was president number " + pres.order + " of the United States of America.";

//print properties and data type typeOf
//print prints only properties and data types that are owned by object (eg. not prototype)

for (prop in pres) {
    console.log (prop + ' ' + typeof(pres[prop]))
}

console.log("--end")

for (prop in pres) {
    if (pres.hasOwnProperty(prop)) {
        console.log ("Owns: " + prop + ' ' + typeof(pres[prop]))
    }
}