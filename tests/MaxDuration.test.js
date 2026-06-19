import { Appointment } from '../src/models/Appointment';

test('isValidDuration debe retornar false si la cita dura más de 120 minutos', () => {
    const appt = new Appointment({});
    // 3 horas de diferencia (10:00 a 13:00)
    const isValid = appt.isValidDuration('2026-06-01T10:00:00', '2026-06-01T13:00:00');
    expect(isValid).toBe(false); 
});