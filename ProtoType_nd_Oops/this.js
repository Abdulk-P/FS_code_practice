//this depends on how it is being called upon.
//this always points to window object when it is called funcational callling


let obj1 = {
    a:50
}
let obj ={
    a:10,
    fn:function(x,y){
        console.log(this.a , x,y);        
    }
}

// let abc = obj.fn;
// abc();


// obj.fn();

//changing the reference/adderess of this keyword

//call and apply both works the same but apply takes arguments in the arraylist
obj.fn.call(obj1, "abdul", "khadar");
obj.fn.apply(obj1, ["abdul", "khadar"]);
let nwobj = obj.fn.bind(obj1, "abdul", "khadar");
nwobj();

