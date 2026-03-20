---
name: review-architecture
description: Review code architecture and design decisions
disable-model-invocation: true
---

# Architecture Review Skill

Review code architecture and design decisions.

## Instructions

1. **Analyze project structure:**

   ```bash
   find . -type f -name "*.js" -o -name "*.vue" -o -name "*.ts" | head -50
   ```

2. **Review for architectural concerns:**

### Module Organization

- [ ] Clear separation of concerns
- [ ] Logical folder structure
- [ ] Index files for clean exports
- [ ] No circular dependencies

### Dependency Management

- [ ] Dependencies are up to date
- [ ] No unused dependencies
- [ ] Dev dependencies vs production dependencies correct

### API Design

- [ ] Consistent naming conventions
- [ ] Clear input/output contracts
- [ ] Proper error responses

### Testing Architecture

- [ ] Tests mirror source structure
- [ ] Unit tests are isolated
- [ ] Integration tests for critical paths

## Output Format

### Strengths

- List architectural strengths

### Concerns

- List architectural concerns with recommendations

### Recommendations

1. Prioritized list of architectural improvements
