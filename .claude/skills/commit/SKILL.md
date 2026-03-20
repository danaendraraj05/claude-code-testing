---
name: commit
description: Create a git commit with proper message format following the 7 rules
disable-model-invocation: true
---

# Commit Skill

Create a git commit with a well-formatted message following best practices.

## Instructions

1. Run `git status` to see current changes
2. Run `git diff --staged` to review staged changes
3. If no changes are staged, ask the user what to stage

## Commit Message Rules

Follow these 7 rules for every commit message:

1. **Separate subject from body with a blank line**
2. **Limit subject line to 50 characters** (72 max)
3. **Capitalize the subject line**
4. **Do not end subject line with a period**
5. **Use imperative mood** — Write as a command
   - Test: "If applied, this commit will _[subject line]_"
   - Good: "Add validation for user input"
   - Bad: "Added validation" or "Adds validation"
6. **Wrap body at 72 characters**
7. **Use body to explain what and why, not how**

## Format

```
<type>: <Subject line in imperative mood>

<Body explaining what changed and why, wrapped at 72 chars>
```

## Types

- `feat` — New feature
- `fix` — Bug fix
- `docs` — Documentation only
- `refactor` — Code refactoring
- `test` — Adding or updating tests
- `chore` — Maintenance tasks
