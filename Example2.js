/*
Cho function constructor Student như sau

    function Student(name, age) {
        this.name = name;
        this.age = age;
    }

Yêu cầu thêm 1 method 'sayHi', khi thực thi method này sẽ in ra màn hình chữ 'hello', 
áp dụng được cho tất cả các object được tạo ra từ Student bằng toán tử new, nhưng không được thay đổi function Student
(sử dụng prototype hoặc __proto__)
VD:
    const quang = new Student('quang', 23);
    quang.sayHi(); //in ra màn hình chữ 'hello'
*/

function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.sayHi = function () {
    console.log('Hello!');
}

const huy = new Student('Huy', 22);

huy.sayHi();