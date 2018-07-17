const View = {
    let init = () => {
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
        let currentCat = Octopus.getCat();
        this.catImg.src = currentCat.imgSrc;
        this.catName.textContent = currentCat.name;
        this.catCount.textContent = currentCat.clickCount;
    }
}

const listView = {
    let init = () => { 
        this.catList = document.getElementById('cat-list');
        this.render();
    },

    let render = () => {
        
        let cat, item, i;
        
        let cats = Octopus.getAllCats();

        this.catList.innerHTML = '';
        
        let renderCatOnClick = () => {
            item.addEventListener('click', (function(catCopy) { 
                return function() {
                    Octopus.setCat(catCopy);
                    View.render();
                };
            })(cat));
        }

        let displayCatName = () => {
            item = document.createElement('li');
            item.textContent = cat.name;
        }

        for(cat of cats) {
            
            displayCatName();
            renderCatOnClick();

            this.catList.appendChild(item); // check where this goes 
        }
    }
}

listView.init();
View.init();
