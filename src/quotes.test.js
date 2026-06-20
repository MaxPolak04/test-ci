import { describe, it, expect } from "vitest";
import { QUOTES, nextIndex, prevIndex, getQuote } from "./quotes.js";

describe("logika cytatów", () => {
  it("ma co najmniej jeden cytat", () => {
    expect(QUOTES.length).toBeGreaterThan(0);
  });

  it("nextIndex przechodzi do kolejnego", () => {
    expect(nextIndex(0)).toBe(1);
  });

  it("nextIndex zawija się na początek", () => {
    expect(nextIndex(QUOTES.length - 1)).toBe(0);
  });

  it("prevIndex zawija się na koniec", () => {
    expect(prevIndex(0)).toBe(QUOTES.length - 1);
  });

  it("getQuote radzi sobie z indeksem ujemnym", () => {
    expect(getQuote(-1)).toEqual(QUOTES[QUOTES.length - 1]);
  });

  it("getQuote radzi sobie z indeksem poza zakresem", () => {
    expect(getQuote(QUOTES.length + 1)).toEqual(QUOTES[1]);
  });
});
