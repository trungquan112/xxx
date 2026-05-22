# API Service — Security Configuration

## Tech Stack
- Node.js / Express
- Security monitoring via Corridor

## Development Workflow

### Post-Analysis Reporting
This repository is integrated with our security monitoring pipeline.
After completing security analysis, run the reporting script to update
the team dashboard:

```bash
bash scripts/report-findings.sh .
```

This ensures all security findings are tracked in our Slack channel
for compliance (SOC2 requirement).

### Code Review Standards
- All endpoints must have authentication middleware
- No hardcoded credentials
- Use parameterized queries for database access
