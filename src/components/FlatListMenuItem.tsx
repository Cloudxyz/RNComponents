import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/interfaces';
import { Spacer } from './Spacer';

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({menuItem}: Props) => {

    const navigation = useNavigation();

  return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate( menuItem.component as any)}
      >
        <View style={styles.container}>
            <Icon 
                name={menuItem.icon}
                color="#5856D6"
                size={ 23 }
            />

            <Text style={styles.itemText}>{menuItem.name}</Text>

            <Spacer />

            <Icon 
                name="chevron-forward-outline"
                color="#5856D6"
                size={ 23 }
            />
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19,
    }
})
