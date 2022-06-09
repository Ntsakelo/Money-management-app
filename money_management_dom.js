// referencing the details form
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const salary = document.querySelector(".salary");

const getAdviceBtn = document.querySelector(".getAdvice");
const graphBtn = document.querySelector(".graph");
const backBtn = document.querySelector(".backBtn");
const graphSection = document.querySelector(".graphSection");
const expenseGraph = document.querySelector(".cont1");
const saveGraph = document.querySelector(".cont2");

//Button to see the graph
const getGraph = document.querySelector(".getGraph");

// instance of factory function
const moneyApp = FinAdvice();

getAdviceBtn.addEventListener("click", function () {
  moneyApp.setUserName(firstName.value);
  moneyApp.setlstName(lastName.value);
  moneyApp.setSalary(Number(salary.value));

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
    OtherExpAmount: moneyApp.calcOtherExp(),
    DebtsAmount: moneyApp.calcDebts(),
    SavingAmount: moneyApp.calcSavings(),
  };
  // compile the template
  var userDataHTML = userTemplate(userData);
  userDataElem.innerHTML = userDataHTML;
  graphBtn.classList.remove("hide");
  graphBtn.classList.add("show");
});

graphBtn.addEventListener("click", function () {
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
        ["Budget", moneyApp.calcBudget()],
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
backBtn.addEventListener("click", function () {
  expenseGraph.innerHTML = "";
  saveGraph.innerHTML = "";
  graphSection.classList.remove("show");
  graphSection.classList.add("hide");
});
