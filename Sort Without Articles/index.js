const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
// const copy = bands.slice("");
var items = []
console.log(bands);

for( let band in bands){
    console.log(band);
    if(bands[band].includes("A ")){
        console.log(bands[band]);
        items.push(bands[band])
        bands[band] = bands[band].replace("A ", "")
    }
    if(bands[band].includes("An ")){
        console.log(bands[band]);
        items.push(bands[band])
        bands[band] = bands[band].replace("An ", "")
    }
    if(bands[band].includes("The ")){
        console.log(bands[band]);
        items.push(bands[band])
        bands[band] = bands[band].replace("The ", "")
    }
}
console.log(bands.sort(), items);
for(let band in bands){
    for (let item in items){
        if (items[item].includes(bands[band])){
            console.log(bands[band], items[item]);
            bands[band] = bands[band].replace(bands[band], items[item]);
        }
    }
}
console.log(bands);

document.querySelector("#bands").innerHTML = bands.map(band => `<li> ${band} <li>`).join("");