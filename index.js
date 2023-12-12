import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


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
        showCard();
    })
});

function generateTemplate(response, id) {
    return `<div class="card">
                <p class="title">${response.title}</p>
                <div class="sub-information">
                    <p>
                        <span class="category ${response.category}">${response.category[0].toUpperCase()}${response.category.slice(1)}</span>
                    </p>
                    <a href="${response.link}" target="_blank"><i class="bi bi-box-arrow-up-right website"></i></a>
                    <a href="https://www.google.com/search?q=${response.title}" target="_blank"><i class="bi bi-google search"></i></a>
                    <span><i class="bi bi-trash delete" data-id="${response.id}"></i></span>
                </div>
            </div>`;
}

const cards = document.querySelector(".cards");
function showCard() {
    cards.innerHTML = "";
    getDocs(colRef)
        .then(data => {
            data.docs.forEach(document => {
            cards.innerHTML += generateTemplate(document.data(), document.id);
            })
        })
        .catch(error => {
            console.log(error);
        }) 
}

