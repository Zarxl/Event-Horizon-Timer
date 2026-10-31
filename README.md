# Event Horizon – Windows + Android

## Easiest way: let GitHub build both for you (nothing to install)
1. Create a free account at github.com and make a **new repository**.
2. Upload everything in this folder (drag and drop works; include the hidden `.github` folder).
3. Open the **Actions** tab. The "Build apps" workflow starts by itself (about 5–10 min). If not, click it, then **Run workflow**.
4. When it turns green, open the run and download from **Artifacts**:
   - `windows-installer` – unzip it and run the `.exe`.
   - `android-apk` – unzip it, send `app-debug.apk` to your phone, open it, and allow "install unknown apps" when asked.

## Build on your own PC instead
Needs Node.js 20+. For Android also Android Studio and JDK 17.
- Windows app: `npm install` then `npm run win`. Installer appears in `dist/`. Test without installing: `npm start`.
- Android app: `npm install`, `npm run android:add`, `npm run android:open`. In Android Studio choose Build > Build APK(s).

## Install as a web app (no build)
Put the `www` folder on any HTTPS host (GitHub Pages, Netlify Drop). Open it in Chrome or Edge and choose Install app.

## Notes
- Android alarms/timers use the phone's notification scheduler, so they ring even when the app is closed. Allow notifications and "Alarms & reminders" when asked; battery saver may delay them.
- Windows: the app keeps timers running when minimised. Keep it open (or minimised) for alarms to ring.
- The APK is a debug build for personal use. For the Play Store you need a signed release build.
