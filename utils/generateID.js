const generateId = (limit = 40) => {
    const characts = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ1234567890'

    let id = ''

    for (let i = 0; i < limit; i++) {
        const randomNumber = Math.floor(Math.random() * characts.length)

        id += characts[randomNumber]

    }
    return id
}
export default generateId