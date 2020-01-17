class Field {
  errors: string[];
  input: HTMLInputElement;

  constructor(input: HTMLInputElement) {
    this.input = input;
    this.errors = [];

    let errorMessage = document.createElement('p');
    errorMessage.className = 'text-danger';
    this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);

    this.input.addEventListener('input', () => {
      this.errors = [];
      this.validate();
      errorMessage.innerText = this.errors[0] || '';
    });
  }

  validate() {
    console.log("first validate")
  }
}

function RequiredFieldDecorator(field: Field): Field {
  let validate = field.validate;

  field.validate = function() {
    validate();
    let value = field.input.value;
    if (!value) {
      field.errors.push('Requerido');
    }
  };

  return field;
}

function EmailFieldDecorator(field: Field): Field {
  let validate = field.validate;

  field.validate = function() {
    validate();
    let value = field.input.value;

    if (value.indexOf('@') === -1) {
      field.errors.push('Debe ser un email');
    }
  };

  return field;
}

let field = new Field(document.querySelector('#email'));
field = RequiredFieldDecorator(field);
field = EmailFieldDecorator(field);




// Decorator Pattern
// Monkey patching

class MacbookPro {

  memory: number;

  constructor() {
    this.memory = 8;
  }

  cost(): number {
    return 2399;
  }
}

function withMemory(amount: number, computer: MacbookPro): void {
  let cost: number = computer.cost();

  computer.cost = function():number {
    let memoryCost: number = Math.max((amount - 8) * 25, 0);

    return cost + memoryCost;
  }
}

let macbook: MacbookPro = new MacbookPro();
withMemory(32, macbook);

console.log(macbook.cost());
// 2999


// Decorator con
// lodash.memoize
function measure(fn) {
  let start = Date.now();
  fn();
  console.log(`Time: ${Date.now() - start}ms`);
}

function fibonacci(num) { 
  // .... 
}

let fastFibonacci = lodash.memoize(fibonacci);

measure( () => fastFibonacci(100000)); // Time: 625ms
measure( () => fastFibonacci(100000)); // Time: 0ms