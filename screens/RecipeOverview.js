import { View, FlatList, StyleSheet } from "react-native"
import { MEALS } from "../data/dummy-data"
import { CardAnimationContext } from "@react-navigation/stack"
import MealItem from "../components/MealItem"

function RecipeOverview({route}) {
    const catId = route.params.categoryId

    const dsiplayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    function renedeMealItem(itemData) {
        return <MealItem title={itemData.item.title} />
    }
  return (
   <View style={styles.container}>
     <FlatList data={dsiplayedMeals} keyExtractor={(item) => item.id} renderItem={renedeMealItem} />
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