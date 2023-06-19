import { Collapse, CollapseBody, CollapseHeader, } from 'accordion-collapse-react-native';
import React, { useState } from 'react';
import { Alert, Image, BackHandler, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AboutIconAjjah, Homeicon, MateriIcon, MateriIconAjjah, OverviewQuizAjjah } from '../../assets';
import colors from '../../utils/colors';
const MateriScreen = ({ navigation, focused }) => {

  const [mode, setMode] = useState(false);


  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ padding: 10, backgroundColor: colors.secondary, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', top: 5, textAlign: 'center' }}>Materi</Text>

        </View>


      </View>

      <ScrollView>
        <View>
          {/* <View style={{ padding:10,flexDirection:'row', justifyContent:'flex-start', backgroundColor:colors.selectheader, borderBottomWidth:2, borderColor:'#dedede'}}>
        <Homeicon width={22}  fill={colors.primary} style={{bottom:5, left:5}} />

<Text style={{color:colors.primary, fontFamily:'Poppins-Regular', fontSize:20, left:10}}>PENDAHULUAN</Text>

        </View> */}

          <View style={{ padding: 10, backgroundColor: 'white', }}>
            <Collapse style={{ paddingTop: 10, }}>
              <CollapseHeader>
                <View style={{ padding: 10, flexDirection: 'row', alignItems: 'flex-start' }}>
                  <MateriIcon width={20} height={20} style={{ right: 10, }} />
                  <Text style={{ fontFamily: 'Poppins-Regular', }}>MATERI 1 : ADAB DALAM MEMBACA AL-QURAN</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <TouchableOpacity onPress={() => navigation.navigate('AdabMembacaAlquran')}>
                  <View style={{ padding: 10, backgroundColor: '#F7F7F7' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'justify' }}>Adab Adab Membaca Al-Quran</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('TatacaraMembacaAlquran')}>
                  <View style={{ padding: 10, backgroundColor: '#F7F7F7' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'justify' }}>Tata Cara Membaca Al-Quran</Text>
                  </View>
                </TouchableOpacity>
              </CollapseBody>
            </Collapse>
          </View>

          <View style={{ padding: 10, backgroundColor: 'white', }}>
            <Collapse style={{ paddingTop: 10, }}>
              <CollapseHeader>
                <View style={{ padding: 10, flexDirection: 'row', alignItems: 'flex-start' }}>
                  <MateriIcon width={20} height={20} style={{ right: 10, }} />
                  <Text style={{ fontFamily: 'Poppins-Regular', }}>MATERI 2 : MAKHRAJUL HURUF</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <TouchableOpacity onPress={() => navigation.navigate('RonggaMulut')}>
                  <View style={{ padding: 10, backgroundColor: '#F7F7F7' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'justify' }}>Al-Jauf (Rongga Mulut) </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Tenggorokan')}>
                  <View style={{ padding: 10, backgroundColor: '#F7F7F7' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'justify' }}>Al-Halq (Tenggorokan)</Text>
                  </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('Lidah')}>
                  <View style={{ padding: 10, backgroundColor: '#F7F7F7' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'justify' }}>Al-Lisan (Lidah)</Text>
                  </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('Bibir')}>
                  <View style={{ padding: 10, backgroundColor: '#F7F7F7' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'justify' }}>Asy-Syafatain (Bibir)</Text>
                  </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('Hidung')}>
                  <View style={{ padding: 10, backgroundColor: '#F7F7F7' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'justify' }}>Al-Khaisyum (Hidung)</Text>
                  </View>
                </TouchableOpacity>

              </CollapseBody>
            </Collapse>
          </View>



          <View style={{ padding: 10, backgroundColor: 'white', }}>
            <Collapse style={{ paddingTop: 10, }}>
              <CollapseHeader>
                <View style={{ padding: 10, flexDirection: 'row', alignItems: 'flex-start' }}>
                  <MateriIcon width={20} height={20} style={{ right: 10, }} />
                  <Text style={{ fontFamily: 'Poppins-Regular', }}>MATERI 3 : HUKUM BACAAN </Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <TouchableOpacity onPress={() => navigation.navigate('Nunsukundantanwin')}>
                  <View style={{ padding: 10, backgroundColor: '#F7F7F7' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'justify' }}>Nun Sukun Dan Tanwin</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('HalamanMimsukun')}>
                  <View style={{ padding: 10, backgroundColor: '#F7F7F7' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'justify' }}>Mim Sukun</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('HalamanGhunnah')}>
                  <View style={{ padding: 10, backgroundColor: '#F7F7F7' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'justify' }}>Ghunnah</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('HalamanMad')}>
                  <View style={{ padding: 10, backgroundColor: '#F7F7F7' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'justify' }}>Mad</Text>
                  </View>
                </TouchableOpacity>
              </CollapseBody>
            </Collapse>
          </View>



        </View>
      </ScrollView>
      <View style={{}}>
        <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 2, borderColor: '#dedede', }}>

          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Image source={MateriIconAjjah} style={{ width: 30, height: 30, tintColor: '#E99D42', }} />
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 10, color: '#E99D42', textAlign: 'center' }}>Materi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('OverviewQuiz')} style={{ alignItems: 'center', left: 10 }}>
            <Image source={OverviewQuizAjjah} style={{ width: 30, height: 30, tintColor: '#E99D42', }} />
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 10, color: '#E99D42', textAlign: 'center' }}>Overview Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Alert.alert('TASIK', 'Apakah kamu yakin akan keluar ?', [
            { text: 'TIDAK' },
            {
              text: 'keluar',
              onPress: () => {
                BackHandler.exitApp();
              }
            }
          ])} style={{ alignItems: 'center', }}>
            <Image source={AboutIconAjjah} style={{ width: 30, height: 30, tintColor: '#E99D42', }} />
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 10, color: '#E99D42', textAlign: 'center' }}>Keluar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default MateriScreen

const styles = StyleSheet.create({})