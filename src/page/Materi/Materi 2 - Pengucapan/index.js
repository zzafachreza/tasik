import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TouchableNativeFeedback, FlatList } from 'react-native'
import { LeftArrow } from '../../../assets'
import colors from '../../../utils/colors'
import SoundPlayer from 'react-native-sound-player'


export default function PengucapanM2({ navigation }) {



    const data = [
        {
            arab: 'ا',
            audio: 'h1',
            latin: 'Alif'

        },
        {
            arab: 'ب',
            audio: 'h2',
            latin: 'Ba'

        },
        {
            arab: 'ت',
            audio: 'h3',
            latin: 'Ta'

        },
        {
            arab: 'ث',
            audio: 'h4',
            latin: 'Tsa'

        },
        {
            arab: 'ج',
            audio: 'h5',
            latin: 'Jim'

        },
        {
            arab: 'ح',
            audio: 'h6',
            latin: 'Ha'

        },
        {
            arab: 'خ',
            audio: 'h7',
            latin: 'Kho'

        },
        {
            arab: 'د',
            audio: 'h8',
            latin: 'Dal'

        },
        {
            arab: 'ذ',
            audio: 'h9',
            latin: 'Dzal'

        },
        {
            arab: 'ر',
            audio: 'h10',
            latin: 'Ro'

        },
        {
            arab: 'ز',
            audio: 'h11',
            latin: 'Za'

        },
        {
            arab: 'س',
            audio: 'h12',
            latin: 'Sin'

        },
        {
            arab: 'ش',
            audio: 'h13',
            latin: 'Syin'

        },
        {
            arab: 'ص',
            audio: 'h14',
            latin: 'Shod'

        },
        {
            arab: 'ض',
            audio: 'h15',
            latin: 'Dhod'

        },
        {
            arab: 'ط',
            audio: 'h16',
            latin: 'Tho'

        },
        {
            arab: 'ظ',
            audio: 'h17',
            latin: 'Zho'

        },
        {
            arab: 'ع',
            audio: 'h18',
            latin: '`ain'

        },
        {
            arab: 'غ',
            audio: 'h19',
            latin: 'Ghoin'

        },
        {
            arab: 'ف',
            audio: 'h20',
            latin: 'Fa'

        },
        {
            arab: 'ق',
            audio: 'h21',
            latin: 'Qof'

        },
        {
            arab: 'ك',
            audio: 'h22',
            latin: 'Kaf'

        },
        {
            arab: 'ل',
            audio: 'h23',
            latin: 'Lam'

        },
        {
            arab: 'م',
            audio: 'h24',
            latin: 'Mim'

        },
        {
            arab: 'ن',
            audio: 'h25',
            latin: 'Nun'

        },
        {
            arab: 'و',
            audio: 'h26',
            latin: 'Wau'

        },
        {
            arab: 'ه',
            audio: 'h27',
            latin: 'Ha'

        },
        {
            arab: 'ء',
            audio: 'h28',
            latin: 'Hamzah'

        },
        {
            arab: 'ي',
            audio: 'h29',
            latin: 'Ya'

        },

    ]

    const [pilih, setPilih] = useState(null)

    const __renderItem = ({ item, index }) => {
        return (
            <TouchableNativeFeedback onPress={() => {
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
                    backgroundColor: pilih == index ? colors.secondary : colors.primary,
                    margin: '2%',
                }}>
                    <Text style={{
                        textAlign: 'center',
                        fontFamily: 'Poppins-Regular',
                        color: colors.white,
                        fontSize: 60,
                    }}>{item.arab}</Text>
                    <Text style={{
                        textAlign: 'center',
                        fontFamily: 'Poppins-Regular',
                        color: colors.white,
                        fontSize: 20,
                    }}>{item.latin}</Text>
                </View>
            </TouchableNativeFeedback>
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


            <FlatList data={data} renderItem={__renderItem} numColumns={3} />


        </View>
    )
}

const styles = StyleSheet.create({})