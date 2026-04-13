import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { UserProvider } from './context/Usercontext';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <UserProvider>
        <HomeScreen />
      </UserProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});