import { StyleSheet, Text, View } from 'react-native';

export const ShareScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Share Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ShareScreen;

