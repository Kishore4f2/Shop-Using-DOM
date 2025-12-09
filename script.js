async function getdata() {
    try{
        let res = await fetch("https://fakestoreapi.com/products")
        if(!res.ok){
            throw new Error("Something went wrong")
        }
        let data = await res.json()
        fetchdata(data)
    }
    catch(err){
        console.log(err.message)
    }
}

function fetchdata(data){
    let container = document.getElementById("Shopping")
    data.forEach((el) => {
        let child = document.createElement("div")
        child.innerHTML = `
        <img src=${el.image} alt="image" width="100px" height="100px"/>
        <h3>${el.title}</h3>
        <p>Category: ${el.category}</p>
        <p>Price: $${el.price}</p>
        <p>Rating: ${el.rating.rate} (${el.rating.count} reviews)</p>
        `
        container.appendChild(child)
    })

}
getdata()

