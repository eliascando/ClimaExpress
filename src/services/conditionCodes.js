import conditionCodes from './../data/condition.codes.json' assert { type: 'json' };
import iconCodes from './../data/icon.codes.json' assert { type: 'json' };
import windDirections from './../data/wind-direction.codes.json' assert { type: 'json' };
import uvIndexDescription from './../data/uv-index.description.json' assert { type: 'json' };

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