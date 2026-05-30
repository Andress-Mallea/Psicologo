import { handleActionSuccess } from '../src_1/src/utils/ActionHandlers';

test('handleActionSuccess debe cerrar el modal y mostrar el toast', () => {
    const mockModal = { close: jest.fn(), showToast: jest.fn() };
    const mockCalendar = { addEventToUI: jest.fn() };
    
    handleActionSuccess('Éxito', {}, 'create', mockCalendar, mockModal);
    
    expect(mockModal.close).toHaveBeenCalled();
    expect(mockModal.showToast).toHaveBeenCalledWith('Éxito');
});