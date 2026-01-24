import {test, expect, Locator} from '@playwright/test';

test("verify built in playwright locators", async ({page})=>{

    await page.goto("https://demo.nopcommerce.com");
     //AltText when element is an image or scanned images. on HTML page you will get Img or Area
    const logo:Locator = page.getByAltText("nopCommerce demo store");

    await expect(logo).toBeVisible();

    //await expect(page.getByText("Welcome to our store")).toBeVisible(); 
    // // getbytext means get the locator by text- non responsive text
    await expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i)).toBeVisible();// provide substring


    await page.getByRole("link" ,{name : "Register"}).click(); //get b y Role is used for interactive elements....may be most usefull
    await expect(page.getByRole("heading",{name :'Register'})).toBeVisible();


    await page.getByLabel('First name:').fill("Sukhi");//getbyLable used when label name is awailable
    await page.getByLabel('Last name:').fill("Sukhi"); //getbyLable used when label name is awailable
    await page.getByLabel('Email:').fill("Sukhi@gmail.com"); //getbyLable used when label name is awailable
    await page.getByPlaceholder('Search store').fill('Apple Macbook Pro'); //get by placeholder , usually in input elements placeholder attribute is present.

});