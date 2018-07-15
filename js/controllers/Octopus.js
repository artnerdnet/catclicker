const Octopus = {
    init: function() { 
        model.currentCat = model.cats[0];
        View.init();
        listView.init();
    },

    getAllCats: function(){
        return model.cats;
    },

    getCat: function() {
        return model.currentCat;
    },

    addToCounter: function() {
        model.currentCat.clickCount++;
        View.render();
    },

    setCat: function(cat) {
        model.currentCat = cat;
    }   
}

Octopus.init();
