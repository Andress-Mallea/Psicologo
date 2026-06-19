export const DateUtils = {
    parseToISO(day, monthName, timeStr, currentYear) {
        const months = { 'Enero': 0, 'Febrero': 1, 'Marzo': 2, 'Abril': 3, 'Mayo': 4, 'Junio': 5, 'Julio': 6, 'Agosto': 7, 'Septiembre': 8, 'Octubre': 9, 'Noviembre': 10, 'Diciembre': 11 };
        const month = months[monthName] ?? 0;
        const dayInt = parseInt(day, 10);
        
        const timeMatch = timeStr.toUpperCase().match(/(\d{1,2}):(\d{2})\s?(AM|PM)/);
        if (!timeMatch) throw new Error("Formato de hora inválido");
        
        let [_, hours, minutes, modifier] = timeMatch;
        hours = parseInt(hours, 10);
        if (modifier === 'PM' && hours < 12) hours += 12;
        if (modifier === 'AM' && hours === 12) hours = 0;
        
        return new Date(currentYear, month, dayInt, hours, parseInt(minutes)).toISOString();
    },
    isWorkingDay(isoString) {
        const date = new Date(isoString);
        const SUNDAY = 0; 
        return date.getDay() !== SUNDAY;
    }
};