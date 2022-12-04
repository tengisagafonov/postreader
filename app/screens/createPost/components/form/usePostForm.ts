import ImagePicker from 'react-native-image-crop-picker';
import {useState} from 'react';
import {PostDimension} from 'constants/posts';

export const usePostForm = () => {
  const [uri, setUri] = useState<string>();

  const openPicker = () => {
    ImagePicker.openPicker({
      width: PostDimension.width,
      height: PostDimension.height,
      cropping: false,
    })
      .then(image => {
        setUri(image.sourceURL);
      })
      .catch(e => console.log(e));
  };

  const removeIcon = () => {
    setUri('');
  };

  const onSubmit = () => {};

  return {openPicker, uri, removeIcon, onSubmit};
};
