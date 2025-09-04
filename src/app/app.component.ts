import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { NAV_GROUPED } from './data/nav';
import { GlobalSearchComponent } from './components/global-search.component';
import { SuggestionPanelComponent } from './components/suggestion-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, GlobalSearchComponent, SuggestionPanelComponent],
  template: `
    <div class="layout">
      <aside class="sidebar">
        <div class="brand">SmartSuggest Pro</div>
        <div class="nav" *ngFor="let cat of categories">
          <div class="cat">{{ cat }}</div>
          <div class="sub" *ngFor="let sub of subkeys(cat)">
            <div class="sub-title">{{ sub }}</div>
            <a class="link" *ngFor="let child of children(cat, sub)" [routerLink]="child.route" routerLinkActive="active">
              <span class="dot"></span>{{ child.name }}
            </a>
          </div>
        </div>
      </aside>
      <main class="main">
        <header class="topbar">
          <app-global-search (navigated)="noop()"></app-global-search>
        </header>
        <section class="suggestions">
          <app-suggestion-panel [context]="currentContext()" (navigate)="goto($event)"></app-suggestion-panel>
        </section>
        <section class="content">
          <router-outlet></router-outlet>
        </section>
      </main>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100vh; }
    .layout { display: grid; grid-template-columns: 320px 1fr; height: 100%; }
    .sidebar { background: #0f172a; color: #e2e8f0; padding: 16px; overflow: auto; }
    .brand { font-weight: 700; font-size: 20px; margin-bottom: 16px; }
    .cat { font-size: 13px; text-transform: uppercase; opacity: .7; margin: 12px 0 6px; }
    .sub-title { font-size: 12px; opacity: .8; margin: 6px 0; padding-left: 4px; }
    .link { display: block; color: #e2e8f0; text-decoration: none; padding: 6px 8px; border-radius: 6px; font-size: 14px; margin-left: 8px; }
    .link:hover { background: #1e293b; }
    .link.active { background: #334155; }
    .dot { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #22d3ee; margin-right: 8px; }
    .main { display: flex; flex-direction: column; height: 100%; }
    .topbar { padding: 12px 16px; border-bottom: 1px solid #e5e7eb; background: #fff; }
    .suggestions { padding: 12px 16px; background: #f8fafc; border-bottom: 1px solid #e5e7eb; }
    .content { padding: 16px; overflow: auto; }
  `]
})
export class AppComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  currentContext = signal<string>('Dashboard');
  categories = Object.keys(NAV_GROUPED);

  subkeys(cat: string) { return Object.keys((NAV_GROUPED as any)[cat]); }
  children(cat: string, sub: string) { return (NAV_GROUPED as any)[cat][sub]; }

  constructor() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => {
        let r = this.route;
        while (r.firstChild) r = r.firstChild;
        return r.snapshot.data['context'] as string || 'Dashboard';
      })
    ).subscribe(ctx => this.currentContext.set(ctx));
  }

  goto(route: string) { this.router.navigateByUrl(route); }
  noop() {}
}
