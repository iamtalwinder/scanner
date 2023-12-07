import { StyleSheet } from "react-native";

export const styles = (theme: any) => {
  return StyleSheet.create({
    menuItem: {
      backgroundColor: theme.colors.darkBackgroundColor
    },
    item: {
      marginTop: 50,
      position: 'absolute',
      backgroundColor: theme.colors.darkBackgroundColor
    }
  })
}