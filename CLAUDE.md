# Claude Code Configuration

This project contains custom skills for code quality and development workflows.

## Project Skills

The following skills are available in `.claude/skills/`:

- `/commit` - Create git commits following the 7 rules for good commit messages
- `/review` - Review code for quality and security
- `/pr` - Create well-structured pull requests
- `/test` - Run tests and analyze results
- `/raise-pr` - Automated PR creation via gh CLI
- `/review-patterns` - Check for anti-patterns and best practices
- `/review-architecture` - Review module structure and dependencies
- `/code-quality` - Analyze codebase patterns and validate new code

## Configuration

See `.claude/quality-config.json` for code quality rules and standards.

## Development

- Run `npm test` for unit tests
- Run `npm run lint` for linting
- Pre-commit hooks enforce formatting and commit message standards
