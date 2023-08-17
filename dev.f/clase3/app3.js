// sismular una solicitus a un servidor para obtener datos del usuario

const userData = (userID) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            // declaramos un objeto de nombre usersData y lo llenamos con informacion
            const usersData = {
                1: { name: "Ivan", age: 22 },
                2: { name: "Dolores", age: 23 },
                3: { name: "Fabian", age: 22 }
            }

            const userData = usersData[userID]

            if (userData) {
                resolve(userData)
            } else {
                reject(new Error("User not found"))
            }
        }, 2000)
    })
}

userData(1)
    .then((user) => { console.log("User data ", user) })
    .catch((error) => { console.log("ERROR ", error) })