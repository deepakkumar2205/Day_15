
//check box items are storing into an array
var checkboxes=document.querySelectorAll('.checkbox');
let arr=[];
for(var checkbox of checkboxes){
    checkbox.addEventListener('click',function(){
        if(this.checked == true){
            arr.push(this.value);
        }else{
            // console.log('you unchecked the checkbox');
            arr=arr.filter(e =>(e!=this.value));
        }
    })
}

//read form data
function readFormData(){
    // create an empty object
    const formData= {};
    formData["firstname"]=     document.getElementById("firstname").value;
    formData["lastname"] =     document.getElementById("lastname").value;
    formData["address"]  =     document.getElementById("address").value;
    formData["pincode"]  =     document.getElementById("pincode").value;
    formData["gender"]   =     document.getElementById("gender").value;
    formData["food"]     =     arr.join(',');
    formData["state"]    =     document.getElementById("state").value;
    formData["country"]  =     document.getElementById("country").value;
    return formData;
}