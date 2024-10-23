import { router } from 'expo-router';
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Button
          title="Sign Up"
          onPress={() => router.push('/(auth)/sign-up')}
        />
      <Button
        title="Sign In"
        onPress={() => router.push('/(auth)/sign-in')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
