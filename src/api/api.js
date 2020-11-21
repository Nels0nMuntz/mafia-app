export const headerAPI = {
    getCategories(){
        return fetch('http://localhost:3001/header-categories/')
            .then(response => response.json())
            .then(data => data)
    }
};
export const filterAPI = {
    getCategories(){
        return fetch('http://localhost:3001/sort-categories/')
            .then(response => response.json())
            .then(data => data)
    }
};
export const menuAPI = {
    getCategories(){
        return fetch('http://localhost:3001/menu-categories/')
            .then(response => response.json())
            .then(data => data)
    }
};
export const homeAPI = {
    getMainSliderData(){
        return fetch('http://localhost:3001/main-slider/')
            .then(response => response.json())
            .then(data => data)
    },
};