'use strict'

const skill = ["ジャブ", "ストレート", "カウンター"];

let playerSkillNo;
let comSkillNo;

function comSkill() {
  return comSkillNo = Math.floor(Math.random() * 3);
}

function actionTurn() {
  return Math.floor(Math.random() * 2);
}

function playerDamage(playerSkillNo, comSkillNo) {
  if (playerSkillNo === 0 && comSkillNo === 0) {
    return 40;
  } else if (playerSkillNo === 0 && comSkillNo === 1) {
    return 60;
  } else if (playerSkillNo === 0 && comSkillNo === 2) {
    return 0;
  } else if (playerSkillNo === 1 && comSkillNo === 0) {
    return 0;
  } else if (playerSkillNo === 1 && comSkillNo === 1) {
    return 60;
  } else if (playerSkillNo === 1 && comSkillNo === 2) {
    return 120;
  } else if (playerSkillNo === 2 && comSkillNo === 0) {
    return 40;
  } else if (playerSkillNo === 2 && comSkillNo === 1) {
    return 0;
  } else if (playerSkillNo === 2 && comSkillNo === 2) {
    return 120;
  }
}

function comDamage(playerSkillNo, comSkillNo) {
  if (playerSkillNo === 0 && comSkillNo === 0) {
    return 40;
  } else if (playerSkillNo === 0 && comSkillNo === 1) {
    return 0;
  } else if (playerSkillNo === 0 && comSkillNo === 2) {
    return 40;
  } else if (playerSkillNo === 1 && comSkillNo === 0) {
    return 60;
  } else if (playerSkillNo === 1 && comSkillNo === 1) {
    return 60;
  } else if (playerSkillNo === 1 && comSkillNo === 2) {
    return 0;
  } else if (playerSkillNo === 2 && comSkillNo === 0) {
    return 0;
  } else if (playerSkillNo === 2 && comSkillNo === 1) {
    return 120;
  } else if (playerSkillNo === 2 && comSkillNo === 2) {
    return 120;
  }
}


function damagePlayerHP() {
    playerHP = playerHP - playerDamage(playerSkillNo, comSkillNo);
    if (playerHP > 0) {
        playerHPTag.innerText = playerHP + " / 120";
        } else if (playerHP <= 0 ) {
        playerHPTag.innerText = "0 / 120";
        alertLose();
    }
}

function damageComHP() {
    comHP = comHP - comDamage(playerSkillNo, comSkillNo);
    if (comHP > 0) {
        comHPTag.innerText = comHP + " / 120";
        } else if (comHP <= 0 ) {
        comHPTag.innerText = "0 / 120";
        alertWin();
    }
}

let playerHP = 120;
let comHP = 120;

const playerHPTag = document.getElementById("playerHP");
playerHPTag.innerText = playerHP + " / 120";

const comHPTag = document.getElementById("comHP");
comHPTag.innerText = comHP + " / 120";

function restHPOfJab() {
  closeSkill();
  playerSkillNo = 0; 
  const comSkillNo = comSkill();
  const turnNo = actionTurn();
  if (turnNo === 0 && comSkillNo === 0) {
    openMessagePlayer();
    messagePlayer.innerText = "エビハラー　の　ジャブ！";
    messagePlayer.addEventListener("click", openMessageCom);
    messageCom.innerText = "カニワラー　の　ジャブ！";
  } else if (turnNo === 1 && comSkillNo === 0) {
    openMessageCom();
    messageCom.innerText = "カニワラー　の　ジャブ！";
    messageCom.addEventListener("click", openMessagePlayer);
    messagePlayer.innerText = "エビハラー　の　ジャブ！";
  } else if (comSkillNo === 1) {
    openMessagePlayer();
    messagePlayer.innerText = "エビハラー　の　ジャブ！";
    messagePlayer.addEventListener("click", openMessageMiss);
    messageMiss.addEventListener("click", openMessageCom);
    messageCom.innerText = "カニワラー　の　ストレート！";
  } else if (comSkillNo === 2) {
    openMessagePlayer();
    messagePlayer.innerText = "エビハラー　の　ジャブ！";
    messagePlayer.addEventListener("click", openMessageCom);
    messageCom.innerText = "カニワラー　の　カウンター！";
    messageCom.addEventListener("click", openMessageMiss);
  } 
}

function restHPOfStraight() {
  closeSkill();
  playerSkillNo = 1; 
  const comSkillNo = comSkill();
  const turnNo = actionTurn();
  if (comSkillNo === 0) {
    openMessageCom();
    messageCom.innerText = "カニワラー　の　ジャブ！";
    messageCom.addEventListener("click", openMessageMiss);
    messageMiss.addEventListener("click", openMessagePlayer);
    messagePlayer.innerText = "エビハラー　の　ストレート！";
  } else if (turnNo === 0 && comSkillNo === 1) {
    openMessagePlayer();
    messagePlayer.innerText = "エビハラー　の　ストレート！";
    messagePlayer.addEventListener("click", openMessageCom);
    messageCom.innerText = "カニワラー　の　ストレート！";
  } else if (turnNo === 1 && comSkillNo === 1) {
    openMessageCom();
    messageCom.innerText = "カニワラー　の　ストレート！";
    messageCom.addEventListener("click", openMessagePlayer);
    messagePlayer.innerText = "エビハラー　の　ストレート！";
  } else if (comSkillNo === 2) {
    openMessagePlayer();
    messagePlayer.innerText = "エビハラー　の　ストレート！";
    messagePlayer.addEventListener("click", openMessageMiss);
    messageMiss.addEventListener("click", openMessageCom);
    messageCom.innerText = "カニワラー　の　カウンター！";
  }
}

