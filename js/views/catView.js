const View = {
    
    init: function() {
        // aca va todo lo que agarra las cosas del dom
        this.catImg = document.getElementById('cat-img');
        this.catName = document.getElementById('cat-name');
        this.catCount = document.getElementById('cat-count');

        this.catImg.addEventListener('click', function() {
            Octopus.addToCounter();
        });

        this.render();

    },

    

    render: function() {
        // aca va todo lo que modifica el dom en si mismo, conectandose con el octopus
        var currentCat = Octopus.getCat();
        this.catImg.src = currentCat.imgSrc;
        this.catName.textContent = currentCat.name;
        this.catCount.textContent = currentCat.clickCount;
    }

}

const listView = {
 

    init: function(){
        this.catList = document.getElementById('cat-list');
        this.render();
    },

    render: function(){

        var cat, item, i;
        
        var cats = Octopus.getAllCats();

        this.catList.innerHTML = '';

        for (i=0; i < cats.length; i++){ 

            cat = cats[i];
            
            item = document.createElement('li');
            
            item.textContent = cat.name;
            
            item.addEventListener('click', (function(catCopy) { 
                return function() {
                    Octopus.setCat(catCopy);
                    View.render();
                };
            })(cat));

            this.catList.appendChild(item); // check where this goes 
            


        }
        

    }



};

listView.init();
View.init();