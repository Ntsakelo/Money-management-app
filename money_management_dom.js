//Referencing for index.html
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const salary = document.querySelector(".salary");
const adviceBtn = document.querySelector(".adviceBtn");
const advicePage = document.querySelector(".advice");
const container = document.querySelector(".container");

const graphSection = document.querySelector(".graphSection");
const graphBtn = document.querySelector(".graphBtn");

const backAdvBtn = document.querySelector(".backAdvBtn");
const backHmeBtn = document.querySelector(".backHmeBtn");

const expenseGraph = document.querySelector(".cont1");
const saveGraph = document.querySelector(".cont2");

//Factory function instance
const moneyApp = FinAdvice();

adviceBtn.addEventListener("click", function () {
  moneyApp.setUserName(firstName.value);
  moneyApp.setlstName(lastName.value);
  moneyApp.setSalary(salary.value);

  // get a reference to the template script tag
  var templateSource = document.querySelector(".userTemplate").innerHTML;

  // compile the template
  var userTemplate = Handlebars.compile(templateSource);
  // get a reference to tableBody where users is to be displayed
  var userDataElem = document.querySelector(".userData");
  var userData = {
    firstName: moneyApp.getUserName(),
    lstName: moneyApp.getlstName(),
    GroceryAmount: moneyApp.calcGrocery(),
    ElecAmount: moneyApp.calcElectricity(),
    OtherExpAmount: moneyApp.calcOtherExp(),
    DebtsAmount: moneyApp.calcDebts(),
    SavingAmount: moneyApp.calcSavings(),
  };
  // compile the template
  var userDataHTML = userTemplate(userData);
  userDataElem.innerHTML = userDataHTML;
  advicePage.classList.remove("hide");
  advicePage.classList.add("show");
  container.classList.add("hide");
});

graphBtn.addEventListener("click", function () {
  advicePage.classList.remove("show");
  advicePage.classList.add("hide");
  //2.Add data to a sample
  anychart.onDocumentReady(function () {
    //1.Create data
    var data = {
      header: ["Expense", "Amount"],
      rows: [
        ["Grocery", moneyApp.calcGrocery()],
        ["Electricity", moneyApp.calcElectricity()],
        ["debts", moneyApp.calcDebts()],
        ["Savings", moneyApp.calcSavings()],
        // ["Budget", moneyApp.calcBudget()],
        ["Other Expenses", moneyApp.calcOtherExp()],
      ],
    };
    //create chart
    var chart = anychart.column();

    //add the data
    chart.data(data);

    //chart title
    chart.title("The expenses bar graph");
    //set container for chart
    chart.container("container");
    //draw the chart
    chart.draw();
  });
  anychart.onDocumentReady(function () {
    let savings = moneyApp.calcSavings();
    var data2 = {
      header: ["savings", "Amount"],
      rows: [
        ["month 1", savings],
        ["month 2", savings * 2],
        ["month 3", savings * 3],
        ["month 4", savings * 4],
        ["month 5", savings * 5],
      ],
    };
    var chart2 = anychart.column();

    //add the data
    chart2.data(data2);

    //chart title
    chart2.title("Savings growth overtime");
    //set container for chart
    chart2.container("container2");
    //draw the chart
    chart2.draw();
  });

  graphSection.classList.remove("hide");
  graphSection.classList.add("show");
});

backAdvBtn.addEventListener("click", function () {
  expenseGraph.innerHTML = "";
  saveGraph.innerHTML = "";
  graphSection.classList.remove("show");
  graphSection.classList.add("hide");

  advicePage.classList.remove("hide");
  advicePage.classList.add("show");
});

backHmeBtn.addEventListener("click", function () {
  expenseGraph.innerHTML = "";
  saveGraph.innerHTML = "";
  graphSection.classList.remove("show");
  graphSection.classList.add("hide");

  container.classList.remove("hide");
  container.classList.add("show");
});
