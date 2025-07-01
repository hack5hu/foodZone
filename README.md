```markdown
# 🍔 FoodZone

**FoodZone** is a full-featured food ordering app built using **React Native**. It follows the **Atomic Design** pattern and uses **Redux Toolkit** for state management. With smooth UI components, mock restaurant data, cart and checkout functionality, FoodZone simulates a real-world food ordering experience.

---

## ✨ Features

- 🍽️ Browse restaurants and cuisines
- ➕ Add/remove items to cart with quantity support
- 🛒 Real-time cart management
- 💳 Checkout with subtotal, discount, tax, and total breakdown
- 🔐 Login & Signup with local credential validation
- 🧱 Atomic Design (Atoms, Molecules, Organisms)
- 🌐 Translation support ready (basic i18n structure)
- 💾 Redux Toolkit for robust and scalable state
- 💅 Themed for light/dark UI

---

## 📁 Folder Structure

src/
│
├── components/
│   ├── atoms/            # Smallest UI elements (Text, Button)
│   ├── molecules/        # Combined units (ItemRow, LabeledInput)
│   ├── organisms/        # Larger blocks (CuisineBlock, RestaurantCard)
│
├── constants/            # Static data (translations, mockRestaurants)
├── screens/              # Screen-level components
│   └── hooks/            # Custom hooks for screen logic
│
├── store/                # Redux slices, hooks, and store setup
├── theme/                # Color and styling constants

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm or yarn
- React Native CLI
- Android Studio / Xcode
- Java JDK 11+

### Installation

```bash
git clone https://github.com/your-username/foodzone.git
cd foodzone
npm install
````

### Run App

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

## 🛒 Login / Signup Logic

* On **Signup**, user data is stored in Redux (`LoginUserDetails`)
* On **Login**, credentials are validated from `LoginUserDetails`
* Duplicate signup with same email is prevented with an error message

---

## 📦 Dependencies

* `@reduxjs/toolkit`
* `react-redux`
* `@react-navigation/native`
* `formik`
* `react-native-vector-icons` (optional)
* `react-native-gesture-handler`
* `react-native-safe-area-context`

---

## 🧠 State Management

Redux slices:

* `cartSlice` — manages cart items, quantity, totalPrice
* `authSlice` — handles login state, user list, and validation

---

## 📲 App Icon

To customize the Android app icon:

1. Replace icons in `android/app/src/main/res/mipmap-*` folders
2. Clean and rebuild the project:

```bash
cd android && ./gradlew clean
cd ..
npx react-native run-android
```

---

## 🔐 Checkout & Payment

* Displays an invoice-style summary
* 20% discount with voucher code `FOOD20`
* 5% tax on post-discount subtotal
* Fake payment confirmation via Alert

---

## 🌍 Translations

The project supports translations via a `baseLocalisation` constants file. You can later scale it using `i18n`.

---

## 📄 License

MIT License © 2025 \[hack5hu]

```
