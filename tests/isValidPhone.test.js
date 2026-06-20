import { Appointment } from '../src_1/src/models/Appointment';
test('se valida el formato de telefono usado en bolivia', () => {
    const citaBuena = new Appointment({ patient_phone: '77654321' });
    const citaMala = new Appointment({ patient_phone: '12345678' }); 
    expect(citaBuena.isValidPhone()).toBe(true);
    expect(citaMala.isValidPhone()).toBe(false);
});