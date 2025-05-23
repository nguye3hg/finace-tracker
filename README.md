# 💰 Expense Tracker App
A simple web-based Expense Tracker built with React and Firebase (Authentication + Firestore). Users can sign in, record income and expenses with descriptions, and view real-time balances and transaction history.

# 🚀 Features
🔐 Firebase Authentication (Email/Password)

➕ Add Income or Expense entries with description and amount

📊 Automatic calculation of Balance, Total Income, and Total Expenses

🗂️ Transaction history stored per-user in Firestore

🔄 Real-time sync across devices

🌙 Dark-style theme

# 🧰 Tech Stack
Frontend: React

Auth & Database: Firebase Authentication, Firestore

# ⚙️ Local Setup
Clone repository
```
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

Install dependencies
```
npm install
```
# Configure Firebase

Create a Firebase project at https://console.firebase.google.com

Enable Email/Password under Authentication → Sign-in methods

Create a Firestore database

# Environment variables
Create a file named .env in the project root with your Firebase config:
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

# Start development server
```
npm start
```
# 🔥 Firestore Structure
All data lives under each user’s subcollection:
```

users/{uid}/transactions/{transactionId}
```

Each transaction document contains:

description: string

transactionAmount: number

transactionType: “income” or “expense”

createdAt: timestamp

userID: string (matches uid)

# 🔐 Firestore Security Rules
```
rules_version = '2';
service cloud.firestore {
match /databases/{database}/documents {
match /users/{userId}/transactions/{docId} {
allow read, write: if request.auth != null
&& request.auth.uid == userId;
}
}
```
}
