import { Selector } from "testcafe";

fixture`testing e-commerce site saucedemo`
  .page("https://www.saucedemo.com/")
  .beforeEach(async (t) => {
    await t.setTestSpeed(0.5);
  });

const userNameInput = Selector("#user-name");
const passwordInput = Selector("#password");
const loginButton = Selector("#login-button");

test("should be able to buy product", async (t) => {
  const productsLabel = Selector(".product_label");
  const backPackImage = Selector("a#item_4_img_link > img");
  const goBackButton = Selector("button.inventory_details_back_button");
  const addBagToCartButton = Selector("button.btn_inventory");
  const removeItemButton = Selector("button.btn_secondary.btn_inventory");

  const addToCartButton = Selector("button.btn_primary.btn_inventory").nth(0);
  const cartButton = Selector("#shopping_cart_container");
  const yourCartText = Selector("div.subheader").innerText;
  const checkOutButton = Selector("a.checkout_button")
  const continueButton = Selector("input.cart_button")

  // for fill
  const firstName = Selector("#first-name")
  const lastName = Selector("#last-name")
  const zipCode = Selector("#postal-code")

  // finish button
  const finishButton = Selector(".btn_action.cart_button")

  const thankYouText = Selector("h2.complete-header").innerText

  await t
    .maximizeWindow()
    .typeText(userNameInput, "standard_user")
    .typeText(passwordInput, "secret_sauce")
    .click(loginButton)
    .expect(productsLabel.exists)
    .ok()
    .click(backPackImage)
    .expect(goBackButton.exists)
    .ok()
    .click(addBagToCartButton)
    .expect(removeItemButton.exists)
    .ok()
    .click(goBackButton)
    .expect(productsLabel.exists)
    .ok()
    .click(addToCartButton)
    .expect(removeItemButton.exists)
    .ok()
    .click(cartButton)
    .expect(yourCartText)
    .contains("Your Cart")
    .click(checkOutButton)
    .expect(continueButton.exists)
    .ok()
    .typeText(firstName, "John")
    .typeText(lastName, "Doe")
    .typeText(zipCode, "123")
    .click(continueButton)
    .expect(finishButton.exists)
    .ok()
    .click(finishButton)
    .expect(thankYouText).contains("THANK YOU FOR YOUR ORDER")
});
