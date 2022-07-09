let url = `https://my-json-server.typicode.com/Jeck99/fake-server/devices`
let users = `https://my-json-server.typicode.com/Jeck99/fake-server/users`
let id = `https://my-json-server.typicode.com/Jeck99/fake-server/devices/id`
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
        <button id="del_btn" onclick="deletObject(id)">dellete</button>
    </div>
    </div>`
    });


}
getDevice()

async function deletObject(id) {
    try {
        let response = await fetch( `${id}`, {
            method: 'DELETE',

        }).then(res => console.log(res + "the obgect deleted secssecfully"))
        if (response.status <= 299)
            document.getElementById(id).remove()
    }
    catch (err) {console.log(err); }
    finally{
        
    }
}
