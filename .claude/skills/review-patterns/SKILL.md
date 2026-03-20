---
name: review-patterns
description: Review code for patterns and anti-patterns
disable-model-invocation: true
---

# Code Pattern Review Skill

Review code for patterns, anti-patterns, and best practices.

## Instructions

1. **Identify files to review:**
   - For staged changes: `git diff --cached --name-only`
   - For branch changes: `git diff main...HEAD --name-only`

2. **Review each file for:**

### Good Patterns to Verify

- [ ] Single Responsibility Principle
- [ ] DRY (Don't Repeat Yourself)
- [ ] Early returns to reduce nesting
- [ ] Meaningful variable/function names
- [ ] Pure functions where possible
- [ ] Proper error handling
- [ ] Consistent code style

### Anti-Patterns to Flag

- [ ] God functions (too many responsibilities)
- [ ] Deep nesting (> 3 levels)
- [ ] Magic numbers/strings
- [ ] Commented out code
- [ ] Console.log left in production code
- [ ] Hardcoded values that should be config
- [ ] Duplicated logic

### Security Patterns

- [ ] No hardcoded secrets/credentials
- [ ] Input validation present
- [ ] SQL injection prevention
- [ ] XSS prevention

## Output Format

Provide feedback organized by severity:

1. **Critical** — Must fix before merge
2. **Warning** — Should address
3. **Suggestion** — Nice to have improvements
