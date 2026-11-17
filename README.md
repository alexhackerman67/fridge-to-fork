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

The bundled TensorFlow.js MobileNet model runs on your device when you scan. The app checks the photo and several crops for common produce. Photo data is discarded when you close the scanner. Recognition can miss hidden food, packaging or unfamiliar items. Review ingredient names and supply weights or counts before saving. Saving updates only the listed ingredients and sets their current totals. Existing pantry amounts are offered for review. If a scan fails, add ingredients manually. Oil, seasoning and water in recipe methods are assumed pantry staples.

The catalogue and date-based dinner planner work without an account, backend, paid API or installation. Data is local to each browser and site address. A real supermarket checkout is outside this prototype.

## Credits

Recipe photographs and the sample fridge image were generated for this prototype. TensorFlow.js 4.22.0 and tensorflow-models/mobilenet 2.1.1 by Google and TensorFlow authors, and Google MobileNet V2 100/224 classification model, are distributed with their Apache 2.0 licence in assets/scanner/LICENSE.txt. See https://github.com/tensorflow/tfjs-models/tree/master/mobilenet and https://www.kaggle.com/models/google/mobilenet-v2 .