function restHPOfCounter() {
  closeSkill();
  playerSkillNo = 2; 
  const comSkillNo = comSkill();
  const turnNo = actionTurn();
  if (comSkillNo === 0) {
    openMessageCom();
    messageCom.innerText = "カニワラー　の　ジャブ！";
    messageCom.addEventListener("click", openMessagePlayer);
    messagePlayer.innerText = "エビハラー　の　カウンター！";
    messagePlayer.addEventListener("click", openMessageMiss);
  } else if (comSkillNo === 1) {
    openMessageCom();
    messageCom.innerText = "カニワラー　の　ストレート！";
    messageCom.addEventListener("click", openMessageMiss);
    messageMiss.addEventListener("click", openMessagePlayer);
    messagePlayer.innerText = "エビハラー　の　カウンター！";
  } else if (turnNo === 0 && comSkillNo === 2) {
    openMessageCom();
    messageCom.innerText = "カニワラー　の　カウンター！";
    messageCom.removeEventListener("click", damagePlayerHP);
    messageCom.addEventListener("click", openMessageMiss);
    messageMiss.addEventListener("click", openMessagePlayer);
    messagePlayer.innerText = "エビハラー　の　カウンター！";
  } else if (turnNo === 1 && comSkillNo === 2) {
    openMessagePlayer();
    messagePlayer.innerText = "エビハラー　の　カウンター！";
    messagePlayer.removeEventListener("click", damageComHP);
    messagePlayer.addEventListener("click", openMessageMiss);
    messageMiss.addEventListener("click", openMessageCom);
    messageCom.innerText = "カニワラー　の　カウンター！";
  }
}

const jabTag = document.getElementById("jab");
jabTag.addEventListener("click", restHPOfJab); 

const straightTag = document.getElementById("straight");
straightTag.addEventListener("click", restHPOfStraight);

const counterTag = document.getElementById("counter");
counterTag.addEventListener("click", restHPOfCounter);

function openSkill() {
  document.getElementById("skillWindow").style.display = "block";
  messagePlayer.removeEventListener("click", openMessageCom);
  messagePlayer.removeEventListener("click", openMessageMiss);
  messageCom.removeEventListener("click", openMessagePlayer);
  messageCom.removeEventListener("click", openMessageMiss);
  messageMiss.removeEventListener("click", openMessagePlayer);
  messageMiss.removeEventListener("click", openMessageCom);
}

function closeSkill() {
  document.getElementById("skillWindow").style.display = "none";
}

const battle = document.getElementById("battle");
battle.addEventListener("click", openSkill);

function openMessagePlayer() {
    messagePlayer.style.display = "block";
}
function openMessageCom() {
    messageCom.style.display = "block";
}
function openMessageMiss() {
    messageMiss.style.display = "block";
}

function closeMessagePlayer() {
    messagePlayer.style.display = "none";
}
function closeMessageCom() {
    messageCom.style.display = "none";
}
function closeMessageMiss() {
    messageMiss.style.display = "none";
}

const messagePlayer = document.getElementById("messageWindowPlayer")
const messageCom = document.getElementById("messageWindowCom")
const messageMiss = document.getElementById("messageWindowMiss")
messagePlayer.addEventListener("click", closeMessagePlayer);
messagePlayer.addEventListener("click", damageComHP);
messagePlayer.addEventListener("click", reduceHPbar);
messageCom.addEventListener("click", closeMessageCom);
messageCom.addEventListener("click", damagePlayerHP);
messageCom.addEventListener("click", reduceHPbar);
messageMiss.addEventListener("click", closeMessageMiss);

const playerHPbar = document.getElementById("playerHPbar");
const comHPbar = document.getElementById("comHPbar");
function reduceHPbar() {
  if (playerHP < 120) {
  playerHPbar.style.width = 240 * playerHP / 120 + "px";
  }
  if (playerHP <= 60) {
  playerHPbar.style.backgroundColor = "#ffa500";
  }
  if (playerHP <= 40) {
    playerHPbar.style.backgroundColor = "#ff0000";
  }
  if (comHP < 120) {
  comHPbar.style.width = 240 * comHP / 120 + "px";
  }
  if (comHP <= 60) {
  comHPbar.style.backgroundColor = "#ffa500";
  }
  if (comHP <= 40) {
  comHPbar.style.backgroundColor = "#ff0000";
  }
}

function alertLose() {
  window.alert("めのまえがまっくらになった。");
}

function alertWin() {
  window.alert("カニワラーをたおした");
}

