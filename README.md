# SmartSuggest Pro (Angular 17)

**90 feature modules** organized as **10 categories × 3 sub-categories × 3 child modules**, with:
- Left-side nested navigation (category → sub → child)
- Global search that ranks results using a **usage + recency + context** scoring engine
- Contextual **"Suggested for you"** chips updating as users interact
- Dynamic **ModulePage** that renders different demo UIs (form/table/upload/calculator/kpi/editor/todo/selector/counter)
- Usage recorded to `localStorage` for persistence across refreshes

## Run
```bash
npm i -g @angular/cli
npm install
ng serve
# open http://localhost:4200
```

## Customize
- Edit `src/app/data/nav.ts` to rename categories/subs/children and change `demoType`.
- Tune scoring in `src/app/services/suggestion.service.ts` (weights + half-life).
- Adjust styles in `src/styles.scss` and layout in `src/app/app.component.ts`.
