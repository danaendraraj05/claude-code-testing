# Raise PR Skill

Automatically create a well-structured pull request for the current branch.

## Instructions

1. **Analyze current branch:**

   ```bash
   git branch --show-current
   git log main..HEAD --oneline
   git diff main...HEAD --stat
   ```

2. **Check branch is ready:**
   - Ensure all changes are committed
   - Verify tests pass: `npm test`
   - Verify lint passes: `npm run lint`

3. **Push branch if needed:**

   ```bash
   git push -u origin <branch-name>
   ```

4. **Generate PR content:**
   - Title: Short, imperative, under 70 chars
   - Analyze ALL commits in the branch, not just the latest
   - Summarize changes in bullet points
   - Include test plan

5. **Create PR using gh CLI:**
   ```bash
   gh pr create --title "<title>" --body "<body>"
   ```

## PR Template

```markdown
## Summary

- Brief bullet points of what changed

## Changes

- List of specific changes made
- Group related changes together

## Test Plan

- [ ] Tests pass locally
- [ ] Linting passes
- [ ] Manual testing steps if applicable

## Screenshots

(If UI changes, include before/after screenshots)
```

## Error Handling

- If `gh` is not authenticated, prompt user to run `gh auth login`
- If tests fail, report failures and do not create PR
- If branch has no commits ahead of main, abort with message
