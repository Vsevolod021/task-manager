export const getSprintDates = (
    currentDate: Date,
): { startDate: string; endDate: string } => {
    let startDate =
        currentDate.getFullYear() +
        '-' +
        ('0' + (currentDate.getMonth() + 1)).slice(-2) +
        '-' +
        ('0' + currentDate.getDate()).slice(-2);

    currentDate.setMonth(currentDate.getMonth() + 1);

    let endDate =
        currentDate.getFullYear() +
        '-' +
        ('0' + (currentDate.getMonth() + 1)).slice(-2) +
        '-' +
        ('0' + currentDate.getDate()).slice(-2);

    return {
        startDate: startDate,
        endDate: endDate,
    };
};
