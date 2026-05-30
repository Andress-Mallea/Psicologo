import { TimeConstants } from '../src/utils/Constants';

test('TimeConstants debe tener la configuración correcta de negocio', () => {
    expect(TimeConstants.MIN_APPOINTMENT_DURATION_MINUTES).toBe(30);
});