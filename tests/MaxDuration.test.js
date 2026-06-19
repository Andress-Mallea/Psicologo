import { Appointment } from '../src_1/src/models/Appointment';

test('isValidDuration debe retornar false si la cita dura más de 120 minutos', () => {
    const appt = new Appointment({});
    const isValid = appt.isValidDuration('2026-06-01T10:00:00', '2026-06-01T13:00:00');
    expect(isValid).toBe(false);
});