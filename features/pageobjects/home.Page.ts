import { addLog } from "../utils/commands";

class HomePage {
    get homeButton() { return $('.nav-link.page-scroll.active') }
    get headingText() { return $('//span[text()="Automated Testing"]') }
    async LandingPageLink() {
        await browser.url("https://aquabottesting.com/");
        addLog("Loading the URL")
        await browser.maximizeWindow();
        addLog("Maximizing the window");
    }
    async clickOnHomeButton() {
        await this.homeButton.click();
        addLog(`Clicking on Home Button : ${await this.homeButton.selector}`)
    }
}
export default new HomePage()