export const colors = {
    main: '#FA9494',
    secondary: '#ffffff'
    // secondary: '#CFD2CF'
}

export const getColorBar = (name) => {
    if(!name) return '#ccc'

    return barColors[name]
}
const barColors = {
    "Dulce de leche": '#d9873f',
    "Chocolate": '#311718',
    "Vainilla": '#ffd258',
    "Limón": '#fbcd10',
    "Frutos secos": '#a5aeaa',
    "Naranja": '#ff9c00',
    "Membrillo": '#8c262b',
    "Marmolado": '#956934',
}