console.log(1);
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 5000);
};
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
console.log(3);
