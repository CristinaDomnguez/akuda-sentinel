import { create } from 'zustand';

type AntivirusState = {
  lastScanDaysAgo: number;
  realTimeProtection: boolean;
  scanNow: () => void;
  toggleProtection: () => void;
};

/**
 * Estado global del antivirus. Simula escaneo y activación/desactivación de la protección.
 */
export const useAntivirusStore = create<AntivirusState>((set) => ({
  lastScanDaysAgo: 14,
  realTimeProtection: false,
  scanNow: () => set({ lastScanDaysAgo: 0 }),
  toggleProtection: () =>
    set((state) => ({ realTimeProtection: !state.realTimeProtection })),
}));
