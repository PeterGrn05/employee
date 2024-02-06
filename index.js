// Создание объекта EmployeeDB
const EmployeeDB = {
  employees: [],

  // Методы для добавления, удаления, обновления и чтения сотрудников

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
  },

  capitaliseNames: function () {
    this.employees.forEach(function (employee) {
      employee.name = employee.name.toUpperCase();
    });
  },

  convertToLowerCase: function () {
    this.employees.forEach(function (employee) {
      employee.department = employee.department.toLowerCase();
    });
  }
};

// Объединение сотрудников
function mergeEmployeeDBs(db1, db2) {
  db2.employees.forEach(function (employee) {
    db1.addEmployee(employee.name, employee.position, employee.department);
  });
}

// Отображение уникальных департаментов
function displayUniqueDepartments() {
  const departments = {};

  for (const employee of EmployeeDB.employees) {
    const { department } = employee;
    departments[department] = true;
  }

  for (const department in departments) {
    console.log(department);
  }
}

// Сравнение работников
function compareEmployees(employee1, employee2) {
  if (employee1.name === employee2.name && employee1.department === employee2.department) {
    console.log("These are the same people.");
  } else {
    console.log("They're absolutely different people.");
  }
}

// Пример использования
EmployeeDB.addEmployee("David Leonard", "Game Developer", "Level Designer");
EmployeeDB.addEmployee("Jim Lawrence", "Doctor", "Blood Research");
EmployeeDB.addEmployee("Aaron Drew", "Cartoonist", "Storyboard Artist");
EmployeeDB.addEmployee("Joseph Dallas", "Musician", "Pianist");

EmployeeDB.displayEmployees();
console.log("This is the initial attempt with just the first part in mind.");
console.log(" ");

EmployeeDB.capitaliseNames();
EmployeeDB.convertToLowerCase();

EmployeeDB.removeEmployee(1);

EmployeeDB.updateEmployee(0, "James Lenn", "Scientist", "Research");

const employeeDB2 = Object.assign({}, EmployeeDB);
employeeDB2.addEmployee("Dante Jameson", "Designer", "Marketing");
employeeDB2.addEmployee("Scott Johnson", "Entrepreneur", "Large Company");

mergeEmployeeDBs(EmployeeDB, employeeDB2);
EmployeeDB.displayEmployees();

displayUniqueDepartments();
console.log(" ");

const employee1 = {
  name: "Jack Kennedy",
  position: "Pizzeria Employee",
  department: "Dayguard"
};

const employee2 = {
  name: "Jack Kennedy",
  position: "Pizzeria Employee",
  department: "CEO"
};

compareEmployees(employee1, employee2);
console.log(" ");
console.log("This is the finalized attempt.");
