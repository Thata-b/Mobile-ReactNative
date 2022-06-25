import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Image, FlatList, ScrollView} from 'react-native';
import api from './src/services/api';

export default function Movie() {
  const [filmes, setFilmes] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilmes = async () => {
      const response = await api.get('r-api/?api=filmes');
      setLoading(false);
      setFilmes(response.data);
    };
    fetchFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Filmes</Text>
      </View>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ScrollView >
            <View>
              <Image source={{ uri: item.foto }} style={styles.img} />
              <View style={{alignItems: 'center'}}>
                <Text style={styles.titleMovie}>{item.nome}</Text>
              </View>
            </View>
          </ScrollView>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingBottom: 50,
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 40,
    textAlign: 'center',
  },
  titleMovie: {
    color: 'red',
    fontSize: 18,
    fontWeight: '900',
    paddingBottom: 30,
    
  },
  texto: {
    fontSize: 18,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  img: {
    width: 300,
    height: 105,
    marginTop: 10,
  },
});
