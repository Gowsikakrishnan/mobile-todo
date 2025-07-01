import React from 'react';
import { LogBox } from 'react-native';
import { AuthProvider } from './src/contexts/AuthContext';
import { TaskProvider } from './src/contexts/TaskContext';
import AppNavigator from './src/navigation/AppNavigator';

// Ignore specific warnings
LogBox.ignoreLogs([
  'Warning: ...',
  'Require cycle:',
]);

export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <AppNavigator />
      </TaskProvider>
    </AuthProvider>
  );
}
