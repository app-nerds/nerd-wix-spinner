# Nerd Wix Spinner

Nerd Wix Spinner is a web component that will display a shim and a loading spinner graphic. This component is designed to work on Wix websites and within Wix's limitation, though it is not limited to just Wix usage. 

## 🚀 Quick Start

To begin ensure your Wix site has **Dev Mode** enabled. If you are unsure how to do this please see [https://support.wix.com/en/article/about-velo-by-wix](https://support.wix.com/en/article/about-velo-by-wix). Now follow these steps to configure this component to be used on any page in your site.

1. Add a **Custom Element** to your page by clicking the *Plus Button* -> Embed Code -> Popular Embeds, and choose **Custom Element**
2. Resize the element. It doesn't need to be large. Drag the custom element into your header so it is available on all pages.
3. Open the developer/code panel (found at the bottom of the window). Find the properties panel and change the ID of the custom element to `spinner`.
4. On the custom element, click the button **Choose Source**
5. Choose *Velo File*. Then in the dropdown box below that you may have the option to create a new Velo file. Do this, and name the file `NerdWixSpinner.js`.
6. In the **Tag Name** field enter `nerd-wix-spinner`.
7. Copy the code from this folder and paste it into your new file in Wix: `dist/NerdWixSpinner.js`.
8. Profit!

## Usage

The Nerd Wix Spinner component has one primary operations: **show**.

To show the spinner, execute the following code. This code assumes you've named the custom element **spinner**.

```js
$w("#spinner").setAttribute("show", true);
```

To hide the spinner:

```js
$w("#spinner").setAttribute("show", false);
```

