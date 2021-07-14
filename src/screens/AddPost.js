import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';

export const AddPost = ({navigation, route}) => {
  const selectImage = route.params?.selectImage;

  const onAddImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel === true) {
        return;
      } else {
        setImage(response.assets[0].uri);
      }
    });
  };

  if(selectImage){
    navigation.setParams({selectImage: false});
    onAddImage();
  }
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  console.log(route);

  const dispatch = useDispatch();

  const onAddPost = () => {
    const post = {
      text,
      image,
    };
    dispatch({type: 'ADD_POST', payload: {post}});
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <View style={styles.addImage}>
        <Button
          title={image ? 'Change Image' : 'Add Image'}
          onPress={onAddImage}
        />
      </View>
      <TextInput
        multiline
        value={text}
        onChangeText={setText}
        numberOfLines={5}
        textAlignVertical="top"
        style={styles.textInput}
      />
      <View>
        <TouchableOpacity onPress={() => setImage(null)}>
          {image && (
            <Image
              style={styles.selectedImage}
              resizeMode="cover"
              width={100}
              height={100}
              source={{uri: image}}
            />
          )}
        </TouchableOpacity>
      </View>
      <Button title="Create Post" onPress={onAddPost} />
    </View>
  );
};

const styles = StyleSheet.create({
  selectedImage: {
    width: 100,
    marginBottom: 10,
    height: 100,
  },
  container: {
    padding: 5,
  },
  textInput: {
    borderRadius: 10,
    fontSize: 20,
    marginBottom: 10,
    borderColor: '#a1a1a1',
    borderWidth: 1,
  },
  addImage: {
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
});
