import { View, Text, StyleSheet } from "react-native"
import { MEALS } from "../data/dummy-data"

function RecipeOverview({route}) {
    const catId = route.params.categoryId
  return (
   <View style={styles.container}>
    <Text>Recipe Oveerview Screen - {catId}</Text>
   </View>
  )
}

export default RecipeOverview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})