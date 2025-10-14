import { test, expect } from "@playwright/test";

test.describe("Venue", () => {
  test(" the details page has “Venue details” in the heading", async ({
    page,
  }) => {
    await page.goto("/");
    await page
      .locator('a[href= "/venue/?id=ef304070-9956-4a1a-9d1d-40fd0c0d0272"]')
      .click();
    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
