export const getEvents = () => {
    let events = []

    for (let index = 0; index < 10; index++) {
        events.push({
            id: index,
            name: `Evento No. ${index}`
        })
    }

    return events

}