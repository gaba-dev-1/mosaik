<div align="center">
 
# 🧩 Mosaïk

### *Adaptive workspace organizer*
 
[![Rust](https://img.shields.io/badge/Rust-c2410c?style=for-the-badge&logo=rust&logoColor=white)](https://rust-lang.org)
[![Python](https://img.shields.io/badge/Python-0f766e?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![React](https://img.shields.io/badge/React-6b7280?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org)

*Workspace that adapts to your patterns*

---

## 🧠 What it does

Mosaïk learns from your workflow patterns to automatically organize your workspace. It analyzes file usage, application switching, and task patterns to suggest optimal working environments.

**Key point:** All processing happens locally. Your data never leaves your machine.

---

## 🔄 Pattern Recognition

<table>
<tr>
<td align="center">

### 📁 File Patterns
Groups related files  
Identifies project contexts

</td>
<td align="center">

### 🔧 App Usage
Learns tool combinations  
Creates workflow profiles

</td>
<td align="center">

### ⏰ Time Patterns
Understands daily rhythms  
Optimizes for focus times

</td>
</tr>
</table>

---

## 💡 Example Workflow

```python
# Mosaïk analyzes patterns
if user.opens("VS Code") and user.recent_files(".py"):
    mosaik.suggest_workspace("Python Project")
    mosaik.group_files(["*.py", "*.txt", "*.md"])
    mosaik.recommend_apps(["Terminal", "Browser"])
```

---

## 🛠️ Tech Stack

```javascript
const tech = {
  core: "Rust for performance",
  ai: "Python + scikit-learn",
  ui: "Tauri + React", 
  storage: "Local SQLite"
};
```

---

## 🚀 Installation

```bash
# macOS/Linux
curl -fsSL https://mosaïk.com/install.sh | sh

# Windows
powershell -c "irm mosaïk.com/install.ps1 | iex"
```

**Privacy first • Open source • No telemetry**

---

[![Download](https://img.shields.io/badge/Download-c2410c?style=for-the-badge&logo=download&logoColor=white)](https://mosaïk.com)

</div>
