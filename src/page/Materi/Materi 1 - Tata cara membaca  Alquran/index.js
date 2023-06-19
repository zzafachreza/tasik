import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LeftArrow } from '../../../assets'
import colors from '../../../utils/colors'

const TatacaramembacaAlquran = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', }}>
      <View style={{ padding: 10, backgroundColor: colors.secondary, width: '100%', height: 50 }}>
        <View style={{}}>

          <TouchableOpacity onPress={() => navigation.navigate('MateriScreen')} style={{ right: 5, bottom: 1, }}>
            <LeftArrow width={30} height={30} fill="white" />
          </TouchableOpacity>
          <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', bottom: 25, textAlign: 'center' }}>Tata cara membaca Al-Quran</Text>
        </View>


      </View>

      <ScrollView>



        <View style={{ padding: 10, paddingTop: 20, }}>
          <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'justify', fontSize: 15 }}>

            Ulama Qira’at sepakat bahwa Al-Qur’an dapat dibaca dengan beberapa
            macam bacaan, dikarenakan Allah l berfirman dalam surat Al-Muzammil
            (73): 20{'\n'}

            <Text style={{ fontFamily: 'Amiri-Regular', fontSize: 25, }}>فَاقْرَءُوْا مَا تَيَسَّرَ مِنْهُ</Text>{'\n'}
            Artinya: <Text style={{ fontFamily: 'Poppins-Regular', fontStyle: 'italic' }}>Maka itu bacalah (ayat) Al-Qur’an yang mudah (bagimu).</Text>{'\n'}
            Tata cara membaca Al-Qur’an menurut para ulama terbagi empat macam
            yaitu membaca secara:{'\n'}

            {'\n'}
            <Text style={{ fontFamily: 'Poppins-Regular', fontStyle: 'italic', fontWeight: 'bold', fontSize: 15 }}>1. Tahqiq</Text> adalah membaca Al-Qur’an dengan memberikan hak-hak setiap
            huruf secara tegas, jelas dan teliti seperti memanjangkan mad, menyempunakan
            harakat, serta melepas huruf secara tartil, pelan-pelan,
            memperhatikan panjang pendek, <Text style={{ fontFamily: 'Poppins-Regular', fontStyle: 'italic' }}>waqaf </Text> dan <Text style={{ fontFamily: 'Poppins-Regular', fontStyle: 'italic' }}>ibtida</Text>, tanpa merampas
            huruf. Untuk memenuhi hal-hal itu, metode <Text style={{ fontFamily: 'Poppins-Regular', fontStyle: 'italic' }}>tahqiq</Text> terkadang tampak
            memutus-
            mutus dalam membaca huruf-huruf dan kalimat-kalimat Al-
            Qur’an.
            Sebagian ulama menganggap bahwa <Text style={{ fontFamily: 'Poppins-Regular', fontStyle: 'italic' }}>tahqiq </Text>dan <Text style={{ fontFamily: 'Poppins-Regular', fontStyle: 'italic' }}>tartil </Text>sama. Meski
            demikian
            ada perbedaan antara <Text style={{ fontFamily: 'Poppins-Regular', fontStyle: 'italic' }}>tahqiq</Text>dan <Text style={{ fontFamily: 'Poppins-Regular', fontStyle: 'italic' }}>tartil</Text> yaitu tartil lebih menekankan
            aspek memahami dana merenungi kandungan ayat-ayat Al-
            Quran sedangkan tahqiq lebih ke arah praktisi bacaan dengan tujuan
            membimbing ta’lim/tahsin Al-Qur’an{'\n'}

            {'\n'}

            <Text style={{ fontFamily: 'Poppins-Regular', fontStyle: 'italic', fontWeight: 'bold' }}>2. Tadwir</Text> adalah membaca Al-Qur’an dengan memanjangkan mad, hanya
            saja tidak sampai penuh. Tadwir merupakan cara membaca Al-Qur’an
            yang sering dipakai dalam shalat.{'\n'}
            {'\n'}
            <Text style={{ fontFamily: 'Poppins-Regular', fontStyle: 'italic', fontWeight: 'bold' }}>3. Hadr</Text> adalah membaca Al-Quran dengan cepat, ringan dan pendek namun
            tetap mengedepankan dan memakai peraturan-peraturan tajwid.{'\n'}
            {'\n'}
            <Text style={{ fontFamily: 'Poppins-Regular', fontStyle: 'italic', fontWeight: 'bold' }}>4. Hazramah </Text>adalah membaca Al-Quran dengan cepat, ringan dan pendek
            namun tidak memperhatikan peraturan-peraturan tajwid dan cara bacaan
            tersebut tidak dianjurkan semua imam Qira’at.




          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default TatacaramembacaAlquran

const styles = StyleSheet.create({})