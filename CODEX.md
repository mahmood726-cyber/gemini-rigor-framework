# AGENTS.md â€” Pipeline Rules (Unified)
## 1. Role Specialization
- **Strategic Lead (Gemini)**: mapping, scaffolding, and creative architecture.
- **Execution Leads (Claude/Codex)**: implementation, test-repair, and hardening.

## 2. High-Utility Rigor (GSP & UEB)
- **Honesty**: No marketing. Hardcode Disclosure table required in Plans.
- **Ingredients**: Verify data on disk before implementation.
- **Mandatory E2E**: Every project must pass tests/test_ui.py.
- **Guyot Rule**: Cite published algorithms; verify against sample data.
- **Safety**: Raw strings r"", forward slashes, and null-safe JS calls.
- **Deep Rigor**: NumPy .copy(), .sf() for precision, Jensen's bias check.

## 3. Core Mandates
- **Principles**: OA-only, No secrets, Memory != evidence, Fail-closed, Determinism.
- **Protection**: E156 workbook YOUR REWRITE sections are sacrosanct.
- **Modular Rules**: Full tactical detail in .claude/rules/ (do not duplicate).

## 4. Browser Resilience
- Bind to 127.0.0.1:8000. Use absolute URLs.
- Start persistent server jobs. Verify via Test-NetConnection.
- Selenium: Use WebDriverWait for data IDs. Wrap in try...finally.
- Avoid shell redirection for scripts; use write_file to prevent BOM errors.
