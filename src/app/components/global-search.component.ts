import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SuggestionService } from '../services/suggestion.service';

@Component({
  selector: 'app-global-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="search">
      <input type="text" placeholder="Search modules… (e.g., order, invoice, upload)"
             [(ngModel)]="q" (input)="onInput()" />
      <div class="dropdown" *ngIf="show && results().length">
        <div class="item" *ngFor="let r of results()" (click)="navigate(r.mod.route)">
          <div class="name">{{ r.mod.name }}</div>
          <div class="meta">{{ r.mod.category }} › {{ r.mod.subcategory }} • {{ r.mod.description }}</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .search { position: relative; }
    input { width: 100%; padding: 10px 12px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 14px; }
    .dropdown { position: absolute; left: 0; right: 0; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; margin-top: 6px; box-shadow: 0 10px 20px rgba(0,0,0,.06); z-index: 10; max-height: 320px; overflow: auto; }
    .item { padding: 10px 12px; cursor: pointer; }
    .item:hover { background: #f1f5f9; }
    .name { font-weight: 600; }
    .meta { font-size: 12px; color: #6b7280; }
  `]
})
export class GlobalSearchComponent {
  private router = inject(Router);
  private sugg = inject(SuggestionService);

  @Output() navigated = new EventEmitter<void>();

  q: string = '';
  show = false;
  results = signal<{mod: any, score: number}[]>([]);

  onInput() {
    this.show = !!this.q;
    this.results.set(this.sugg.rank(undefined, 8, this.q));
  }

  navigate(route: string) {
    this.router.navigateByUrl(route);
    this.show = false;
    this.q = '';
    this.navigated.emit();
  }
}
