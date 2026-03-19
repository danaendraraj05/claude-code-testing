# Pull Request Skill

Create a well-structured pull request.

## Instructions

1. Run `git log main..HEAD --oneline` to see commits in this branch
2. Run `git diff main...HEAD` to see all changes
3. Analyze the changes to understand the purpose

## PR Title

- Keep under 70 characters
- Use imperative mood: "Add feature" not "Added feature"
- Be specific and descriptive

## PR Body Format

```markdown
## Summary

Brief description of what this PR does (1-3 bullet points)

## Changes

- List specific changes made
- Group related changes together

## Test Plan

- [ ] How to test these changes
- [ ] What to verify

## Notes

Any additional context, screenshots, or considerations
```

## Commands

Use `gh pr create` with `--title` and `--body` flags to create the PR.
