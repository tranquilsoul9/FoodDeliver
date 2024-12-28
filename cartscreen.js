import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const CartScreen = ({ route, navigation }) => {
  const { cart } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.totalPrice}>
        Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
      </Text>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate('OrderSummaryScreen', { cart })}
      >
        <Text style={styles.checkoutText}>Order Summary</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#000', // Black background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  itemName: {
    fontSize: 18,
    color: '#fff',
  },
  itemPrice: {
    fontSize: 18,
    color: '#fff',
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#fff',
  },
  checkoutButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CartScreen;
