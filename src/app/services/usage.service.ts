import { Injectable } from '@angular/core';
import { UsageRecord } from '../models';

const STORAGE_KEY = 'smartSuggestPro.usage.v1';

@Injectable({ providedIn: 'root' })
export class UsageService {
  private usage: Record<string, UsageRecord> = {};

  constructor() { this.load(); }

  private load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      this.usage = raw ? JSON.parse(raw) : {};
    } catch {
      this.usage = {};
    }
  }

  private save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.usage));
  }

  record(moduleId: string, context?: string) {
    const now = Date.now();
    const rec = this.usage[moduleId] ?? { moduleId, count: 0, lastUsed: now, contexts: {} };
    rec.count += 1;
    rec.lastUsed = now;
    if (context) rec.contexts[context] = (rec.contexts[context] ?? 0) + 1;
    this.usage[moduleId] = rec;
    this.save();
  }

  getAll(): UsageRecord[] { return Object.values(this.usage); }
  get(moduleId: string) { return this.usage[moduleId]; }
  resetAll() { this.usage = {}; this.save(); }
}
