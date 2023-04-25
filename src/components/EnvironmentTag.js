import { View, Text, TouchableOpacity } from 'react-native'
import color from '../config/common/color'
import React from 'react'

const EnvironmentTag = (props) => {
    const { backgroundColor, header, currentValue, from, to, isCustomize, unit} = props;
    return (
        <View style={{flex: 1, backgroundColor: backgroundColor, borderRadius: 30, marginBottom: 20, flexDirection: 'row', paddingVertical: 10, alignItems: 'center'}}>
            <View style={{flex: 3}}>
                <View style={{alignItems: 'center', borderRightWidth: 1}}>
                    <Text style={{color: '#000', fontSize: 17, fontWeight: 700}}>{header}</Text>
                    <Text style={{color: '#222', fontSize: 40, fontWeight: 600}}>{currentValue}</Text>
                    <Text style={{color: '#222', fontSize: 20, fontWeight: 500}}>{unit}</Text>
                </View>   
            </View>
            
            <View style={{flex: 4, marginHorizontal: 10}}>
                <Text style={{color: '#000', fontSize: 17, fontWeight: 500}}>{`From: ${from}${unit}`}</Text>
                <Text style={{color: '#000', fontSize: 17, fontWeight: 500}}>{`To: ${to}${unit}`}</Text>
                <Text style={{color: '#000', fontSize: 17, fontWeight: 500}}>{`Option: ${isCustomize ? 'Customize' : 'Automatic'}`}</Text>
                <TouchableOpacity style={{backgroundColor: color.tagButton, alignItems: 'center', marginHorizontal: 25, borderRadius: 100, marginTop: 5}}>
                    <Text style={{color: '#000', fontWeight: 'bold', padding: 3, fontSize: 16}}>View Setting</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default EnvironmentTag