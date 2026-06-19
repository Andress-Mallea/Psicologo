import { DateUtils } from '../src/utils/DateUtils';
test('isWorkingDay debe retornar false si la fecha cae en Domingo', () => {
    const domingoISO = '2026-05-31T10:00:00Z'; 
    expect(DateUtils.isWorkingDay(domingoISO)).toBe(false);
});