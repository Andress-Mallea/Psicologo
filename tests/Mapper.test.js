import { AppointmentMapper } from '../src_1/src/utils/AppointmentMapper';

test('toCalendarEvent debe asignar color verde (#28a745) a una cita confirmada', () => {
    // Arrange (Preparar)
    const citaConfirmada = {
        id: '123',
        patient_name: 'Ana Gomez',
        type: 'Terapia Individual',
        start_time: '2026-06-01T15:00:00',
        end_time: '2026-06-01T16:00:00',
        status: 'confirmed'
    };

    // Act (Actuar)
    const eventoMapeado = AppointmentMapper.toCalendarEvent(citaConfirmada);

    // Assert (Afirmar)
    expect(eventoMapeado.backgroundColor).toBe('#28a745');
    expect(eventoMapeado.title).toBe('Ana Gomez - Sesión de Terapia Individual');
});