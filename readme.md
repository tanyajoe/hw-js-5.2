**1. Операции присваивания**

- `=` - приравнивает переменной определенное значение

```
let a = 5;
```

- `+=` - сложение с последующим присвоением результата;

```
let a = 23;
a += 5; // аналогично a = a + 5
console.log(a); // 28
```

- `-=` - вычитание с последующим присвоением результата;

```
let a = 28;
a -= 10; // аналогично a = a - 10
console.log(a); // 18
```

- `*=` - умножение с последующим присвоением результата;

```
let x = 20;
x *= 2; // аналогично x = x * 2
console.log(x); // 40
```

- `**=` - возведение в степень с последующим присвоением результата

```
let x = 5;
x **= 2;
console.log(x);  // 25
```

- `/=` - разделить и записать значение в правый операнд.

```
let x = 40;
x /= 4; // аналогично x = x / 4
console.log(x); // 10
```

-`%=` - получение остатка от деления с последующим присвоением результата

```
let x = 10;
x %= 3; // аналогично x = x % 3
console.log(x); // 1, так как 10 - 3*3 = 1
```

- `&&=`  
  `a &&= b` возвращает b, если и a и b равны `true`. Если какой-то из операндов равен `false`, то возвращается a. Аналогично выполнению `a = a && b`

```
let x = true;
let y = false;
y &&= x;
console.log(y); // false

let c = false;
let d = true;
c &&= d;
console.log(c); // false

let a = true;
let b = true;
a &&= b;
console.log(a); // true

let e = false;
let f = false;
e &&= f;
console.log(e); // false
```

- `||=`  
  `a ||= b` эквивалентно выражению `a = a || b`

```
let x = true;
let y = false;
y ||= x;
console.log(y); // true

let a = true;
let b = true;
a ||= b;
console.log(a); // true

let c = false;
let d = true;
c ||= d;
console.log(c); // true

let e = false;
let f = false;
e ||= f;
console.log(e); // false
```

**2. Математические операции**

- `+` - сложение

```
let x = 10;
let y = x + 50;
```

- `-` - вычитание

```
let x = 100;
let y = x - 50;
```

- `*` - умножение

```
let x = 4;
let y = 5;
let z = x * y;
```

- `/` - деление

```
let x = 5;
let y = 2;
let z = x / y;
console.log(z); // 2.5
```

- `%` - возвращает остаток от деления

```
let x = 5;
let y = 2;
let z = x % y;
console.log(z); // 1
```

- `**` - возводит число в определенную степень

```
const n = 2 ** 3;
console.log(n);  // 8
```

- `++`- инкремент увеличивает переменную на единицу. Существует префиксный инкремент, который сначала увеличивает переменную на единицу, а затем возвращает ее значение. И есть постфиксный инкремент, который сначала возвращает значение переменной, а затем увеличивает его на единицу.

```
// префиксный инкремент
let x = 5;
let z = ++x;
console.log(x); // 6
console.log(z); // 6

// постфиксный инкремент
let a = 5;
let b = a++;
console.log(a); // 6
console.log(b); // 5
```

- `--` - Декремент уменьшает значение переменной на единицу. Также есть префиксный и постфиксный декремент.

```
// префиксный декремент
let x = 5;
let z = --x;
console.log(x); // 4
console.log(z); // 4

// постфиксный декремент
let a = 5;
let b = a--;
console.log(a); // 4
console.log(b); // 5
```

**3. Операторы сравнения:** сравнивают два значения и возвращают значение `true` или `false`

- `==` - равно: оператор равенства сравнивает два значения, и если они равны, возвращает `true`, иначе возвращает `false`
- `!=` - неравно: принимает `true`, если операнды не равны по значению
- `>`, `>=`- больше/больше или равно: возвращает `true`, если левый операнд больше/или равен правого
- `<`, `<=` - меньше/меньше или равно: возвращает `true`, если левый операнд меньше/меньше или равен правого

* `===` - строго равно: оператор тождественности сравнивает два значения и их тип, и если они равны, возвращает `true`, иначе возвращает `false`
* `!==` - строго неравно: сравнивает два значения и их типы, и если они не равны, возвращает `true`, иначе возвращает `false`

**4. Логические операции** применяются для объединения результатов двух операций сравнения.

- `&&` - возвращает `true`, если обе операции сравнения возвращают `true`, иначе возвращает `false`:

```
let income = 100;
let percent = 10;
let result = income > 50 && percent < 12;
console.log(result); //true
```

- `||` - возвращает `true`, если хотя бы одна операция сравнения возвращают `true`, иначе возвращает `false`

```
let income = 100;
let isDeposit = true;
let result = income > 50 || isDeposit == true;
console.log(result); //true
```

- `!` - возвращает `true`, если операция сравнения возвращает `false`

```
let income = 100;
let result1 = !(income > 50);
console.log(result1); // false, так как income > 50 возвращает true

let isDeposit = false;
let result2 = !isDeposit;
console.log(result2); // true
```
