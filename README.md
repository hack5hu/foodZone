Here's a refined and professional version of your `README.md` for **FoodZone**. It maintains all your details but improves clarity, formatting, and consistency:

---

```markdown
# 🍔 FoodZone

**FoodZone** is a feature-rich, modern food ordering app built using **React Native**. It follows the **Atomic Design** architecture and leverages **Redux Toolkit** for scalable state management. With smooth UI components, cart functionality, mock data, and local authentication, FoodZone offers a realistic food delivery app experience.

---

## ✨ Features

- 🍽️ Browse curated restaurants and cuisines
- ➕ Add/remove items with quantity control
- 🛒 Real-time cart and order summary
- 💳 Checkout with subtotal, discounts, tax, and total
- 🔐 Login & Signup with local credential validation
- 🧱 Structured using Atomic Design (Atoms → Molecules → Organisms)
- 🌐 Internationalization-ready (i18n support structure)
- 💾 State management via Redux Toolkit
- 💅 Themed support for consistent light/dark UI

---

## 📁 Project Structure


src/
│
├── components/           # Reusable UI components
│   ├── atoms/            # Basic elements (Text, Button)
│   ├── molecules/        # Groups of atoms (ItemRow, InputField)
│   ├── organisms/        # Complex components (RestaurantCard, CuisineBlock)
│
├── constants/            # Static data (translations, mock content)
├── screens/              # Screen-level components
│   └── hooks/            # Custom hooks for screen logic
│
├── store/                # Redux slices, store config
├── theme/                # Color, font, and spacing tokens

````

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16+)
- npm or Yarn
- React Native CLI
- Android Studio or Xcode
- JDK 11+

### Installation

```bash
git clone https://github.com/your-username/foodzone.git
cd foodzone
npm install
# or
yarn install
````

### Run the App

#### Android

```bash
npx react-native run-android
```

#### iOS

```bash
cd ios && pod install && cd ..
npx react-native run-ios
```

---

## 🔐 Authentication Flow

* **Signup**: Saves new user to `LoginUserDetails` in Redux
* **Login**: Validates credentials against Redux-stored users
* Prevents duplicate signups with meaningful error handling

---

## 📦 Core Dependencies

* `@reduxjs/toolkit` – Redux state management
* `react-redux` – Connect Redux with React components
* `@react-navigation/native` – Navigation
* `formik` – Form handling
* `react-native-vector-icons` – Icon support
* `react-native-safe-area-context`
* `react-native-gesture-handler`

---

## 🧠 State Management

### Redux Slices

* `authSlice` – Manages user login state and authentication
* `cartSlice` – Handles cart items, quantities, total price, and actions

---

## 💳 Checkout Logic

* Displays an invoice-style summary
* 20% off with voucher code: `FOOD20`
* Applies 5% tax after discount
* Fake payment via Alert confirmation

---

## 🌍 Localization (i18n)

* Basic translation support using a `baseLocalisation` file
* Ready for integration with `i18next` or other i18n libraries

---

## 🎨 Customizing App Icon

To update the Android app icon:

1. Replace assets in:

   ```
   android/app/src/main/res/mipmap-*
   ```
2. Clean and rebuild:

```bash
cd android && ./gradlew clean && cd ..
npx react-native run-android
```

---

## 📄 License

MIT License © 2025 \[hack5hu]

```
