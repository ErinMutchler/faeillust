import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  getDoc,
  orderBy
} from "firebase/firestore";

class FirestoreManager {
  constructor(firestore) {
    this.firestore = firestore;
    this.artworkDocs = [];
    this.unsubscribe = {};

  }

  addPortfolioDoc(artworkDoc, collectionID) {
    return addDoc(collection(this.firestore, collectionID), artworkDoc);
  }

  deleteEntry(docID, collectionID) {
    return deleteDoc(doc(this.firestore, collectionID, docID));
  }

  beginListening(collectionID, callback) {
    this.unsubscribe[collectionID] = onSnapshot(
      query(collection(this.firestore, collectionID), orderBy("title")),
      (collectionSnapshot) => {
        this.artworkDocs = [];
        collectionSnapshot.forEach(doc => {
          this.artworkDocs.push({
            filename: doc.get("filename"),
            path: doc.get("path"),
            title: doc.get("title"),
            id: doc.id,
          });
        });
        callback();
      }
    );
  }

  stopListening(collectionID) {
    this.unsubscribe[collectionID]();
  }

  getPortfolioDocAtIndex(index) {
    return this.artworkDocs[index];
  }

  async getPortfolioDocByID(docID, collectionID) {
    const docRef = doc(this.firestore, collectionID, docID);
    const docSnap = await getDoc(docRef);
    return {
      filename: docSnap.get("filename"),
      path: docSnap.get("path"),
      title: docSnap.get("title"),
      id: docSnap.id,
    };
  }

  get length() {
    return this.artworkDocs.length;
  }
}

export default FirestoreManager;