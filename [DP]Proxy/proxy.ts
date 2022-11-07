interface Subject {
    request(): void
}

class RealSubject implements Subject {
    public request(): void {
        console.log('RealSubject: Handling request')
    }
}

class myProxy implements Subject {
    
    public request(): void {
        if(this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

//
    private realSubject : RealSubject;

    constructor(realSubject: RealSubject){
        this.realSubject = realSubject;
    }
    
//
    private checkAccess(): boolean {
        console.log()
        return true
    }

//
    private logAccess(): void {
        console.log("Proxy: Logging the time of request")
    }
}

function cleintCode(subject : Subject){
    subject.request();
}

const realSubject = new RealSubject();
const proxy = new myProxy(realSubject);
cleintCode(proxy)
