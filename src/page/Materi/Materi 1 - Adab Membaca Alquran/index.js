import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LeftArrow } from '../../../assets'
import colors from '../../../utils/colors'

const AdabMembacaAlquran = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor:'white',}}>
    <View style={{padding:10, backgroundColor:colors.secondary, width:'100%', height:50}}>
<View style={{}}>

<TouchableOpacity onPress={()=> navigation.navigate('MateriScreen')} style={{right:5, bottom:1,}}>
    <LeftArrow width={30} height={30} fill="white"/>
</TouchableOpacity>
<Text style={{color:'white', fontFamily:'Poppins-Regular', bottom:25, textAlign:'center'}}>Adab adab membaca Al-Quran </Text>
</View>


     </View>

<ScrollView>



      <View style={{padding:10, paddingTop:20, }}>
        <Text style={{fontFamily:'Poppins-Regular', textAlign:'justify', fontSize:15}}>Yang pertama memulai membaca Alquran dengan isti’adzah.{'\n'}
        {'\n'}
Kalimat isti’adzah atau taawudz merupakan sebuah doa untuk memohon penjagaan dan perlindungan dari godaan setan. Pertama adalah membaca Alquran dalam keadaan suci, duduk dengan sopan dan tenang.{'\n'}
{'\n'}
“Ketika membaca Alquran seorang Muslim dianjurkan dalam keadaan suci dari najis Baik itu badan, pakaian, maupun tempat membaca Alquran harus terbebas dari najis.” Tandas Riska{'\n'}
{'\n'}
Dan yang kedua yaitu membaca dengan tartil. Membaca dengan tartil (pelan) dan tidak terburu-buru, agar dapat menghayati setiap ayat yang dibaca.{'\n'}
{'\n'}
Dan yang ketiga membaca Al Quran dengan tidak mengganggu orang lain yang sedang beribadah,{'\n'}
{'\n'}
“Seperti contohnya tidak mengganggu yang sedang salat, serta tidak membacanya dengan suara yang terlalu keras atau di tempat yang banyak orang. Bacalah Alquran dengan suara yang lirih dan khusyu.” tambah Riska.{'\n'}
{'\n'}
Adab-adab tersebut merupakan patokan bagi seorang muslim untuk mendapatkan kesempurnaan dalam membaca Alquran. Dengan demikian, diharapkan agar setiap Muslim selalu menjaga adabnya dalam mempelajari ataupun membaca kitab suci Alquran.
</Text>
      </View>
</ScrollView>
    </View>
  )
}

export default AdabMembacaAlquran

const styles = StyleSheet.create({})