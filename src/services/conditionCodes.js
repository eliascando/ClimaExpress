const conditionCodes = {
    1000: "Cielo despejado",
    1003: "Parcialmente nublado",
    1006: "Mayormente nublado",
    1009: "Nublado",
    1030: "Niebla o neblina",
    1063: "Lluvia ligera",
    1066: "Lluvia ligera congelada",
    1069: "Lluvia ligera y nieve",
    1072: "Lluvia congelada",
    1114: "Lluvia y nieve",
    1117: "Granizo",
    1135: "Niebla",
    1147: "Bruma",
    1150: "Lluvia moderada",
    1153: "Lluvia moderada congelada",
    1168: "Lluvia moderada y nieve",
    1171: "Lluvia intensa congelada",
    1180: "Lluvia ligera con tormenta",
    1183: "Lluvia moderada con tormenta",
    1186: "Lluvia intensa con tormenta",
    1189: "Lluvia ligera con tormenta y granizo",
    1192: "Lluvia moderada con tormenta y granizo",
    1195: "Lluvia intensa con tormenta y granizo",
    1198: "Llovizna con tormenta",
    1201: "Lluvia con tormenta",
    1204: "Lluvia intensa con tormenta",
    1207: "Llovizna con tormenta y granizo",
    1210: "Lluvia con tormenta y granizo",
    1213: "Lluvia intensa con tormenta y granizo",
    1216: "Nieve ligera con tormenta",
    1219: "Nieve moderada con tormenta",
    1222: "Nieve intensa con tormenta",
    1225: "Nieve ligera con tormenta y granizo",
    1237: "Nieve moderada con tormenta y granizo",
    1240: "Nieve intensa con tormenta y granizo",
    1243: "Lluvia y nieve con tormenta",
    1246: "Lluvia y nieve intensa con tormenta",
    1249: "Lluvia y nieve con tormenta y granizo",
    1252: "Lluvia y nieve intensa con tormenta y granizo",
    1273: "Lluvia helada",
    1276: "Lluvia helada ligera",
    1279: "Lluvia helada moderada",
    1282: "Lluvia helada intensa",
    1285: "Lluvia y nieve helada ligera",
    1288: "Lluvia y nieve helada moderada",
    1291: "Lluvia y nieve helada intensa"
};
const iconCodes = {
    1000: "bi-sun", // Cielo despejado
    1003: "bi-cloud-sun", // Parcialmente nublado
    1006: "bi-cloud", // Mayormente nublado
    1009: "bi-cloudy", // Nublado
    1030: "bi-cloud-haze", // Niebla o neblina
    1063: "bi-cloud-drizzle", // Lluvia ligera
    1066: "bi-cloud-sleet", // Lluvia ligera congelada
    1069: "bi-cloud-snow", // Lluvia ligera y nieve
    1072: "bi-cloud-sleet", // Lluvia congelada
    1114: "bi-cloud-snow", // Lluvia y nieve
    1117: "bi-cloud-hail", // Granizo
    1135: "bi-cloud-fog", // Niebla
    1147: "bi-cloud-haze", // Bruma
    1150: "bi-cloud-drizzle", // Lluvia moderada
    1153: "bi-cloud-sleet", // Lluvia moderada congelada
    1168: "bi-cloud-snow", // Lluvia moderada y nieve
    1171: "bi-cloud-hail", // Lluvia intensa congelada
    1180: "bi-cloud-drizzle", // Lluvia ligera con tormenta
    1183: "bi-cloud-drizzle", // Lluvia moderada con tormenta
    1186: "bi-cloud-lightning-rain", // Lluvia intensa con tormenta
    1189: "bi-cloud-lightning-rain", // Lluvia ligera con tormenta y granizo
    1192: "bi-cloud-lightning-rain", // Lluvia moderada con tormenta y granizo
    1195: "bi-cloud-lightning-rain", // Lluvia intensa con tormenta y granizo
    1198: "bi-cloud-lightning", // Llovizna con tormenta
    1201: "bi-cloud-lightning", // Lluvia con tormenta
    1204: "bi-cloud-lightning", // Lluvia intensa con tormenta
    1207: "bi-cloud-lightning", // Llovizna con tormenta y granizo
    1210: "bi-cloud-lightning", // Lluvia con tormenta y granizo
    1213: "bi-cloud-lightning", // Lluvia intensa con tormenta y granizo
    1216: "bi-cloud-snow", // Nieve ligera con tormenta
    1219: "bi-cloud-snow", // Nieve moderada con tormenta
    1222: "bi-cloud-snow", // Nieve intensa con tormenta
    1225: "bi-cloud-snow", // Nieve ligera con tormenta y granizo
    1237: "bi-cloud-snow", // Nieve moderada con tormenta y granizo
    1240: "bi-cloud-snow", // Nieve intensa con tormenta y granizo
    1243: "bi-cloud-snow", // Lluvia y nieve con tormenta
    1246: "bi-cloud-snow", // Lluvia y nieve intensa con tormenta
    1249: "bi-cloud-snow", // Lluvia y nieve con tormenta y granizo
    1252: "bi-cloud-snow", // Lluvia y nieve intensa con tormenta y granizo
    1273: "bi-cloud-hail", // Lluvia helada
    1276: "bi-cloud-hail", // Lluvia helada ligera
    1279: "bi-cloud-hail", // Lluvia helada moderada
    1282: "bi-cloud-hail", // Lluvia helada intensa
    1285: "bi-cloud-snow", // Lluvia y nieve helada ligera
    1288: "bi-cloud-snow", // Lluvia y nieve helada moderada
    1291: "bi-cloud-snow", // Lluvia y nieve helada intensa
};

const windDirections = {
    N: "bi-arrow-up", // Norte
    NNE: "bi-arrow-up-right", // Norte-noreste
    NE: "bi-arrow-up-right", // Noreste
    ENE: "bi-arrow-up-right", // Este-noreste
    E: "bi-arrow-right", // Este
    ESE: "bi-arrow-down-right", // Este-sureste
    SE: "bi-arrow-down-right", // Sureste
    SSE: "bi-arrow-down-right", // Sur-sureste
    S: "bi-arrow-down", // Sur
    SSW: "bi-arrow-down-left", // Sur-suroeste
    SW: "bi-arrow-down-left", // Suroeste
    WSW: "bi-arrow-down-left", // Oeste-suroeste
    W: "bi-arrow-left", // Oeste
    WNW: "bi-arrow-up-left", // Oeste-noroeste
    NW: "bi-arrow-up-left", // Noroeste
    NNW: "bi-arrow-up-left", // Norte-noroeste
};

const uvIndexDescription = {
    0: "Sin riesgo (No hay radiación UV)",
    1: "Sin riesgo (Bajo)",
    2: "Bajo (Mínimo)",
    3: "Bajo (Bajo)",
    4: "Moderado",
    5: "Moderado",
    6: "Alto",
    7: "Alto",
    8: "Muy alto",
    9: "Muy alto",
    10: "Extremo",
    11: "Extremo",
};

export const getConditionCode = (code) => {
    return conditionCodes[code];
}
export const getIconCode = (code, day) => {
    if (day && code === 1000) {
        return "bi-brightness-high";
    }else if(!day && code === 1000) {
        return "bi-moon";
    }else if (day && code === 1003) {
        return "bi-cloud-sun";
    }else if(!day && code === 1003) {
        return "bi-cloud-moon";
    }

    return iconCodes[code];
}

export const getWindDirectionIcon = (direction) => {
    return windDirections[direction];
}

export const getUVDescription = (uvIndex) => {
    return uvIndexDescription[uvIndex];
}