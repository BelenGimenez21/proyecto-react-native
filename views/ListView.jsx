import { useEffect, useState } from 'react';
import { View, TextInput } from 'react-native';

import List from './../components/List';

const ListView = ({ navigation }) => {
    const [listaCompleta, setListaCompleta] = useState([]);
    const [lista, setLista] = useState([]);

    const deleteItem = (id) => {
        const nuevaLista = lista.filter(item => item.id !== id);

        setLista(nuevaLista);
        setListaCompleta(nuevaLista);
	}

    const searchItem = (text) => {
        const nuevaLista = listaCompleta.filter(item => item.name.includes(text));

        setLista(nuevaLista);
    }

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(res => {
                setLista(res.results);
                setListaCompleta(res.results);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <View style={myStyle.vista}>
            <TextInput
                style={myStyle.input}
                placeholder='Buscar Personaje'
                onChangeText={searchItem}
            />
            <List
                data={lista}
                deleteFunction={deleteItem}
            />
        </View>
    );
}

const myStyle = {
    vista:{
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 16,
        marginTop: 5,
        marginLeft:5,
        marginRight: 5,
    },
}

export default ListView;