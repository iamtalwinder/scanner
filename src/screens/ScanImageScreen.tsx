import { StyleSheet, Text, View } from 'react-native';

export const ScanImageScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Scan Image1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212122'
  },
});

export default ScanImageScreen;

