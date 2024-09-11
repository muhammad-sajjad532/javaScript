let todo = [];

let req = prompt("Please enter your req");

while(true){
    if (req == "quit"){
        console.log("quiting app");
        break;
    }

    else if (req == "list"){
        console.log("--------------");
        for (let i = 0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("--------------");
    }

    else if(req ==  "add"){
        let taskAdd = prompt("Enter task you want to add");
        todo.push(taskAdd);
        console.log("task Added");
    }
      else if (req == "delete"){
        let idx = prompt("enter index you want to delete");
        todo.splice(idx,1);
        console.log("task deleted");
      } else {
        console.log("wrong req");
      }

    req = prompt("Please enter your req");

}