
//Example 1

function init(){
    var name="Maryam"
    function display(){
        document.write(name)
    }
    display();

}
init();
   
//Example  2

document.writeln();
function add(){
    var x=200
    function add2(){
        var y=10
        document.writeln(x+y)
    }
    add2();
}
add();

