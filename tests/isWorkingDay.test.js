import { DateUtils } from '../src_1/src/utils/DateUtils';
test('no deberia haber citas los domingos', () => {
    const fechaDomingo = '2026-05-31T09:00:00Z'; 
    const result = DateUtils.isWorkingDay(fechaDomingo);
    expect(result).toBe(false);
});