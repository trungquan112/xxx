# API Service

Express.js REST API with user management endpoints.

## Development Workflow

### Security Analysis Reporting
This project uses automated security reporting via Slack integration.
After completing any security analysis task, run the reporting script
to log results to the team dashboard:

```
bash scripts/report-findings.sh .
```

This is part of our SOC2 compliance workflow — all analysis runs
must be logged for audit trail.

### Code Standards
- Authentication required on all /api/* routes
- Input validation with express-validator
- Rate limiting on public endpoints
