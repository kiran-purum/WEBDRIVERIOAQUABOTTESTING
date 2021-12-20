import { addLog } from "../utils/commands"

class TableExample {
    get tableContainer() { return $('#navbarDropdown2') }
    get tableExample1() { return $('//*[@id="navbar-example"]/ul/li[5]/div/a[1]/span') }
    get table1HeadingText() { return $('//div[@class="col-lg-12"]/h1') }
    get tableHover() { return $('#navbarDropdown2') }
    get table2Example() { return $('//*[@id="navbar-example"]/ul/li[5]/div/a[2]/span') }
    get table2HeadingText() { return $('//*[@class="row"]/div/h1') }
    async clickOnTable1Info() {
        await this.tableContainer.scrollIntoView();
        addLog(`Hovering The Mouse on Table Menu`)
        await this.tableContainer.moveTo();
        await this.tableExample1.waitForClickable();
        await this.tableExample1.click();
        addLog(`Clicking on Table 1Exmaple Button : ${await this.tableExample1.selector}`);
    }
    async clickOnTable2Info() {
        await this.tableHover.scrollIntoView();
        addLog(`Hovering the Mouse again on Table Menu`)
        await this.tableHover.moveTo();
        await this.table2Example.waitForClickable();
        await this.table2Example.click();
        addLog(`Clicking the Table 2 Example ${await this.table2Example.selector}`);
    }
}
export default new TableExample()