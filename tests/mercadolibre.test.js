import { Selector } from "testcafe";

fixture`Test made to mercadolibre website`.page(
  "https://www.mercadolibre.com.mx/"
);

const searchInput = Selector(".nav-search-input");
const submitButton = Selector(".nav-search-btn");

test("Mercadolibre trying to buy without being logged in", async (t) => {
  const resultText = Selector(".ui-search-view-options__title").innerText;
  const funkoImage = Selector("img[alt*='Snake']");
  const productTitle = Selector("h1.ui-pdp-title");
  const buyNowButton = Selector(
    "button.andes-button.andes-button--loud:first-child"
  );
  const newButton = Selector("a#registration-link");

  await t
    .maximizeWindow()
    .typeText(searchInput, "jack skellington funko")
    .click(submitButton)
    .expect(resultText)
    .contains("Ordenar publicaciones")
    .click(funkoImage)
    .expect(productTitle.exists)
    .ok()
    .click(buyNowButton)
    .expect(newButton.exists)
    .ok();
});
