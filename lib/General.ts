//Toprovide all Reusable Functions? Methods[User-Defined] related to whole application

import { global } from "./Global";

export class general extends global{


    async openApplication(){
        await this.page.goto(this.url);
        console.log("Application opened");

    }


    async login(){
    await this.page.locator(this.textbox_loginname).fill(this.username);
    await this.page.locator(this.textbox_password).fill(this.password)
    console.log("username and password entered");
    await this.page.locator(this.button_login).click();
    console.log("Login Successful");

    }

    async logout(){
        //await this.page.locator(this.link_logout).click();
        await this.page.getByRole('link',{name:this.link_logout})
        console.log("Logout successful");
    }

    async waitStatement(){
        await this.page.waitForTimeout(3000);
    }

    async addEmployee(){
        const frame= await this.page.frameLocator(this.frame_empInfo);
        await frame.locator(this.add_button).click();

        console.log("clicked on add button");
        await frame.locator(this.textfield_lastname).fill(this.lastname);
        //await frame.locator(this.textfield_Firstname).fill(this.firstname);
        await frame.locator(this.textfiled_Middlename).fill(this.middlename);
        await frame.locator(this.textfield_Nickname).fill(this.nickname);

        await frame.locator(this.button_Save).click();
        console.log("clicked on save button, employee successfully created");
}
}