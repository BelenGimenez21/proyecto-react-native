import { FlatList } from "react-native";

import Card from "./Card";

const List = ({ data, deleteFunction }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item, index }) => {
                return (
                    <Card
                        id={item.id}
                        imageSource={item.image}
                        title={item.name}
                        especie={item.species}
                        genero={item.gender}
                        episodios={item.episode.length}
                        deleteFunction={deleteFunction}
                    />
                );
            }}
        />
    );
}

export default List;