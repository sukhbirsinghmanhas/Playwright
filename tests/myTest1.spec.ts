import {test,expect} from "@playwright/test"
import { title } from "node:process";

test ("Verify the webpage",async ({page})=>{

   await page.goto("http://www.automationpractice.pl/index.php");
    let titleName:string=await page.title();
    console.log("the title is :" , titleName);
    await expect(page).toHaveTitle("My Shop");
})