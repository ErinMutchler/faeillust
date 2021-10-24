import {
  uploadBytesResumable,
  ref,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

class StorageManager {
  constructor(storageRef) {
    this.storageRef = storageRef;
  }

  uploadFile(file, path) {
    return uploadBytesResumable(ref(this.storageRef, path), file);
  }

  getFileURL(path) {
    return getDownloadURL(ref(this.storageRef, path));
  }

  deleteFile(path) {
    const fileRef = ref(this.storageRef, path);
    deleteObject(fileRef)
      .then(() => {
        console.log("File deleted");
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

export default StorageManager;
