import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './menuscreen'; // Correct import for MenuScreen
import CartScreen from './cartscreen'; // Correct import for CartScreen
import OrderSummaryScreen from './ordersumscreen'; // Import OrderSummaryScreen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ title: 'Menu' }} />
        <Stack.Screen name="CartScreen" component={CartScreen} options={{ title: 'Cart' }} />
        <Stack.Screen name="OrderSummaryScreen" component={OrderSummaryScreen} options={{ title: 'Order Summary' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
