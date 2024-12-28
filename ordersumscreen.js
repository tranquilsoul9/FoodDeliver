import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const OrderSummaryScreen = ({ route }) => {
  const { cart } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.summaryItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemQuantity}>Quantity: 1</Text> {/* Modify as needed */}
      <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.footer}>
        <Text style={styles.total}>
          Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
        </Text>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background color
    justifyContent: 'space-between', // Ensures footer stays at the bottom
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: '#fff',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexGrow: 1,
  },
  summaryItem: {
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#555',
  },
  itemPrice: {
    fontSize: 16,
    color: '#000',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  total: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OrderSummaryScreen;
