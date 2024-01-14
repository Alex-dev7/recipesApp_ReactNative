import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import CategoriesScreen from './screens/CategoriesScreen';
import RecipeOverview from './screens/RecipeOverview';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
                      headerStyle: { backgroundColor: "#068451ff" },
                      headerTintColor: "white",
                      contentStyle: { backgroundColor: "#f2f2f2" },
        }}>
          <Stack.Screen
            name="Recipes"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="Recipe Overview" component={RecipeOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
