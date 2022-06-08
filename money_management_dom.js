// referencing the details form
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const salary = document.querySelector(".salary");
const expenses = document.querySelector(".expenses");
const advice = document.querySelector(".nextPage");
//reference to the finAdvice page

const electAmt = document.querySelector(".electAmt");

const groceryAmt = document.querySelector(".groceryAmt");

const otherAmt = document.querySelector(".otherAmt");

const debtAmt = document.querySelector(".debtAmt");

const saveAmt = document.querySelector(".saveAmt");

//Button to see the graph
const getGraph = document.querySelector(".getGraph");
const getAdviceBtn = document.querySelector(".getAdvice");

// instance of factory function
const moneyApp = FinAdvice();

//
getAdviceBtn.addEventListener("click", function () {
  moneyApp.setUserName(firstName.value);
  moneyApp.setlstName(lastName.value);
  moneyApp.setSalary(Number(salary.value));
  moneyApp.setExpense(Number(expenses.value));

  electAmt.innerHTML = moneyApp.calcElectricity();
  groceryAmt.innerHTML = moneyApp.calcGrocery();
  otherAmt.innerHTML = moneyApp.calcOtherExp();
  debtAmt.innerHTML = moneyApp.calcDebts();
  saveAmt.innerHTML = moneyApp.calcSavings();
  advice.setAttribute("style", "transform:translateX(0px);");
});
