# Flutter Chat App

This Flutter project is a group chat application where users can log in using their email and password. Only authenticated users are allowed to access the chat functionality. The app utilizes Firebase services including Firebase Authentication for user authentication, Firebase Firestore for storing chat messages and user information, Firebase Cloud Messaging for sending notifications to all users in the chat group, and Firebase Storage for storing user profile pictures.

## Features

- User authentication using email and password.
- Group chat functionality for authenticated users.
- Firebase Cloud Messaging for sending notifications to all users in the chat group.
- User profile picture upload during sign up from camera or file.
- Display user profile pictures in the chat screen.

## Packages Used

- [firebase_core](https://pub.dev/packages/firebase_core): Flutter plugin for Firebase Core, enabling connecting to multiple Firebase apps.
- [firebase_auth](https://pub.dev/packages/firebase_auth): Flutter plugin for Firebase Authentication, enabling user authentication.
- [firebase_storage](https://pub.dev/packages/firebase_storage): Flutter plugin for Firebase Cloud Storage, enabling storing and retrieving user profile pictures.
- [image_picker](https://pub.dev/packages/image_picker): Flutter plugin for picking images from the device's camera or gallery.
- [cloud_firestore](https://pub.dev/packages/cloud_firestore): Flutter plugin for Cloud Firestore, enabling real-time database functionality.
- [firebase_messaging](https://pub.dev/packages/firebase_messaging): Flutter plugin for Firebase Cloud Messaging, enabling sending and receiving push notifications.

## Installation

1. Clone this repository: `git clone https://github.com/your_username/your_project.git`
2. Navigate to the project directory: `cd your_project`
3. Run `flutter pub get` to install dependencies.

## Usage

1. Make sure to set up Firebase for your project by following the Firebase setup instructions.
2. Enable Firebase Authentication, Firestore, Storage, and Cloud Messaging in your Firebase console.
3. Add your Firebase configuration files (`google-services.json` for Android, `GoogleService-Info.plist` for iOS) to your Flutter project.
4. Update the Firebase initialization code in your Flutter project as per Firebase documentation.
5. Run the app on an emulator or physical device to use the chat functionality.

## Screenshots

![Sign up screen](https://github.com/nith-in7/chat_app/assets/124262214/6782b5d5-86ab-402c-bc8b-33bed2a8bcf7)
![Sign in screen](https://github.com/nith-in7/chat_app/assets/124262214/6db763b5-7707-44df-aad0-bcaec793f34c)
![Chat Screen](https://github.com/nith-in7/chat_app/assets/124262214/f341a609-69ac-4bcd-9b8e-c3c2806b50f2)

## Live Demo
