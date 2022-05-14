const getDateAgoString = (dateString) => {
    const deltaTimestamp = new Date().getTime() - new Date(dateString).getTime();
    const deltaMinutes = deltaTimestamp / 1000 / 60;
    const deltaHours = deltaMinutes / 60;
    const deltaDays = deltaHours / 24;

    if (deltaDays >= 1) {
        const num = deltaDays.toFixed(0);
        return {text:'дн.', num};
    }
    if (deltaHours >= 1) {
        const num = deltaHours.toFixed(0);
        return {text:'ч.', num};
    }
    const num = deltaMinutes.toFixed(0);
    return {text:'мин.', num};
};

export { getDateAgoString };