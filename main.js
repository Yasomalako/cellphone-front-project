// let imge = `https://www.world-today-news.com/iphone-13-pro-max-gets-an-always-on-screen-with-a-refresh-rate-of-120hz/`
let url = `https://my-json-server.typicode.com/Jeck99/fake-server/devices`

async function cardPrinter() {
    try {
        await fetch(url).then(res => json())
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