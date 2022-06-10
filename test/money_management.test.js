describe("The FinAdvice function", function () {
  it("should be able set the first name of the user", function () {
    let finAdvice = FinAdvice();

    finAdvice.setUserName("Ntsakelo");
    assert.equal("Ntsakelo", finAdvice.getUserName());
  });
  it("should return an empty string when the input is a number", function () {
    let finAdvice = FinAdvice();

    finAdvice.setUserName(1);
    assert.equal("", finAdvice.getUserName());
  });
  it("should return an empty string when the input is undefined", function () {
    let finAdvice = FinAdvice();

    finAdvice.setUserName();
    assert.equal("", finAdvice.getUserName());
  });
  it("should return an empty string when the input is an empty string", function () {
    let finAdvice = FinAdvice();

    finAdvice.setUserName("");
    assert.equal("", finAdvice.getUserName());
  });
  describe("Set last Name", function () {
    it("should be able to set the last name of the user", function () {
      let finAdvice = FinAdvice();

      finAdvice.setlstName("Makhuvele");
      assert.equal("Makhuvele", finAdvice.getlstName());
    });
    it("should return an empty string when the input is a number", function () {
      let finAdvice = FinAdvice();

      finAdvice.setlstName(1);
      assert.equal("", finAdvice.getlstName());
    });
    it("should return an empty string when the input is undefined", function () {
      let finAdvice = FinAdvice();

      finAdvice.setlstName();
      assert.equal("", finAdvice.getlstName());
    });
    it("should return an empty string when the input is an empty string", function () {
      let finAdvice = FinAdvice();

      finAdvice.setlstName("");
      assert.equal("", finAdvice.getlstName());
    });
  });
  describe("Set Salary and Expense amount", function () {
    it("should be able to set the salary amount", function () {
      let finAdvice = FinAdvice();

      finAdvice.setSalary(4000);
      assert.equal(4000, finAdvice.getSalary());
    });
    it("should be able to set the expense amount", function () {
      let finAdvice = FinAdvice();

      finAdvice.setExpense(1000);
      assert.equal(1000, finAdvice.getExpense());
    });
  });
  describe("Calculate expenses spending", function () {
    it("should be able to calculate the electricity expense spending", function () {
      let finAdvice = FinAdvice();

      finAdvice.setSalary(15000);
      assert.equal(750, finAdvice.calcElectricity());
    });
    it("should be able to calculate the grocery expense spending", function () {
      let finAdvice = FinAdvice();

      finAdvice.setSalary(15000);
      assert.equal(2250, finAdvice.calcGrocery());
    });
    it("should be able to calculate the other expense spending", function () {
      let finAdvice = FinAdvice();

      finAdvice.setSalary(15000);
      assert.equal(3000, finAdvice.calcOtherExp());
    });
    it("should be able to calculate the savings spending", function () {
      let finAdvice = FinAdvice();

      finAdvice.setSalary(15000);
      assert.equal(1500, finAdvice.calcSavings());
    });
    it("should be able to calculate the budget expense spending", function () {
      let finAdvice = FinAdvice();

      finAdvice.setSalary(15000);
      assert.equal(4500, finAdvice.calcBudget());
    });
  });
});
