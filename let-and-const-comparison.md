# How `let` Differs from `const` in Modern JavaScript

## Key Differences Between `let` and `const`

| Feature | `let` | `const` |
|---------|-------|--------|
| **Reassignment** | Can be reassigned to a new value | Cannot be reassigned; throws error if attempted |
| **Redeclaration** | Cannot be redeclared in the same scope | Cannot be redeclared in the same scope |
| **Initialization** | Can be declared without initial value | Must be initialized with a value at declaration |
| **Block Scope** | Function and block-scoped | Function and block-scoped |
| **Typical Use** | Variables that will change | Variables that should remain constant |

---

## Practical Differences Explained

**Reassignment is the primary distinction.** With `let`, you can change the value after declaration:

```javascript
let count = 0;
count = 1;  // ✓ Works fine
```

With `const`, attempting to reassign throws a `TypeError`:

```javascript
const count = 0;
count = 1;  // ✗ TypeError: Assignment to constant variable
```

**Initialization requirement.** `const` must have a value when declared, whereas `let` can be declared empty:

```javascript
let x;        // ✓ Valid (undefined initially)
const y;      // ✗ SyntaxError: Missing initializer
```

**Both are block-scoped,** unlike the older `var`. This means they exist only within their enclosing block (function, if-statement, loop, etc.):

```javascript
if (true) {
  let a = 1;
  const b = 2;
}
console.log(a);  // ✗ ReferenceError
console.log(b);  // ✗ ReferenceError
```

---

## Important: `const` Doesn't Mean Immutable

**A critical misconception:** `const` prevents *reassignment*, not *mutation*. If the value is an object or array, you can still modify its properties or elements:

```javascript
const obj = { name: 'Alice' };
obj.name = 'Bob';  // ✓ Works — modifying the object
obj = {};          // ✗ Error — reassigning the variable

const arr = [1, 2, 3];
arr.push(4);       // ✓ Works — mutating the array
arr = [];          // ✗ Error — reassigning the variable
```

---

## Modern Best Practice

**Use `const` by default.** It signals that a variable shouldn't be reassigned and prevents accidental changes. **Use `let` only when you know the variable will be reassigned.** Avoid `var` in modern code—it has confusing function-scoping behavior and is considered outdated.

