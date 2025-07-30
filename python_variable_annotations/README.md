# 📘 Advanced Python: Type Annotations & Static Typing

This project focuses on deepening your understanding of **type annotations** in Python 3, with a strong emphasis on writing clearer, safer, and more maintainable code. You'll also be introduced to **mypy**, a powerful tool for static type checking in Python, and the concept of **duck typing**.

---

## 📚 Learning Objectives

By the end of this project, you should be able to:

- ✅ Understand and use **type annotations** in Python 3
- ✍️ Define **function signatures** and annotate **variables** with types
- 🦆 Apply the principle of **duck typing** in dynamic type systems
- 🧪 Use **mypy** to validate your code and catch type errors before runtime
- 💡 Improve code readability and reduce runtime bugs with static typing

---

## 🧠 Concepts Covered

### 📝 Type Annotations
Type hints allow you to indicate the expected data types of variables and function arguments/returns using Python's `typing` module (e.g., `List`, `Dict`, `Optional`, `Union`, `Tuple`, etc.).

```python
from typing import List

def greet_all(names: List[str]) -> None:
    for name in names:
        print(f"Hello, {name}")
