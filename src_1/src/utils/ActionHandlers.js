export function handleActionSuccess(message, eventData, actionType, calendarUI, modalUI) {
    if (actionType === 'create') calendarUI.addEventToUI(eventData);
    if (actionType === 'update') {
        const event = calendarUI.calendar.getEventById(eventData.id);
        if (event) {
            event.setProp('title', eventData.title);
            event.setDates(eventData.start, eventData.end);
        }
    }
    modalUI.close();
    modalUI.showToast(message);
}
