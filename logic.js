const locationPics = document.getElementById('Locales')

function FindShow(Location){
    let y = locationPics.querySelectorAll(`.${Location}`);
    locationPics.innerHTML = '';
    console.log(y);
    y.forEach(element => {
        locationPics.innerHTML+= element.outerHTML;
    });
}