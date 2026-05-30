import { DateUtils } from '../src/utils/DateUtils';

test('parseToISO debe convertir fecha en español a formato ISO correctamente', () => {
    const iso = DateUtils.parseToISO('15', 'Marzo', '02:30 PM', 2026);
    expect(new Date(iso).getHours()).toBe(14);
});