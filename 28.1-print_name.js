
    /**
     Create an object with a name property. 
     The object should also have a function that prints its name, 
     and another function that prints its name after a second.
    in this exercise, you are not allowed to use arrow functions.
     */
    const object = {
      name: 'Roni',
      printName: function(){
        console.log(`name id ${this.name}`);
      },
      printNameAfterSecond: function(){
        const printNameFunCtx = object.printName.bind(object);
        setTimeout(printNameFunCtx, 1000);
      }
    }

object.printName();
object.printNameAfterSecond()

