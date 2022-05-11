const LETRAS = ['e', 'i', 'a', 'o', 'u'];
const LETRAS_CRIPT = ['enter', 'imes', 'ai', 'ober', 'ufat'];
const BT_CRIPTOGRAFAR = document.getElementById('criptografar');
const BT_DESCRIPTOGRAFAR = document.getElementById('descriptografar');
const BT_COPIAR = document.getElementById('copiar');
const MENSAGEM_FINAL = document.getElementsByClassName('mensagem-final')[0];
const SEM_MENSAGEM = document.getElementsByClassName('sem-mensagem')[0];
const MENSAGEM = document.getElementsByClassName('mensagem')[0];

function criptografar(text) {
    let textEncript = text;

    for (let x = 0; x <= LETRAS.length; x++) {
        textEncript = textEncript.replaceAll(LETRAS[x], LETRAS_CRIPT[x]);
    }

    return textEncript;
}

function teste_text(text) {
    let re = new RegExp(/[a-z\s]+/g);
    console.log(re.test(text));
}

function descriptografar(text) {
    let textDesencript = text;

    for (let x = 0; x <= LETRAS.length; x++) {
        textDesencript = textDesencript.replaceAll(LETRAS_CRIPT[x], LETRAS[x]);
    }

    return textDesencript;
}

BT_CRIPTOGRAFAR.addEventListener('click', () => {
    const TEXT = document.getElementById('texto');

    teste_text(TEXT);

    let textCriptografado = criptografar(TEXT.value);

    MENSAGEM_FINAL.classList.remove('display-none');

    SEM_MENSAGEM.classList.add('display-none');

    MENSAGEM.textContent = textCriptografado;
});

BT_DESCRIPTOGRAFAR.addEventListener('click', () => {
    const TEXT = document.getElementById('texto');

    let textDescriptografado = descriptografar(TEXT.value);

    MENSAGEM_FINAL.classList.remove('display-none');

    SEM_MENSAGEM.classList.add('display-none');

    MENSAGEM.textContent = textDescriptografado;
})

BT_COPIAR.addEventListener('click', () => {
    const MENSAGEM_COPY = MENSAGEM.textContent;
    navigator.clipboard.writeText(MENSAGEM_COPY);
})