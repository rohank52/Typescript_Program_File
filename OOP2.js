var Demo = /** @class */ (function () {
    function Demo() {
    }
    //Behaviour 
    Demo.prototype.Display = function () {
        console.log("Inside Display funtion of Demo class ");
    };
    return Demo;
}());
var obj = new Demo();
obj.Display();
