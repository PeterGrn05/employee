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
    this.employees.push(employee);
  },

  removeEmployee: function (index) {
    this.employees.splice(index, 1);
  },

  updateEmployee: function (index, newName, newPosition, newDepartment) {
    this.employees[index].name = newName;
    this.employees[index].position = newPosition;
    this.employees[index].department = newDepartment;
  },

  displayEmployees: function () {
    this.employees.forEach(function (employee) {
      console.log("Name: " + employee.name);
      console.log("Position: " + employee.position);
      console.log("Department: " + employee.department);
      console.log("----------------------");
    });
  }
};

//Добавление нескольких сотрудников в базу данных
EmployeeDB.addEmployee ("David Leonard", "Game Developer", "Level Designer");
EmployeeDB.addEmployee ("Jim Lawrence", "Doctor", "Blood Research");
EmployeeDB.addEmployee ("Aaron Drew", "Cartoonist", "Storyboard Artist");
EmployeeDB.addEmployee ("Joseph Dallas", "Musician", "Pianist");

//Чтение данных 
EmployeeDB.displayEmployees();

//Модифицируем данные

EmployeeDB.capitaliseNames = function () {
    this.employees.forEach(function (employee) {
      employee.name = employee.name.toUpperCase();
    });
};
  
EmployeeDB.convertToLowerCase = function () {
    this.employees.forEach(function (employee) {
        employee.department = employee.department.toLowerCase();
    });
};
  
EmployeeDB.capitaliseNames();
EmployeeDB.convertToLowerCase();
EmployeeDB.displayEmployees();

EmployeeDB.removeEmployee(1);
EmployeeDB.updateEmployee(0, "Doctor Eggman", "Scientist", "Evil");
EmployeeDB.displayEmployees();