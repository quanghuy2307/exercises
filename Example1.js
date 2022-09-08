/*
Viết 1 method "logger" truyền vào 2 arguments: title, message, method này có thể sử dụng trên mọi array trong 1 file JS
Method này sẽ in ra title và message theo 1 format như sau: "title: message"
(suggestions: use prototype and __proto__)
VD:
    const arr1 = [1,2];
    arr1.logger('ERR', 'this is err message'); // in ra màn hình dòng chữ ERR: this is err message
    arr1.logger('INFO', 'this is info message'); // in ra màn hình dòng chữ INFO: this is info message
*/

Array.prototype.logger = function (title, message) {
    console.log(`${title}: ${message}`);
}

const arr1 = [1, 2];
const arr2 = Array(4, 5, 6);
const arr3 = Array(10);

arr1.logger('ERR', 'This is err message.');
arr1.logger('INFO', 'This is info message.');

arr2.logger('ERR', 'This is err message.');
arr2.logger('WARN', 'This is warning message.');

arr3.logger('ERR', 'This is err message.');
arr3.logger('SUCC', 'This is successful message.');