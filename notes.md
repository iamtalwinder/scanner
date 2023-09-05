
```markdown
# IMPORTANT NOTES ON REACT NATIVE:

## 1. Error: "Rendered more hooks than the previous one"

### Error Due to:

```javascript
import CustomHeader from '../components/CustomHeader';

const Drawer = createDrawerNavigator();

const headerOptions: DrawerNavigationOptions = {
  header: CustomHeader; 
};

export const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Scan" screenOptions={headerOptions}>
      <Drawer.Screen name="Scan" component={ScanScreen}
        options={{
          drawerIcon: () => {
            return (
              <Ionicons name="scan" size={24} color="black" />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
}
```

In this `DrawerNavigator` component, I was using the `CustomHeader` component which uses Hooks, and in `DrawerNavigator`, `CustomHeader` is used as a prop. So React created the `CustomHeader` whole component as a prop, which is against the rules. That's why the above error occurred.

### SOLUTION:

```javascript
import CustomHeader from '../components/CustomHeader';

const Drawer = createDrawerNavigator();

const headerOptions: DrawerNavigationOptions = {
  header: (props) => <CustomHeader {...props}/>
};

export const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Scan" screenOptions={headerOptions}>
      <Drawer.Screen name="Scan" component={ScanScreen}
        options={{
          drawerIcon: () => {
            return (
              <Ionicons name="scan" size={24} color="black" />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
}
```

In this way, React renders the `CustomHeader` component as a functional component, and the error is resolved.

## 2. Error: Menu Item is not working when using a Custom MenuItem Component in Parent Component.

```javascript
import { View, StyleSheet } from 'react-native';
import { Menu } from 'react-native-paper';

const MenuItem: React.FC = () => (
  <View>
    <Menu.Item leadingIcon="redo" onPress={() => { }} title="Redo" />
    <Menu.Item leadingIcon="undo" onPress={() => { }} title="Undo" />
    <Menu.Item leadingIcon="content-cut" onPress={() => { }} title="Cut" disabled />
  </View>
);

export default MenuItem;

const CustomHeader: React.FC<DrawerHeaderProps> = (props: any) => {
 return (
    <>
    <MenuItem/>
    </>
  )
}
```

I was using the `MenuItem` component in the `CustomHeader` component as above, but React Native was not rendering it.

### SOLUTION:

```javascript
const CustomHeader: React.FC<DrawerHeaderProps> = (props: any) => {
  const screenName = props.route.name;

  return <Appbar.Header style={styles.header}>
    <Appbar.Action icon="menu" onPress={() => props.navigation.openDrawer()} />
    <Appbar.Content title={screenName} titleStyle={styles.title} />
    <View>
      <Menu
        visible={filterVisible}
        style={{ marginTop: 50 }}
        anchor={
          <Appbar.Action
            icon="filter"          
          />
        }
      >
        <Menu.Item
          leadingIcon={() => <Feather name="link-2" size={20} color="white" />}
          title="Url"
        />
      </Menu>
    </View>
  </Appbar.Header>
}

So if we want to use Menu Item then use the default Menu Item from React Native as above.
```
