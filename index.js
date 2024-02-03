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

function compareEmployees (employee1, employee2) {
  if (employee1.name === employee2.name && employee1.deparment ===employee2.department) {
    console.log ("These are the same people.");
  } else {
    console.log ("They're absolutely different people.");
  }
}

const employee1 = {
  name: "Jack Kennedy",
  position: "Pizzeria Employee",
  department: "Dayguard",
}

const employee2 = {
  name: "Jack Kennedy",
  position: "Pizzeria Employee",
  department: "CEO",
}



EmployeeDB.addEmployee ("David Leonard", "Game Developer", "Level Designer");
EmployeeDB.addEmployee ("Jim Lawrence", "Doctor", "Blood Research");
EmployeeDB.addEmployee ("Aaron Drew", "Cartoonist", "Storyboard Artist");
EmployeeDB.addEmployee ("Joseph Dallas", "Musician", "Pianist");

EmployeeDB.displayEmployees();

EmployeeDB.capitaliseNames();
EmployeeDB.convertToLowerCase();
EmployeeDB.displayEmployees();

EmployeeDB.removeEmployee(1);
EmployeeDB.updateEmployee(0, "Doctor Eggman", "Scientist", "Evil");
EmployeeDB.displayEmployees();


compareEmployees(employee1, employee2);