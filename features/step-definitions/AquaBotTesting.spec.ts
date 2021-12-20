import { Given, Then, When } from "@wdio/cucumber-framework";
import aquabot from "../testData/aquaBotTesting.json";
import data from "faker";
import formsPage from "../pageobjects/forms.Page";
import homePage from "../pageobjects/home.Page";
import tableExamplesPage from "../pageobjects/tableExamples.Page";
import buttons_LinksPage from "../pageobjects/buttons_Links.Page";
import complexElementsPage from "../pageobjects/complexElements.Page";


Given(/^Home Page of AquaBotTesting Page$/, async () => {
    await homePage.LandingPageLink();
});

When(/^I click on Home Button$/, async () => {
    await homePage.clickOnHomeButton();
});
Then(/^I should be in the landing Page of \"([^\"]*)\"$/, async (automatedtesting) => {
    await expect(homePage.headingText).toHaveText(automatedtesting);
});

Then(/^I should see the Text as \"([^\"]*)\"$/, async (buttonslinks) => {
    await expect(buttons_LinksPage.buttonAndLinkText).toHaveText(buttonslinks);
});

When(/^I click on Button & links menu$/, async () => {
    await buttons_LinksPage.clickOnButtonAndLinks();
});

Then(/^I see the Text as \"([^\"]*)\"$/, async (typesofbuttons) => {
    await expect(buttons_LinksPage.typesOfButtonsText).toHaveText(typesofbuttons);
});

When(/^I click change Text Button$/, async () => {
    await buttons_LinksPage.clickOnChangeTextButton();
});
When(/^I click on pop up button$/, async () => {
    await buttons_LinksPage.clickOnPopUpButton();
});
When(/^I click on Alert button$/, async () => {
    await buttons_LinksPage.clickOnAlertButton();
});
When(/^I click on open new Window$/, async () => {
    await buttons_LinksPage.clickOnOpenANewWindow();
    const id = await browser.getWindowHandles();
    await browser.switchToWindow(id[1]);
});

Then(/^I should navigate and see text as \"([^\"]*)\"$/, async (youopenedanewwindow) => {
    await expect(buttons_LinksPage.newWindowtext).toHaveTextContaining(youopenedanewwindow);
});

When(/^I click the close button$/, async () => {
    const id = await browser.getWindowHandles();
    await browser.closeWindow();
    await browser.switchToWindow(id[0]);
});

Then(/^I should navigate to landing Page and see the text as \"([^\"]*)\"$/, async (typesoflinks) => {
    await expect(buttons_LinksPage.typesOfLinksText).toHaveText(typesoflinks);
});

When(/^I click on the links to a section$/, async () => {
    await buttons_LinksPage.clickOnLinkToaSection();
});
When(/^I click the link to external section$/, async () => {
    await buttons_LinksPage.clickOnLinkToExternalSite();
    const id = await browser.getWindowHandles();
    await browser.switchToWindow(id[1]);
    await browser.closeWindow();
    await browser.switchToWindow(id[0]);
});

When(/^I click the link to open new window section$/, async () => {
    await buttons_LinksPage.clickOnOpenInCurrentWindow();
});

Then(/^I navigate to another window and see the text as \"([^\"]*)\"$/, async (newwindow) => {
    await expect(buttons_LinksPage.windowtext).toHaveText(newwindow);
});

When(/^I click on go back button$/, async () => {
    await buttons_LinksPage.clickOnGoBackButton();
});

When(/^I click on forms button$/, async () => {
    await formsPage.clickOnFormsButton();
});

Then(/^I should see the form text as \"([^\"]*)\"$/, async (democontactform) => {
    await expect(formsPage.headerFormText).toHaveText(democontactform)
});

When(/^I fill The Form and Click on Submit$/, async () => {
    await formsPage.clickOnDemoContactInfo(aquabot.personalInfo);
    await formsPage.clickOnRandomEmail(data.internet.email());
    await formsPage.clickOnRadioButton();
    await formsPage.clickOnCheckBoxButton();
    await formsPage.clickOnSubmitButton();
});

When(/^I hover the mouse and validate the table1 example$/, async () => {
    await tableExamplesPage.clickOnTable1Info();
});

Then(/^I can see the Text as \"([^\"]*)\"$/, async (workingwithtables) => {
    await expect(tableExamplesPage.table1HeadingText).toHaveText(workingwithtables);
});

When(/^I click on table 2 Example$/, async () => {
    await tableExamplesPage.clickOnTable2Info();
});

Then(/^I see the header Text of table 2 as \"([^\"]*)\"$/, async (tables2) => {
    await expect(tableExamplesPage.table2HeadingText).toHaveText(tables2);
});

When(/^I click on the dropDown$/, async () => {
    await complexElementsPage.clickOnComplexElementsMenu()
});

Then(/^I should navigate and see the Text as \"([^\"]*)\"$/, async (dropdowns) => {
    await expect(complexElementsPage.dropdownText).toHaveText(dropdowns)
});

When(/^I can validate all the items in the page$/, async () => {
    await complexElementsPage.clickOnTypesOfDropDowns(aquabot.dropDownData)
});
When(/^I click on the Reset All button to reset the page content$/, async () => {
    await complexElementsPage.clickOnResetAllButton();
});