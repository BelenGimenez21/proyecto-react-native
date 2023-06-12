import { View, Text, Image } from "react-native";
import {scale, moderateScale, ScaledSheet} from 'react-native-size-matters';

import IconButton from "../components/IconButton";

const HomeView = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate('List');
    }

    return (
        <View style={myStyle.container}>
            <Text style={myStyle.texto}>Bienvenid@</Text>
            <Image
                style={myStyle.image}
                resizeMode="contain"
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png' }}
            />
            <IconButton
                onPress={handlePress}
                title="Ir a la Lista de Personajes"
                icon="list"
            />
        </View>
    );
}

const myStyle = ScaledSheet.create({
    container:{
        justifyContent:'center',
        alignItems: 'center',    
        margin: '10@s'
    },
    image: {
        //height: scale(350),
        height: moderateScale(300),
        width: moderateScale(350),
    },
    texto: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },

})

export default HomeView;