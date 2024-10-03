import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import UpdatesList from '@/components/UpdatesList';
import { NovuProvider } from '@novu/react/hooks';

export default function UpdatesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <NovuProvider
        subscriberId="<Subscriber ID>"
        applicationIdentifier="<Application ID>"
      >
        <UpdatesList />
      </NovuProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});