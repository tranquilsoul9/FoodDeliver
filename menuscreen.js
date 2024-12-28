import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const menuData = [
  {
    id: '1',
    name: 'Pizza',
    description: 'Delicious cheese pizza',
    price: 10.99,
    image: 'https://imgs.search.brave.com/DFdp4e9xp7Z8ZolqXpe0xHfzZnqdbQtOr22-1H8tLW4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/OTcxNTc5OS9waG90/by9waXp6YS13aXRo/LWhhbS1hbmQtY2hl/ZXNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ncFJNVmZx/eTQ0YWc0VGtyb1Q4/V0VlclJvdGxmS2hl/WlF1NmtRa2RobnhR/PQ',
  },
  {
    id: '2',
    name: 'Burger',
    description: 'Juicy beef burger with lettuce',
    price: 7.99,
    image: 'https://imgs.search.brave.com/_TaZc4KEUJYO5cSIbbHXQxaqQKPitNw2CK_rGtr9qYg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgy/NzQ0OTQzL3Bob3Rv/L2J1cmdlci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9cGky/MElpZVhmOFVOazZT/ZUp5LWNIeHViYVZE/N0w1Um53MmkwUW84/dk55TT0',
  },
  {
    id: '3',
    name: 'Pasta',
    description: 'Creamy pasta with mushrooms',
    price: 8.99,
    image: 'https://imgs.search.brave.com/DUJGaiE1Nt3QyGerPQh0-8-yqiQ81x63HowgTr2xPko/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90YXN0/ZWZ1bGx5Z3JhY2Uu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzAxL011c2hy/b29tLVBhc3RhLVJl/Y2lwZS0yLXNjYWxl/ZC5qcGc',
  },
  {
    id: '4',
    name: 'Chole Bhature',
    description: 'Spicy and flavorful chole served with fluffy bhature',
    price: 9.99,
    image: 'https://imgs.search.brave.com/_Ft0JmA69PqpYYfutptcwZI4GoT-Dcd_JkTYREDLHRQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzkxL0Nob2xlX0Jo/YXR1cmVfQXRfTG9j/YWxfU3RyZWV0Lmpw/Zw',
  },
  {
    id: '5',
    name: 'Aloo Paratha',
    description: 'Stuffed paratha served with butter and curd',
    price: 6.99,
    image: 'https://imgs.search.brave.com/7LQMZVlDkaSxd4O_g_SaQXkD4nUwWLtwRAx-Te0LRPM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9taW5p/c3RyeW9mY3Vycnku/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzA5L0Fsb28t/UGFyYXRoYXMtNC1z/Y2FsZWQuanBn',
  },
  {
    id: '6',
    name: 'Maggi',
    description: 'Classic instant noodles',
    price: 3.99,
    image: 'https://imgs.search.brave.com/dr5_RB5E4qTHNoRt0uDeInnTqC_LWiQtF7OeSh2WZx0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2lraWhvdy5jb20v/aW1hZ2VzL3RodW1i/LzEvMTIvTWFrZS1N/YWdnaS1TdGVwLTE4/LVZlcnNpb24tNS5q/cGcvdjQtNDYwcHgt/TWFrZS1NYWdnaS1T/dGVwLTE4LVZlcnNp/b24tNS5qcGc',
  },
  {
    id: '7',
    name: 'Juice',
    description: 'Refreshing juice made from fresh fruits',
    price: 4.99,
    image: 'https://imgs.search.brave.com/5jQRmTVl6WM2PPWbNv6hlvNicHZj80LytP2A5wBhs7g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTE1/NjU3MTI2L3Bob3Rv/L29yYW5nZS1qdWlj/ZS1nbGFzcy1qYXIt/c2hvdC1vbi1ydXN0/aWMtd29vZGVuLXRh/YmxlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ybGowRndS/RFFPQVZfajgtTVVR/bnR6SWo4ZlplZ2JN/ZXdqMjJuTlh4aVlj/PQ',
  },
];

const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
  
      if (existingItem) {
        // Item exists, update the quantity
        return prevCart.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      } else {
        // Item doesn't exist, add it to the cart with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };
  

const MenuScreen = () => {
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodDescription}>{item.description}</Text>
        <Text style={styles.foodPrice}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => addToCart(item)}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
          <Text style={styles.logoText}>Olcademy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen', { cart })}>
          <Text style={styles.navText}>Cart ({cart.length})</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={menuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Changed background color to black
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 15,
  },
  logoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  navText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    backgroundColor: '#000', // For item background
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  foodDescription: {
    fontSize: 14,
    color: 'white',
  },
  foodPrice: {
    fontSize: 16,
    color: 'white',
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MenuScreen;
