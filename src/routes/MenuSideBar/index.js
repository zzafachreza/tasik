import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SidebarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.drawerItem}>Menu Item 1</Text>
      <Text style={styles.drawerItem}>Menu Item 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  drawerItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default SidebarScreen;
