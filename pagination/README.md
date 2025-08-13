# 📄 Pagination API Project

## 📌 Description
This project demonstrates how to paginate a dataset in Python using three different approaches:

1. **Simple pagination** – using `page` and `page_size` parameters
2. **Hypermedia pagination (HATEOAS)** – includes navigation metadata
3. **Deletion-resilient pagination** – keeps pagination stable even if items are removed

The dataset used is `Popular_Baby_Names.csv`.

---

## 📂 Project Structure
- **`index_range.py`** → Utility function to calculate start and end indexes for pagination
- **`server.py`** → `Server` class that loads the dataset and provides pagination methods
- **`Popular_Baby_Names.csv`** → Dataset used for demonstration
- **`README.md`** → Project documentation

---

## ⚙️ Requirements
- Python 3.9
- Ubuntu 20.04 LTS
- `pycodestyle` 2.5.\* for style checks

---

## ▶️ Usage Examples

### 1. Simple Pagination
```python
from server import Server

srv = Server()
print(srv.get_page(page=1, page_size=5))
