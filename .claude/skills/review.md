# Code Review Skill

Review code changes for quality, security, and best practices.

## Instructions

1. Run `git diff` to see uncommitted changes, or `git diff main` for branch changes
2. Analyze the code for:
   - Logic errors and bugs
   - Security vulnerabilities (OWASP top 10)
   - Performance issues
   - Code style and readability
   - Missing error handling
   - Test coverage gaps

## Review Checklist

- [ ] Code follows project conventions
- [ ] No hardcoded secrets or credentials
- [ ] Input validation present where needed
- [ ] Error handling is appropriate
- [ ] No obvious performance bottlenecks
- [ ] Changes are focused and minimal

## Output Format

Provide feedback organized by severity:

1. **Critical** — Must fix before merge
2. **Warning** — Should address
3. **Suggestion** — Nice to have improvements
