/*
Cho object personObject như sau:

    const personObject = {
        fullName: function() {
            return this.firstName + ' ' + this.lastName    
        }
    };

Yêu cầu thêm 1 method 'sayBye', khi thực thi method này sẽ in ra màn hình chữ 'goodbye', 
áp dụng được cho tất cả các object được tạo ra từ personObject bằng Object.create (sử dụng 2 cách)
VD:
    const quang = Object.create(personObject);
    quang.sayBye(); //in ra màn hình chữ 'goodbye'
*/

/* Cách 1 */
const personObject = {
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

personObject.sayBye = function () {
    console.log('Goodbye!');
}

const huy = Object.create(personObject);

huy.sayBye();

/* Cách 2 */
const duc = Object.create(personObject, {
                fullName: {value: function() {
                    return this.firstName + ' ' + this.lastName;
                }}, 
                sayBye: {value: function () {
                    console.log('Goodbye!');
                }}
            });

duc.sayBye();

/* Cách 3 */
const personObject1 = {
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

personObject1.prototype.sayBye = function () {
    console.log('Goodbye!');
}

const thuyet = Object.create(personObject1);

thuyet.sayBye();