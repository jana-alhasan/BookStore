# BookStore

A responsive React book-exploration app built as an individual frontend portfolio project. It uses the public Google Books API for catalog/search/detail data and local browser storage for favorites.

## Purpose

The project demonstrates API-driven frontend work: asynchronous data states, refresh-safe client-side routing, debounced search, reusable book cards, real book-detail data, and browser-persisted favorites. It is a book browser, not an e-commerce/cart application.

## My role

I built this project individually. The repository can prove the frontend implementation and code-visible features below; it does not claim ownership of Google Books data or any external business/service behavior.

## Verified features

- Browse a featured collection loaded from the Google Books API.
- Search Google Books from a debounced header input.
- Keep search routes refresh-safe through URL query parameters.
- Open a dedicated book-detail route that fetches the requested volume by id.
- Display available cover, authors, description, rating, categories, publisher, publication date, page count, language, and sale price when Google Books provides them.
- Add/remove favorites and persist them in `localStorage`.
- Open a dedicated Favorites page with an empty state.
- Show loading skeletons, empty states, and API error states.
- Use HashRouter-based routes so direct navigation works on static GitHub Pages hosting.

## Technical implementation

- **React 18 + JavaScript**
- **React Router v6** with `createHashRouter`
- **Material UI v5**
- **Google Books REST API** via the browser `fetch` API
- **Custom debounce hook** for search input behavior
- **Custom favorites hook + localStorage** persistence
- **Swiper** for the featured-book carousel
- **Jest / React Scripts test runner** for API helper and persistence regression coverage
- **GitHub Actions** for reproducible install, tests, production build, and Pages publishing

The external API access is centralized in `src/utilities/booksApi.js`, while the UI consumes the returned Google Books shapes without introducing an unnecessary state-management library for this project.

## Routes

- `#/` — featured books
- `#/search?q=...` — refresh-safe search results
- `#/BookDetails/:bookId` — book details
- `#/favorites` — locally saved favorites

## Data and limitations

Google Books is an external public data source. Fields vary by volume, so the UI intentionally falls back when cover images, prices, descriptions, ratings, or metadata are not supplied. Favorites are local to the current browser; there is no user account/backend synchronization.

This project does **not** implement a cart, checkout, payments, or book purchasing flow.

## Run locally

```bash
npm install --legacy-peer-deps
npm start
```

Create a production build with:

```bash
npm run build
```

The default public API endpoint is `https://www.googleapis.com/books/v1/volumes`. It can optionally be overridden locally with:

```text
REACT_APP_BOOKS_API=https://www.googleapis.com/books/v1/volumes
```

No API key is required for the public lookups used by this demo.

## Current status

The core browse, search, detail, and favorites flows are implemented. The project is being prepared for its verified GitHub Pages live demo; the live URL will be added here only after final deployment validation.
