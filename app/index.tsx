import {FlatList, StyleSheet,Text, View ,TextInput,Button} from 'react-native'
import { useState, useEffect} from 'react'
import {FoodListItem} from './components/FoodListItem'

const styles = StyleSheet.create(
    {
        container:{
            flex:1 ,
            padding:10,
            
        },
        seachBox:{
            padding:10,
            borderRadius:10,
            backgroundColor: '#b0b0b0',
        },
        button:{
            
        }
    })

    const foodArray = [{  label: 'food',
    },{label: 'pizza'},{label: 'orange'}]

export default function index() {
const [search, setSearch] = useState('');
   useEffect(() => console.log(search),[search])
   const handleSearch = ()=>{
    // handle logic for sending search req to backend
    // set the search bar back to original state
    setSearch('');
   } 
//    end 
        return (
        <View style={styles.container}>

 
<TextInput placeholder='search...' style={styles.seachBox} onChangeText={setSearch}
onSubmitEditing={handleSearch}
value = {search}/>
<Button title='Search' style={styles.button}  onPress={handleSearch}/>
          <FlatList
          data= {foodArray}
          renderItem={({item})=>  <FoodListItem item={{label:item.label}}/>}
          
          contentContainerStyle={{gap:5}}/>
        </View>
        )
      }
    
    

  
    