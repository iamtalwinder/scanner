import { StyleSheet, Text, View } from 'react-native';

export const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Favorties Screen</Text>
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

export default SettingsScreen;

