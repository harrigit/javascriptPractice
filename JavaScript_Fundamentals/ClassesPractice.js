class Animals {
    constructor(name,Color,Age){
        this.Animalname=name;
        this.Animalcolor=Color;
        this.AnimalAge=Age;
    }
    AnimalsProperticesAccess(){
        console.log(`Animal Name is ${this.Animalname}, color is ${this.Animalcolor} And Age is ${this.AnimalAge} year`);
    }

}
let obj=new Animals("Cat","White",3);
obj.AnimalsProperticesAccess();

