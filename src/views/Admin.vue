<template>
    <div id="firebaseui-auth-container"> </div>

        <div class="d-flex flex-column w-25 m-auto">
            <input class="my-2" type="text" id="input-entryTitle" placeholder="Entry Title" v-model="title">
            <select name="art type" v-model="artworkType">
                <option value="">--Select an art type--</option>
                <option value="traditional/"> Traditional </option>
                <option value="digital/"> Digital </option>
                <option value="comics/"> Comic </option>
                <option value="animations/"> Animation </option>
            </select>
            <input class="my-2" type="file" accept=".png, .jpg, .gif" id="input-entryFile">
            <input type="submit" value="Add Portfolio Entry" @click="submitEntry">
            <div id="container-uploadProgress" class="mt-3" v-show="isUploading">
                <h6> {{ textUploadingProgress }}</h6>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated"
                         role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                         :style="{width: `${progressPercentage}%`}"></div>
                </div>
            </div>

            <button class="mt-5" @click="logout"> Logout </button>
        </div>
</template>

<style scoped>
</style>

<script>
  import {firestoreManager, storageManager} from "../services/FirebaseConfig";
  import { getAuth, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, signOut} from "firebase/auth";

  export default {
    name: "Admin",
    data() {
      return {
        artworkType: "",
        title: "",
        file: null,
        isUploading: false,
        textUploadingProgress: "Uploading...",
        progressPercentage: 0,
      }
    },
    methods: {
      submitEntry() {
        if (this.isUploading) {
          return;
        }
        const file = document.getElementById("input-entryFile").files[0];
        const filename = file.name;
        const path = this.artworkType + filename;

        firestoreManager.addPortfolioDoc({
          title: this.title,
          path: path,
          filename: filename,
        }, this.artworkType);
        this.isUploading = true;
        let uploadTask = storageManager.uploadFile(file, path);
        uploadTask.on("state_changed",
          snapshot => {
            this.progressPercentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          err => {
            console.log(err);
          },
          () => {
            this.textUploadingProgress = "Upload complete!";
            document.getElementById("input-entryFile").value = "";
            this.artworkType = "";
            this.title = "";
            setTimeout(() => {
              this.isUploading = false;
              this.textUploadingProgress = "Uploading..."

            }, 1000);
          }
        );
      },
      logout() {
        const auth = getAuth();
        signOut(auth).then(() => {
          console.log("Sign out successful");
        }).catch(e => {
          console.log(e);
        });
      }
    },
    created() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      onAuthStateChanged(auth, (user) => {
        if (!user) {
          signInWithRedirect(auth, provider);
        }
      });
    }
  }
</script>