

let text=document.querySelector('#input-form__text-area');
let button=document.querySelector('.input-form__btn');

button.addEventListener('click', showMessage);

function showMessage () {
    let messages=document.getElementsByClassName('dialog-area__output');

    if (text.value != '') {
        messageDate=document.querySelectorAll('.date');
        lastMessageDate=messageDate[messageDate.length-1];
        currenteDate= new Date();
        const options = {  year: 'numeric', month: 'long', day: 'numeric' };
        if (lastMessageDate.innerHTML !== currenteDate.toLocaleDateString(undefined, options)) {
            messages[messages.length-1].insertAdjacentHTML('afterend',
            `<div class="dialog-area__output date-line">
                <div class="line line-left"></div>
                <div class="date">${currenteDate.toLocaleDateString(undefined, options)}</div>
                <div class="line line-right"></div>
            </div>`);
        }

        messages[messages.length-1].insertAdjacentHTML('afterend',
            `<div class="dialog-area__output dialog-area__message user">
                <div class="message message-user">
                ${text.value}
                </div>
            </div>
            <div class="dialog-area__output dialog-area__message appponent">
                <div class="message message-appponent">
                    Сделано хорошо. Можно брать.
                </div>
            </div>`);
            messages[messages.length-1].scrollIntoView(true);
        text.value = '';
    }
}
