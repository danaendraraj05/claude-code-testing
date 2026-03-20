---
name: code-quality
description: Analyze codebase patterns and ensure new code aligns with existing conventions
disable-model-invocation: true
---

# Code Quality Agent

Analyze existing codebase patterns and ensure new code aligns with them.

## Workflow

### Phase 1: Learn Existing Patterns

1. **Scan codebase structure:**

   ```bash
   find src -type f \( -name "*.js" -o -name "*.vue" -o -name "*.ts" \) | head -20
   ```

2. **Detect patterns:**
   - File naming: kebab-case, camelCase, PascalCase
   - Function naming: camelCase, snake_case
   - Arrow functions vs regular functions
   - Async/await vs .then() chains
   - Import organization

### Phase 2: Analyze Changed Files

1. **Get changed files:**

   ```bash
   git diff --cached --name-only  # Staged changes
   git diff main...HEAD --name-only  # Branch changes
   ```

2. **Extract patterns from changed files**

### Phase 3: Compare and Report

Compare new code against learned patterns and report deviations.

## Output Format

```markdown
## Code Quality Report

### Codebase Patterns Detected

- Files: kebab-case
- Functions: camelCase
- Arrow functions: 85% usage

### Pattern Violations Found

| Line | Issue          | Expected       | Found            |
| ---- | -------------- | -------------- | ---------------- |
| 5    | Function style | Arrow function | Regular function |
| 12   | Naming         | camelCase      | snake_case       |

### Suggested Fixes

- Line 5: Convert to arrow function
- Line 12: Rename to camelCase
```
