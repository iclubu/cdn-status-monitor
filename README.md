# 📡 CDN Status Monitor
**A serverless, real-time infrastructure dashboard.**

This tool aggregates the live status of major CDN providers (Cloudflare, Fastly, Akamai, AWS) into a single, clean interface. It uses Google Apps Script as a middleware to bypass CORS restrictions, ensuring zero data storage and maximum privacy.

## 🚀 Live Demo
(https://iclubu.github.io/cdn-status-monitor/)

## 🛠 Installation

### Step 1: The Backend (Proxy)
1. Create a new [Google Apps Script](https://script.google.com).
2. Paste the contents of `Code.gs` and click **Deploy > New Deployment**.
3. Select **Web App**, set Access to **Anyone**, and copy the URL.

### Step 2: The Frontend
1. Open `index.html`.
2. Replace `PROXY_URL` with your unique Apps Script URL.
3. Open the file locally or host it via GitHub Pages.

## 🔒 Security & Privacy
- **Zero Storage:** Data is fetched live and never saved to a database.
- **Serverless:** No server maintenance required.
- **Privacy-First:** The proxy only relays XML data from official status pages.

## 📄 License
Licensed under [AGPL-3.0](LICENSE).
