const getData = (endPoint) => {
    return fetch(`http://localhost:3080/${endPoint}/`)
        .then(response => response.json())
        .then(data => data)    
}
export const headerAPI = {
    getCategories(){return getData('header-categories')},
    getMenu(){return getData('menu')},
};
export const filterAPI = {
    getCategories(){return getData('sort-categories')}
};
export const menuAPI = {
    getCategories(){return getData('menu-categories')}
};
export const homeAPI = {
    getMainSliderData(){return getData('main-slider')},
    getHomeSlider(){return getData('recommend-slider')},
};
export const catalogAPI = {
    getPizzaCatalog(){
        return fetch(`http://localhost:3080/catalog/`)
        .then(response => response.json())
        .then(data => data.pizza)  
    },
};