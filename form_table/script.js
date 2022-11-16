let selectedRow = null;

//submit button funciton
function onFormSubmit(){

    console.log("deepak");
    var formData=readFormData();

    if(selectedRow == null) insertNewrecord(formData);
    else updateRecord(formData);

    // resetForm();
}

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
    // console.log(formData);

}

function insertNewrecord(data){
    let table=document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    console.log(table);
    //insert row
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.firstname;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.lastname;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.address;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.pincode;
    cell5=newRow.insertCell(4);
    cell5.innerHTML=data.gender;
    cell6=newRow.insertCell(5);
    cell6.innerHTML=data.food;
    cell7=newRow.insertCell(6);
    cell7.innerHTML=data.state;
    cell8=newRow.insertCell(7);
    cell8.innerHTML=data.country;
    cell9=newRow.insertCell(8);
    cell9.innerHTML=`
    <button class="btn btn-primary" onClick="onDelete(this)">del</button>
    `
}
// }<i class="bi bi-trash-fill"></i>
//reset functionality should be executed
function resetForm(){
    document.getElementById("firstname").value="";
    document.getElementById("lastname").value="";
    document.getElementById("address").value="";
    document.getElementById("pincode").value="";
    document.getElementById("gender").value="";
    document.getElementById("state").value="";
    document.getElementById("country").value="";
}

//update the record after populatiing the data
function updateRecord(formData){
    console.log(formData);
    selectedRow.cells[0].innerHTML=formData.firstname;
    selectedRow.cells[1].innerHTML=formData.lastname;
    selectedRow.cells[2].innerHTML=formData.address;
    selectedRow.cells[3].innerHTML=formData.pincode;
    selectedRow.cells[4].innerHTML=formData.gender;
    selectedRow.cells[5].innerHTML=formData.food;
    selectedRow.cells[6].innerHTML=formData.state;
    selectedRow.cells[7].innerHTML=formData.country;

}

//this function execute after del button pressed
function onDelete(td) {
    if (confirm("Do you want to Delete this Employee Data ? ")) {
        row = td.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
