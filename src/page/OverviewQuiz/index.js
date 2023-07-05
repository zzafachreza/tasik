import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { APIUrl, getData, storeData } from '../../utils/database';
import colors from '../../utils/colors';
import RenderHtml from 'react-native-render-html';
export default function OverviewQuiz({ navigation, route }) {

  const isFocused = useIsFocused();
  const [data, setData] = useState([]);
  const [ragu, setRagu] = useState([])
  const [betul, setBetul] = useState([]);
  const [user, setUser] = useState({});
  const [nomor, setNomor] = useState(0);
  const [open, setOpen] = useState(false);
  const [pilih, setPilih] = useState([]);
  const [skor, setSkor] = useState([]);

  useEffect(() => {
    __getTransaction();
  }, []);

  const __getTransaction = () => {
    axios.post(APIUrl + 'soal').then(res => {

      console.log(res.data);

      if (res.data.length > 0) {
        res.data.map(i => {
          skor.push(0);
          ragu.push(false);
          betul.push(false);
          pilih.push(
            {
              a: false,
              b: false,
              c: false,
              d: false
            }
          )
        })

        setData(res.data);
        setTimeout(() => {
          setOpen(true);
        }, 200)

      } else {
        Alert.alert(MYAPP, 'Soal Belum Ada !');

      }



    })
  }
  const sendServer = () => {

    let totalNilai = skor.reduce((a, b) => a + b, 0);


    let nilai = (totalNilai / data.length) * 100;



    getData('hasil').then(res => {
      if (!res) {
        storeData('hasil', {
          nilai: nilai
        });

        Alert.alert('TASIK', `Nilai kamu : ` + nilai, [
          {
            text: 'TUTUP',
            onPress: () => {
              navigation.goBack()
            }
          }
        ])

      } else {
        storeData('hasil', {
          nilai: nilai
        });
        Alert.alert('TASIK', `Nilai sebelumnya ${res.nilai} \nNilai kamu sekarang : ` + nilai, [
          {
            text: 'TUTUP',
            onPress: () => {
              navigation.goBack()
            }
          }
        ])
      }
    })


  }
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',

        padding: 20,
        backgroundColor: colors.black
      }}>
        {open && <View style={{
          flex: 0.8,
          borderRadius: 10,
          backgroundColor: colors.white,
          padding: 10,
        }}>
          {/* SOAL */}
          <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, left: 5, color: colors.black }}>JUMLAH SOAL ADA {data.length}</Text>
          <View style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: colors.secondary
          }}>

            <Text style={{ flex: 1, fontFamily: 'Poppins-SemiBold', fontSize: 20, color: colors.black }}> SOAL NOMOR <Text style={{ backgroundColor: colors.primary, color: colors.white, }}>  {data[nomor].nomor}  </Text></Text>


          </View>

          <View>


            <RenderHtml
              contentWidth={'100%'}
              source={{
                html: data[nomor].soal
              }}
            />


            <TouchableOpacity

              onPress={() => {



                if (!pilih[nomor].a) {
                  pilih[nomor] = { b: false, c: false, d: false, a: true };
                  setPilih([...pilih])

                  if (data[nomor].jawaban == 'A' && !betul[nomor]) {

                    betul[nomor] = true;
                    setBetul([...betul])


                    skor[nomor] = 1;
                  } else if (data[nomor].jawaban == 'A' && betul[nomor]) {
                    betul[nomor] = false;
                    setBetul([...betul])
                    skor[nomor] = skor[nomor] - 1;
                  } else if (data[nomor].jawaban !== 'A' && betul[nomor]) {
                    betul[nomor] = false;
                    setBetul([...betul])
                    skor[nomor] = skor[nomor] - 1;
                  }
                } else {
                  pilih[nomor] = { ...pilih[nomor], a: false };
                  setPilih([...pilih])
                  if (data[nomor].jawaban == 'A' && betul[nomor]) {
                    betul[nomor] = false;
                    setBetul([...betul])
                    skor[nomor] = skor[0] - 1;
                  }

                }

              }}

              style={{ flexDirection: 'row', marginVertical: 5, position: 'relative', paddingLeft: 5 }}>

              <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>A. </Text>
              {pilih[nomor].a && <View style={{
                position: 'absolute',
                left: 2,
                top: -10
              }}><Text style={{
                fontSize: 30,
                fontWeight: '600'
              }}>X</Text></View>}
              <RenderHtml
                contentWidth={'100%'}
                source={{
                  html: data[nomor].a
                }}
              />

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => {

                if (!pilih[nomor].b) {
                  pilih[nomor] = { a: false, c: false, d: false, b: true };
                  setPilih([...pilih])
                  if (data[nomor].jawaban == 'B' && !betul[nomor]) {
                    betul[nomor] = true;
                    setBetul([...betul])

                    skor[nomor] = 1;
                  } else if (data[nomor].jawaban == 'B' && betul[nomor]) {
                    betul[nomor] = false;
                    setBetul([...betul])
                    skor[nomor] = skor[nomor] - 1;
                  } else if (data[nomor].jawaban !== 'B' && betul[nomor]) {
                    betul[nomor] = false;
                    setBetul([...betul])
                    skor[nomor] = skor[nomor] - 1;
                  }
                } else {
                  pilih[nomor] = { ...pilih[nomor], b: false };
                  setPilih([...pilih])
                  if (data[nomor].jawaban == 'B' && betul[nomor]) {
                    betul[nomor] = false;
                    setBetul([...betul])
                    skor[nomor] = skor[0] - 1;
                  }

                }

              }}

              style={{ flexDirection: 'row', marginVertical: 5, position: 'relative', paddingLeft: 5 }}>

              <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>B. </Text>
              {pilih[nomor].b && <View style={{
                position: 'absolute',
                left: 2,
                top: -10
              }}><Text style={{
                fontSize: 30,
                fontWeight: '600'
              }}>X</Text></View>}
              <RenderHtml
                contentWidth={'100%'}
                source={{
                  html: data[nomor].b
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => {

                if (!pilih[nomor].c) {
                  pilih[nomor] = { b: false, a: false, d: false, c: true };
                  setPilih([...pilih])
                  if (data[nomor].jawaban == 'C' && !betul[nomor]) {
                    betul[nomor] = true;
                    setBetul([...betul])
                    skor[nomor] = 1;
                  } else if (data[nomor].jawaban == 'C' && betul[nomor]) {
                    betul[nomor] = false;
                    setBetul([...betul])
                    skor[nomor] = skor[nomor] - 1;
                  } else if (data[nomor].jawaban !== 'C' && betul[nomor]) {
                    betul[nomor] = false;
                    setBetul([...betul])
                    skor[nomor] = skor[nomor] - 1;
                  }
                } else {
                  pilih[nomor] = { ...pilih[nomor], c: false };
                  setPilih([...pilih])
                  if (data[nomor].jawaban == 'C' && betul[nomor]) {
                    betul[nomor] = false;
                    setBetul([...betul])
                    skor[nomor] = skor[0] - 1;
                  }

                }

              }}

              style={{ flexDirection: 'row', marginVertical: 5, position: 'relative', paddingLeft: 5 }}>

              <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>C. </Text>
              {pilih[nomor].c && <View style={{
                position: 'absolute',
                left: 2,
                top: -10
              }}><Text style={{
                fontSize: 30,
                fontWeight: '600'
              }}>X</Text></View>}
              <RenderHtml
                contentWidth={'100%'}
                source={{
                  html: data[nomor].c
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => {

                if (!pilih[nomor].d) {
                  pilih[nomor] = { b: false, c: false, a: false, d: true };
                  setPilih([...pilih])
                  if (data[nomor].jawaban == 'D' && !betul[nomor]) {
                    betul[nomor] = true;
                    setBetul([...betul])
                    skor[nomor] = 1;
                  } else if (data[nomor].jawaban == 'D' && betul[nomor]) {
                    betul[nomor] = false;
                    setBetul([...betul])
                    skor[nomor] = skor[nomor] - 1;
                  } else if (data[nomor].jawaban !== 'D' && betul[nomor]) {
                    betul[nomor] = false;
                    setBetul([...betul])
                    skor[nomor] = skor[nomor] - 1;
                  }
                } else {
                  pilih[nomor] = { ...pilih[nomor], d: false };
                  setPilih([...pilih])
                  if (data[nomor].jawaban == 'D' && betul[nomor]) {
                    betul[nomor] = false;
                    setBetul([...betul])
                    skor[nomor] = skor[0] - 1;
                  }

                }

              }}

              style={{ flexDirection: 'row', marginVertical: 5, position: 'relative', paddingLeft: 5 }}>

              <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>D. </Text>
              {pilih[nomor].d && <View style={{
                position: 'absolute',
                left: 2,
                top: -10
              }}><Text style={{
                fontSize: 30,
                fontWeight: '600'
              }}>X</Text></View>}
              <RenderHtml
                contentWidth={'100%'}
                source={{
                  html: data[nomor].d
                }}
              />
            </TouchableOpacity>

          </View>

        </View>}
      </View>

      <View style={{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {ragu[nomor] && <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 20, color: colors.black }}>Ragu-ragu</Text>}
      </View>
      <View style={{
        flexDirection: 'row',
        height: 40,
      }}>
        <View style={{
          flex: 1,
          padding: 2,
        }}>
          {nomor > 0 && <TouchableOpacity onPress={() => {
            // data.length
            setNomor(nomor - 1);
          }} style={{
            padding: 5,
            height: 40,
            backgroundColor: colors.primary,
            alignItems: 'center',
            justifyContent: 'center'
          }}>

            <Text style={{

              fontFamily: 'Poppins-SemiBold',
              color: colors.white,
              fontSize: 12
            }}>Soal Sebelumnya</Text>
          </TouchableOpacity>}
        </View>
        <View style={{
          flex: 0.8,
          padding: 2,
          height: 40,

        }}>
          <TouchableOpacity onPress={() => {
            ragu[nomor] = true;
            setRagu([...ragu])
          }} style={{
            padding: 5,
            height: 40,
            backgroundColor: colors.secondary,
            justifyContent: 'center',
            alignItems: 'center'

          }}>

            <Text style={{

              fontFamily: 'Poppins-SemiBold',
              color: colors.white,
              fontSize: 12
            }}>Ragu-ragu</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flex: 1,
          padding: 2,
          height: 40,
        }}>
          {nomor < (data.length - 1) &&
            <TouchableOpacity onPress={() => {
              // data.length
              setNomor(nomor + 1);
            }} style={{
              padding: 5,
              height: 40,

              backgroundColor: colors.primary,
              alignItems: 'center',
              justifyContent: 'center'
            }}>

              <Text style={{


                fontFamily: 'Poppins-SemiBold',
                color: colors.white,
                fontSize: 12
              }}>Soal Berikutnya</Text>

            </TouchableOpacity>}

          {nomor == (data.length - 1) &&
            <TouchableOpacity onPress={sendServer} style={{
              padding: 5,
              height: 40,
              flexDirection: 'row',
              backgroundColor: colors.success,
              alignItems: 'center',
              justifyContent: 'center'
            }}>

              <Text style={{


                fontFamily: 'Poppins-SemiBold',
                color: colors.white,
                fontSize: 12
              }}>Selesai</Text>

            </TouchableOpacity>}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})