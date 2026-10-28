# Ancient Egyptian Multiplication in JavaScript

> A practical logic and algorithms exercise: implementing the **Egyptian multiplication** method (also known as the *Russian peasant multiplication*).

---

## 📌 Table of Contents
- [What is Egyptian Multiplication?](#-what-is-egyptian-multiplication)
- [How the Algorithm Works](#-how-the-algorithm-works)
- [Step-by-Step Walkthrough Example](#-step-by-step-walkthrough-example)
- [Why Does It Work? (Mathematical Intuition)](#-why-does-it-work-mathematical-intuition)
- [Exercise Requirements & Constraints](#-exercise-requirements--constraints)
- [Test Cases](#-test-cases)
- [How to Run the Project](#-how-to-run-the-project)
- [Project Structure](#-project-structure)

---

## 📖 What is Egyptian Multiplication?

**Egyptian multiplication** is one of the oldest recorded calculation algorithms (dating back to ancient Egypt and documented in the famous *Rhind Mathematical Papyrus*).

What makes this method unique is that it computes the product of any two integers using only:
- **Doublings** (addition: `x + x`)
- **Halvings** (division by 2, rounding down)
- **Additions**

It does not require memorizing times tables or using the multiplication operator `*`!

---

## ⚙️ How the Algorithm Works

Given two non-negative integers $a$ (multiplicand) and $b$ (multiplier):

1. **Initialization**:
   - Create local working copies: `sinistra = a` (left) and `destra = b` (right).
   - Initialize an accumulator: `somma = 0` (sum).

2. **Calculation Loop** (while `destra > 0`):
   - **Parity Check**: check if `destra` is odd (`destra % 2 !== 0`).
   - **Accumulation**: if `destra` is odd, add the current value of `sinistra` to `somma`.
   - **Double & Halve**:
     - Double `sinistra` (`sinistra = sinistra + sinistra`).
     - Halve `destra`, discarding the remainder (`destra = Math.floor(destra / 2)`).

3. **Termination**:
   - When `destra` reaches `0`, the loop terminates.
   - The value in `somma` is the exact product of $a \times b$.

---

## 🔍 Step-by-Step Walkthrough Example

Let's trace the calculation of **$13 \times 21$**:

| Step | Left (`sinistra`) | Right (`destra`) | Is Right Odd? | Action / Running Sum |
| :---: | :---: | :---: | :---: | :--- |
| **1** | **13** | **21** | ✅ **Yes** (21 is odd) | Add 13 → `somma = 13` |
| **2** | 26 | 10 | ❌ No (10 is even) | Skip |
| **3** | **52** | **5** | ✅ **Yes** (5 is odd) | Add 52 → `somma = 13 + 52 = 65` |
| **4** | 104 | 2 | ❌ No (2 is even) | Skip |
| **5** | **208** | **1** | ✅ **Yes** (1 is odd) | Add 208 → `somma = 65 + 208 = 273` |
| *End* | 416 | 0 | — | Stop loop (`destra === 0`) |

### Final Result:
$$13 + 52 + 208 = 273$$

Verification: $13 \times 21 = 273$ ✔️

---

## 💡 Why Does It Work? (Mathematical Intuition)

Long before modern computer science, ancient Egyptian scribes were intuitively taking advantage of **base-2 (binary)** numbers and the **distributive property** of multiplication!

Any positive integer can be expressed as a sum of powers of 2:
$$21 = 16 + 4 + 1 = (2^4 + 2^2 + 2^0)$$

In binary representation:
$$21_{10} = 10101_2$$

Therefore, multiplying $13 \times 21$ is equivalent to distributing 13 across those binary components:
$$13 \times 21 = 13 \times (1 + 4 + 16) = (13 \times 1) + (13 \times 4) + (13 \times 16)$$
$$= 13 + 52 + 208 = 273$$

- **Halving** and checking whether the number is odd extracts the binary bits from right to left (least significant to most significant).
- **Doubling** `sinistra` generates the successive multiples of 13 ($13 \times 1$, $13 \times 2$, $13 \times 4$, $13 \times 8$, $13 \times 16$, ...).
- Whenever that bit is 1 (`destra` is odd), we add that value to the total!

---

## 📋 Exercise Requirements & Constraints

The JavaScript function `moltiplicazioneEgizia(a, b)` must adhere to the following specifications:

- [x] **Function Signature**: accepts two non-negative integers $a, b \ge 0$ and returns their product.
- [x] **No Multiplication Operator**: do not use the `*` operator between $a$ and $b$ (to double a number, use addition like `x + x`).
- [x] **Parameter Immutability**: do not mutate the input parameters directly; operate on local copies.
- [x] **Edge Case Handling**: handle `0` properly as an input factor (e.g., $5 \times 0 = 0$ and $0 \times 9 = 0$).
- [x] **Bonus**: log the calculation table to the console row by row, clearly marking which rows are accumulated into the sum.

---

## 🧪 Test Cases

You can run and verify the implementation with the following console tests:

```javascript
console.log(moltiplicazioneEgizia(13, 21)); // 273
console.log(moltiplicazioneEgizia(7, 1));   // 7
console.log(moltiplicazioneEgizia(5, 0));   // 0
console.log(moltiplicazioneEgizia(0, 9));   // 0
console.log(moltiplicazioneEgizia(12, 12)); // 144
```

You can also run an automatic assertion check against standard JavaScript multiplication:
```javascript
const a = 14, b = 15;
console.log(moltiplicazioneEgizia(a, b) === (a * b)); // true
```

---

## 🚀 How to Run the Project

You can run this project in two ways:

### 1. In the Browser (DevTools Console)
1. Open [index.html](file:///c:/Users/Ann/Desktop/BOOLEAN/moltiplicazione-egizia/index.html) in your browser (or right-click and choose **Open with Live Server** in VS Code).
2. Open the Developer Tools:
   - Right-click anywhere on the page ➔ **Inspect** ➔ switch to the **Console** tab (or press `F12` / `Ctrl + Shift + I`).
3. You will see the step-by-step tables and all test outputs.

### 2. Using Node.js in the Terminal
If you have Node.js installed, simply run:
```bash
node app.js
```

---

## 📁 Project Structure

```text
moltiplicazione-egizia/
├── index.html   # HTML entry point to run the script in the browser
├── app.js       # Algorithm implementation and console test cases
└── README.md    # Comprehensive documentation and exercise guide
```