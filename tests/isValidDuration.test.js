import { Appointment } from '../src_1/src/models/Appointment';
test('las citas que duran mas de 2 horas seran rechazadas', () => {
    const cita = new Appointment({});
    const inicio = '2026-06-01T10:00:00Z';
    const horaFin = '2026-06-01T13:00:00Z'; 
    const esValido = cita.isValidDuration(inicio, horaFin);
    expect(esValido).toBe(false);
});