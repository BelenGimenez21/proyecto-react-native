import { View, Text, Image, Button } from "react-native";
import { scale, moderateScale } from 'react-native-size-matters';

import IconButton from "./IconButton";

const Card = ({ id, imageSource, title, especie, genero, episodios, deleteFunction }) => {
  return (
    <View style={styles.card}>
      <Image
				resizeMode="contain"
				source={{ uri: imageSource }}
				style={styles.image}
			/>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>Especie: {especie}</Text>
        <Text style={styles.description}>Genero: {genero}</Text>
        <Text style={styles.description}>Episodios: {episodios}</Text>
				<IconButton
					onPress={() => deleteFunction(id)}
					title="Eliminar"
					icon="trash"
				/>
      </View>
    </View>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    marginBottom: 16,
    margin: 10,
    
  },
  image: {
    height: scale(350),
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: moderateScale(16),
    justifyContent:'center',
    alignItems: 'center',
  },
  title: {
    textAlign:'center',
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    textAlign:'center',
    fontSize: 14,
    fontWeight: "bold",
    color: "#887",
  },
}

export default Card;