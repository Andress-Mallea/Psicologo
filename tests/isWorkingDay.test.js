import { DateUtils } from '../src_1/src/utils/DateUtils';
test('no deberia haber citas los domingos', () => {
    const domingo = '2026-05-31T09:00:00Z'; 
    const resultado = DateUtils.isWorkingDay(domingo);
    expect(resultado).toBe(false);
});