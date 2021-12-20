import { addLog } from "../utils/commands"

class DropDowns {
    get dropDownContainer() { return $('#complex') }
    get dropDownButton() { return $('//a[@class="dropdown-item"]/span[text()="Drop Downs"]') }
    get dropdownText() { return $('//div[@class="col-lg-12"]/h1') }
    get linksDropDown() { return $('.hdropbtn') }
    get selectingLink() { return $('//a[text()="Link 3"]') }
    get toggleBar() { return $('.slider') }
    get toggleDropDownList() { return $('#color-select') }
    get dropDownRadio() { return $('//label[@for="consoles"]/span') }
    get dropDownList() { return $('#react-select') }
    get resetButton() { return $('#reset') }

    async clickOnComplexElementsMenu() {
        await this.dropDownContainer.scrollIntoView();
        addLog(`Hovering the Mouse on Complex Elements Menu`)
        await this.dropDownContainer.moveTo();
        await this.dropDownButton.waitForClickable();
        await this.dropDownButton.click();
        addLog(`Clicking On DropDown Button : ${await this.dropDownButton.selector}`)
    }
    async clickOnTypesOfDropDowns(dropDownData: { toggleBarValue: string, dropDownList: string }) {
        await this.linksDropDown.scrollIntoView();
        addLog(`Hovering the Mouse on types Of Links of DropDown`)
        await this.linksDropDown.waitForClickable();
        await this.linksDropDown.moveTo();
        await this.selectingLink.click();
        addLog(`Clicking on Selecting Link : ${await this.selectingLink.selector}`)
        await this.toggleBar.click();
        addLog(`Clicking on Toggle Bar slider : ${await this.toggleBar.selector}`)
        await this.toggleDropDownList.selectByVisibleText(dropDownData.toggleBarValue);
        addLog(`Entering the value : ${dropDownData.toggleBarValue}`)
        await this.dropDownRadio.isSelected();
        addLog(`Checking The Radio Button is Selected or Not`)
        await this.dropDownList.selectByVisibleText(dropDownData.dropDownList);
        addLog(`Entering the Value : ${dropDownData.dropDownList}`)
    }
    async clickOnResetAllButton() {
        await this.resetButton.click();
    }
}
export default new DropDowns()