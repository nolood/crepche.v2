import {
  getDownloadURL, getStorage, ref,
} from 'firebase/storage';

const getImageUrl = async (activeSubCategory: string) => {
  const storage = getStorage();
  const storageRef = ref(storage, `ItemsImages/${activeSubCategory}.webp`);
  try {
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.log(error);
  }
};

export default getImageUrl;
