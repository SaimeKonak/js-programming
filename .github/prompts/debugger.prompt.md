description: "Analyze selected or provided code for bugs, explain verified findings, and recommend targeted fixes."
argument-hint: "Select code or provide a file, relevant requirements, and steps to reproduce."
agent: "agent"

# Code Debugging Review

Analyze the selected or provided code for bugs. Use the user's stated requirements, expected behavior, and reproduction steps as the source of truth. If necessary, inspect directly related code to verify behavior, while keeping the review focused on the requested scope.

## Review Guidelines

- Do not modify files.
- Report only actionable defects supported by evidence; do not report style preferences as bugs.
- Do not assume requirements or behavior that the user has not provided.
- If an issue depends on missing context or cannot be verified, clearly state the limitation instead of presenting it as a confirmed finding.
- Do not claim that tests or commands were run unless they actually were.

## Findings

List confirmed issues from highest to lowest severity. Use one of these severity levels: **Critical**, **High**, **Medium**, or **Low**. Include a relevant file path and line number when available.

For each issue, use this format:

### [Severity] Concise issue title

- **Location:** `path/to/file:line`
- **Problem:** Explain the incorrect behavior and when it occurs.
- **Impact:** Describe the consequence.
- **Suggested fix:** Recommend a focused correction.

## Result When No Issues Are Found

If the review finds no confirmed bugs, respond exactly:

No bugs found.
