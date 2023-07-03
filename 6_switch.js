//Using switch statement to decide 
let light = "green";
switch(light){
    case "green" :
        console.log("Drive");
        break;
    case "orange" :
        console.log("Get ready");
        break;
    case "red" :
        console.log("Don't drive");
        break;
    default:
        //this run when no condition is matching
        console.log("The light is not working and now may god give you power to live on your own");
}