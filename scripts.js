let p = document.querySelector("p");
let input = document.querySelector("input");
const button = document.getElementById("btn")

const contacts = [
    { name: 'Breno', number: '(85) 99120-4164' },
    { name: 'Benedita', number: '(85) 99999-9999' },
    { name: 'Hianna', number: '(85) 99125-3648' },
    { name: 'Dudeco', number: '(85) 77777-7777' },
    { name: 'Bakita', number: '(85) 98755-3524' },
]

function search() {

    for (let i = 0; i < contacts.length; i++) {

        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
            p.innerHTML = `✅Contato Encontrado Nome:${contacts[i].name} 📱Tel:${contacts[i].number}`
            p.style.color = "blue"

            break;
        } else if (input.value === "") {
            p.innerHTML = "⚠️Digite um contato";
            p.style.color = "red"
        }
        else {
            p.innerHTML = "❌Contato não existe, tente novamente";
            p.style.color = "red"
        }

    }

}

button.addEventListener("click", search);