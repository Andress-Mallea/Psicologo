export const ScheduleValidator = {
    hasOverlap(newStartStr, newEndStr, existingEvents, excludeId = null) {
        const nStart = new Date(newStartStr).getTime();
        const nEnd = new Date(newEndStr).getTime();
        
        return existingEvents.some(event => {
            if (event.id === excludeId) return false;
            const eStart = new Date(event.start).getTime();
            const eEnd = new Date(event.end).getTime();
            return (nStart < eEnd && nEnd > eStart);
        });
    }
};