import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyAOaT-GrZCxnM1gz5YDeiEtVM5Ls5OTAXU",
    authDomain: "bookmark-4ea95.firebaseapp.com",
    projectId: "bookmark-4ea95",
    storageBucket: "bookmark-4ea95.appspot.com",
    messagingSenderId: "222963254613",
    appId: "1:222963254613:web:2fd0de793f8beb04581bdc"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "bookmarks");

const addForm = document.querySelector(".add");
addForm.addEventListener("submit", event => {
    event.preventDefault();

    addDoc(colRef, {
        link: addForm.link.value,
        title: addForm.title.value,
        category: addForm.category.value,
        createdAt: serverTimestamp()
    })
    .then(() => {
        addForm.reset();
    })
})