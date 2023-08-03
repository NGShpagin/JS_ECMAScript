// Задание 1: "Управление персоналом компании"
// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
//   - Свойство name (имя) - строка, имя сотрудника.
//   - Метод displayInfo() - выводит информацию о сотруднике (имя).
//
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
//   - Свойство department (отдел) - строка, отдел, в котором работает менеджер.
//   - Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
class Employee {
    name;

    constructor(name) {
        this.name = name;
    }

    displayInfo() {
        console.log(`Имя сотрудника: ${this.name}`)
    }
}

class Manager {
    department;

    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    displayInfo() {
        console.log(`Имя сотрудника: ${this.name}
        Департамент: ${this.department}`)
    }

    __proto__ = Employee;
}

const employee = new Employee("John Smith");
employee.displayInfo();
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

// Здание 2: "Управление списком заказов"
// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
//   - Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
//   - Свойство products (продукты) - массив, содержащий список продуктов в заказе.
//   - Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
//   - Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Order {
    orderNumber;
    products = [];

    constructor(orderNumber) {
        this.orderNumber = orderNumber;
    }

    addProduct(product) {
        this.products.push(product)
    }

    getTotalPrice() {
        let sum = 0;
        this.products.forEach((product) => {
            sum += product.price;
        })
        return sum;
    }
}

class Product {
    name;
    price;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice());