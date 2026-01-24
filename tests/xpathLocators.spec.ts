import {test, expect,Locator} from "@playwright/test";

test("Xpath locators demo", async ({page}) => {

   await page.goto("https://demowebshop.tricentis.com/");

   //1.absolute xpath
   const logo:Locator = page.locator("xpath=/html/body/div[4]/div[1]/div[1]/div[1]/a/img");
   await expect(logo).toBeVisible();

   //2.relative xpath
   const rellogo:Locator= page.locator("xpath=//img[@alt='Tricentis Demo Web Shop']");
   await expect(rellogo).toBeVisible();

   //3. contains() method
   const products:Locator=page.locator("//h2/a[contains(@href,'computer')]");
   
   const productsCount:number=await products.count(); //This is initializing a variable to store count of products
   console.log("Number of Products", productsCount);//Thats How we print message in TS
   expect(productsCount).toBeGreaterThan(0);//To be Greater than is conditional Assertion
   console.log(await products.first().textContent()); //prints first product name
   console.log(await products.nth(3).textContent()); //prints 4th product name

   let productTitles : string[]=await products.allTextContents(); //This will fetch all product names and store in array
   
   for (let pt in productTitles)          //For loop to iterate through array. in and of are 2 ways to iterate. 
      {
   console.log(productTitles[pt]);
      }

   //4. starts-with() method

   const buildProducts:Locator=page.locator("//h2/a[starts-with(@href,'/build')]"); 
   const buildProductCount:number= await buildProducts.count();
   expect(buildProductCount).toBeGreaterThan(0);   
   console.log("Number of Build your own products:", buildProductCount);

   const lastitem:Locator=page.locator("//div[@class='column follow-us']//li[last()]");
   await expect(lastitem).toBeVisible();   
   console.log("Last Item name",await lastitem.textContent());   

   const positionitem:Locator=page.locator("//div[@class='column follow-us']//li[position()=5]");
   await expect(positionitem).toBeVisible();   
   console.log("Name of the 5th Item",await positionitem.textContent());   
});

