import { expect, describe, it } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    const href = "/about.html";
    const currentPath = "/about.html";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  const pathCases = [
    { currentPath: "/", expected: true },
    { currentPath: "/index.html", expected: true },
    { currentPath: "/about.html", expected: false },
  ];
  pathCases.forEach(({ currentPath, expected }) => {
    it(`returns true for root path ("/") when path is "/" or "/index.htm`, () => {
      const href = "/";
      const result = isActivePath(href, currentPath);
      expect(result).toBe(expected);
    });
  });

  it("returns true when current path includes the href", () => {
    const href = "/about";
    const currentPath = "/about.html";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  it("returns false when paths don't match", () => {
    const href = "/about.html";
    const currentPath = "/baout.hmtl";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(false);
  });
});
