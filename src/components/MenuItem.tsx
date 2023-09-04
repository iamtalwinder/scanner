import { View, StyleSheet } from 'react-native';
import { Menu } from 'react-native-paper';

const MenuItem: React.FC = () => (
  <View style={styles.container}>
    <Menu.Item leadingIcon="redo" onPress={() => { }} title="Redo" />
    <Menu.Item leadingIcon="undo" onPress={() => { }} title="Undo" />
    <Menu.Item leadingIcon="content-cut" onPress={() => { }} title="Cut" disabled />
    <Menu.Item leadingIcon="content-copy" onPress={() => { }} title="Copy" disabled />
    <Menu.Item leadingIcon="content-paste" onPress={() => { }} title="Paste" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    top: 90,
    width: '40px',
    backgroundColor: 'red',
  },
});

export default MenuItem;