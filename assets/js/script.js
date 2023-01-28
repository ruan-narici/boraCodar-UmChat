const chat = document.querySelector('#boxMessages');
const inputText = document.querySelector('#inputMessage');
const buttonSent = document.querySelector('#buttonSent');
const iniHr = document.querySelector('#dataHora');
const likedin = document.querySelector('.user-info');
let date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let flag = 0;
let msgRandom = "Tive uma ideia incrível para um projeto! 😍";

openLinkedin = () => {
    likedin.addEventListener('click', () => {
        open("https://www.linkedin.com/in/ruan-narici/");
    })
}


Hour = () => {

    setInterval(() => {

        let date = new Date();
        hr = date.getHours();
        min = date.getMinutes();
        if (min < 10) min = '0' + min;
    }, 500);
}


attHr = () => {
    iniHr.innerHTML = `Hoje ${hr}:${min} `
}

firstMsg = setInterval(first = () => {

        bootMessage(msgRandom);
        clearTime(firstMsg);
    }, 2000);

scdMsg = () => {    

    secondMsg = setInterval(first = () => {

        switch (flag) {
            case 0: msgRandom = "E se a gente fizesse um chat moderno e responsivo em apenas uma semana?";
            break;
            case 1: msgRandom = "Fechado! Conto com você! 🤩";
            break;
            case 2: msgRandom = "#boraCodar! 💜🚀";
            break;
            case 3: msgRandom = "Já ia me esquecendo.. Não se esqueça de seguir o Ruan Narici no Linkedin e também no Github! 😉";
            break;
            case 4: msgRandom = "Ruan Narici foi o desenvolvedor do código.";
            break;
            case 5: msgRandom = "Agora eu estou cansada e estou indo dormir...";
            break;
            case 6: msgRandom = "*Mensagem Automática* Cecilia está dormindo.";
            break;
        }
        flag++;
        bootMessage(msgRandom);
        rollScroll();
        clearTime(secondMsg);
    }, 2000);
}

bootMessage = (message) => {

    chat.innerHTML += ` <!-- RECEIVE --> ` +
    ` <div class="receive-message">` +
    `   <h3 class="user-h">Cecilia - ${hr}:${min}</h3>` +
    `       <div class="box-message-r">` +
    `           <span class="message-text">${message}</span>` +
    `       </div>` +
    ` </div> `;
}

myMessage = (text) => {

    return ` <!-- SENT --> ` +
                `<div class="sent-message">` +
                    `<h3 class="user-s">Você - ${hr}:${min}</h3>` +
                    `<div class="box-message-s">` +
                        `<span class="message-text">${text}</span>` +
                    `</div>` +
                `</div> `;
}

sentMessage = () => {

    buttonSent.addEventListener('click', () => {
        let x = inputText.value;
        if (inputText.value != '' && x.length <= 95) {
            chat.innerHTML += myMessage(inputText.value);
            rollScroll();
            clearMyMessage();
            scdMsg();
        }
    })
}

clearTime = (id) => {

    clearInterval(id);
}

clearMyMessage = () => {

    inputText.value = '';
}

rollScroll = () => {

    window.scrollBy(0,200);
}

//EXECUTE
Hour();
attHr();
sentMessage();
openLinkedin();
