import { Injectable } from '@angular/core';
import { ALL_MODULES } from '../data/nav';

@Injectable({ providedIn: 'root' })
export class ModuleRegistryService {
  getAll() { return Array.from(ALL_MODULES); }
  byId(id: string) { return ALL_MODULES.find(m => m.id === id); }
}
