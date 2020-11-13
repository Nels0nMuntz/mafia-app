export const headerAPI = {
    getCategories(){
        return fetch('http://localhost:3001/categories/')
            .then(response => response.json())
            .then(data => data)
    }
}