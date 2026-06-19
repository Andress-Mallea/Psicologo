import { Appointment } from '../src_1/src/models/Appointment';
    test('isValidPhone debe retornar true solo si empieza con 6 o 7 y tiene 8 dígitos', () => {
        const apptValido = new Appointment({ patient_phone: '71234567' });
        const apptInvalido = new Appointment({ patient_phone: '12345' });
        
        expect(apptValido.isValidPhone()).toBe(true);
        expect(apptInvalido.isValidPhone()).toBe(false);
    });