# BookStore

A responsive book browsing web app built with React, using the Google Books
API to display, search, and explore book details.

## ✨ Features

- **Browse Books** — Home page displaying a curated collection of books
- **Search** — Debounced live search across the Google Books catalog
- **Book Details** — Dedicated page per book with cover image, description, and info
- **Favorites** — Add/remove books to a favorites list, persisted in localStorage
- **Related Collection** — Carousel of related books shown on the details page
- **Loading States** — Skeleton loaders while data is being fetched

## 🛠️ Built With

- **React** — UI library
- **React Router v6** — Client-side routing
- **MUI (Material UI v5)** — Component library and styling
- **Google Books API** — Book data source
- **use-debounce** — Debounced search input

## ⚙️ Setup

This project reads the Books API base URL from an environment variable.

1. Copy `.env.example` to a new file named `.env`
2. No API key is required for basic public volume lookups
3. Run `npm install` then `npm start`

```
REACT_APP_BOOKS_API=https://www.googleapis.com/books/v1/volumes
```

## 🚧 Status

Home page browsing, search, and the favorites system are fully functional.
The book details page is being finalized — see Known Issues below.

### Planned Next
- Decide on and implement a lightweight cart flow (currently no cart system exists)

## 🎯 What I Learned

Working with a public REST API (Google Books) for both search and detail
views, managing debounced search input, and persisting user preferences
(favorites) with localStorage independent of any backend.
