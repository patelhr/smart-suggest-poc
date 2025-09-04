import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModuleRegistryService } from '../services/module-registry.service';
import { UsageService } from '../services/usage.service';

@Component({
  standalone: true,
  selector: 'app-module-page',
  imports: [CommonModule, FormsModule],
  template: `
    <ng-container *ngIf="m(); else notfound">
      <div class="card">
        <h2>{{ m()!.name }}</h2>
        <p class="muted">{{ m()!.category }} › {{ m()!.subcategory }} • {{ m()!.description }}</p>
        <div class="demo">
          <ng-container [ngSwitch]="m()!.demoType">
            <ng-container *ngSwitchCase="'form'">
              <label>Field A</label>
              <input [(ngModel)]="fieldA" placeholder="Type something" />
              <label>Field B</label>
              <input [(ngModel)]="fieldB" placeholder="Another value" />
              <div class="row">
                <button (click)="submit()">Submit</button>
              </div>
            </ng-container>
            <ng-container *ngSwitchCase="'table'">
              <table class="table">
                <thead><tr><th>#</th><th>Name</th><th>Status</th></tr></thead>
                <tbody>
                  <tr *ngFor="let row of rows; let i = index">
                    <td>{{ i+1 }}</td>
                    <td>{{ row.name }}</td>
                    <td>{{ row.status }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="row"><button (click)="refresh()">Refresh</button></div>
            </ng-container>
            <ng-container *ngSwitchCase="'upload'">
              <input type="file" (change)="uploaded()" />
              <div class="row"><button (click)="uploaded()">Simulate Upload</button></div>
            </ng-container>
            <ng-container *ngSwitchCase="'calculator'">
              <div class="row">
                <input type="number" [(ngModel)]="a" placeholder="A" />
                <input type="number" [(ngModel)]="b" placeholder="B" />
              </div>
              <div class="row">
                <button (click)="calc('+')">Add</button>
                <button (click)="calc('-')">Subtract</button>
                <button (click)="calc('*')">Multiply</button>
              </div>
              <p><strong>Result:</strong> {{ result }}</p>
            </ng-container>
            <ng-container *ngSwitchCase="'kpi'">
              <div class="kpis">
                <div class="kpi"><div class="kpi-label">Today</div><div class="kpi-value">{{ 123 | number }}</div></div>
                <div class="kpi"><div class="kpi-label">MTD</div><div class="kpi-value">{{ 4567 | number }}</div></div>
                <div class="kpi"><div class="kpi-label">YoY</div><div class="kpi-value">+12%</div></div>
              </div>
            </ng-container>
            <ng-container *ngSwitchCase="'editor'">
              <textarea [(ngModel)]="body" rows="6" placeholder="Type a message…"></textarea>
              <div class="row"><button (click)="save()">Save</button></div>
            </ng-container>
            <ng-container *ngSwitchCase="'todo'">
              <div class="row">
                <input [(ngModel)]="todoText" placeholder="New task"/>
                <button (click)="addTodo()">Add</button>
              </div>
              <ul><li *ngFor="let t of todos">{{ t }}</li></ul>
            </ng-container>
            <ng-container *ngSwitchCase="'selector'">
              <select [(ngModel)]="selected">
                <option value="" disabled selected>Select an option</option>
                <option *ngFor="let opt of options" [value]="opt">{{ opt }}</option>
              </select>
              <div class="row"><button (click)="apply()">Apply</button></div>
            </ng-container>
            <ng-container *ngSwitchCase="'counter'">
              <div class="row">
                <button (click)="count = count - 1">-</button>
                <div style="padding:8px 12px; border:1px solid #e5e7eb; border-radius:8px; background:#fff;">{{ count }}</div>
                <button (click)="count = count + 1">+</button>
              </div>
            </ng-container>
          </ng-container>
        </div>
      </div>
    </ng-container>
    <ng-template #notfound>
      <div class="card"><h3>Module not found</h3></div>
    </ng-template>
  `,
  styles: [`
    .card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; max-width: 960px; }
    .muted { color: #6b7280; }
    .row { display: flex; gap: 12px; margin-top: 12px; align-items: center; }
    input, select, textarea { padding: 8px 10px; border: 1px solid #e5e7eb; border-radius: 8px; width: 100%; }
    button { padding: 8px 12px; border: 0; border-radius: 8px; background: #0ea5e9; color: #fff; cursor: pointer; }
    table.table { width: 100%; border-collapse: collapse; background: #fff; }
    table.table th, table.table td { border: 1px solid #e5e7eb; padding: 8px; text-align: left; }
    .kpis { display: flex; gap: 12px; }
    .kpi { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 12px; min-width: 120px; }
    .kpi-label { font-size: 12px; color: #64748b; }
    .kpi-value { font-size: 20px; font-weight: 700; }
  `]
})
export class ModulePageComponent {
  private route = inject(ActivatedRoute);
  private registry = inject(ModuleRegistryService);
  private usage = inject(UsageService);

  m = signal(this.registry.byId(this.route.snapshot.data['id']));

  fieldA = ''; fieldB = '';
  a = 0; b = 0; result = 0;
  rows = [{name: 'Item A', status: 'Open'},{name: 'Item B', status: 'Closed'},{name: 'Item C', status: 'Pending'}];
  body = '';
  todoText = ''; todos: string[] = ['Sample task'];
  selected = ''; options = ['Option A','Option B','Option C'];
  count = 0;

  ngOnInit() {
    const mod = this.m();
    if (mod) this.usage.record(mod.id, mod.category);
  }

  submit(){ const mod=this.m(); if(mod) this.usage.record(mod.id, mod.category); alert('Submitted (demo).'); }
  refresh(){ const mod=this.m(); if(mod) this.usage.record(mod.id, mod.category); alert('Refreshed (demo).'); }
  uploaded(){ const mod=this.m(); if(mod) this.usage.record(mod.id, mod.category); alert('Uploaded (demo).'); }
  calc(op: string){
    if (op === '+') this.result = (this.a||0) + (this.b||0);
    if (op === '-') this.result = (this.a||0) - (this.b||0);
    if (op === '*') this.result = (this.a||0) * (this.b||0);
    const mod=this.m(); if(mod) this.usage.record(mod.id, mod.category);
  }
  save(){ const mod=this.m(); if(mod) this.usage.record(mod.id, mod.category); alert('Saved (demo).'); }
  addTodo(){ if(this.todoText){ this.todos=[...this.todos, this.todoText]; this.todoText=''; const mod=this.m(); if(mod) this.usage.record(mod.id, mod.category);} }
  apply(){ const mod=this.m(); if(mod) this.usage.record(mod.id, mod.category); alert('Applied (demo).'); }
}
