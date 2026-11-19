# Gift Elves

A web game for families. Each kid gets a budget and takes a turn dragging real gifts from the
[World Vision Gift Catalog](https://donate.worldvision.org/giftcatalog) into a basket.

- Each kid gets a name, an avatar and a budget ($25–$250 presets, or any amount).
- Kids drag gifts from the pool into their basket, or tap the **+** button on touch screens. The budget goes down as they add gifts.
- Gifts that cost more than what's left are greyed out and can't be added, with a "Need $X more" tag.
- Kids can drag a gift back out of the basket, or use the − / + buttons to change how many they get.
- When everyone's done, a summary shows each kid's picks with links to the real gift pages so you can donate.
- Progress is saved in the browser (localStorage), so a refresh doesn't lose anyone's basket.

Gift names, photos and "starting at" prices were taken from World Vision's 2026 catalog in
November 2026 (`src/data/gifts.ts`).

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run lint
```

Built with Vite, React, TypeScript and [@dnd-kit](https://dndkit.com/) for mouse and touch drag-and-drop.
