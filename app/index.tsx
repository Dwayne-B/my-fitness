import { StyleSheet,Text, View } from 'react-native'
import {FoodListItem} from './components/FoodListItem'

const styles = StyleSheet.create(
    {
        container:{
            flex:1 ,
            justifyContent: 'center',
            padding:10,
            
        }
    })


export default function index() {

    
        return (
        <View style={styles.container}>
            <FoodListItem item={{label:"This is a title"}}/>
        </View>
        )
      }
    
    

  
    