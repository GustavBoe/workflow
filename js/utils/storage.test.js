import { expect, describe, it } from "vitest";
import { getUsername, saveUser, clearStorage } from "./storage.js";

describe("getUserName", () => {
  it("returns the name from the user object in storage", () => {
    const user = {
      name: "Ola",
      lastName: "Norman",
      email: "OlaNorman@stud.noroff.no",
    };
    saveUser(user);
    const testUser = getUsername();
    expect(testUser).toBe(user.name);
  });

  it("returns null when no user exists in storage", () => {
    clearStorage();
    const testUser = getUsername();
    expect(testUser).toBeNull();
  });
});
