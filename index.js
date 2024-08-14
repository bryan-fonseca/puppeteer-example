import puppeteer from "puppeteer";

async function init() {
    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>PDF Example</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
        }
        h1 {
          color: #333;
        }
      </style>
    </head>
    <body>
      <h1>Danielito</h1>
    </body>
    </html>
  `;

    await page.setContent(htmlContent);

    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    await page.pdf({
        path: "./files/example.pdf",
        format: "A4",
        printBackground: true,
    });

    await browser.close();
}

init();
