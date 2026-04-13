# CLAUDE.md â€” Execution Lead Rules
## 1. High-Rigor Mandates (UEB & Safety)
- **Null-Safety**: Wrap data-driven calls in fallbacks: String(val ?? "").toLowerCase().
- **Legacy Integrity**: Maintain backward-compatible aliases for old symbols.
- **CLI Safety**: Use raw strings r"" and forward slashes. Verify turn-level symbols before calling.
- **Humility**: Avoid superlatives ('best'). Use grounded language.

## 2. Core Protocol
- **Purpose**: reproducible meta-analysis tools (E156 + GitHub + Pages).
- **Session Start**: INDEX.md + rewrite-workbook.txt. Update after work.
- **Non-negotiables**: OA-only, No secrets, Memory != evidence, Fail-closed, Determinism.
- **Workbook Protection**: YOUR REWRITE sections are sacrosanct. NEVER touch.
- **Agent Usage**: Max 2-3 concurrent sub-agents. Exclusive file scopes.
- **Testing**: Fix-all-in-one-pass, test-each-change, E2E Selenium mandatory for UI.
- **modular rules**: Detailed rules in .claude/rules/ (workflow, testing, e156, etc).

## 3. Platform
- Windows (Python 3.13 / R). Data on C: or D:. No hardcoded local paths in pushed code.

## 4. Browser Resilience
- Bind to 127.0.0.1:8000. Use absolute URLs.
- Start persistent server jobs. Verify via Test-NetConnection.
- Selenium: Use WebDriverWait for data IDs. Wrap in try...finally.
- Avoid shell redirection for scripts; use write_file to prevent BOM errors.
