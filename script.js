let recieved_msgs_ul = document.getElementById('recieved-msgs');

let sent_msgs_ul = document.getElementById('sent-msgs');

function send_msg(msg) {
  let li = document.createElement('li');
  let div1 = document.createElement('div');
  div1.setAttribute('id', 'username');
  li.appendChild(div1);


  let div2 = document.createElement('div');
  div2.setAttribute('id', 'msg');

  li.appendChild(div2);

  sent_msgs_ul.appendChild(li);

  div1.textContent = "You";
  div2.textContent = msg;

}

function recieve_msg(msg, name) {

  let li = document.createElement('li');
  let div1 = document.createElement('div');
  div1.setAttribute('id', 'username');
  li.appendChild(div1);


  let div2 = document.createElement('div');
  div2.setAttribute('id', 'msg');

  li.appendChild(div2);

  recieved_msgs_ul.appendChild(li);

  div1.textContent = name;
  div2.textContent = msg;

}

function showToast(name, event) {
  let toast_div_container = document.getElementById('toast-container');
  let toast_div = document.createElement('div');

  toast_div.setAttribute('id', 'toast');

  if(event=='connected'){
    toast_div.innerHTML = `${name} connected!`;
  }
  else if(event=='disconnected'){
    toast_div.innerHTML = `${name} disconnected!`;
  }
  else if(event=='reconnected'){
    toast_div.innerHTML = `${name} reconnected!`;
  }
  
  toast_div_container.appendChild(toast_div);

}