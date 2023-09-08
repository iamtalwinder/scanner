import { StyleSheet, Text, View } from 'react-native';

export const HistoryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>History Screen</Text>
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

export default HistoryScreen;

