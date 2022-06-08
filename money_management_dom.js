// referencing the details form
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const salary = document.querySelector(".salary");
const expenses = document.querySelector(".expenses");
const getAdviceBtn = document.querySelector(".getAdvice");

//Button to see the graph
const getGraph = document.querySelector(".getGraph");

// instance of factory function
const moneyApp = FinAdvice();


getAdviceBtn.addEventListener("click", function () {
  moneyApp.setUserName(firstName.value);
  moneyApp.setlstName(lastName.value);
  moneyApp.setSalary(Number(salary.value));
  moneyApp.setExpense(Number(expenses.value));

    // get a reference to the template script tag
    var templateSource = document.querySelector(".userTemplate").innerHTML;

    // compile the template
    var userTemplate = Handlebars.compile(templateSource);
    // get a reference to tableBody where users is to be displayed
    var userDataElem = document.querySelector(".userData");
    var userData = {
        lstName: moneyApp.getlstName(),
        GroceryAmount: moneyApp.calcGrocery(),
        ElecAmount: moneyApp.calcElectricity(),
        OtherExpAmount:  moneyApp.calcOtherExp(),
        DebtsAmount: moneyApp.calcDebts(),
        SavingAmount: moneyApp.calcSavings()
    };
    // compile the template
    var userDataHTML = userTemplate(userData);
    userDataElem.innerHTML = userDataHTML;
});
