const isEmpty = (a) => {
    return (a == null || a.length === 0)
}

const getRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * max) + min
}

export default {
    isEmpty,
    getRandomNumberBetween
}