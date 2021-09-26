const employee = {
name: "John Doe",
streetAddress: "1234 Washington Ave",
}
function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
const employeeUpdated = {...employeeObject};
employeeUpdated[key] = value;
return employeeUpdated
}
function destructivelyUpdateEmployeeWithKeyAndValue (employeeObject, key, value) {
employeeObject[key] = value;
return employeeObject;
}
function deleteFromEmployeeByKey (employeeObject, key) {
const employeeUpdated = {...employeeObject};
delete employeeUpdated.name;
return employeeUpdated;
}
function destructivelyDeleteFromEmployeeByKey (employeeObject, key) {
delete employeeObject.name;
return employeeObject;
}