import { AntDesign } from '@expo/vector-icons';
import { FlatList, StyleSheet,Text, View } from 'react-native';
export const FoodListItem  =({item})=>{

    return(
        <View>
              <View style={styles.card}>
      <View style={{flex:1}}>
          <Text style={{fontWeight:'bold', fontSize:16}}>{item.label} </Text>
      <Text style={{color:'#978e8e'}}>300 cal, pizza hut</Text>
      </View>
        <AntDesign name="pluscircleo" size={24} color="royalblue" />
      </View> 
        



        </View>
    )
}

const styles = StyleSheet.create({
  card:{backgroundColor:"#eee",padding:10,gap:5,borderRadius:10,borderWidth:1,borderColor:'red',
    flexDirection:'row',
    justifyContent:'space-between',
    
    alignItems: 'center',
        }
})


