import { expect, test } from './test'

test('zooms an SVG image', async ({ testPage }) => {
  await testPage.goto('zoom')

  await expect(testPage.getNthImage(0)).toBeZoomedAfterClick()
})

test('does not zoom an SVG image from the `<Icon>` component', async ({ testPage }) => {
  await testPage.goto('zoom')

  const svg = testPage.page.locator('.sl-markdown-content svg:nth-of-type(1)')
  await svg.click()

  await expect(testPage.getZoomedImage()).not.toBeAttached()
})

test('closes the zoomed image when using the `Tab` key', async ({ testPage }) => {
  await testPage.goto('zoom')

  await expect(testPage.getNthImage(0)).toBeZoomedAfterClick()

  await testPage.page.keyboard.press('Tab')

  await expect(testPage.getZoomedImage()).not.toBeAttached()
})
