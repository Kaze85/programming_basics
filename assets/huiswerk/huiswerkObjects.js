/// assignment 1
const lapRounds = [
    {
        round: 1,
        time: 55.99
    },
    {
        round: 2,
        time: 63.00
    },
    {
        round: 3,
        time: 63.01
    },
    {
        round: 4,
        time: 54.01
    },
    {
        round: 5,
        time: 62.79
    },
    {
        round: 6,
        time: 52.88
    },
    {
        round: 7,
        time: 53.10
    },
    {
        round: 8,
        time: 54.12
    }
];

console.log(lapRounds);

/// assignment 2
const teachers = [
    {
        name: "Loek",
        profession: "Teacher",
        brand: "Linux"
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino"
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple"
    }
];

teachers.forEach(function(value) {
    console.log(`I have a ${value.profession} named ${value.name} and he likes to work on a ${value.brand} computer`);
});

/// assignment 3
// Add the salary and the hours per week
function addSalaryAndHours(salary, hours, index) {
    teachers[index].salary = salary;
    teachers[index].hoursPerWeek = hours;
}

let salary = 150;
for (let i = 0; i < teachers.length; i++) {
    addSalaryAndHours(salary, 24, i);
    salary += 15;
}

console.log(teachers);

// Add and show the salary per hours
teachers.forEach(function(value, index) {
    teachers[index].salaryPerHour = function (salary, hoursPerWeek) {
        return Number((salary/hoursPerWeek));
    }
    return console.log(`Salary/hour ${teachers[index].name}: $${teachers[index].salaryPerHour(value.salary, value.hoursPerWeek).toFixed(2)}`);
});

console.log(teachers);