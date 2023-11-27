let room_ui_toggled = false;
let room_ui_container = document.getElementById('body-left');

function toggleRoomUI(){
    
    if (room_ui_toggled){
        room_ui_container.style.transform = 'translateX(0%)';
        console.log(room_ui_container)
    }else{
       
        room_ui_container.style.transform = 'translateX(100%)';
        console.log(room_ui_container)
    }
    room_ui_toggled = !room_ui_toggled;
}