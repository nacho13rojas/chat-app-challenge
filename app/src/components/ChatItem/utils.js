export const getFormattedTime = (time) => {
    const date = new Date(time)
    const hour = date.getHours()
    const minutes = date.getMinutes()
    return `${hour}:${minutes}`
}
