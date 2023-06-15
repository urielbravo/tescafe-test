import { Selector } from "testcafe";

fixture`Test made to Wikipedia website`
.page("https://www.wikipedia.org/")
.beforeEach(async (t) => {
    await t.setTestSpeed(0.5);
})

const searchInput = Selector("input#searchInput");

test("Wikipedia finding Ghenghis Khan Bio", async (t) => {
  const mainTitle = Selector("h1.central-textlogo-wrapper")
  const suggestionsDropDown = Selector("div.suggestions-dropdown")
  const suggestionTitle = Selector("h3.suggestion-title").withExactText("Genghis Khan")
  const bioTitle = Selector("span.mw-page-title-main").withExactText("Genghis Khan")

  await t
    .maximizeWindow()
    .expect(mainTitle.exists).ok()
    .typeText(searchInput, "genghis khan")
    .expect(suggestionsDropDown.exists).ok()
    .click(suggestionTitle)
    .expect(bioTitle.exists).ok()
    .hover(Selector("span#Death_and_succession"))
    .click(Selector("a").withAttribute('title', 'List of Mongol rulers').withExactText("List of Mongol rulers"))
    .expect(Selector('span.mw-page-title-main').innerText)
    .contains("List of Mongol rulers")
});
