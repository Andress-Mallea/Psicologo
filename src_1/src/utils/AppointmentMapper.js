export const AppointmentMapper = {
    toCalendarEvent(appt) {
        return {
            id: appt.id,
            title: `${appt.patient_name} - Sesión de ${appt.type}`,
            start: appt.start_time,
            end: appt.end_time,
            backgroundColor: appt.status === 'confirmed' ? '#28a745' : '#ffc107'
        };
    }
};