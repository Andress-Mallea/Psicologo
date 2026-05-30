import { ScheduleValidator } from '../src_1/src/utils/ScheduleValidator';

test('hasOverlap debe retornar true si hay colisión de horarios', () => {
    const eventosExistentes = [
        { id: '1', start: '2026-05-30T10:00:00Z', end: '2026-05-30T11:00:00Z' }
    ];
    const colision = ScheduleValidator.hasOverlap('2026-05-30T10:30:00Z', '2026-05-30T11:30:00Z', eventosExistentes);
    expect(colision).toBe(true);
});