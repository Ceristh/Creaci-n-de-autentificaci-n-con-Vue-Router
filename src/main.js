import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDEFJM_gQ4e_ybN2nrzxtHpZzFsRyu0SX8",
  authDomain: "d1firebase.firebaseapp.com",
  projectId: "d1firebase",
  storageBucket: "d1firebase.appspot.com",
  messagingSenderId: "657636360602",
  appId: "1:657636360602:web:64801de342c30cc36e7a23"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(){
  new Vue({
    router, 
    store,
    render: h => h(App)
  }).$mount('#app')  
})
