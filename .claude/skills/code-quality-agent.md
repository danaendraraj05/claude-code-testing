# Code Quality Agent

An agent that analyzes existing codebase patterns and ensures new code aligns with them.

## Mission

Detect patterns from the existing codebase and validate that new/changed code follows the same conventions and quality standards.

## Workflow

### Phase 1: Learn Existing Patterns

1. **Scan codebase structure:**

   ```bash
   find src -type f \( -name "*.js" -o -name "*.vue" -o -name "*.ts" \) | head -20
   ```

2. **Detect naming conventions:**
   - File naming: kebab-case, camelCase, PascalCase
   - Function naming: camelCase, snake_case
   - Variable naming: camelCase, UPPER_CASE for constants
   - Component naming: PascalCase

3. **Detect code style patterns:**
   - Arrow functions vs regular functions
   - Async/await vs .then() chains
   - Destructuring usage
   - Import organization (grouped, sorted)
   - Export style (named vs default)

4. **Detect structural patterns:**
   - Function length (avg lines)
   - File organization (imports, constants, functions, exports)
   - Error handling approach (try/catch, .catch, error boundaries)
   - Comment style and documentation

### Phase 2: Analyze Changed Files

1. **Get changed files:**

   ```bash
   git diff --cached --name-only  # Staged changes
   git diff main...HEAD --name-only  # Branch changes
   ```

2. **For each changed file, extract:**
   - Naming conventions used
   - Code style patterns
   - Structural patterns

### Phase 3: Compare and Report

Compare new code against learned patterns and report deviations.

## Pattern Detection Rules

### Naming Conventions

| Element            | Check                  | Example                               |
| ------------------ | ---------------------- | ------------------------------------- |
| Files              | Match existing pattern | `user-service.js` vs `userService.js` |
| Functions          | Match existing pattern | `getUserById` vs `get_user_by_id`     |
| Constants          | UPPER_SNAKE_CASE       | `MAX_RETRIES`                         |
| Classes/Components | PascalCase             | `UserProfile`                         |
| Private methods    | Leading underscore     | `_validateInput`                      |

### Import Organization

Detect and enforce existing import order:

```javascript
// 1. Node built-ins
import path from 'path'

// 2. External packages
import { ref } from 'vue'

// 3. Internal aliases (@/)
import { useAuth } from '@/composables'

// 4. Relative imports
import { helper } from './utils'
```

### Function Patterns

| Pattern           | Detect                 | Enforce         |
| ----------------- | ---------------------- | --------------- |
| Arrow vs function | Count usage %          | Follow majority |
| Async style       | await vs .then         | Follow majority |
| Error handling    | try/catch vs .catch    | Follow majority |
| Return style      | Early return vs single | Follow majority |

### Documentation Patterns

| Element          | Check                            |
| ---------------- | -------------------------------- |
| JSDoc on exports | Required if existing code has it |
| Inline comments  | Match existing density           |
| TODO format      | Match existing format            |

## Output Format

````markdown
## Code Quality Report

### Codebase Patterns Detected

**Naming:**

- Files: kebab-case (95% usage)
- Functions: camelCase (100% usage)
- Constants: UPPER_SNAKE_CASE (100% usage)

**Style:**

- Arrow functions: 85% usage
- Async/await: 90% usage
- Destructuring: Heavy usage

**Structure:**

- Avg function length: 15 lines
- Import grouping: Yes (3 groups)

---

### Files Reviewed

#### `src/newFile.js`

**Aligned Patterns:** ✓

- Function naming follows camelCase
- Uses arrow functions
- Uses async/await

**Pattern Violations:** ✗

| Line | Issue          | Expected       | Found            |
| ---- | -------------- | -------------- | ---------------- |
| 5    | Function style | Arrow function | Regular function |
| 12   | Naming         | camelCase      | snake_case       |
| 20   | Import order   | Grouped        | Mixed            |

**Suggested Fixes:**

```javascript
// Line 5: Convert to arrow function
- function getData() { }
+ const getData = () => { }

// Line 12: Rename to camelCase
- const user_name = 'test'
+ const userName = 'test'
```
````

---

### Summary

| Metric           | Value |
| ---------------- | ----- |
| Files analyzed   | 3     |
| Patterns aligned | 12    |
| Violations found | 4     |
| Auto-fixable     | 3     |

````

## Integration with Pre-commit

Add to `.husky/pre-commit` to run automatically:
```bash
# Run code quality agent on staged files
claude --skill code-quality-agent --staged
````

## Configuration

Create `.claude/quality-config.json` to customize:

```json
{
  "strictness": "moderate",
  "ignorePatterns": ["*.test.js", "*.spec.js"],
  "customRules": {
    "maxFunctionLength": 30,
    "requireJSDoc": true
  }
}
```

## Strictness Levels

| Level    | Behavior                       |
| -------- | ------------------------------ |
| relaxed  | Report violations, don't block |
| moderate | Block on major violations only |
| strict   | Block on any violation         |
