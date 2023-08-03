// local storage
// localStorage.setItem("login", "1234")
// localStorage.setItem("password", "6789")
// localStorage.setItem("name", "Nik")
//
// localStorage.removeItem("password")
//
// const login = localStorage.getItem("login");
// console.log(login)
//
// // localStorage.clear()
//
// localStorage.user = JSON.stringify({name: "Sasha"})
// const user = JSON.parse(localStorage.user)
// console.log(user)

// Асинхронщина
//
// const myPromise = new Promise((resolve, reject) => {
//
// });
//
// console.log(myPromise);
//
// myPromise
//     .then((value) => {
//
//     })
//     .catch((error) => {
//
//     })
//
// const url = "https://jsonplaceholder.typicode.com/users";
//
// // Стандартная работа
// fetch(url)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.error("Что-то пошло не так: ", error))
//
//
// // Сделаем шаблонную функцию
// const getData = (url) =>
//     new Promise((resolve, reject) => {
//         fetch(url)
//             .then((response) => response.json())
//             .then((json) => resolve(json))
//             .catch((error) => reject(error))
//     })
//
// getData(url)
//     .then((data) => console.log(data));
//
//
// Миграция на asyncAwait

const getAsyncAwaitData = async (url) => {
    const res = await fetch(url);
    return await res.json();
}

// try {
//     const newData = await getAsyncAwaitData(url);
//     console.log(newData)
// } catch (error) {
//     console.error("Что-то пошло не так");
// }

// Задача

const api = "https://api.nasa.gov/planetary/apod?api_key=lyqWMcuvBGHc6Xo2rdlCnNMbmedu7hdCmra71Yqi&count=10"

try {
    const newData = await getAsyncAwaitData(api);
    console.log(newData);
    const pictureBoxEl = document.querySelector('.picture-box');
    newData.forEach((element) => {
        const picture = `
            <div class="picture">
                <h2 class="pic-heading">${element.title}</h2>
                <img src='${element.url}' width="max-content"/>
                <div class="description">${element.explanation}</div>
            </div>
        `
        pictureBoxEl.insertAdjacentHTML("beforeend", picture)
    })
} catch (error) {
    console.error("Что-то пошло не так");
}
