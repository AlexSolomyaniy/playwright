import { expect, type Locator, type Page } from '@playwright/test';

export class SignInPage {
  readonly page: Page;
  readonly url: string = 'https://app.i-staging.net/';
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly pomLink: Locator;
  readonly signInBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('id=username');
    this.passwordInput = page.locator('id=password');
    this.signInBtn = page.getByRole('button', { name: 'Logg inn' });
  }

  async visit() {
    await this.page.goto(this.url);
  }

  async login(email:string,password:string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInBtn.click();
  }

  async isSignedIn() {
    await expect(this.page.getByRole('heading', { name: 'Choose building' })).toHaveText('Choose building');
  }
}