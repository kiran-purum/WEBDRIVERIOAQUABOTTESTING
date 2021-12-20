import { addLog } from "../utils/commands"

class ButtonsAndLinks {
    get buttonAndLinkText() { return $('//a[text()="Buttons & Links"]') }
    get buttonsLink() { return $('//a[text()="Buttons & Links"]') }
    get typesOfButtonsText() { return $('//h5[text()="Types of Buttons"]') }
    get changeTextButton() { return $('//input[@type="button"]') }
    get popUpButton() { return $('#pop-up-btn') }
    get popUpclose() { return $('#back') }
    get alertButton() { return $('//button[@onclick="alertFunction()"]') }
    get newWindowButton() { return $('#new-window-btn') }
    get newWindowtext() { return $('//div[@class="col-lg-12"]/h1') }
    get closeButton() { return $('//a[@class="btn-solid-lg page-scroll"]') }
    get typesOfLinksText() { return $('//div[@class="col-lg-12 turquoise"]/h5') }
    get linkToASection() { return $('#contact-link') }
    get linkToExternalSection() { return $('#external-link') }
    get linkToOpenNewWindow() { return $('#new-window-link') }
    get windowtext() { return $('//h1[text()="You opened a new window."]') }
    get goBackButton() { return $('.btn-solid-lg') }

    async clickOnButtonAndLinks() {
        await this.buttonsLink.click();
        addLog(`Clicking on Buttons and Links : ${await this.buttonsLink.selector}`);
    }
    async clickOnChangeTextButton() {
        await this.changeTextButton.click();
        await this.changeTextButton.waitForClickable();
        addLog(`Clicking on ChangeText Button : ${await this.changeTextButton.selector}`)
    }
    async clickOnPopUpButton() {
        await this.popUpButton.waitForClickable();
        await this.popUpButton.click();
        await this.popUpclose.click();
        addLog(`Clicking PopUp Button : ${await this.popUpButton.selector}`);
        addLog(`Closing the PopUp Window : ${await this.popUpclose.selector}`);
    }
    async clickOnAlertButton() {
        await this.alertButton.click();
        await browser.acceptAlert();
        addLog(`Clicking on Alert Button : ${await this.alertButton.selector}`)
    }
    async clickOnOpenANewWindow() {
        await this.newWindowButton.click();
        addLog(`Clicking on Open New Window Button : ${await this.newWindowButton.selector}`)
    }
    async clickOnClosebutton() {
        await this.closeButton.click();
        addLog(`Clicking On Close Button : ${await this.closeButton.selector}`)
    }
    async clickOnLinkToaSection() {
        await this.linkToASection.click();
        addLog(`Clicking On Link To a Section : ${await this.linkToASection.selector}`)
    }
    async clickOnLinkToExternalSite() {
        await this.linkToExternalSection.waitForClickable();
        await this.linkToExternalSection.click();
        addLog(`Clicking On a Link To External Section : ${await this.linkToExternalSection.selector}`)

    }
    async clickOnOpenInCurrentWindow() {
        await this.linkToOpenNewWindow.click();
        addLog(`Clink On link Open a new Window In Current Page : ${await this.linkToOpenNewWindow.selector}`)
    }
    async clickOnGoBackButton() {
        await this.goBackButton.click();
        addLog(`Clicking on Go Back Button : ${await this.goBackButton.selector}`)
    }
}
export default new ButtonsAndLinks()