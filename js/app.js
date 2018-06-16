// MODEL



var model = {

    // object with different cats starts here

    cats: [
        {
            name: 'Orson',
            imgSrc: 'img/orson.png',
            clickCount: 0, 
        },

        {
            name: 'Quentin',
            imgSrc: 'img/quentin.png',
            clickCount: 0, 
        },

        {
            name: 'Jean',
            imgSrc: 'img/jean.png',
            clickCount: 0, 
        },

        {
            name: 'Alfred',
            imgSrc: 'img/alfred.png',
            clickCount: 0, 
        },

    ]


}

function triggering() {
    for (i = 0; i < model.cats.length;   i++) {
        window.onclick = document.getElementById('imgContainer').src = model.cats[i].imgSrc;
        i++;
    }
        
}

/*

function sayMyName() {
    for (i = 0; i < model.cats.length; i++) {
        catList = model.cats[i];
        elem = document.getElementById('nameContainer');
        elem.textContent = cat.name;

    }
   window.onload = this.elem.appendChild(elem);

}*/

//window.onload = document.getElementById('imgContainer').src = model.cats[1].imgSrc;
window.onload = document.getElementById('nameContainer').innerText = model.cats[1].name;
window.onload = document.getElementById('counterContainer').innerText = model.cats[1].clickCount;


// event listener 



 function makeList() {
    for (i = 0; i < model.cats.length;   i++) {
        let li = document.createElement("li");
        document.getElementById('catList').appendChild(li);
        li.innerText = model.cats[i].name;

 }
       i++;
    }


    

 function printPics() { // prints pics! 
    for (i = 0; i < model.cats.length; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", model.cats[i].imgSrc);
        img.setAttribute("id", model.cats[i].name);
        img.setAttribute("width", 100);
        img.setAttribute("height", 100);
        document.getElementById('imgDiv').appendChild(img);
 }
       i++;
/*
        const element = document.querySelectorAll('.imgDiv').children;
        for (i = 0; i < element.length; i++) {
        element.addEventListener('click', function() {
            document.getElementById('imgContainer').
        })
    }*/
        
    }

    function addEv() { // adds click event to every cat
    for (i = 0; i < model.cats.length;   i++) {
        const element = document.getElementById('imgDiv').children;
        element[i].addEventListener('click', function() {
            let catWindow = document.getElementById('imgContainer');
            catWindow.setAttribute("src", 'model.cats.imgSrc[1]')
            console.log('hi') // replace with action to print the cat bigger
        })
    }
}







//});














/*

// OCTOPUS
// on click it fetches the image and the info and it renders it 


function myFunction() {

    for (var i = 0; i < model.cats.length; i++) {
        
        document.getElementById("catPic").src = model.cats[i].imgSrc;
       
        i++;
        
    }
   
    
}


var el = document.getElementById('catPic');

el.addEventListener('click', function() {
    for (var i = 0; i < model.cats.length; i++) {
        
        el.src = model.cats[1].imgSrc;       
        i++;
        
    }
});




// VIEW

// catViewer -> div with the info and pic of the cat selected (text, img, name)
// catSelector -> list of cats that you can click (names)

var view = {

    render: function() {
    catSelector = document.getElementsByClassName('catSelector');

    catViewer = document.getElementsByClassName('catViewer'); 

    catSelector.innerHTML = selectedCat;
    catViewer.innerHTML = '';

    }




}



*/