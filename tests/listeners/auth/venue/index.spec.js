import { test, expect } from "@playwright/test";

test.describe("Venue", () => {
  test(" the details page has “Venue details” in the heading", async ({
    page,
  }) => {
    await page.goto("/");
    // Specifier inspired by github users and fellow students: Jereriviel and martir2109
    await page.waitForSelector("#venue-container a");
    await page.locator("#venue-container a").first().click();
    //
    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
