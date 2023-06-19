import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import Pdf from 'react-native-pdf';
import { LeftArrow } from '../../../assets';
import colors from '../../../utils/colors';

const Bibir = ({ navigation }) => {


    const source = { uri: 'bundle-assets://pdf/Materi2(5).pdf' }

    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                height: 70,
                backgroundColor: colors.secondary,

                alignItems: 'center',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                flexDirection: 'row'
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('MateriScreen')} style={{ paddingHorizontal: 10, }}>
                    <LeftArrow width={25} height={25} fill="white" />
                </TouchableOpacity>
                <Text style={{
                    flex: 1, textAlign: 'center',
                    fontFamily: 'Poppins-Regular',
                    color: colors.white,
                    fontSize: 15,
                    right: 20,
                }}>Asy-Syafatain (Bibir)</Text>
            </View>
            <Pdf
                trustAllCerts={false}
                source={source}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);

                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={{
                    flex: 1,
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }} />
        </View>
    )
}

export default Bibir

const styles = StyleSheet.create({})