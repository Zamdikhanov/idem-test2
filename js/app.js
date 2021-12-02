

let text=document.querySelector('#input-form__text-area');
let button=document.querySelector('.input-form__btn');

button.addEventListener('click', showMessage);

function showMessage () {
    let message=document.querySelectorAll('.dialog-area__inner>div');
    let lastMessage=message[message.length-1];

    if (text.value != '') {
        messageDate=document.querySelectorAll('.date');
        lastMessageDate=messageDate[messageDate.length-1];
        currenteDate= new Date();
        const options = {  year: 'numeric', month: 'long', day: 'numeric' };
        if (lastMessageDate.innerHTML !== currenteDate.toLocaleDateString(undefined, options)) {
            lastMessage.insertAdjacentHTML('afterend',
            `<div class="date-line">
                <div class="line line-left"></div>
                <div class="date">${currenteDate.toLocaleDateString(undefined, options)}</div>
                <div class="line line-right"></div>
            </div>`);
            message=document.querySelectorAll('.dialog-area__inner>div');
            lastMessage=message[message.length-1];
        }

        lastMessage.insertAdjacentHTML('afterend',
            `<div class="dialog-area__message user">
                <div class="message message-user">
                ${text.value}
                </div>
            </div>
            <div class="dialog-area__message appponent">
                <div class="message message-appponent">
                    Сделано хорошо. Можно брать.
                </div>
            </div>`);
    
        text.value = '';
    }
}
