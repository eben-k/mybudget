// Budget controller
const budgetController = (function () {
  const Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  const Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  const data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
  };

  return {
    addItem: function (type, des, val) {
      let newItem;
      let ID;

      // Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Create new item based on 'inc' or 'exp'
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      // add it to datastructure
      data.allItems[type].push(newItem);

      // return new item
      return newItem;
    },
    testing: function () {
      console.log(data);
    },
  };
})();

// UI controller
const UIController = (function () {
  const DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMStrings: function () {
      return DOMstrings;
    },
  };
})();

// App Controller
const controller = (function (budgetCtrl, uiCntrl) {
  const setupEventListeners = function () {
    const getDom = uiCntrl.getDOMStrings();

    document
      .querySelector(getDom.inputButton)
      .addEventListener("click", addItem);

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13) {
        addItem();
      }
    });
  };

  const addItem = function () {
    // get the filled input data
    const input = uiCntrl.getInput();
    // add the item to the budget controller
    const newItem = budgetCtrl.addItem(
      input.type,
      input.description,
      input.value
    );
    // add the item to the ui
    // calculate the budget
    // display budget on the ui
  };

  return {
    init: function () {
      console.log("App started");
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
