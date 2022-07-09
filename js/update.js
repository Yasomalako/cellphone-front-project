let url = `https://my-json-server.typicode.com/Jeck99/fake-server/devices`
let users = `https://my-json-server.typicode.com/Jeck99/fake-server/users`

async function addObjBtn() {
    const devices = {
        phone: {
            Brand: brand_input.value,
            Color: color_input.value,
            Ram: ram_input.value,
            createdAt: madeIn_input.value,
            Price: cost_input.value,

        }
    }
    try {
        loded.innerHTML = "<img style=  'width=20vw' src='/imgs/loading-gif-icon-0 yaso project.jpg'>"
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(devices),
            headers: { 'Content-Type': 'application/json' },
        }).then(result => console.log(result))
    }
    catch (error) { console.log("some thing went wrong") }
    finally {
        input_brand.value = ''
        input_color.value = ''
        input_ram.value = ''
        input_madein.value = ''
        input_cost.value = ''
        loded.innerHTML = ""
    }
}

async function getUsersApi() {
    try {
      const result= await fetch(users)
    return result.json()    
    
    }  
    catch (err) {
        alert("sory we got error")
    }
    finally { }
}getUsersApi().then(res => console.log(res))

