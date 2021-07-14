import React from 'react';
import {View, Button, StyleSheet, Text, FlatList, Image} from 'react-native';
import {useSelector} from 'react-redux';

export const HomeScreen = ({navigation, route}) => {
  const posts = useSelector(state => state);

  const renderPosts = ({item}) => {
    return (
      <View style={styles.postBox}>
        <Text style={styles.postText}>{item.text}</Text>
        {item.image && (
          <Image
            style={styles.postImage}
            width={300}
            height={300}
            resizeMode="cover"
            source={{uri: item.image}}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topButtons}>
        <View style={styles.buttonContainer}>
          <Button
            title="Add Image"
            onPress={() => navigation.navigate('Add Post')}
            onPress={() => navigation.navigate('Add Post', {selectImage: true})}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Add Post"
            onPress={() => navigation.navigate('Add Post')}
          />
        </View>
      </View>

      <View style={styles.postsContainer}>
        <FlatList
          data={posts}
          renderItem={renderPosts}
          keyExtractor={item => item.text}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  postText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  postImage: {
    marginVertical: 15,
    alignSelf: 'center',
    width: 300,
    height: 300,
  },
  postsContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
  buttonContainer: {
    marginRight: 5,
  },
  topButtons: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  container: {
    alignItems: 'center',
    padding: 5,
    paddingVertical: 20,
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  postBox: {
    padding: 15,
    borderRadius: 5,
    borderColor: '#a0a0a0',
    borderWidth: 1.5,
    marginVertical: 10,
  },
});
