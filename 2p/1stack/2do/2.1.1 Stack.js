/** INSTRUCTIONS

 * PROBLEM 1
 * Stack implementation (array-based)
 *
 */

    function Stack() {
        this.DataStore = [];      
        this.top = 0;
        this.push = push;
        this.pop = pop;
        this.peek = peek;
        this.clear = clear;
        this.length = length;
    }
    function push(element) {
        this.DataStore[this.top++] = element;
    }
    function peek() {
        return this.DataStore[this.top-1];
    }
    function pop() {
        return this.DataStore[--this.top];
    }
    function clear() {
        this.top = 0;
    }
    function length() {
        return this.top;
    }
    function print(element){
        console.log(element);
    }
    
    //Test
    var Colors = new Stack();
    Colors.push("Azul");
    Colors.push("Verde");
    Colors.push("Morado");
    print("Length = " + Colors.length());
    print("Peek = " + Colors.peek());
    var popped = Colors.pop();
    print("The popped element is = " + popped);
    print("Peek = " + Colors.peek());
    Colors.push("Gris");
    print("Peek = " + Colors.peek());
    Colors.clear();
    print("Length = " + Colors.length());
    print("Peek = " + Colors.peek());
    Colors.push("Negro");
    print("Peek = " + Colors.peek());