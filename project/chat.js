let primary = document.getElementById('primary')
let general = document.getElementById('general')
let requests = document.getElementById('requests')
let u1 = document.getElementById('u1')
let u2 = document.getElementById('u2')
// Get the container div and the user divs
let container = document.getElementById('cont');
let userDivs = container.getElementsByClassName('user');
//toggle functions
//Request sections ids are from 6 to 9
primary.addEventListener('click',function (){
    u1.style.display="block"
    u2.style.display="block"
    u3.style.display="block"
    u4.style.display="none"
    u5.style.display="block"
    u6.style.display="none"
    u7.style.display="none"
    u8.style.display="none"
    u9.style.display="none"
    
})
general.addEventListener('click',function (){
    u1.style.display="none"
    u2.style.display="block"
    u3.style.display="none"
    u4.style.display="none"
    u5.style.display="block"
    u6.style.display="none"
    u7.style.display="none"
    u8.style.display="none"
    u9.style.display="none"
   
})
requests.addEventListener('click',function (){
    u1.style.display="none"
    u2.style.display="none"
    u3.style.display="none"
    u4.style.display="none"
    u5.style.display="none"
    u6.style.display="block"
    u7.style.display="block"
    u8.style.display="block"
    u9.style.display="block"
   
})

//Hiding input divs initially
for (let i = 0; i < userDivs.length; i++) {
    if (i<5){
        userDivs[i].querySelector('.input-div').style.display="none"
    }
    else{
       userDivs[i].style.display="none"
    }
}








//input-div apperance
//Getting the clicked user's parent id 
function findClosestParentWithClass(element, className) {
    while (element) {
        if (element.classList && element.classList.contains(className)) {
            return element;
        }
        element = element.parentElement;
    }
    return null;
}
// functionality of opening and closing of div
document.addEventListener('click', function(event) {
    let clickedUserDiv = findClosestParentWithClass(event.target, 'user');
    for (let i = 0; i < userDivs.length; i++) {


        if (i<5){
            let userDiv = userDivs[i];
            let inputDiv = userDiv.querySelector('.input-div');
            let messageDiv = userDiv.querySelector('.messages');
            if (userDiv === clickedUserDiv) {
               
                if (inputDiv.style.display === 'none') {
                    
                    inputDiv.style.display = 'block';
                    if (!messageDiv) {
                       
                        messageDiv = document.createElement('div');
                        messageDiv.className = 'messages';
                        messageDiv.id = 'msg';
                        userDiv.insertBefore(messageDiv, inputDiv);
                    }
                    messageDiv.style.height = '200px';
                } else {
                    
                    inputDiv.style.display = 'none';
                    if (messageDiv) {
                        messageDiv.style.height = '0px';
                    }
                }
            } else {
                
                inputDiv.style.display = 'none';
                if (messageDiv) {
                    messageDiv.style.height = '0px';
                }
            }
        }
    else{
            continue;
        }
    }
});

//
for (let i = 0; i < userDivs.length; i++) {



    if(i<5)
    {
        let userDiv = userDivs[i];
        let inputDiv = userDiv.querySelector('.input-div');
        inputDiv.addEventListener('click', function(event) 
        {
            event.stopPropagation();
        });
    }
    else{
            continue;
        }

  
}

for (let i = 0; i < userDivs.length; i++) {
    if(i<5)
    {
        let userDiv = userDivs[i];
        let inputDiv = userDiv.querySelector('.input-div');
        let inputField = inputDiv.querySelector('input');
        let sendButton = inputDiv.querySelector('button');
    
        // Create a ul for the messages
        let messageList = document.createElement('ul');
        messageList.style.listStyleType = 'none'; 
        userDiv.insertBefore(messageList, inputDiv);
    
        sendButton.addEventListener('click', function(event) {
            event.stopPropagation();
            let messageItem = document.createElement('li');
            messageItem.textContent = inputField.value;
            messageList.insertBefore(messageItem, messageList.firstChild);
            inputField.value = '';
        });
    }
    else{
            continue;
        }   
}

