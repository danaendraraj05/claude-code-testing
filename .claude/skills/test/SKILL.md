---
name: test
description: Run tests and analyze results
disable-model-invocation: true
---

# Test Skill

Run tests and analyze results.

## Instructions

1. Detect the project type and test framework:
   - Node.js: Look for `package.json` with test scripts
   - Python: Look for `pytest.ini`, `setup.py`, or `pyproject.toml`
   - Go: Look for `*_test.go` files
   - Rust: Look for `Cargo.toml`

2. Run the appropriate test command:
   - npm: `npm test`
   - pytest: `pytest -v`
   - go: `go test ./...`
   - cargo: `cargo test`

3. Analyze failures and provide:
   - Which tests failed
   - Root cause analysis
   - Suggested fixes

## Output

- Total tests run
- Passed/Failed/Skipped counts
- Details on any failures with file:line references
