import { StyleSheet, Text, View } from 'react-native';

export const MyQRScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>My QR Screen</Text>
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

export default MyQRScreen;

