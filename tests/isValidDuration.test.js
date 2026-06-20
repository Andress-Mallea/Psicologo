import { Appointment } from '../src_1/src/models/Appointment';
test('las citas que duran mas de 2 horas seran rechazadas', () => {
    const appt = new Appointment({});
    const start = '2026-06-01T10:00:00Z';
    const endExcesivo = '2026-06-01T13:00:00Z'; 
    const result = appt.isValidDuration(start, endExcesivo);
    expect(result).toBe(false);
});