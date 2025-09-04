export interface UsageRecord {
  moduleId: string;
  count: number;
  lastUsed: number;
  contexts: Record<string, number>;
}
