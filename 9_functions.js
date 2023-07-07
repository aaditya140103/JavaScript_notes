//function are used to reduce time for writing the same piece of code again and again
function ArrayItems(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]=='red'){
            console.log(i*100,"This is tomato")
        }
        else
        console.log(i*100,".",arr[i]);
    }
}
var color = ['red', 'green','blue','yellow'];
ArrayItems(color);