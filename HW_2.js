// Задание 1: ""Управление библиотекой книг""
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
//  - Свойство title (название) - строка, название книги.
//  - Свойство author (автор) - строка, имя автора книги.
//  - Свойство pages (количество страниц) - число, количество страниц в книге.
//  - Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    title;
    author;
    pages;

    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.displayInfo = this.displayInfo.bind(this);
    }

    displayInfo() {
        console.log(`
        Название книги: ${this.title},
        Автор: ${this.author},
        Количество страниц: ${this.pages}`)
    }
}

const myBook = new Book('War and Peace', 'Lev Tolstoy', 983);
myBook.displayInfo();


// Задание 2: ""Управление списком студентов""
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
    name;
    age;
    grade;

    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.displayInfo = this.displayInfo.bind(this);
    }

    displayInfo() {
        console.log(`
        Имя студента: ${this.name},
        Возраст студента: ${this.age},
        Класс, в котором учится студент: ${this.grade}`)
    }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();


// ****** Задача необязательная для выполнения
// Это расширенная версия задачи с банком, которую мы решлали на семинаре.
// Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов.
// Класс должен иметь методы для:
//  - добавления нового клиента (addNewClient),
//  - открытия нового счета для клиента (openAccount),
//  - пополнения счета (deposit),
//  - снятия денег со счета (withdraw),
//  - проверки баланса (checkBalance).

class Bank {
    title;
    clients = [];
    accounts = [];

    constructor(title) {
        this.title = title;
        this.addNewClient = this.addNewClient.bind(this);
        this.openAccount = this.openAccount.bind(this);
        this.deposit = this.deposit.bind(this);
        this.withdraw = this.withdraw.bind(this);
        this.checkBalance = this.checkBalance.bind(this);
    }

    addNewClient(client) {
        let flag = false;
        this.clients.forEach((bankClient) => {
            if (bankClient.name === client.name && bankClient.age === client.age) {
                flag = true;
                return flag;
            }
        })
        if (flag) console.log('Пользователь уже является клиентом банка')
        else {
            this.clients.push(client);
            console.log('Новый клиент добавлен')
        }
    }

    openAccount(client, amount) {
        let flag = false;
        this.clients.forEach((bankClient) => {
            if (bankClient.name === client.name && bankClient.age === client.name) {
                flag = true;
                return flag;
            }
        })
        if (!flag) {
            const newAccount = new Account(client, amount)
            this.accounts.push(newAccount);
            console.log(`Новый счет (id: ${newAccount.id}) зарегестрирован для клиента ${client.name}.
            Баланс счета: ${newAccount.balance}`)
        } else {
            console.log('Пользователь не является клиентом банка')
        }
    }

    deposit(accountID, amount) {
        let index = null;
        this.accounts.forEach((bankAccount) => {
            if (bankAccount.id === accountID) index = this.accounts.indexOf(bankAccount);
        });
        if (index != null) {
            this.accounts[index].balance += amount;
            console.log(`Счет ${accountID} пополнен на ${amount}.
                Баланс счета: ${this.accounts[index].balance}
                Владелец: ${this.accounts[index].owner.name}`);
        } else {
            console.log(`Счет ${accountID} не найден`)
        }
    }

    withdraw(accountID, amount) {
        let index = null;
        this.accounts.forEach((bankAccount) => {
            if (bankAccount.id === accountID) index = this.accounts.indexOf(bankAccount);
        });
        if (index != null) {
            if (this.accounts[index].balance >= amount) {
                this.accounts[index].balance -= amount;
                console.log(`Со счета ${accountID} снято ${amount}.
                Баланс счета: ${this.accounts[index].balance}
                Владелец: ${this.accounts[index].owner.name}`);
            } else {
                console.log(`На счете ${accountID} недостаточно средств.
                Баланс счета: ${this.accounts[index].balance}
                Владелец: ${this.accounts[index].owner.name}`);
            }
        } else {
            console.log(`Счет ${accountID} не найден`)
        }
    }

    checkBalance(accountID) {
        let index = null;
        this.accounts.forEach((bankAccount) => {
            if (bankAccount.id === accountID) index = this.accounts.indexOf(bankAccount);
        });
        if (index != null) {
                console.log(`Баланс счета: ${this.accounts[index].balance}
                Владелец: ${this.accounts[index].owner.name}`);
        } else {
            console.log(`Счет ${accountID} не найден`)
        }
    }
}

class Client {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Account {
    static id = 1;
    owner;
    balance;

    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance
    }

    id = Account.id++;
}


const myBank = new Bank("NShG");
const newClient1 = new Client("Nikolay", 30);
const newClient2 = new Client("Sasha", 25);

myBank.addNewClient(newClient1);
myBank.addNewClient(newClient1);
myBank.addNewClient(newClient2);

console.log(myBank.clients);

myBank.openAccount(newClient1, 100)
myBank.openAccount(newClient1, 100)
myBank.openAccount(newClient2, 400)

console.log(myBank.accounts)

myBank.deposit(1, 300);
myBank.deposit(10, 450);
myBank.deposit(3, 250);

myBank.withdraw(1, 700);
myBank.withdraw(1, 150);
myBank.withdraw(3, 50);


myBank.checkBalance(1);
myBank.checkBalance(3);