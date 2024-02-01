//создание объекта EmployeeDB

const EmployeeDB = {
    employees: [],

    //методы для добавления, удаления, обновления и чтения сотрудников.
    
    addEmployee: function (name, position, department) {
        const employee = {
            name: name,
            position: position,
            department: department
        };
        this.employees.push(employee)
    },

    removeEmployee: function (index) {
        this.employees.splice (index, 1)
    },

    updateEmployee: function (index, newName, newPosition, newDepartment) {
        this.employees[index].name = newName;
        this.employees[index].position = newPosition;
        this.employees[index].department = newDepartment;
    },

    displayEmployee: function () {
        this.employee.forEach(function (employee) {
          console.log("Name: " + employee.name);
          console.log("Position: " + employee.position);
          console.log("Department: " + employee.department);
          console.log("----------------------");
        });
    }
}

//Добавление нескольких сотрудников в базу данных
EmployeeDB.addEmployee ("", "", "");
EmployeeDB.addEmployee ("", "", "");

//Чтение данных 
EmployeeDB.displayEmployee();