import { Injectable } from '@angular/core';
import { UsageService } from './usage.service';
import { ALL_MODULES } from '../data/nav';
import { UsageRecord } from '../models';
import type { ModuleNode } from '../data/nav';

@Injectable({ providedIn: 'root' })
export class SuggestionService {
  private HALF_LIFE_DAYS = 7;

  constructor(private usage: UsageService) {}

  private recencyFactor(lastUsed: number): number {
    const now = Date.now();
    const dt = Math.max(0, now - lastUsed);
    const halfLifeMs = this.HALF_LIFE_DAYS * 24 * 60 * 60 * 1000;
    return Math.exp(-dt / halfLifeMs * Math.LN2);
  }

  private countsMinMax(records: UsageRecord[]) {
    let min = Infinity, max = -Infinity;
    for (const r of records) { min = Math.min(min, r.count); max = Math.max(max, r.count); }
    if (!isFinite(min)) min = 0;
    if (!isFinite(max)) max = 0;
    return { min, max };
  }

  private normalizeCount(count: number, min: number, max: number): number {
    if (max === min) return count > 0 ? 1 : 0;
    return (count - min) / (max - min);
  }

  rank(currentContext?: string, limit?: number, query?: string): Array<{mod: any, score: number}> {
    const usage = this.usage.getAll();
    const map = new Map(usage.map(u => [u.moduleId, u]));
    const { min, max } = this.countsMinMax(usage);
    const rows: Array<{mod: any, score: number}> = [];

    for (const m of ALL_MODULES) {
      const u = map.get(m.id);
      const countNorm = this.normalizeCount(u?.count ?? 0, min, max);
      const rec = u ? this.recencyFactor(u.lastUsed) : 0;
      const ctxFit = (currentContext && u?.contexts[currentContext]) ? (u.contexts[currentContext] / (u.count || 1)) : 0;
      let qBoost = 0;
      if (query && query.trim()) {
        const q = query.toLowerCase();
        const hay = [m.name, m.category, m.subcategory, ...(m.tags ?? [])].join(' ').toLowerCase();
        if (hay.includes(q)) qBoost = 0.15;
      }
      const score = (countNorm * 0.7) + (rec * 0.2) + (ctxFit * 0.1) + qBoost;
      rows.push({ mod: m, score });
    }

    rows.sort((a,b) => b.score - a.score);
    return typeof limit === 'number' ? rows.slice(0, limit) : rows;
  }
}
