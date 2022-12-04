import ImagePicker from 'react-native-image-crop-picker';
import {useState} from 'react';
import {PostDimension} from 'constants/posts';
import {PostType} from 'types/post';
import {Status} from 'types/post';

type PostFormType = Omit<PostType, 'status'> & {status: Status | undefined};

const initialState: PostFormType = {
  id: '',
  title: '',
  status: undefined,
  date: '',
  url: '',
  description: '',
};

export const usePostForm = () => {
  const [post, setPost] = useState<PostFormType>(initialState);

  const openPicker = () => {
    ImagePicker.openPicker({
      width: PostDimension.width,
      height: PostDimension.height,
      cropping: false,
    })
      .then(image => {
        setPost(prev => ({
          ...prev,
          ...({url: image.sourceURL} as PostFormType),
        }));
      })
      .catch(e => console.log(e));
  };

  const removeIcon = () => {
    setPost(prev => ({...prev, ...{url: ''}}));
  };

  const updatePostByAttribute = (attribute: string) => {
    return (text: string) =>
      setPost(prev => ({...prev, ...({[attribute]: text} as PostFormType)}));
  };

  const onSubmit = () => {};

  return {openPicker, post, removeIcon, onSubmit, updatePostByAttribute};
};
