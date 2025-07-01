# mobile-todo
# TodoMaster - Cross-Platform Task Management App

A beautiful, intuitive, and feature-rich todo task management mobile application built with React Native and Expo. This app allows users to manage their personal tasks with full CRUD operations, social authentication, and a modern UI design.

## 🚀 Features

### Authentication
- **Google Sign-In**: Secure social authentication using Google OAuth
- **Persistent Sessions**: User login state is maintained across app restarts
- **Error Handling**: Proper error states and user feedback

### Task Management
- **Full CRUD Operations**: Create, Read, Update, Delete tasks
- **Task Properties**:
  - Title (required)
  - Description (optional)
  - Due Date with calendar picker
  - Priority levels (Low, Medium, High)
  - Status (Pending/Completed)
- **Smart Sorting**: Tasks sorted by priority and due date
- **Local Storage**: All data persisted locally using AsyncStorage

### User Experience
- **Intuitive UI**: Clean, modern design with smooth animations
- **Search & Filter**: Find tasks quickly with search and filter options
- **Pull-to-Refresh**: Refresh task list with pull gesture
- **Swipe Actions**: Swipe left on tasks to reveal edit/delete options
- **Empty States**: Helpful messages when no tasks are found
- **Progress Tracking**: Visual progress indicators and statistics
- **Haptic Feedback**: Tactile feedback for user interactions

### Additional Features
- **Task Statistics**: Dashboard showing completed, pending, and overdue tasks
- **Motivational Messages**: Dynamic encouragement based on progress
- **Floating Action Button**: Quick access to add new tasks
- **Responsive Design**: Optimized for both iOS and Android
- **Crash Reporting**: Integrated Sentry for error tracking
- **Animations**: Smooth transitions and micro-interactions

## 🛠 Tech Stack

- **Framework**: React Native with Expo
- **Authentication**: Google OAuth with expo-auth-session
- **Navigation**: React Navigation v6
- **State Management**: React Context API
- **Storage**: AsyncStorage for local data persistence
- **UI Components**: Custom components with Expo Vector Icons
- **Animations**: React Native Animatable & Reanimated
- **Date Picker**: React Native Community DateTimePicker
- **Crash Reporting**: Sentry
- **Gestures**: React Native Gesture Handler

## 📱 Setup Instructions

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/todomaster.git
   cd todomaster/learningapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Google OAuth** (Important)
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add your client ID to `src/contexts/AuthContext.js`

4. **Configure Sentry** (Optional)
   - Create account at [Sentry.io](https://sentry.io/)
   - Get your DSN and add it to `App.js`

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Run on device/simulator**
   - For iOS: Press `i` in terminal or scan QR code with Expo Go app
   - For Android: Press `a` in terminal or scan QR code with Expo Go app

## 🏗 Architecture Overview

### Design Pattern
The app follows a **Provider Pattern** with React Context for state management, ensuring clean separation of concerns and scalable architecture.

### Project Structure
```
src/
├── contexts/           # Global state management
│   ├── AuthContext.js  # Authentication state
│   └── TaskContext.js  # Task management state
├── screens/            # App screens
│   ├── AuthScreen.js   # Login screen
│   ├── TasksScreen.js  # Main task list
│   └── AddEditTaskScreen.js # Task creation/editing
├── components/         # Reusable UI components
│   ├── TaskItem.js     # Individual task display
│   ├── EmptyState.js   # No data states
│   └── TaskStats.js    # Progress statistics
└── navigation/         # Navigation configuration
    └── AppNavigator.js # Main navigation setup
```

### State Management
- **AuthContext**: Manages user authentication, login/logout
- **TaskContext**: Handles task CRUD operations, filtering, search
- **Local Storage**: AsyncStorage for data persistence

### Component Architecture
- **Functional Components**: All components use React hooks
- **Custom Hooks**: Context hooks for clean API access
- **Reusable Components**: Modular design for maintainability

## 🎯 Key Assumptions Made

1. **Offline-First**: App works entirely offline with local storage (no backend required)
2. **Google OAuth**: Only Google sign-in implemented (as per "any one" requirement)
3. **Mobile-Optimized**: Designed primarily for mobile devices
4. **English Language**: UI text in English only
5. **Gesture Support**: Assumes devices support swipe gestures
6. **Modern Devices**: Targets iOS 12+ and Android 6+

## 📊 Architecture Diagram

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   AuthContext   │    │   TaskContext   │    │  AsyncStorage   │
│                 │    │                 │    │                 │
│ - User State    │    │ - Tasks Array   │    │ - User Data     │
│ - Login/Logout  │    │ - CRUD Ops      │    │ - Tasks Data    │
│ - Google Auth   │    │ - Filtering     │    │ - Persistence   │
└─────────┬───────┘    └─────────┬───────┘    └─────────┬───────┘
          │                      │                      │
          │                      │                      │
          └──────────┬───────────┴──────────────────────┘
                     │
                     ▼
         ┌─────────────────────┐
         │    AppNavigator     │
         │                     │
         │ - Stack Navigation  │
         │ - Auth Flow         │
         │ - Screen Management │
         └──────────┬──────────┘
                    │
                    ▼
    ┌───────────────┼───────────────┐
    │               │               │
    ▼               ▼               ▼
┌─────────┐  ┌─────────────┐  ┌──────────────┐
│AuthScreen│  │TasksScreen  │  │AddEditScreen │
│         │  │             │  │              │
│- Google │  │- Task List  │  │- Form Inputs │
│  Login  │  │- Search     │  │- Validation  │
│- Error  │  │- Filters    │  │- Date Picker │
│  States │  │- Stats      │  │- Priority    │
└─────────┘  └─────────────┘  └──────────────┘
                    │
                    ▼
              ┌─────────────┐
              │ Components  │
              │             │
              │- TaskItem   │
              │- EmptyState │
              │- TaskStats  │
              └─────────────┘
```

## 🎥 Demo Video

[Loom Demo Video](https://www.loom.com/share/your-demo-video-link) - *Replace with actual video link*

The demo video showcases:
- User authentication flow
- Task creation and management
- Search and filtering functionality  
- Swipe gestures and animations
- Progress tracking and statistics
- Cross-platform compatibility

## 🚀 Build & Deployment

### Building for Production

**iOS**:
```bash
expo build:ios
```

**Android**:
```bash
expo build:android
```

### EAS Build (Recommended)
```bash
npm install -g @expo/eas-cli
eas build --platform all
```

## 🧪 Testing

Run the app on multiple devices/simulators to test:
- Different screen sizes
- iOS and Android compatibility
- Network connectivity scenarios
- Authentication flows
- Data persistence

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**This project is a part of a hackathon run by https://www.katomaran.com** 
