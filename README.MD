# 📆 Smartphone Calendar Prototype

This is a simple prototype of a **Smartphone Calendar App** built with **Angular** and **Ionic Framework**. It is designed to run on **Android** and **iOS** platforms using **Capacitor**.

The app performs a basic HTTP request to a static server endpoint and displays a response message on the screen.

---

## 🚀 Features

- ✅ Cross-platform (Android & iOS)
- 🔁 Makes an HTTP request to a fixed server URL
- 💬 Displays a "Hello World" message (or error) based on the server's response
- 🧩 Built with Angular + Ionic + Capacitor

---

## 🛠️ Tech Stack

- Angular
- Ionic Framework
- Capacitor
- Android Studio / Xcode

---

## 🛠 Troubleshooting

### ❌ Error: `Could not read script '.../android/capacitor.settings.gradle' as it does not exist.`

This error usually occurs if the Android project has missing or outdated Capacitor configuration.

#### ✅ Solution

Run the following command to re-sync the Capacitor configuration and regenerate missing files:

```bash
ionic capacitor sync android
