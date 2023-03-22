//Net Salary Calculator
//takes two parameters 
function calculateNetSalary(basicSalary, benefits){
    let grossIncome = basicSalary + benefits;
    let paye;
    if(grossIncome <= 24000){
        paye = grossIncome * 0.1;
    }else if (grossIncome > 24000 && grossIncome <= 32333){
        paye = grossIncome * 0.25;
    }else {
        paye = grossIncome * 0.3;
    }
    let nhifdeductions;
    if (grossIncome <= 5999) {
        nhifdeductions=150;
    } else if (grossIncome >= 6000 && grossIncome <= 7999) {
        nhifdeductions=300;
    } else if (grossIncome >= 8000 && grossIncome  <= 11999) {
        nhifdeductions=400;
    } else if (grossIncome  >= 12000 && grossIncome  <= 14999) {
        nhifdeductions=500;
    } else if (grossIncome  >= 15000 && grossIncome  <= 19999) {
        nhifdeductions=600;
    } else if (grossIncome  >= 20000 && grossIncome <= 24999) {
        nhifdeductions=750;
    } else if (grossIncome  >= 25000 && grossIncome  <= 29999) {
        nhifdeductions=850;
    } else if (grossIncome  >= 30000 && grossIncome  <= 34999) {
        nhifdeductions= 900;
    } else if (grossIncome  >= 35000 && grossIncome  <= 39999) {
        nhifdeductions=950;
    } else if (grossIncome  >= 40000 && grossIncome  <= 44999) {
        nhifdeductions=1000;
    } else if (grossIncome  >= 45000 && grossIncome  <= 49999) {
        nhifdeductions=1100;
    } else if (grossIncome  >= 50000 && grossIncome  <= 59999) {
        nhifdeductions=1200;
    } else if (grossIncome  >= 60000 && grossIncome  <= 69999) {
        nhifdeductions=1300;
    } else if (grossIncome  >= 70000 && grossIncome <= 79999) {
        nhifdeductions=1400;
    } else if (grossIncome  >= 80000 && grossIncome  <= 89999) {
        nhifdeductions=1500;
    } else if (grossIncome  >= 90000 && grossIncome  <= 99999) {
        nhifdeductions= 1600;
    } else if (grossIncome  >= 100000) {
        nhifdeductions= 1700;
    } else {
      console.log("Invalid gross pay amount");
    }
    let nssfDeductions = (0.06 * basicSalary);
    let netSalary = (grossIncome - (paye + nhifdeductions + nssfDeductions));
    console.log(netSalary);
}
calculateNetSalary()