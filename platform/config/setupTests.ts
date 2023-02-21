import '@testing-library/jest-dom/extend-expect';

import { vi } from 'vitest';

window.matchMedia = query => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
  addListener: vi.fn(),
  removeListener: vi.fn()
});

Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: vi.fn()
});
