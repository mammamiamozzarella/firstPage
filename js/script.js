/*//Удаляет последний абзац
function removeLastP(){
	let allP=document.getElementsByTagName('p');
	let lastP=allP.length-1;
	allP[lastP].remove();//удаляет последний элемент в массиве с абзацами
}

function change(){
	let size=document.getElementById('number').value;
	let fontFam=document.getElementById('fontFamily').value;
	let allP=document.getElementsByTagName('p');
	for(i=0;i<allP.length;i++){
		//применяет размер шрифта к каждому параграфу
	allP[i].style.fontSize=size+'px';
		//...новый стиль шрифта
	allP[i].style.fontFamily=fontFam;
}
//меняет цвет бекграунда
	let backgr=document.getElementById('color').value;
	document.body.style.backgroundColor=backgr;
}


//открывает/закрывает бургер-меню
    var menuElem = document.getElementById('sidebar');
    var titleElem = document.getElementById('burger-menu');
    titleElem.onclick = function() {
      menuElem.classList.toggle('open');
    };

*/
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDuulp560_aeiClIcvPFibmBM1keg0jDw0",
    authDomain: "firsttry-dfa01.firebaseapp.com",
    databaseURL: "https://firsttry-dfa01.firebaseio.com",
    projectId: "firsttry-dfa01",
    storageBucket: "firsttry-dfa01.appspot.com",
    messagingSenderId: "337539498973",
    appId: "1:337539498973:web:30bea17d5868c71a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Get elements
  var txtEmail=document.getElementById('login');
  var txtPass=document.getElementById('password');
  var btnSignUp=document.getElementById('btnSignUp');
  var btnLogin=document.getElementById('btnLogin');
   //Add Login event
  btnLogin.addEventListener("click", e=>{
  	//Get email and password
  	var email=txtEmail.value;
  	var pass=txtPass.value;
  	var auth=firebase.auth();

  	//Sign up
  	var promise=auth.SignInWithEmailAndPassword(email,pass);
  	promise.catch(e=>console.log(e.message));

  })

  //Add signUp event
  btnSignUp.addEventListener("click", e=>{
  	//Get email and password
  	var email=txtEmail.value;
  	var pass=txtPass.value;
  	var auth=firebase.auth();

  	//Sign up
  	var promise=auth.createUserWithEmailAndPassword(email,pass);
  	promise
  	.catch(e=>console.log(e.message));

  })

  //realtime listener
  firebase.auth().onAuthStateChange(firebase => {
  	
  	if(firebaseUser){
  		console.log('hi');
  		console.log(firebaseUser);
  	}
  	else{
  		console.log('not logged in');
  	}
  })