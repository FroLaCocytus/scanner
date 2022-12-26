import React, {useState, useEffect} from 'react'    ;
import { Button, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styled from 'styled-components/native';
import { Camera } from 'expo-camera';


const ScannerView = styled.View`
  width: 100%;
  height: 100%;
`;

export const Scanner = ( { navigation } ) => {
    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)

    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, [])

    const handleBarCodeScanned = ({type, data}) => {
        const text = data;
        try{
            const obj = JSON.parse(text);
            if (obj.isQR === true) {
                navigation.navigate('Plan', {data: obj})
            } else {
                setScanned(true)
            }

        }catch (e){
            setScanned(true)

        }
        //alert(`Bar Code With Type ${type} and data ${data} has been scanned!`)
    }

    if (hasPermission === null){
        return <Text>Отправляем запрос на доступ к камере</Text>
    }

    if (hasPermission === false){
        return <Text>Нет доступа к камере</Text>
    }
    return (
        <View>
            <ScannerView>
                <Camera
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    ratio='16:9'
                    style={[StyleSheet.absoluteFillObject, styles.container]}
                >
                    <View style={styles.layerTop}>
                        <View style={{height:"100%",width:"100%", justifyContent:"center", alignItems: "center"}}>
                            {scanned && <Text style={{fontSize: 30, color: "white"}}>Нeверный QR-код</Text>}
                        </View>
                    </View>
                    <View style={styles.layerCenter}>
                        <View style={styles.layerLeft} />
                        {scanned ?
                            <View style={styles.focused1}>
                                <TouchableOpacity onPress={()=> setScanned(false)} style={{height:"100%",width:"100%", justifyContent:"center", alignItems: "center"}}>
                                    {scanned &&<Image style={{filter: "invert(1)" ,width: "80%", height:"80%", resizeMode: "contain", opacity: 0.5}} source={require('../assets/refresh.png')} />}
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={styles.focused}/>
                        }

                        <View style={styles.layerRight} />
                    </View>
                    <View style={styles.layerBottom} />
                </Camera>

            </ScannerView>
        </View>

    );
}

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    layerTop: {
        flex: 1,
        backgroundColor: opacity
    },
    layerCenter: {
        flex: 1,
        flexDirection: 'row'
    },
    layerLeft: {
        flex: 1,
        backgroundColor: opacity
    },
    focused: {
        flex: 4,
        borderWidth: 2,
        borderColor: "green"
    },
    focused1: {
        flex: 4,
        backgroundColor: opacity,
    },
    layerRight: {
        flex: 1,
        backgroundColor: opacity
    },
    layerBottom: {
        flex: 1,
        backgroundColor: opacity
    },
});
