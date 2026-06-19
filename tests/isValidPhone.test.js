import { Appointment } from '../src_1/src/models/Appointment';
test('isValidPhone', () => {
    const apptBolivia = new Appointment({ patient_phone: '77654321' });
    const apptFalso = new Appointment({ patient_phone: '12345678' }); 
    const resultBolivia = apptBolivia.isValidPhone();
    const resultFalso = apptFalso.isValidPhone();
    expect(resultBolivia).toBe(true);
    expect(resultFalso).toBe(false);
});