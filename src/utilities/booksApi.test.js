import { fetchBookById, searchBooks } from "./booksApi";

describe("booksApi", () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  test("returns an empty list without making a request for a blank search", async () => {
    global.fetch = jest.fn();

    await expect(searchBooks("   ")).resolves.toEqual([]);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  test("encodes the search query and returns API items", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ items: [{ id: "book-1" }] }),
    });

    await expect(searchBooks("react patterns", { maxResults: 8 })).resolves.toEqual([
      { id: "book-1" },
    ]);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    const requestedUrl = global.fetch.mock.calls[0][0];
    expect(requestedUrl).toContain("q=react+patterns");
    expect(requestedUrl).toContain("maxResults=8");
  });

  test("throws a useful error when Google Books returns a failed response", async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 503 });

    await expect(searchBooks("react")).rejects.toThrow(
      "Books API request failed with status 503"
    );
  });

  test("fetches a single book by an encoded id", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: "a/b" }),
    });

    await expect(fetchBookById("a/b")).resolves.toEqual({ id: "a/b" });
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/a%2Fb")
    );
  });
});
