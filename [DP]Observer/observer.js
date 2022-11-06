function Observed(){
    this.observerList = [];    
    this.Object = 0
}

Observed.prototype = {
    subscribe : function(cb){
        this.observerList.push(cb)
    },
    unsubscribe : function(observer){
        this.observerList = this.observerList.filter(e=>e !== observer)
    },
    fire : function(){
        this.Object++;
        this.observerList.forEach(cb=>{
            cb(this.Object)
        })
    }
}


const myObj = new Observed()
const observer1 = (x)=>{console.log(x,"observer1")};
const observer2 = (x)=>{console.log(x,"observer2")};
myObj.subscribe(observer1);
myObj.subscribe(observer2);

myObj.fire()
myObj.unsubscribe(observer2)
myObj.fire()


