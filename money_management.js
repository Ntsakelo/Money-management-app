function FinAdvice() {
  let userName = "";
  let userLstName = "";

  //Amounts
  let salary = 0;
  let expenses = 0;
  let electricAmt = 0;
  let groceryAmt = 0;
  let debtAmt = 0;
  let otherAmt = 0;
  let savingsAmt = 0;
  let budgetAmt = 0;

  //function to calculate electricity spendings
  function setUserName(val) {
    if (val === undefined) {
      userName = "";
    } else if (val == Number(val)) {
      userName = "";
    } else if (val !== "") {
      userName = val;
    }
  }

  function getUserName() {
    return userName;
  }
  function setlstName(val) {
    if (val === undefined) {
      userLstName = "";
    } else if (val == Number(val)) {
      userLstName = "";
    } else if (val !== "") {
      userLstName = val;
    }
  }
  function getlstName() {
    return userLstName;
  }

  //calculation functions
  function setSalary(amt) {
    salary = amt;
  }
  function getSalary() {
    return salary;
  }
  function setExpense(amt) {
    expenses = amt;
  }
  function getExpense() {
    return expenses;
  }

  //Function to calculate electricity expense
  function calcElectricity() {
    electricAmt = salary * 0.05;
    return electricAmt.toFixed(2);
  }
  function calcGrocery() {
    groceryAmt = salary * 0.15;
    return groceryAmt.toFixed(2);
  }
  function calcOtherExp() {
    otherAmt = salary * 0.2;
    return otherAmt.toFixed(2);
  }
  function calcDebts() {
    debtAmt = salary * 0.1;
    return debtAmt.toFixed(2);
  }
  function calcSavings() {
    savingsAmt = salary * 0.2;
    return savingsAmt.toFixed(2);
  }
  function calcBudget() {
    budgetAmt = salary * 0.3;
    return budgetAmt.toFixed(2);
  }
  return {
    setUserName,
    getUserName,
    setlstName,
    getlstName,
    setSalary,
    getSalary,
    setExpense,
    getExpense,
    calcElectricity,
    calcGrocery,
    calcOtherExp,
    calcDebts,
    calcSavings,
    calcBudget,
  };
}
