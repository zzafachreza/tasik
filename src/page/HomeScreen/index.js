import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../utils/colors'

const HomeScreen = ({navigation}) => {
  
  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
      <ScrollView>



<View style={{paddingTop:'100%'}}>




    <View style={{padding:20}}>
<TouchableOpacity onPress={()=>navigation.navigate('OverviewQuiz')} style={{borderWidth:1, borderRadius:10, borderColor:'white', }}>
  <View style={{padding:10, backgroundColor:colors.button1, borderRadius:10,}}>
    <Text style={{fontFamily:'Poppins-Regular', color:'white', textAlign:'center'}}>Overview Quiz</Text>
  </View>
</TouchableOpacity>
    </View>

<Text style={{color:'white', textAlign:'center', fontFamily:'Poppins-Regular'}}>Atau</Text>
<Text style={{color:'white', textAlign:'center', fontFamily:'Poppins-Regular'}}>Jika ingin lansung belajar tanpa ikut quiz</Text>

    <View style={{padding:20}}>
<TouchableOpacity onPress={()=>navigation.navigate('MateriScreen')} style={{borderWidth:1, borderRadius:10, borderColor:'white', }}>
  <View style={{padding:10, backgroundColor:colors.button2, borderRadius:10,}}>
    <Text style={{fontFamily:'Poppins-Regular', color:'white', textAlign:'center'}}>Lanjut ke Daftar Materi</Text>
  </View>
</TouchableOpacity>
    </View>
</View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})