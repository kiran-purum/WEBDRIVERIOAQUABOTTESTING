import { addLog } from "../utils/commands"

class FormsPage {
    get formsButton() { return $('//a[text()="Forms"]') }
    get headerFormText() { return $('//h2') }
    get name() { return $('#cname') }
    get email() { return $('#cemail') }
    get phoneNumber() { return $('#cphone') }
    get radioButton() { return $('//*[@id="contactForm"]/div[4]/label[1]/span') }
    get messageText() { return $('#cmessage') }
    get dropDown() { return $('#cselect') }
    get checkBox() { return $('#csuccess') }
    get submitButton() { return $('#submit') }

    async clickOnFormsButton() {
        await this.formsButton.click();
        addLog(`Clicking on Forms Buttons : ${await this.formsButton.selector}`)
    }
    async clickOnDemoContactInfo(personalInfo: { name: string, PhoneNumber: number, yourMessage: string, question: number }) {
        await this.name.setValue(personalInfo.name);
        addLog(`Entering name ${personalInfo.name}`)
        await this.phoneNumber.setValue(personalInfo.PhoneNumber);
        addLog(`Enetring Phone Number : ${personalInfo.PhoneNumber}`)
        await this.messageText.setValue(personalInfo.yourMessage);
        addLog(`Entering the Message : ${personalInfo.yourMessage}`)
        await this.dropDown.selectByIndex(personalInfo.question);
        addLog(`Enetring the Question : ${personalInfo.question}`)
    }
    async clickOnRandomEmail(email: string) {
        await this.email.setValue(email);
        addLog(`Entering the email : ${email}`)
    }
    async clickOnRadioButton() {
        await this.radioButton.click();
        addLog(`Clicking on Radion Button : ${await this.radioButton.selector}`)
    }
    async clickOnCheckBoxButton() {
        await this.checkBox.click();
        addLog(`checking the CheckBox Button : ${await this.checkBox.selector}`)
    }
    async clickOnSubmitButton() {
        await this.submitButton.click();
        addLog(`Clicking on Submit Button : ${await this.submitButton.selector}`)
    }
}
export default new FormsPage()