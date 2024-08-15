import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';

interface Movie {
  id: number;
  title: string;
  releaseYear: number;
}

export const NetworkingExample = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setMovies(json.movies);
    } catch (er) {
      console.error(er);
      setError('Failed to load movies.');
    }
  };

  const renderItem = ({item}: {item: Movie}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.year}>{item.releaseYear}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
      <Button title="Get Movies" onPress={getMoviesFromApiAsync} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  itemContainer: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  year: {
    fontSize: 14,
    color: '#666',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});
