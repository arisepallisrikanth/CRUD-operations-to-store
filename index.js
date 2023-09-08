var selectedRow=null
function SubmitApi(e){
    event.preventDefault()
    var formData=ReadData()
    if(selectedRow==null){
        InsertData(formData)
    }
    else{
        update(formData)

    }
    resetform()


}
// retrive Data
function ReadData(){
    var formData={}
    formData['ProductCode']=document.getElementById('ProductCode').value
    formData['ProductName']=document.getElementById('ProductName').value
    formData['Qty']=document.getElementById('Qty').value
    formData['Price']=document.getElementById('Price').value
    return formData
}
 function InsertData(data){
var table=document.getElementById('storelist').getElementsByTagName('tbody')[0]
var newRow=table.insertRow(table.length)
var cell0=newRow.insertCell(0)
cell0.innerHTML=data['ProductCode']
var cell1=newRow.insertCell(1)
cell1.innerHTML=data['ProductName']
var cell2=newRow.insertCell(2)
cell2.innerHTML=data.Qty
var cell3=newRow.insertCell(3)
cell3.innerHTML=data.Price
var cell4=newRow.insertCell(4)
cell4.innerHTML=`<button onClick="onEdit(this)">Edit</button> <button onClick="Delete(this)">Delete</button>`

}

function onEdit(td){
    selectedRow=td.parentElement.parentElement
    document.getElementById('ProductCode').value=selectedRow.cells[0].innerHTML
    document.getElementById('ProductName').value=selectedRow.cells[1].innerHTML
    document.getElementById('Qty').value=selectedRow.cells[2].innerHTML
    document.getElementById('Price').value=selectedRow.cells[3].innerHTML


}
function update(formData){

     selectedRow.cells[0].innerHTML=formData.ProductCode
     selectedRow.cells[1].innerHTML=formData.ProductName
     selectedRow.cells[2].innerHTML=formData.Qty
     selectedRow.cells[3].innerHTML=formData.Price
}
function Delete(td){
    if(confirm("do u wnat to delete")){
    var row=td.parentElement.parentElement
    document.getElementById('storelist').deleteRow(row.rowIndex);
    resetform()
    }

}
function resetform(){
    document.getElementById('ProductCode').value=''
    document.getElementById('ProductName').value=''
    document.getElementById('Qty').value=''
    document.getElementById('Price').value=''
   
}

