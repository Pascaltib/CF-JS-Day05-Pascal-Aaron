var employeeObj = JSON.parse(employee);
//console.table(employeeObj);
//header with the following content
document.getElementById("displayContent").innerHTML = `<tr>
    <th>Unique ID</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email address</th>
    <th>Job Title</th> 
    <th>Salary</th>
  </tr>`;
for (var i = 0; i < employeeObj.length; i++) {
    //a loop to repeatedly display the JSON content onto the html file
    //Css attributes where included with internal style 
  document.getElementById("displayContent").innerHTML += `<tr>
  <td>${employeeObj[i].UniqueID}</td>
  <td>${employeeObj[i].FirstName}</td>
  <td>${employeeObj[i].LastName}</td>
  <td>${employeeObj[i].Emailaddress}</td>
  <td>${employeeObj[i].JobTitle}</td>
  <td>${employeeObj[i].Salary}</td>
</tr>` ;
};