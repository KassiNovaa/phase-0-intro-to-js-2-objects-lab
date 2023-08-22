const employee={name:"Kass",streetAddress: "123 Park"}

function updateEmployeeWithKeyAndValue(employee,key,value) {
const copyEmployee = {...employee}
copyEmployee[key] = value;
return copyEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}

  function deleteFromEmployeeByKey(object, key) {
    const newObj = Object.assign({}, object)
    delete newObj[key]
    return newObj
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
  }


  


