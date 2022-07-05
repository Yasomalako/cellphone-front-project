// let imge = `https://www.world-today-news.com/iphone-13-pro-max-gets-an-always-on-screen-with-a-refresh-rate-of-120hz/`
let url = `https://my-json-server.typicode.com/Jeck99/fake-server/devices`

async function cardPrinter() {
    try {
        await fetch(url).then(res => res.json())
    }
    catch (err) {
        console.log(err);
    }
    finally { }
}

cardPrinter()
//  function cardTemplate(device){
// return `<div class="col">
// <div class="card h-100">
// <img src="${imge}" class="card-img-top" alt="...">
// <div class="card-body">
//     <h5 class="card-title">IPhon xy</h5>
//     <p class="card-text">
//         price: ${device.price} ;<br>
//         isAvailable: ${device.isAvailable} ;<br>
//         createdAt: ${device.createAt} ;<br>
//         color:  ${device.color} ;<br>
//         brand: ${device.brand} ;<br>
//         ram:  ${device.ram};<br>
//         picture: ${device.picture} ;<br>
//     </p>
// </div>
// </div>`
// }
async function getDevice() {
    cardPrinter()
    let resulte = await fetch(url)
        .then(res => res.json())
    resulte.forEach(element => {
        rows.innerHTML += `<div class="col">
    <div class="card h-100">
    <img picture:src="${element.picture}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">brand: ${element.brand} </h5>
        <p class="card-text">
            price: ${element.price} ;<br>
            isAvailable: ${element.isAvailable} ;<br>
            createdAt: ${element.createAt} ;<br>
            color:  ${element.color} ;<br>
            ram:  ${element.ram};<br>
        </p>
    </div>
    </div>`
    });


}
getDevice()


async function addObjBtn() {
    let inputs = document.getElementsByClassName("form_input")
    const devices = {
        phone: {
            Brand: input_brand.value,
            Color: input_color.value,
            Ram: input_ram.value,
            createdAt: input_madein.value,
            Price: input_cost.value,

        }
    }
    try {
        loded.innerHTML = "<img style=  'width=20vw' src='loading-gif-icon-0 yaso project.jpg'>"
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(devices),
            headers: { 'Content-Type': 'application/json' },
        }).then(result => console.log(result))
    }
    catch (error) { console.log("some thing went wrong") }
    finally {
        input_brand.value= ''
        input_color.value= ''
        input_ram.value= ''
        input_madein.value= ''
        input_cost.value= '' 
        loded.innerHTML = ""   
    }
}

async function deletObject(id) {
    try {
        let response = await fetch(url+id, {
            method: 'DELETE',
            body: res.json()
        })
        if(response.status<=299)
            document.getElementById(id).remove()
    }
    catch(err){}
}
