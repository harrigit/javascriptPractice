class University {
    constructor(Name) {
        this.uniname = Name;
    }
    Uniname() {
        console.log(`University name is ${this.uniname}`);
    }

}

class Students extends University {
    constructor(ID) {
        super();
        this.id = ID;

    }
    info() {
        console.log(`Student  ID is ${this.id}`);

    }
}
let a = new University("COMSATS");
let b = new Students(10);
a.Uniname();
b.info();