//Main declaration of html elements
let healthS = document.getElementById('health')
let lotos = document.getElementById('lotos')
let minus = document.getElementById('minus')
let test = document.getElementById('test')
let lightning = document.getElementById('lightning')
let logg = document.getElementById('logg')
let h = document.getElementById('h')

//Stats declaration
var mh = 120000 // Hero's stats
var health = 1000000 // Enemy's stats
var strength = 25000 // Hero's stats
var hit // Hero's hit
var med // Healing power
var am1 // Lightning power
var enemyHit; 
var eh; // Enemy's power
var eStrength = 4000; // Enemy's strength

// Gameplay button's declaration
let damage = () => {
  hit = strength + (strength * Math.floor(Math.random() * 120) / 100)
  health -= hit
  if (health <= 0) {
    health = 0
  }
  healthS.innerHTML = "Enemy's health: " + health 
  var newItem = document.createElement('LI')
  var textNode = document.createTextNode('Вы ударили врага и нанесли ' + hit + ' урона.')
  newItem.appendChild(textNode)
  logg.insertBefore(newItem, logg.childNodes[0])
  if (health > 0) {
    test.innerHTML = 'Alive'
  } else {
    test.innerHTML = 'Dead'
  }
}

let heal = () => {
  med = strength + (strength * Math.floor(Math.random() * 220) / 100)
  mh += med
  h.innerHTML = "Enemy's health: " + mh
  var newItem = document.createElement('LI')
  newItem.style.color = 'lightgreen';
  var textNode = document.createTextNode('Вы исцелили себя на ' + med)
  newItem.appendChild(textNode)
  logg.insertBefore(newItem, logg.childNodes[0])
  if (health > 0) {
    test.innerHTML = 'Alive'
  } else {
    test.innerHTML = 'Dead'
  }
}

let eHit = () =>{
  eh = eStrength + (eStrength * Math.floor(Math.random() *120 ) / 100)
  mh -= eh;
  h.innerHTML = "Health: " + mh;
  var newItem = document.createElement('LI')
  newItem.style.color = "darkred"
  var textNode = document.createTextNode('Противник ударил вас на: ' + eh)
  newItem.appendChild(textNode)
  logg.insertBefore(newItem, logg.childNodes[0])
}

let light = () => {
  am1 = strength + (strength * Math.floor(Math.random() * 820) / 100)
  health -= am1
  if (health <= 0) {
    health = 0
  }
  healthS.innerHTML = "Enemy's health: " + health
  var newItem = document.createElement('LI')
  newItem.style.color = 'crimson'
  var textNode = document.createTextNode('Вы испепелили громом и молнией противника на ' + am1)
  newItem.appendChild(textNode)
  logg.insertBefore(newItem, logg.childNodes[0])
  if (health > 0) {
    test.innerHTML = 'Alive'
  } else {
    test.innerHTML = 'Dead'
  }
 
}


//Cooldown 
function disableEnableBtn (ids) {
  var nrids = ids.length
  for (var i = 0; i < nrids; i++) {
    if (document.getElementById(ids[i])) {
      document.getElementById(ids[i]).onclick = function () {
        this.setAttribute('disabled', 'disabled')
        var idbtn = this.id
        setTimeout(() => {
          document.getElementById(idbtn).removeAttribute('disabled')
        }, 500)
      }
    }
  }
}

function disableEnableBtn1 (ids) {
  var nrids = ids.length
  for (var i = 0; i < nrids; i++) {
    if (document.getElementById(ids[i])) {
      document.getElementById(ids[i]).onclick = function () {
        this.setAttribute('disabled', 'disabled')
        var idbtn = this.id
        setTimeout(() => {
          document.getElementById(idbtn).removeAttribute('disabled')
        }, 10500)
      }
    }
  }
}

//Button's termination
let funct = () =>{
  if (health <= 0) {
    health = 0
    minus.removeEventListener('click' , damage , false);
    minus.removeEventListener('click', eHit, false)
    lotos.removeEventListener('click' , heal , false);
    lotos.removeEventListener('click', eHit, false)
    lightning.removeEventListener('click' , light , false);
    lightning.removeEventListener('click', eHit, false)
  }
}

//Cooldown
function disableEnableBtn2 (ids) {
  var nrids = ids.length
  for (var i = 0; i < nrids; i++) {
    if (document.getElementById(ids[i])) {
      document.getElementById(ids[i]).onclick = function () {
        this.setAttribute('disabled', 'disabled')
        var idbtn = this.id
        setTimeout(() => {
          document.getElementById(idbtn).removeAttribute('disabled')
        }, 5000)
      }
    }
  }
}

//Button's activation
minus.addEventListener('click', damage)
minus.addEventListener('click', eHit)
lotos.addEventListener('click', heal)
lotos.addEventListener('click', eHit)
lightning.addEventListener('click', light)
lightning.addEventListener('click', eHit)
minus.addEventListener('click' , funct)

//Button's storage
var btnid = ['minus']
disableEnableBtn(btnid)

var btnId1 = ['lightning']
disableEnableBtn1(btnId1)

var btnid2 = ['lotos']
disableEnableBtn2(btnid2)
