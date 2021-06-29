

import { Text,ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import React from 'react'  
import 'react-native-gesture-handler';

import subCategorySelector from '../components/subCategorySelector'
import { SafeAreaView } from 'react-native';

export default function CustomTopTabContent({navigation,initialParams})
{
  
  let listViewRef;
  const ItemView = ({ item }) => {
    return (
      <Text style={{padding:10}} onPress={() => {
        subCategorySelector(item.name)
      }}>
        {item.name}
      </Text>
    );
  };
  return (
    <SafeAreaView>
  
      <FlatList
              keyExtractor = {(item) => item.id}
              data = {initialParams}
              horizontal={true}
              style = {{backgroundColor:'blue'}}
              renderItem={ItemView}
              ref={(ref) => {
                listViewRef = ref;
              }}
              style= {{maxHeight:50}}
            />
                </SafeAreaView>

  )
}
