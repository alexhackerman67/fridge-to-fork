# Fridge to Fork

A small, browser-based kitchen planner with six two-serving recipes. The starter pantry makes three recipes available immediately. Pantry and meal plans save in the current browser.

## Run on your Mac

Unzip the download. In Terminal, type `cd ` (including the space), drag the extracted fridge-to-fork folder into Terminal, and press Return. Run:

    python3 -m http.server 8000

Open http://localhost:8000 in your browser. Keep Terminal open while testing. Press Control+C to stop. If Python is unavailable, the GitHub Pages method below also runs the full app.

## Put it on GitHub

1. Sign in to GitHub and create a public repository named **fridge-to-fork**.
2. Open **uploading an existing file** (or **Add file → Upload files**). Drag the extracted folder’s contents into the upload area, including the whole assets folder. Keep index.html at the top level. Commit the changes to main.
3. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then save.
4. When the deployment finishes, open **Visit site** in Pages settings. Use that HTTPS link on your phone to try the camera.

GitHub instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Test the prototype

- In **Recipes**, search for capsicum. Open the fried rice and check its time, quantities and swap suggestion.
- In **Scan pantry**, choose **Try sample scan**. It runs the same local classifier as a real photo. Review the suggestions, enter the current amounts and save. Reopen **My pantry** to verify them. Test a real photo with a well-lit banana, broccoli or capsicum.
- With the original starter quantities, plan **Lemony pesto spaghetti** twice on different days in the same week. Shopping list should show an extra **110 g spaghetti, 20 g spinach and 20 g pesto**. Both dinners use one lemon in total, already covered by the pantry.
- Increase pantry spaghetti to **360 g**. The spaghetti entry should disappear from that week’s shopping list. Refresh the page and check both dinners are still there.
- **Cook now** subtracts the displayed ingredients. Opening a meal from its planned day and cooking it also clears that dinner from the plan.
- Open the published address on a phone to test **Take photo**. On laptops, the browser may offer a file picker instead.

## Scanner and prototype scope

The bundled TensorFlow.js MobileNet model runs on your device when you scan. The app checks overlapping shelf regions at two sizes for common produce. In review, Read packet labels runs English OCR on the device and suggests matching pantry ingredients. Its first use needs an internet connection to fetch Tesseract.js and English language data. Photo data is discarded when you close the scanner. Recognition can miss hidden food, packaging or unfamiliar items. Review ingredient names and supply weights or counts before saving. Saving updates only the listed ingredients and sets their current totals. Existing pantry amounts are offered for review. If a scan fails, add ingredients manually. Oil, seasoning and water in recipe methods are assumed pantry staples.

The catalogue and date-based dinner planner work without an account, backend, paid API or installation. Data is local to each browser and site address. A real supermarket checkout is outside this prototype.

## Credits

The sample fridge image and mascot were generated for this prototype. Recipe photos are from Wikimedia Commons. The local copies are resized and compressed and illustrate similar dishes.

- [Spaghetti con pesto alla genovese.jpg](<https://commons.wikimedia.org/wiki/File:Spaghetti_con_pesto_alla_genovese.jpg>) by Michael Musto. CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0
- [SHAKSHUKA & FETA - The Meeting Place 2025-06-28.jpg](<https://commons.wikimedia.org/wiki/File:SHAKSHUKA_%26_FETA_-_The_Meeting_Place_2025-06-28.jpg>) by Andy Li. CC0 http://creativecommons.org/publicdomain/zero/1.0/deed.en
- [Egg Fried Rice.jpg](<https://commons.wikimedia.org/wiki/File:Egg_Fried_Rice.jpg>) by Gaurav Dhwaj Khadka. CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0
- [Piyaz 01.jpg](<https://commons.wikimedia.org/wiki/File:Piyaz_01.jpg>) by Chapultepec. Public domain
- [Grilled Cheese Surprise with Tomato and Spinach (49164481196).jpg](<https://commons.wikimedia.org/wiki/File:Grilled_Cheese_Surprise_with_Tomato_and_Spinach_(49164481196).jpg>) by Alabama Extension. CC0 http://creativecommons.org/publicdomain/zero/1.0/deed.en
- [Banana Pancakes Pk021.jpg](<https://commons.wikimedia.org/wiki/File:Banana_Pancakes_Pk021.jpg>) by PallaviKhale. CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0

 TensorFlow.js 4.22.0 and tensorflow-models/mobilenet 2.1.1 by Google and TensorFlow authors, and Google MobileNet V2 100/224 classification model, are distributed with their Apache 2.0 licence in assets/scanner/LICENSE.txt. See https://github.com/tensorflow/tfjs-models/tree/master/mobilenet and https://www.kaggle.com/models/google/mobilenet-v2 .

## Install on a phone

1. Extract the download. Upload the contents of the folder containing index.html to the top level of your GitHub repository, including assets, sw.js, install.js and app.webmanifest. Commit to main.
2. Under Settings → Pages, select Deploy from a branch, main and /(root). Open the live HTTPS address after deployment.
3. On iPhone, open that address in Safari, tap Share → Add to Home Screen, enable Open as Web App if shown, then tap Add. On Android, use Chrome’s menu → Add to home screen → Install.
4. Open the home-screen icon while online and allow the first download (roughly 16 MB) to finish. Add a dinner, enable airplane mode, then close and reopen the app from its icon to test offline use.

The app caches its recipes, images and produce scanner on this device. Pantry and meal plans are stored locally. This release uses the existing recipe catalogue.

## Connect the free cloud scanner

The standard scan runs on the device. For uploaded photos it also attempts to read packet labels after the produce pass. You can review and save while it reads.

1. An adult account holder can [deploy the included scanner to Cloudflare](https://deploy.workers.cloudflare.com/?url=https://github.com/alexhackerman67/fridge-to-fork) on **Workers Free**. Keep the free plan. The repository config supplies the AI binding, so there is no API key to create or paste into GitHub.
2. Open the deployed Worker's public workers.dev address. Tap **Connect this scanner to Fridge to Fork**, then **Connect scanner**. Repeat on each device that needs cloud scanning.
3. In **Scan pantry**, tick **Send this photo to my Cloudflare scanner**, then take or upload a photo. Only that selected scan sends a resized JPEG. Review the names and quantities before saving. If the service is unavailable, the app tries the on-device scanner.
4. The daily free allowance is shared by everyone using that Worker. On Workers Free, requests stop when the allowance is exhausted. [Cloudflare pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/)
