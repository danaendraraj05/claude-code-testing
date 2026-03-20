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
- [ ] No duplicate functionality from multiple packages

### API Design

- [ ] Consistent naming conventions
- [ ] Clear input/output contracts
- [ ] Proper error responses
- [ ] Versioning strategy if applicable

### State Management

- [ ] State is properly scoped
- [ ] No prop drilling (use context/store)
- [ ] Mutations are predictable
- [ ] Side effects are isolated

### Testing Architecture

- [ ] Tests mirror source structure
- [ ] Unit tests are isolated
- [ ] Integration tests for critical paths
- [ ] Mocks are properly managed

## Output Format

```markdown
## Architecture Review

### Structure Analysis

Current structure:

- `/src` - Source code
  - `/components` - Vue components
  - `/utils` - Utility functions
  - etc.

### Findings

#### Strengths

- List architectural strengths

#### Concerns

- List architectural concerns with recommendations

#### Recommendations

1. Prioritized list of architectural improvements
```

## Common Architectural Issues

| Issue               | Impact                       | Recommendation                         |
| ------------------- | ---------------------------- | -------------------------------------- |
| Circular deps       | Build failures, hard to test | Extract shared code to separate module |
| God components      | Hard to maintain             | Split into smaller components          |
| No error boundaries | Poor UX on failures          | Add error boundaries at key points     |
| Mixed concerns      | Hard to test                 | Separate business logic from UI        |
