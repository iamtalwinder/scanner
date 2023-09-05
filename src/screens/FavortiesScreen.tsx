import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, IconButton, Divider } from 'react-native-paper';
import { Feather, FontAwesome } from '@expo/vector-icons';

interface CardData {
  title: string;
  subtitle: string;
  icon: string;
  library: 'Feather' | 'FontAwesome';
}

const cardData: CardData[] = [
  {
    title: 'Url',
    subtitle: 'Card Subtitle',
    icon: 'link-2',
    library: 'Feather',
  },
  {
    title: 'Product',
    subtitle: 'Card Subtitle2',
    icon: 'shopping-bag',
    library: 'Feather',
  },
  {
    title: 'Barcode',
    subtitle: 'Card Subtitle3',
    icon: 'barcode',
    library: 'FontAwesome',
  },
];

const FavortiesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {cardData.map((data, index) => (
        <Card
          key={index}
          style={[
            styles.card,
            index === 0 && styles.firstCard,
            index === cardData.length - 1 && styles.lastCard,
          ]}
        >
          <Card.Title
            title={data.title}
            subtitle={data.subtitle}
            left={(props) =>
              data.library === 'Feather' ? (
                <Feather {...props} name={data.icon as any} size={20} color="white" />
              ) : (
                <FontAwesome {...props} name={data.icon as any} size={20} color="white" />
              )
            }
            right={(props) => (
              <View style={styles.iconContainer}>
                <IconButton {...props} icon="dots-vertical" />
                <FontAwesome name="bars" size={24} color="black" />
              </View>
            )}
          />
          <Divider />
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  card: {
    marginVertical: 5,
    borderRadius: 0,
    marginBottom: 0,
    marginTop: 0
  },
  firstCard: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  lastCard: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  iconContainer: {
    display: 'flex'
  }
});

export default FavortiesScreen;