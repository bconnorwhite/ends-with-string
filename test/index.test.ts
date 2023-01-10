import { test, expect } from "@jest/globals";
import endsWith from "../source/index.js";

test("match", () => {
  expect(endsWith("abcde", "de")).toBe(true);
});

test("no match", () => {
  expect(endsWith("abcde", "fg")).toBe(false);
});

test("match buffer", () => {
  expect(endsWith(Buffer.from("abcde"), "de")).toBe(true);
});

test("no match", () => {
  expect(endsWith(Buffer.from("abcde"), "fg")).toBe(false);
});

test("match too long", () => {
  expect(endsWith("abcde", "abcdefg")).toBe(false);
});

test("match too long buffer", () => {
  expect(endsWith(Buffer.from("abcde"), "abcdefg")).toBe(false);
});

test("empty", () => {
  expect(endsWith("abcde", "")).toBe(true);
});

test("buffer empty", () => {
  expect(endsWith(Buffer.from("abcde"), "")).toBe(true);
});
