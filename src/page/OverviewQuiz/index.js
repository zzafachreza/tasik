import React, { useState } from 'react'
import { Alert, Image, BackHandler, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LeftArrow, SoalKeduaBAG1, SoalKeduaBAG2, SoalKeduaBAG3, SoalKeduaBAG4, SoalPertana } from '../../assets'
import colors from '../../utils/colors'
import { getData, storeData } from '../../utils/database'

const OverviewQuiz = ({ navigation }) => {

  const [skor, setSkor] = useState(0);


  const [jawaban, setJawaban] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]);

  const [pilih, setPilih] = useState(
    [
      {
        a: false,
        b: false,
        c: false,
        d: false
      },
      {
        a: false,
        b: false,
        c: false,
        d: false
      },
      {
        a: false,
        b: false,
        c: false,
        d: false
      },
      {
        a: false,
        b: false,
        c: false,
        d: false
      },
      {
        a: false,
        b: false,
        c: false,
        d: false
      },
      {
        a: false,
        b: false,
        c: false,
        d: false
      },
      {
        a: false,
        b: false,
        c: false,
        d: false
      },
      {
        a: false,
        b: false,
        c: false,
        d: false
      },
      {
        a: false,
        b: false,
        c: false,
        d: false
      },
      {
        a: false,
        b: false,
        c: false,
        d: false
      },
    ]
  )

  return (
    <View style={{ flex: 1, backgroundColor: colors.primary }}>
      <View style={{ padding: 10, backgroundColor: colors.secondary, width: '100%', height: 50 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 20 }}>
            <LeftArrow width={30} height={30} fill="white" />
          </TouchableOpacity>
          <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', flex: 1, textAlign: 'center' }}>Overview Quiz</Text>
        </View>


      </View>
      <ScrollView>
        <View style={{ padding: 20, paddingTop: 50 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Image style={{ width: 150, height: 50 }} source={SoalPertana} />
          </View>
          <View style={{ paddingTop: 10 }}>
            <Text style={{ fontFamily: 'Poppins-Regular', color: 'white' }}>1. Potongan ayat di atas mengandung hukum bacaan</Text>
          </View>

          <>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[0] = 0;


                let markers = [...pilih];
                markers[0] = {
                  a: true,
                  b: false,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[0].a ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Ikhfa syafawi</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[0] = 1;




                let markers = [...pilih];
                markers[0] = {
                  a: false,
                  b: true,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[0].b ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Idzhar halqi </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[0] = 0;


                let markers = [...pilih];
                markers[0] = {
                  a: false,
                  b: false,
                  c: true,
                  d: false
                };
                setPilih(markers)



              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[0].c ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Idgham bighunnah</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[0] = 0;


                let markers = [...pilih];
                markers[0] = {
                  a: false,
                  b: false,
                  c: false,
                  d: true
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[0].d ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Ikhfa haqiqi</Text>
              </TouchableOpacity>
            </View>
          </>


          <View style={{ paddingTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: 'white' }}>2.	Menurut pilihan di bawah ini, hukum bacaan ikhfa haqiqi dapat ditemui pada </Text>
            </View>
          </View>

          <>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[1] = 1;


                let markers = [...pilih];
                markers[1] = {
                  a: true,
                  b: false,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[1].a ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10, top: 10 }}></View>
                <Image style={{ width: 110, height: 40, left: 10 }} source={SoalKeduaBAG1} />
              </TouchableOpacity>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[1] = 0;


                let markers = [...pilih];
                markers[1] = {
                  a: false,
                  b: true,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[1].b ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10, top: 10 }}></View>
                <Image style={{ width: 150, height: 40, left: 10 }} source={SoalKeduaBAG2} />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[1] = 0;


                let markers = [...pilih];
                markers[1] = {
                  a: false,
                  b: false,
                  c: true,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[1].c ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10, top: 10 }}></View>
                <Image style={{ width: 156, height: 50, left: 10 }} source={SoalKeduaBAG3} />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[1] = 0;


                let markers = [...pilih];
                markers[1] = {
                  a: false,
                  b: false,
                  c: false,
                  d: true
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[1].d ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10, top: 10 }}></View>
                <Image style={{ width: 190, height: 40, left: 10 }} source={SoalKeduaBAG4} />
              </TouchableOpacity>
            </View>
          </>

          <View style={{ paddingTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: 'white' }}>3. Membaca al-quran dengan cepat, ringan, dan pendek namun tetap mengedepankan dan memakai peraturan tajwid adalah definisi dari</Text>
            </View>
          </View>

          <>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[2] = 0;


                let markers = [...pilih];
                markers[2] = {
                  a: true,
                  b: false,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[2].a ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Hazramah</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[2] = 0;


                let markers = [...pilih];
                markers[2] = {
                  a: false,
                  b: true,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[2].b ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Tahqiq</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[2] = 1;


                let markers = [...pilih];
                markers[2] = {
                  a: false,
                  b: false,
                  c: true,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[2].c ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Hadr</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[2] = 0;


                let markers = [...pilih];
                markers[2] = {
                  a: false,
                  b: false,
                  c: false,
                  d: true
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[2].d ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Tadwir</Text>
              </TouchableOpacity>
            </View>
          </>

          <View style={{ paddingTop: 0 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: 'white' }}>4.	nun sukun <Text style={{ fontFamily: 'Amiri-Regular', fontSize: 20 }}>( نْ )</Text> atau tanwin <Text style={{ fontFamily: 'Amiri-Regular', fontSize: 20 }}>(ًٌٍ)</Text> bertemu dengan salah satu huruf: yâ’, nûn, mîm, wau, <Text style={{ fontFamily: 'Amiri-Regular', fontSize: 20 }}>( ي ن م و) </Text>merupakan pengertian dari hukum bacaan</Text>
            </View>
          </View>

          <>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[3] = 0;


                let markers = [...pilih];
                markers[3] = {
                  a: true,
                  b: false,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[3].a ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>idgham bilagunnah</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[3] = 0;


                let markers = [...pilih];
                markers[3] = {
                  a: false,
                  b: true,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[3].b ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>iqlab</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[3] = 0;


                let markers = [...pilih];
                markers[3] = {
                  a: false,
                  b: false,
                  c: true,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[3].c ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>ikhfa syafawi</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[3] = 1;


                let markers = [...pilih];
                markers[3] = {
                  a: false,
                  b: false,
                  c: false,
                  d: true
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[3].d ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>idgham bighunnah</Text>
              </TouchableOpacity>
            </View>
          </>

          <View style={{ paddingTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: 'white' }}>5.	berikut adalah huruf hijaiyah yang keluar dari bagian dalam tenggorokan, manakah yang benar</Text>
            </View>
          </View>
          <>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[4] = 1;


                let markers = [...pilih];
                markers[4] = {
                  a: true,
                  b: false,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[4].a ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Amiri-Regular', fontSize: 20, textAlign: 'center', color: 'white', bottom: 25 }}>ع</Text>
              </TouchableOpacity>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 0 }}>
              <TouchableOpacity onPress={() => {
                jawaban[4] = 0;


                let markers = [...pilih];
                markers[4] = {
                  a: false,
                  b: true,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[4].b ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Amiri-Regular', fontSize: 20, textAlign: 'center', color: 'white', bottom: 20 }}>ق</Text>
              </TouchableOpacity>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 0 }}>
              <TouchableOpacity onPress={() => {
                jawaban[4] = 0;


                let markers = [...pilih];
                markers[4] = {
                  a: false,
                  b: false,
                  c: true,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[4].c ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Amiri-Regular', fontSize: 20, textAlign: 'center', color: 'white', bottom: 25 }}>ص</Text>
              </TouchableOpacity>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 0 }}>
              <TouchableOpacity onPress={() => {
                jawaban[4] = 0;


                let markers = [...pilih];
                markers[4] = {
                  a: false,
                  b: false,
                  c: false,
                  d: true
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[4].d ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Amiri-Regular', fontSize: 20, textAlign: 'center', color: 'white', bottom: 20 }}>ف</Text>
              </TouchableOpacity>
            </View>
          </>


          <View style={{ paddingTop: 0, bottom: 30 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: 'white' }}>6.	Apabila ada nun sukun <Text style={{ fontFamily: 'Amiri-Regular', fontSize: 20 }}>( نْ )</Text> atau tanwin  <Text style={{ fontFamily: 'Amiri-Regular', fontSize: 20 }}>( ًٌٍ )</Text> bertemu dengan huruf…. maka cara membacanya diubah menjadi mim dan disebut iqlab </Text>
            </View>
          </View>

          <>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 0, bottom: 20 }}>
              <TouchableOpacity onPress={() => {
                jawaban[5] = 0;


                let markers = [...pilih];
                markers[5] = {
                  a: true,
                  b: false,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[5].a ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Amiri-Regular', fontSize: 20, textAlign: 'center', color: 'white', bottom: 20 }}>ق</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 0, bottom: 20 }}>
              <TouchableOpacity onPress={() => {
                jawaban[5] = 1;


                let markers = [...pilih];
                markers[5] = {
                  a: false,
                  b: true,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[5].b ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Amiri-Regular', fontSize: 20, textAlign: 'center', color: 'white', bottom: 20 }}>ب</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 0, bottom: 20 }}>
              <TouchableOpacity onPress={() => {
                jawaban[5] = 0;


                let markers = [...pilih];
                markers[5] = {
                  a: false,
                  b: false,
                  c: true,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[5].c ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Amiri-Regular', fontSize: 20, textAlign: 'center', color: 'white', bottom: 18 }}>ل</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 0, bottom: 20 }}>
              <TouchableOpacity onPress={() => {
                jawaban[5] = 0;


                let markers = [...pilih];
                markers[5] = {
                  a: false,
                  b: false,
                  c: false,
                  d: true
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[5].d ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Amiri-Regular', fontSize: 20, textAlign: 'center', color: 'white', bottom: 24 }}>ع</Text>
              </TouchableOpacity>
            </View>
          </>


          <View style={{ paddingTop: 0, bottom: 30 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: 'white' }}>7.	Bagaimana kah cara membaca idzhar?</Text>
            </View>
          </View>

          <>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', bottom: 20 }}>
              <TouchableOpacity onPress={() => {
                jawaban[6] = 0;


                let markers = [...pilih];
                markers[6] = {
                  a: true,
                  b: false,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[6].a ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Dengung</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', bottom: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[6] = 0;


                let markers = [...pilih];
                markers[6] = {
                  a: false,
                  b: true,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[6].b ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Samar-samar</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', bottom: 0 }}>
              <TouchableOpacity onPress={() => {
                jawaban[6] = 1;


                let markers = [...pilih];
                markers[6] = {
                  a: false,
                  b: false,
                  c: true,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[6].c ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Jelas</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', top: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[6] = 0;


                let markers = [...pilih];
                markers[6] = {
                  a: false,
                  b: false,
                  c: false,
                  d: true
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[6].d ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Dipanjangkan</Text>
              </TouchableOpacity>
            </View>

          </>

          <View style={{ paddingTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: 'white' }}>8.	Cara membaca harus diperpanjang sepanjang 2 harakat merupakan cara membaca dari</Text>
            </View>
          </View>

          <>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[7] = 0;


                let markers = [...pilih];
                markers[7] = {
                  a: true,
                  b: false,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[7].a ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Iqlab</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[7] = 0;


                let markers = [...pilih];
                markers[7] = {
                  a: false,
                  b: true,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[7].b ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Idgham bigunnah</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[7] = 0;


                let markers = [...pilih];
                markers[7] = {
                  a: false,
                  b: false,
                  c: true,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[7].c ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Ikhfa haqiqi</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[7] = 1;


                let markers = [...pilih];
                markers[7] = {
                  a: false,
                  b: false,
                  c: false,
                  d: true
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[7].d ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Mad thabi’ie</Text>
              </TouchableOpacity>
            </View>
          </>

          <View style={{ paddingTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: 'white' }}>9.	Tempat keluar huruf hijaiyah yang berasal dari rongga mulut disebut</Text>
            </View>
          </View>

          <>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[8] = 0;


                let markers = [...pilih];
                markers[8] = {
                  a: true,
                  b: false,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[8].a ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Al lisan</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[8] = 0;


                let markers = [...pilih];
                markers[8] = {
                  a: false,
                  b: true,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[8].b ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Al-khaisyum</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[8] = 0;


                let markers = [...pilih];
                markers[8] = {
                  a: false,
                  b: false,
                  c: true,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[8].c ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Al-halq</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[8] = 1;


                let markers = [...pilih];
                markers[8] = {
                  a: false,
                  b: false,
                  c: false,
                  d: true
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[8].d ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Al-jauf</Text>
              </TouchableOpacity>
            </View>

          </>

          <View style={{ paddingTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: 'white' }}>10.	Tempat keluar huruf hijaiyah yang berasal dari tenggorokan disebut</Text>
            </View>
          </View>

          <>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[9] = 1;


                let markers = [...pilih];
                markers[9] = {
                  a: true,
                  b: false,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[9].a ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Al- halq</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[9] = 0;


                let markers = [...pilih];
                markers[9] = {
                  a: false,
                  b: true,
                  c: false,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[9].b ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Al-lisan</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[9] = 0;


                let markers = [...pilih];
                markers[9] = {
                  a: false,
                  b: false,
                  c: true,
                  d: false
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[9].c ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Al-khaisyum</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
              <TouchableOpacity onPress={() => {
                jawaban[9] = 0;


                let markers = [...pilih];
                markers[9] = {
                  a: false,
                  b: false,
                  c: false,
                  d: true
                };
                setPilih(markers)

              }} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ padding: 10, backgroundColor: pilih[9].d ? '#000000' : '#dedede', borderRadius: 19, borderWidth: 1, height: 10, width: 10 }}></View>
                <Text style={{ left: 10, fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'center', top: 2, color: 'white' }}>Al-jauf</Text>
              </TouchableOpacity>
            </View>
          </>

        </View>

        <TouchableOpacity onPress={() => {

          let nilai = parseFloat(jawaban.reduce((a, b) => a + b, 0)) * 10;


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



        }} style={{
          backgroundColor: colors.secondary,
          padding: 10,
          height: 50,
          margin: 10,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: 'center'
        }}>
          <Text style={{
            color: colors.white,
            fontSize: 13,
            fontFamily: 'Poppins-SemiBold',
            textAlign: 'center'
          }}>Lihat Nilai</Text>
        </TouchableOpacity>




      </ScrollView>


    </View>
  )
}

export default OverviewQuiz

const styles = StyleSheet.create({})