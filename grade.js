var marks = [95, 66, 80, 59, 47, 77];

var names = ["Aalia", "Dalia", "Salia", "Malia", "Lilia", "Jalia"];

var totalStudents = names.length

var totalStudentsChecked = 0;

while (totalStudentsChecked <= totalStudents) {
    if (marks[totalStudentsChecked] >= 90){
        console.log(names[totalStudentsChecked] + ' got "A+"')
    }
    else if (marks[totalStudentsChecked] >= 80){
        console.log(names[totalStudentsChecked] + ' got "A"')
    }
    else if (marks[totalStudentsChecked] >= 70){
        console.log(names[totalStudentsChecked] + ' got "B"')
    }
    else if (marks[totalStudentsChecked] >= 60){
        console.log(names[totalStudentsChecked] + ' got "C"')
    }
    else if (marks[totalStudentsChecked] >= 50){
        console.log(names[totalStudentsChecked] + ' got "D"')
    }
    else if (marks[totalStudentsChecked] >= 40){
        console.log(names[totalStudentsChecked] + ' got "F"')
    }
totalStudentsChecked += 1;
}