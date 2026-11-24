
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJMFRkxAS2bGuvpYlGAINgaE-tKLrexKQ",
  authDomain: "ravikiran-electrical.firebaseapp.com",
  projectId: "ravikiran-electrical",
  storageBucket: "ravikiran-electrical.firebasestorage.app",
  messagingSenderId: "850327506670",
  appId: "1:850327506670:web:1358668c28f6e29e922dff"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
