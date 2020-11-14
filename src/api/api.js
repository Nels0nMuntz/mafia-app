export const headerAPI = {
    getCategories(){
        return fetch('http://localhost:3001/header-categories/')
            .then(response => response.json())
            .then(data => data)
    }
}
export const filterAPI = {
    getCategories(){
        return fetch('http://localhost:3001/sort-categories/')
            .then(response => response.json())
            .then(data => data)
    }
}