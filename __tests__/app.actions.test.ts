import { describe, it, expect, beforeEach } from "vitest";
import { M } from "../src/commands/commands";
import { out, resetOut } from "../src/out";

const getOutput = () => {
  const currentOutput = out;
  resetOut();
  return currentOutput;
};

describe("MaestroTranslators Actions - Swipe/Scroll Command Snapshots", () => {
  beforeEach(() => {
    resetOut();
  });

  it("swipeLeft", () => {
    M.swipeLeft();
    expect(getOutput()).toMatchInlineSnapshot(`
      "- swipe:
          direction: LEFT
          duration: 400
      "
    `);
  });

  it("swipeRight", () => {
    M.swipeRight();
    expect(getOutput()).toMatchInlineSnapshot(`
      "- swipe:
          direction: RIGHT
          duration: 400
      "
    `);
  });

  it("swipe from start to end", () => {
    M.swipe({ x: "0%", y: "0%" }, { x: "100%", y: "100%" });
    expect(getOutput()).toMatchInlineSnapshot(`
      "- swipe:
          start: 0%, 0%
          end: 100%, 100%
      "
    `);
  });

  it("scroll", () => {
    M.scroll();
    expect(getOutput()).toMatchInlineSnapshot(`
      "- scroll
      "
    `);
  });

  it("scrollUntilVisible", () => {
    M.scrollUntilVisible("testId");
    expect(getOutput()).toMatchInlineSnapshot(`
      "- scrollUntilVisible:
          element:
            id: "testId"
      "
    `);
  });
});
