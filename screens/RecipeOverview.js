import { useLayoutEffect } from "react"
import { View, FlatList, StyleSheet } from "react-native"
import { MEALS, CATEGORIES } from "../data/dummy-data"
import { CardAnimationContext } from "@react-navigation/stack"
import MealItem from "../components/MealItem"

function RecipeOverview({route, navigation}) {
    const catId = route.params.categoryId

    const dsiplayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title: categoryTitle,
        })        
    }, [catId, navigation])



    function renedeMealItem(itemData) {
        const mealItemProps = {
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,
        }
        return <MealItem {...mealItemProps}/>
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