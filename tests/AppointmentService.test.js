import { AppointmentService } from '../src_1/src/services/AppointmentService.js';

// Simulamos la base de datos para no hacer peticiones reales
jest.mock('../src_1/src/api/supabaseClient.js', () => ({
  supabase: {
    from: jest.fn().mockReturnThis(),
    select: jest.fn().mockResolvedValue({ data: [], error: null }),
    insert: jest.fn().mockResolvedValue({ data: {}, error: null }),
    delete: jest.fn().mockResolvedValue({ data: {}, error: null })
  }
}));

describe('AppointmentService', () => {
  let service;

  beforeEach(() => {
    service = AppointmentService;
    jest.clearAllMocks();
  });

  test('El servicio de citas debe inicializarse correctamente', () => {
    expect(service).toBeDefined();
  });
});