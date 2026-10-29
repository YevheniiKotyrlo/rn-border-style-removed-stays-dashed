import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function App() {
  const [dashed, setDashed] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {dashed ? "borderStyle: 'dashed'" : 'borderStyle removed'}
      </Text>
      <View testID="bordered" style={[styles.box, dashed && styles.dashed]} />
      <Text style={styles.label}>Never dashed</Text>
      <View testID="never-dashed" style={styles.box} />
      <Pressable
        testID="remove-border-style"
        style={styles.button}
        onPress={() => setDashed(false)}>
        <Text style={styles.buttonText}>Remove borderStyle</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 48,
    gap: 24,
    backgroundColor: '#ffffff',
  },
  label: {
    color: '#000000',
  },
  box: {
    width: 240,
    height: 120,
    borderWidth: 8,
    borderColor: '#d00000',
  },
  dashed: {
    borderStyle: 'dashed',
  },
  button: {
    alignSelf: 'flex-start',
    padding: 16,
    backgroundColor: '#202020',
  },
  buttonText: {
    color: '#ffffff',
  },
});

export default App;
