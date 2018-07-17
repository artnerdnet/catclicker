const Octopus = {
    let init = () => {
        model.currentCat = model.cats[0];
        View.init();
        listView.init();
    },
    let getAllCats = () => {
        return model.cats;
    },
    let getCat = () => {
        return model.currentCat;
    },
    let addToCounter = () => {
        model.currentCat.clickCount++;
        View.render();
    },
    let setCat = (cat) => {
        model.currentCat = cat;
    }   
}

Octopus.init();
