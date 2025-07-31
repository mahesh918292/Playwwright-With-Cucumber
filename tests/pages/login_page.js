export default class BasePage {

    // initializing page 
    constructor(page) {
        this.page = page;
    }

    // NavigateToBrowser Method
    async NavigateToBrowser(url) {
        // navigating to the browser
        await this.page.goto(url);
        // pauses execution to load the entire assets 
        await this.page.waitForTimeout(5000);
    }
    async Fill_Login_Details(username, password) {
        await this.page.fill("#user-name",username)
        await this.page.fill("#password",password)
        await this.page.click('#login-button')
        await this.page.waitForTimeout(3000);
    }
    async Products_Page_Validation()
    {
        const url=await this.page.url()
        console.log(url)
    }
}
