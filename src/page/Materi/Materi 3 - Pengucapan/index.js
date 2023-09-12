import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, Image, TouchableOpacity, View, TouchableNativeFeedback, FlatList } from 'react-native'
import { LeftArrow } from '../../../assets'
import colors from '../../../utils/colors'
import SoundPlayer from 'react-native-sound-player'


export default function PengucapanM3() {

    const data = [
        {
            latin: 'GHUNNAH',
            audio: 't1',
            gambar: require('../../../assets/img/t1.jpg')
        },
        {
            latin: 'IDGHAM BIGUNNAH',
            audio: 't2',
            gambar: require('../../../assets/img/t2.jpg')
        },
        {
            latin: 'IDGHAM BILAGUNNAH',
            audio: 't3',
            gambar: require('../../../assets/img/t3.jpg')
        },
        {
            latin: 'IDGHAM MUTAMATSILAIN',
            audio: 't4',
            gambar: require('../../../assets/img/t4.jpg')
        },
        {
            latin: 'IDZHAR HALQI',
            audio: 't5',
            gambar: require('../../../assets/img/t5.jpg')
        },
        {
            latin: 'IDZHAR SYAFAWI',
            audio: 't6',
            gambar: require('../../../assets/img/t6.jpg')
        },
        {
            latin: 'IKHFA HAQIQI',
            audio: 't7',
            gambar: require('../../../assets/img/t7.jpg')
        },
        {
            latin: 'IKHFA SYAFAWI',
            audio: 't8',
            gambar: require('../../../assets/img/t8.jpg')
        },
        {
            latin: 'IQLAB',
            audio: 't9',
            gambar: require('../../../assets/img/t9.jpg')
        },
        {
            latin: 'MAD ARIDH LISSUKUN ',
            audio: 't10',
            gambar: require('../../../assets/img/t10.jpg')
        },
        {
            latin: 'MAD JAIZ MUTTASHIL',
            audio: 't11',
            gambar: require('../../../assets/img/t11.jpg')
        },
        {
            latin: 'MAD LAYIN',
            audio: 't12',
            gambar: require('../../../assets/img/t12.jpg')
        },
        {
            latin: 'MAD THABI’lE',
            audio: 't13',
            gambar: require('../../../assets/img/t13.jpg')
        },
        {
            latin: 'Mt1AD WAJIB MUTTASHIL',
            audio: 't14',
            gambar: require('../../../assets/img/t14.jpg')
        },
    ]

    const [pilih, setPilih] = useState(null)

    const __renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => {
                try {
                    SoundPlayer.playSoundFile(item.audio, 'mp3')
                } catch (e) {
                    console.log(`cannot play the sound file`, e)
                }
                setPilih(index);
            }}>
                <View style={{
                    flex: 1,
                    borderRadius: 10,
                    padding: 10,
                    position: 'relative',
                    borderWidth: pilih == index ? 3 : 1,
                    borderColor: pilih == index ? colors.secondary : colors.primary,
                    backgroundColor: '#fbfbf2',
                    margin: '2%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View>

                    </View>
                    <Image source={item.gambar} style={{
                        width: '100%',
                        height: 100,
                        resizeMode: 'contain'
                    }} />
                    <Text style={{
                        textAlign: 'center',
                        fontFamily: 'Poppins-Regular',
                        color: colors.black,
                        fontSize: 20,
                    }}>{item.latin}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (

        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <View style={{ padding: 10, backgroundColor: colors.secondary, width: '100%', height: 50 }}>
                <View style={{}}>

                    <TouchableOpacity onPress={() => navigation.navigate('MateriScreen')} style={{ right: 5, bottom: 1, }}>
                        <LeftArrow width={30} height={30} fill="white" />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', bottom: 25, textAlign: 'center' }}>Pengucapan</Text>
                </View>
            </View>



            <FlatList data={data} renderItem={__renderItem} />


        </View>
    )
}

const styles = StyleSheet.create({})