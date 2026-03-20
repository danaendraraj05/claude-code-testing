# Code Pattern Review Skill

Review code for patterns, anti-patterns, and best practices.

## Instructions

1. **Identify files to review:**
   - For staged changes: `git diff --cached --name-only`
   - For branch changes: `git diff main...HEAD --name-only`
   - For specific files: Use provided file paths

2. **Review each file for:**

### Code Patterns

#### Good Patterns to Verify

- [ ] Single Responsibility Principle
- [ ] DRY (Don't Repeat Yourself)
- [ ] Early returns to reduce nesting
- [ ] Meaningful variable/function names
- [ ] Pure functions where possible
- [ ] Proper error handling
- [ ] Consistent code style

#### Anti-Patterns to Flag

- [ ] God functions (too many responsibilities)
- [ ] Deep nesting (> 3 levels)
- [ ] Magic numbers/strings
- [ ] Commented out code
- [ ] Console.log left in production code
- [ ] Hardcoded values that should be config
- [ ] Duplicated logic
- [ ] Overly complex conditionals

### Security Patterns

- [ ] No hardcoded secrets/credentials
- [ ] Input validation present
- [ ] SQL injection prevention
- [ ] XSS prevention
- [ ] Proper authentication checks
- [ ] Sensitive data not logged

### Performance Patterns

- [ ] No N+1 query patterns
- [ ] Efficient loops (no unnecessary iterations)
- [ ] Proper use of async/await
- [ ] No memory leaks (event listeners cleaned up)
- [ ] Lazy loading where appropriate

## Output Format

```markdown
## Code Pattern Review

### File: `<filename>`

#### Issues Found

**Critical:**

- [Line X] Description of critical issue

**Warnings:**

- [Line X] Description of warning

**Suggestions:**

- [Line X] Suggestion for improvement

#### Good Practices Observed

- List of good patterns found in the code

### Summary

- Total files reviewed: X
- Critical issues: X
- Warnings: X
- Suggestions: X
```

## Severity Levels

| Level      | Description                               | Action       |
| ---------- | ----------------------------------------- | ------------ |
| Critical   | Security risk, bug, or major anti-pattern | Must fix     |
| Warning    | Code smell or minor anti-pattern          | Should fix   |
| Suggestion | Could be improved                         | Nice to have |
