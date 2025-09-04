import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestionService } from '../services/suggestion.service';

@Component({
  selector: 'app-suggestion-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="title">Suggested for you <span *ngIf="context">· {{ context }}</span></div>
      <div class="row" *ngIf="items().length; else empty">
        <button class="chip" *ngFor="let item of items()" (click)="onClick(item.mod.route)">
          {{ item.mod.name }}
        </button>
      </div>
      <ng-template #empty>
        <div class="muted">No suggestions yet. Use features and they will start to appear.</div>
      </ng-template>
    </div>
  `,
  styles: [`
    .title { font-weight: 600; margin-bottom: 6px; }
    .row { display: flex; flex-wrap: wrap; gap: 8px; }
    .chip { padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 999px; background: #fff; cursor: pointer; }
    .chip:hover { background: #f1f5f9; }
    .muted { color: #6b7280; font-size: 13px; }
  `]
})
export class SuggestionPanelComponent {
  private sugg = inject(SuggestionService);

  @Input() context?: string;
  @Output() navigate = new EventEmitter<string>();

  items = signal<{mod: any, score: number}[]>([]);

  ngOnChanges() {
    this.items.set(this.sugg.rank(this.context, 6));
  }

  onClick(route: string) {
    this.navigate.emit(route);
  }
}
