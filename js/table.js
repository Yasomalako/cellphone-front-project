let url = `https://my-json-server.typicode.com/Jeck99/fake-server/devices`
let users = `https://my-json-server.typicode.com/Jeck99/fake-server/users`

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


const tablebody = document.getElementById("users_data");
function usersTable() {
    getUsersApi()
        .then(result => {
            result.forEach(item => {
                tablebody.innerHTML +=
                    `
                <tr>
                <td>${item.age}</td>
                <td>${item.name.first}</td>
                <td>${item.name.last}</td>
                <td>${item.email}</td>
                <td>${item.index}</td>
                <td>${item.phone}</td>
                <td>${item.picture}</td>
                </tr>
                `
            });
        })
}
usersTable();