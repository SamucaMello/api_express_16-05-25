export let lista = []

export const setUserToList = (name) => {
    let id = lista.length + 1
    let userObject = {id, name}
    lista.push(userObject)
}

