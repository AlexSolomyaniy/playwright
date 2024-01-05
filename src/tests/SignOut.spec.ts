import { test, expect } from '@playwright/test';
import { SignInPage } from '../pages/SignInPage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

test('user signs in', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.visit();
  await signInPage.login('s.artem2011@gmail.com', 'password');
  await signInPage.isSignedIn();
});