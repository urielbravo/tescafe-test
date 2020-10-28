import { Selector } from "testcafe";

fixture`Getting started with TestCafe`
  .page("https://devexpress.github.io/testcafe/example/")
  .before(async (t) => {
    // test setup goes here
    // await runDatabaseReset()
    // await seedTestData()
  })
  .beforeEach(async (t) => {
    await t.setTestSpeed(0.7);
  })
  .after(async (t) => {
    // cleaning test data
    // Loggin and sending data to monitoring systems
  })
  .afterEach(async (t) => {
    // Runs after each test
  });

const developer_name_input = Selector("#developer-name");
const submit_button = Selector("#submit-button");
const supportCheckBox = Selector("#remote-testing");
const easyEmbeddingCheckBox = Selector("#continuous-integration-embedding");
const osRadioButton = Selector("#linux");
const dropDownSelector = Selector("#preferred-interface");
const dropDownOption = dropDownSelector.find("option");
const tryTestCafe = Selector('#tried-test-cafe')
const nineNumber = Selector('.slider-value').withText('9')
const inputComment = Selector('#comments')
// const slider = Selector('.ui-slider-handle .ui-corner-all .ui-state-default'); 

test("My first testcafe test", async (t) => {
  const articleText = Selector("#article-header").innerText;

  await t
    .maximizeWindow()
    .typeText(developer_name_input, "John")
    .click(supportCheckBox)
    .click(easyEmbeddingCheckBox)
    .click(osRadioButton)
    .click(dropDownSelector)
    .click(dropDownOption.withText("Both"))
    .click(tryTestCafe)
    .click(nineNumber, {offsetY: -25})
    .typeText(inputComment, 'I love testcafe')
    // .expect('.slider-value').eql(1)
    // .drag(slider, 360, 0, { offsetX: 10, offsetY: 10 })
    .click(submit_button)

    // prettier-ignore
    .expect(articleText).contains("John");
});
