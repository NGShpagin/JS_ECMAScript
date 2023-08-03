// Задача
// Необходимо получить список всех пользователей с помощью бесплатного API
// (https://jsonplaceholder.typicode.com/users) и отобразить их на странице.
// Пользователь должен иметь возможность удалить любого пользователя из списка.
// Данные при получении необходимо сохранить в локальное хранилище браузера localStorage.
// При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage
localStorage.clear();
const freeApi = "https://jsonplaceholder.typicode.com/users";

const getAsyncAwaitData = async (url) => {
    const res = await fetch(url);
    return await res.json();
}

try {
    const newData = await getAsyncAwaitData(freeApi);
    console.log(newData);
    const contactBox = document.querySelector('.contact-box');
    newData.forEach((element) => {
        localStorage.setItem(element.username, JSON.stringify(element));
        const contact = `
            <div class="contact">
                <h3 class="username">${element.username}</h3>
                <p class="name">Name: ${element.name}</p>
                <p class="email">Email: ${element.email}</p>
                <p class="phone">Phone: ${element.phone}</p>
                <p class="website">Website: ${element.website}</p>
                <p class="address">Address: ${element.address.zipcode}, ${element.address.city}, 
                                ${element.address.street}, ${element.address.suite}</p>
                <p class="website">Company: ${element.company.name}</p>
                <svg class="clear-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8L16 16" stroke="black" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                    <path d="M16 8L8 16" stroke="black" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                </svg>
            </div>
        `
        contactBox.insertAdjacentHTML("beforeend", contact)
    })
} catch (error) {
    console.error("Что-то пошло не так");
}

const clearIconsEl = document.querySelectorAll('.clear-icon');
clearIconsEl.forEach((icon) => {
    icon.addEventListener("click", () => {
        const contact = icon.closest('.contact');
        contact.remove();
        localStorage.removeItem(contact.querySelector('.username').textContent)
    })
})


// Необязательная задача
// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const dogsBox = document.querySelector('.dogs-box');
const dogsApi = "https://dog.ceo/api/breeds/image/random";

try {
    let index = 1
    let timeID = setInterval(async () => {
        const dogsData = await getAsyncAwaitData(dogsApi);
        console.log(dogsData);
        const dog = `
            <div class="dog">
                <img src="${dogsData.message}" width="100%"/>
            </div>`
        dogsBox.insertAdjacentHTML('beforeend', dog);
        index++;
        if (index > 10) {
            setTimeout(() => {
                clearInterval(timeID)
            });
        }
    }, 3000)
} catch (error) {
    console.error("Что-то пошло не так");
}