---
title: AZ-400 Study Guide - Designing And Implementing Microsoft DevOps Solutions
date: "2021-04-15T00:00:00.000Z"
description: "Preparing AZ-400 Microsoft Azure DevOps Solutions exam? Check out our site for study materials(Microsoft links) for AZ-400 exam objective."
---

If you are preparing for AZ-400 Microsoft DevOps Solutions study guide, this study materials helps you to take the exam confidently.

I have prepared the couple of online resources from Microsoft Docs site based on the AZ-400 objectives and it covers all the topics for the exam.

> Practice Tests: [AZ-400 Microsoft Azure DevOps Expert - Prc Test:UPDATED 2021](https://www.udemy.com/course/az-400-microsoft-azure-devops-expert-prc-testupdated-2020-s/?referralCode=C4D94279B68D5D923FAD)

### Develop an Instrumentation Strategy (5-10%)

#### Design and implement logging

- assess and Configure a log framework
  - [Overview of Azure platform logs](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/platform-logs-overview)
- design a log aggregation and storage strategy (e.g. Azure storage)
  - [Design and Implement an Azure Storage Strategy](https://www.microsoftpressstore.com/articles/article.aspx?p=2315377&seqNum=5)
- design a log aggregation using Azure Monitor
  - [Designing your Azure Monitor Logs deployment](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/design-logs-deployment)
- manage access control to logs (workspace-centric/resource-centric)
  - [Manage access to log data and workspaces in Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/manage-access)
  - [Adding Users to Azure Log Analytics via the Azure Portal](https://docs.microsoft.com/en-us/services-hub/health/adding_users_azure_log_analytics)
- integrate crash analytics (App Center Crashes, Crashlytics)
  - [Analytics](https://docs.microsoft.com/en-us/appcenter/analytics/)
  - [Enabling Diagnostics in an App](https://docs.microsoft.com/en-us/appcenter/diagnostics/enabling-diagnostics)
  - [App Center SDK](https://docs.microsoft.com/en-us/appcenter/sdk/)

#### Design and implement telemetry

- design and implement distributed tracing
  - [What is Distributed Tracing?](https://docs.microsoft.com/en-us/azure/azure-monitor/app/distributed-tracing)
- inspect application performance indicators
  - [Monitor performance in web applications](https://docs.microsoft.com/en-us/azure/azure-monitor/app/web-monitor-performance)
  - [Monitor Azure App Service performance](https://docs.microsoft.com/en-us/azure/azure-monitor/app/azure-web-apps?tabs=net)
- inspect infrastructure performance indicators
  - [Supported metrics with Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/metrics-supported)
- define and measure key metrics (CPU, memory, disk, network)
  - [https://docs.microsoft.com/en-us/azure/azure-monitor/insights/vminsights-performance](https://docs.microsoft.com/en-us/azure/azure-monitor/insights/vminsights-performance)
- implement alerts on key metrics (email, SMS, webhooks, Teams/Slack)
  - [Call a webhook with a classic metric alert in Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-webhooks)
- integrate user analytics (e.g. Application Insights funnels, Visual Studio App Center, TestFlight, Google Analytics)
  - [Create your funnel](https://docs.microsoft.com/en-us/azure/azure-monitor/app/usage-funnels#create-your-funnel)
  - [Analytics](https://docs.microsoft.com/en-us/appcenter/analytics/)
  - [Publish an iOS package to TestFlight (Internal Testers)](https://docs.microsoft.com/en-us/appcenter/distribution/stores/apple/testflight_internal)

#### Integrate logging and monitoring solutions

- configure and integrate container monitoring (Azure Monitor, Prometheus, etc.)
  - [Configure scraping of Prometheus metrics with Azure Monitor for containers](https://docs.microsoft.com/en-us/azure/azure-monitor/insights/container-insights-prometheus-integration)
- configure and integrate with monitoring tools (Azure Monitor Application Insights, Dynatrace, New Relic, Naggios, Zabbix)
  - [Quickstart: Start monitoring your website with Azure Monitor Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/website-monitoring)
  - [Introduction to Azure monitoring integrations](https://docs.newrelic.com/docs/integrations/microsoft-azure-integrations/getting-started/introduction-azure-monitoring-integrations)
- create feedback loop from platform monitoring tools (e.g. Azure Diagnostics VM extensions, Azure Platform Logs, Event Grid)
  - [Capture feedback and monitoring data to continuously improve your software](https://docs.microsoft.com/en-us/learn/paths/capture-feedback-monitoring/)
- manage Access control to the monitoring platform
  - [Manage access to log data and workspaces in Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/manage-access)
  - [Roles, permissions, and security in Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/roles-permissions-security)

---

### Develop a Site Reliability Engineering (SRE) strategy (5-10%)

#### Develop an actionable alerting strategy

- identify and recommend metrics on which to base alerts
  - [Overview of alerts in Microsoft Azure](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-overview)
- implement alerts using appropriate metrics
  - [Understand how metric alerts work in Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-metric-overview)
  - [Create, view, and manage metric alerts using Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-metric)
- implement alerts based on appropriate log messages
  - [Log alerts in Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-unified-log)
  - [Create, view, and manage log alerts using Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-log)
- implement alerts based on application health checks
  - [Create activity log alerts on service notifications using the Azure portal](https://docs.microsoft.com/en-us/azure/service-health/alerts-activity-log-service-notifications-portal)
- analyze combinations of metrics
  - [Create and manage action groups in the Azure portal](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/action-groups)
- develop communication mechanism to notify users of degraded systems
  - [Get notified when Azure service incidents impact your resources](https://azure.microsoft.com/en-in/blog/get-notified-when-azure-service-incidents-impact-your-resources/)
- implement alerts for self-healing activities (e.g. scaling, failovers)
  - [Design for self healing](https://docs.microsoft.com/en-us/azure/architecture/guide/design-principles/self-healing)
  - [New features for Azure Alerts and Autoscale](https://azure.microsoft.com/en-in/blog/new-features-for-azure-alerts-and-autoscale/)

#### Design a failure prediction strategy

- analyze behavior of system with regards to load and failure conditions
  - [Failure mode analysis for Azure applications](https://docs.microsoft.com/en-us/azure/architecture/resiliency/failure-mode-analysis)
- calculate when a system will fail under various conditions
  - [Azure AI guide for predictive maintenance solutions](https://docs.microsoft.com/en-us/azure/machine-learning/team-data-science-process/predictive-maintenance-playbook)
- measure baseline metrics for system
  - [Identity baseline metrics, indicators, and risk tolerance](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/govern/identity-baseline/metrics-tolerance)
- recommend the appropriate tools for a failure prediction strategy
  - [Solution architecture: Defect prevention with predictive maintenance](https://azure.microsoft.com/en-in/solutions/architecture/defect-prevention-with-predictive-maintenance/)
  - [Predictive maintenance](https://azure.microsoft.com/en-in/use-cases/predictive-maintenance/)

#### Design and implement a health check

- analyze system dependencies to determine which dependency should be included in health check
  - [View a map from a VM](https://docs.microsoft.com/en-us/azure/azure-monitor/insights/vminsights-maps#view-a-map-from-a-vm)
- calculate healthy response timeouts based on SLO for the service
  - [Best practices for monitoring cloud applications](https://docs.microsoft.com/en-us/azure/architecture/best-practices/monitoring)
- design approach for partial health situations
  - [Health Endpoint Monitoring pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/health-endpoint-monitoring)
- integrate health check with compute environment
  - [Resource Health overview](https://docs.microsoft.com/en-us/azure/service-health/resource-health-overview)
- implement different types of health checks (liveness, startup, shutdown)
  - [Service Health overview](https://docs.microsoft.com/en-in/azure/service-health/service-health-overview)
  - [Best practices for setting up Azure Service Health alerts](https://www.youtube.com/watch?v=k5d5ca8K6tc&list=PLLasX02E8BPBBSqygdRvlTnHfp1POwE8K&index=6&t=0s)

---

### Develop a security and compliance plan (10-15%)

#### Design an authentication and authorization strategy

- design an access solution (Azure AD Privileged Identity Management (PIM), Azure AD Conditional Access, MFA)
  - [What is Azure AD Privileged Identity Management?](https://docs.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure)
  - [What is Conditional Access?](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/overview)
  - [How it works: Azure Multi-Factor Authentication](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks)
- organize the team using Azure AD groups
  - [Create a basic group and add members using Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-groups-create-azure-portal)
- implement Service Principals and Managed Identity
  - [View the service principal of a managed identity in the Azure portal](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/how-to-view-managed-identity-service-principal-portal)
- configure service connections
  - [Connect to Microsoft Azure](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/connect-to-azure?view=azure-devops)

#### Design a sensitive information management strategy

- evaluate and configure vault solution (Azure Key Vault, Hashicorp Vault)
  - [About Azure Key Vault](https://docs.microsoft.com/en-in/azure/key-vault/general/overview)
  - [HashiCorp Vault on Azure](https://azure.microsoft.com/en-in/resources/videos/azure-friday-hashicorp-vault-on-azure/)
- generate security certificates
  - [Creating your first Key Vault certificate](https://docs.microsoft.com/en-us/azure/key-vault/certificates/certificate-scenarios#creating-your-first-key-vault-certificate)
- design a secrets storage and retrieval strategy
  - [Creating and Managing Key Vaults](https://docs.microsoft.com/en-us/azure/key-vault/general/developers-guide#creating-and-managing-key-vaults)
- formulate a plan for deploying secret files as part of a release
  - [Azure Key Vault task](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/deploy/azure-key-vault?view=azure-devops&viewFallbackFrom=vsts)

#### Develop security and compliance

- automate dependencies scanning for security (container scanning, OWASP)
  - [Security Center's integrated vulnerability assessment solution for Azure virtual machines](https://docs.microsoft.com/en-us/azure/security-center/deploy-vulnerability-assessment-vm)
  - [Design secure applications on Azure](https://docs.microsoft.com/en-us/azure/security/develop/secure-design)
- automate dependencies scanning for compliance (licenses: MIT, GPL)
  - [Managing Open-source security and license with WhiteSource](https://azuredevopslabs.com/labs/vstsextend/whitesource/)
- assess and report risks
  - [Microsoft security guidance](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/govern/security-baseline/azure-security-guidance)
  - [Governance, risk, and compliance](https://docs.microsoft.com/en-us/azure/architecture/framework/security/governance)
- design a source code compliance solution (e.g. GitHub security, pipeline-based scans, Githooks, SonarQube)
  - [Managing technical debt with SonarQube and Azure DevOps](https://azuredevopslabs.com/labs/vstsextend/sonarqube/)
  - [Azure Security Center](https://github.com/Azure/Azure-Security-Center#azure-security-center)

#### Design governance enforcement mechanisms

- implement Azure policies to enforce organizational requirements
  - [Tutorial: Create and manage policies to enforce compliance](https://docs.microsoft.com/en-us/azure/governance/policy/tutorials/create-and-manage)
- implement container scanning (e.g. static scanning, malware, crypto mining)
  - [Azure Container Registry image scanning by Security Center](https://docs.microsoft.com/en-us/azure/security-center/azure-container-registry-integration)
  - [How Azure Security Center detects a Bitcoin mining attack](https://azure.microsoft.com/es-mx/blog/how-azure-security-center-detects-a-bitcoin-mining-attack/)
- design and implement Azure Container Registry Tasks (eg. Azure Policy)
  - [Automate container image builds and maintenance with ACR Tasks](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview)
- design break-the-glass strategy for responding to security incidents
  - [Azure Identity Management and access control security best practices](https://docs.microsoft.com/en-us/azure/security/fundamentals/identity-management-best-practices)

---

### Manage source control (10-15%)

#### Develop a modern source control strategy

- integrate/migrate disparate source control systems (e.g. GitHub, Azure Repos)
  - [Plan your migration to Git](https://docs.microsoft.com/en-us/azure/devops/learn/git/centralized-to-git)
- design authentication strategies
  - [Authentication overview](https://docs.microsoft.com/en-us/azure/devops/repos/git/auth-overview?view=azure-devops)
- design approach for managing large binary files (e.g. Git LFS)
  - [Use Git Large File Storage (LFS)](https://docs.microsoft.com/en-us/azure/devops/repos/git/manage-large-files?view=azure-devops#use-git-large-file-storage-lfs)
- design approach for cross repository sharing (e.g. Git sub-modules, packages)
  - [Checkout submodules](https://docs.microsoft.com/en-us/azure/devops/pipelines/repos/pipeline-options-for-git?view=azure-devops#checkout-submodules)
- implement workflow hooks
  - [Create a service hook for Azure DevOps Services and TFS with Jenkins](https://docs.microsoft.com/en-us/azure/devops/service-hooks/services/jenkins?view=azure-devops)

#### Plan and implement branching strategies for the source code

- define Pull Requests (PR) guidelines to enforce work item correlation
  - [Review code with pull requests](https://docs.microsoft.com/en-us/azure/devops/repos/git/pull-requests?view=azure-devops)
- implement branch merging restrictions (e.g. branch policies, branch protections, manual,etc.)
  - [Improve code quality with branch policies](https://docs.microsoft.com/en-us/azure/devops/repos/git/branch-policies?view=azure-devops)
- define branch strategy (e.g. trunk based, feature branch, release branch, GitHub flow)
  - [Adopt a Git branching strategy](https://docs.microsoft.com/en-us/azure/devops/repos/git/git-branching-guidance?view=azure-devops)
- design and implement a PR workflow (code reviews, approvals)
  - [Customize and extend pull request workflows with pull request status](https://docs.microsoft.com/en-us/azure/devops/repos/git/pull-request-status?view=azure-devops)
- enforce static code analysis for code-quality consistency on PR
  - [Driving continuous quality of your code with SonarCloud](https://azuredevopslabs.com/labs/vstsextend/sonarcloud/)

#### Configure repositories

- configure permissions in the source control repository
  - [Set branch permissions](https://docs.microsoft.com/en-us/azure/devops/repos/git/branch-permissions?view=azure-devops)
- organize the repository with git-tags
  - [Working with Git tags](https://docs.microsoft.com/en-us/azure/devops/repos/git/git-tags?view=azure-devops)
- plan for handling oversized repositories
  - [Git limits](https://docs.microsoft.com/en-us/azure/devops/repos/git/limits?view=azure-devops)
- plan for content recovery in all repository states
  - [Restore a project](https://docs.microsoft.com/en-us/azure/devops/organizations/projects/restore-project?view=azure-devops)
- purge data from source control
  - [Destroy Version Controlled Files](https://docs.microsoft.com/en-us/azure/devops/repos/tfvc/destroy-version-controlled-files?view=azure-devops)

#### Integrate source control with tools

- integrate GitHub with DevOps pipelines
  - [Integrate Your GitHub Projects With Azure Pipelines](https://www.azuredevopslabs.com/labs/azuredevops/github-integration/)
- integrate GitHub with identity management solutions (Azure AD)
  - [Connecting your identity provider to your organization](https://docs.github.com/en/github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization)
- design for GitOps
  - [GitOps for Azure Rendering](https://techcommunity.microsoft.com/t5/azure-storage/gitops-for-azure-rendering/ba-p/1326920)
- design for ChatOps
  - [How ChatOps Can Help You DevOps Better](https://chatbotsmagazine.com/how-chatops-can-help-you-devops-better-5-minutes-read-507438c156bf)
- integrate source control artifacts for human consumption (e.g. Git changelog)
  - [Auto-generating release notes in Azure DevOps pipelines](https://willys-cave.ghost.io/auto-generating-release-notes-in-azure-devops-pipelines/)

---

### Facilitate communication and collaboration (10-15%)

#### Communicate deployment and release information with business stakeholders

- create dashboards combining boards, pipelines (custom dashboards on Azure DevOps)
  - [About dashboards, charts, reports, & widgets](https://docs.microsoft.com/en-us/azure/devops/report/dashboards/overview?view=azure-devops)
- design a cost management communication strategy
  - [Cost Management discipline overview](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/govern/cost-management/)
- integrate release pipeline with work item tracking (e.g. AZ DevOps, Jira)
  - [How to retrieve all work items associated with a release pipeline using Azure DevOps API](https://devblogs.microsoft.com/premier-developer/how-to-retrieve-all-work-items-associated-with-a-release-pipeline-using-azure-devops-api/)
- integrate GitHub as repository with Azure Boards
  - [GitHub integration with Azure Boards](https://azuredevopslabs.com/labs/vstsextend/github-azureboards/)
- communicate user analytics
  - [Use Azure Application Insights to understand how customers are using your application](https://docs.microsoft.com/en-us/azure/azure-monitor/learn/tutorial-users)

#### Generate DevOps process documentation

- design onboarding process for new employees
  - [Onboarding Azure DevOps](https://github.com/dotnet/arcade/blob/master/Documentation/AzureDevOps/AzureDevOpsOnboarding.md#azure-devops-pull-request-and-ci-builds)
- assess and document external dependencies (e.g. integrations, packages)
  - [Plan and track dependencies using the Dependency Tracker](https://docs.microsoft.com/en-us/azure/devops/boards/extensions/dependency-tracker?view=azure-devops)
- assess and document artifacts (version, release notes)
  - [Deep dive into Azure Artifacts](https://azure.microsoft.com/en-in/blog/deep-dive-into-azure-artifacts/)

#### Automate communication with team members

- integrate monitoring tools with communication platforms (e.g. Teams, Slack, dashboards)
  - [Create a service hook for Azure DevOps with Microsoft Teams](https://docs.microsoft.com/en-us/azure/devops/service-hooks/services/teams?view=azure-devops)
  - [Create a service hook for Azure DevOps with Slack](https://docs.microsoft.com/en-us/azure/devops/service-hooks/services/slack?view=azure-devops)
- notify stakeholders about key metrics, alerts, severity using communication platforms(e.g. Email, SMS, Slack, Teams)
  - [Best practices for using push notifications, SMS and email in your mobile app](https://azure.microsoft.com/en-in/blog/best-practices-for-using-push-notifications-sms-and-email-in-your-mobile-app/)
  - [Create a service hook for Azure DevOps with Microsoft Teams](https://docs.microsoft.com/en-us/azure/devops/service-hooks/services/teams?view=azure-devops)
- integrate build and release with communication platforms (e.g. build fails, release fails)
  - [Azure Pipelines with Slack](https://docs.microsoft.com/en-us/azure/devops/pipelines/integrations/slack?view=azure-devops)

---

### Define and implement continuous integration (20-25%)

#### Design build automation

- integrate the build pipeline with external tools (e.g., Dependency and security scanning, Code coverage)
  - [Publish Code Coverage Results task](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/test/publish-code-coverage-results?view=azure-devops)
  - [Scan open source components for vulnerabilities and license ratings in Azure Pipelines](https://docs.microsoft.com/en-us/learn/modules/scan-open-source/)
- implement quality gates (e.g. code coverage, internationalization, peer review)
  - [Code coverage for pull requests](https://docs.microsoft.com/en-us/azure/devops/pipelines/test/codecoverage-for-pullrequests?view=azure-devops)
  - [Release deployment control using gates](https://docs.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates?view=azure-devops)
- design a testing strategy (e.g. integration, load, fuzz, API, chaos)
  - [Run URL-based load tests with Azure DevOps](https://docs.microsoft.com/en-us/azure/devops/test/load-test/get-started-simple-cloud-load-test?view=azure-devops)
  - [Test Management](https://docs.microsoft.com/en-us/rest/api/azure/devops/test/?view=azure-devops-rest-6.0)
- integrate multiple tools (e.g. GitHub Actions, Azure Pipeline, Jenkins)
  - [Configuring a CD pipeline for your Jenkins CI](https://azuredevopslabs.com/labs/vstsextend/Jenkins/)
  - [Use GitHub Actions to trigger a run in Azure Pipelines](https://docs.microsoft.com/en-us/azure/devops/release-notes/2019/sprint-161-update)

#### Design a package management strategy

- recommend package management tools (e.g. GitHub Packages, Azure Artifacts, Azure Automation Runbooks Gallery, Nuget, Jfrog, Artifactory)
  - [JFrog - Package Management](https://www.jfrog.com/confluence/display/JFROG/Package+Management)
  - [Package Management with Azure Artifacts](https://azuredevopslabs.com/labs/azuredevops/packagemanagement/)
- design an Azure Artifacts implementation including linked feeds
  - [What are feeds?](https://docs.microsoft.com/en-us/azure/devops/artifacts/concepts/feeds?view=azure-devops)
- design versioning strategy for code assets (e.g. SemVer, date based)
  - [Build Versioning in Azure DevOps Pipelines](https://medium.com/@ychetankumarsarma/build-versioning-in-azure-devops-pipelines-94b5a79f80a0)
- plan for assessing and updating and reporting package dependencies (GitHub Automated Security Updates, NuKeeper, GreenKeeper)
  - [Configuring GitHub Dependabot security updates](https://docs.github.com/en/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)
  - [NuKeeper AzureDevops Extension](https://github.com/NuKeeperDotNet/NuKeeper-AzureDevops-extension#nukeeper-azuredevops-extension)
- design a versioning strategy for packages (e.g. SemVer, date based)
  - [Perfecting Continuous Delivery of NuGet packages for Azure Artifacts](https://cloudblogs.microsoft.com/industry-blog/en-gb/technetuk/2019/06/18/perfecting-continuous-delivery-of-nuget-packages-for-azure-artifacts/)
  - [Versioning NuGet packages in a continuous delivery world: part 1](https://devblogs.microsoft.com/devops/versioning-nuget-packages-cd-1/)
- design a versioning strategy for deployment artifacts
  - [Release pipelines](https://docs.microsoft.com/en-us/azure/devops/pipelines/release/?view=azure-devops)

#### Design an application infrastructure management strategy

- assess a configuration management mechanism for application infrastructure
  - [Simplify the management of application configurations with Azure App Configuration](https://azure.microsoft.com/en-in/blog/simplify-the-management-of-application-configurations-with-azure-app-configuration/)
- define and enforce desired state configuration for environments
  - [The what, why and how of Azure Automation Desired State Configuration (DSC)](https://azure.microsoft.com/en-in/blog/what-why-how-azure-automation-desired-state-configuration/)

#### Implement a build strategy

- design and implement build agent infrastructure (include cost, tool selection, licenses, maintainability)
  - [Host your own build agent in Azure Pipelines](https://docs.microsoft.com/en-us/learn/modules/host-build-agent/)
- develop and implement build trigger rules
  - [Trigger one pipeline after another](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/pipeline-triggers?view=azure-devops&tabs=yaml)
- develop build pipelines
  - [Create your first pipeline](https://docs.microsoft.com/en-us/azure/devops/pipelines/create-first-pipeline?view=azure-devops&tabs=java%2Cyaml%2Cbrowser%2Ctfs-2018-2)
- design build orchestration (products that are composed of multiple builds)
  - [Create a multi-platform pipeline](https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started-multiplatform?view=azure-devops)
- integrate configuration into build process
  - [Integrate with a CI/CD pipeline](https://docs.microsoft.com/en-us/azure/azure-app-configuration/integrate-ci-cd-pipeline)
- develop complex build scenarios (e.g. containerized agents, hybrid, GPU)
  - [Enabling DevOps in A Hybrid Cloud Environment at DoD](https://devblogs.microsoft.com/premier-developer/enabling-devops-in-a-hybrid-cloud-environment-at-dod/)

#### Maintain build strategy

- monitor pipeline health (failure rate, duration, flaky tests)
  - [Test failures report](https://docs.microsoft.com/en-us/azure/devops/pipelines/reports/pipelinereport?view=azure-devops#test-failures-report)
  - [Manage flaky tests](https://docs.microsoft.com/en-us/azure/devops/pipelines/test/flaky-test-management?view=azure-devops)
- optimize build (cost, time, performance, reliability)
  - [Pipeline caching](https://docs.microsoft.com/en-us/azure/devops/pipelines/release/caching?view=azure-devops)
  - [Caching and faster artifacts in Azure Pipelines](https://devblogs.microsoft.com/devops/caching-and-faster-artifacts-in-azure-pipelines/)
- analyze CI load to determine build agent configuration and capacity
  - [Review logs to diagnose pipeline issues](https://docs.microsoft.com/en-us/azure/devops/pipelines/troubleshooting/review-logs?view=azure-devops)
- manage pipeline health
  - [Pipeline reports](https://docs.microsoft.com/en-us/azure/devops/pipelines/reports/pipelinereport?view=azure-devops)
- identify the number of agents and jobs to run in parallel
  - [Determine how many parallel jobs you need](https://docs.microsoft.com/en-us/azure/devops/pipelines/licensing/concurrent-jobs?view=azure-devops#determine-how-many-parallel-jobs-you-need)
- investigate test failures
  - [Test Failures](https://docs.microsoft.com/en-us/azure/devops/pipelines/test/test-analytics?view=azure-devops#test-failures)

#### Design a process for standardizing builds across organization

- manage self-hosted build agents (VM templates, containerization, etc.)
  - [Self-hosted Windows agents](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/v2-windows?view=azure-devops)
- create reuseable build subsystems (YAML templates, Task Groups, Variable Groups, etc.)
  - [Task groups for builds and releases](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/task-groups?view=azure-devops&viewFallbackFrom=vsts)

---

### Define and implement a continuous delivery and release management strategy (10-15%)

#### Develop deployment scripts and templates

- recommend a deployment solution (e.g. GitHub Actions, Azure Pipelines, Jenkins, CircleCI, etc.)
  - [Continuous Integration: CircleCI vs Travis CI vs Jenkins vs Alternatives](https://djangostars.com/blog/continuous-integration-circleci-vs-travisci-vs-jenkins/)
- design and implement Infrastructure as code (ARM, Terraform, PowerShell, CLI)
  - [What is Infrastructure as Code?](https://docs.microsoft.com/en-us/azure/devops/learn/what-is-infrastructure-as-code)
  - [Terraform with Azure](https://docs.microsoft.com/en-us/azure/developer/terraform/overview)
  - [Infrastructure as code](https://docs.microsoft.com/en-us/dotnet/architecture/cloud-native/infrastructure-as-code)
- develop application deployment process (container, binary, scripts)
  - [Deploy applications with Azure DevOps](https://docs.microsoft.com/en-us/learn/paths/deploy-applications-with-azure-devops/)
- develop database deployment process (migrations, data movement, ETL)
  - [Azure SQL database deployment](https://docs.microsoft.com/en-us/azure/devops/pipelines/targets/azure-sqldb?view=azure-devops&tabs=yaml)
- integrate configuration management as part of the release process
  - [Automating infrastructure deployments in the Cloud with Terraform and Azure Pipelines](https://azuredevopslabs.com/labs/vstsextend/terraform/)
- develop complex deployments (IoT, Azure IoT Edge, mobile, App Center, DR, multi- region, CDN, sovereign cloud, Azure Stack, etc.)
  - [Deploy IoT Edge modules at scale using the Azure portal](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-deploy-at-scale)
  - [New enhancements for Azure IoT Edge automatic deployments](https://azure.microsoft.com/en-in/blog/new-enhancements-for-azure-iot-edge-automatic-deployments/)

#### Implement an orchestration automation solution

- combine release targets depending on release deliverable (e.g., Infrastructure, code, assets, etc.)
  - [Integrating Infrastructure as Code into a Continuous Delivery Pipeline](https://blog.sonatype.com/integrating-infrastructure-as-code-into-a-continuous-delivery-pipeline)
- design the release pipeline to ensure reliable order of dependency deployments
  - [Add stages, dependencies, & conditions](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/stages?view=azure-devops&tabs=yaml)
- organize shared release configurations and process (YAML templates, variable groups)
  - [Provision deployment groups](https://docs.microsoft.com/en-us/azure/devops/pipelines/release/deployment-groups/?view=azure-devops)
- design and implement release gates and approval processes
  - [Controlling Deployments using Release Gates](https://azuredevopslabs.com/labs/vstsextend/releasegates/)

#### Plan the deployment environment strategy

- design a release strategy (blue/green, canary, ring)
  - [What is Continuous Delivery?](https://docs.microsoft.com/en-us/azure/devops/learn/what-is-continuous-delivery)
- implement the release strategy (using deployment slots, load balancer configurations, Azure Traffic Manager, feature toggle, etc.)
  - [Considerations on using Deployment Slots in your DevOps Pipeline](https://devblogs.microsoft.com/devops/considerations-on-using-deployment-slots-in-your-devops-pipeline/)
- select the appropriate desired state solution for a deployment environment (PowerShell DSC, Chef, Puppet, etc.)
  - [Use infrastructure automation tools with virtual machines in Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/infrastructure-automation)
- plan for minimizing downtime during deployments (VIP Swap, Load balancer, rolling deployments, etc.)
  - [Deploying to Azure VM using Deployment Groups](https://azuredevopslabs.com/labs/vstsextend/deploymentgroups/)
  - [Swap Deployment](https://docs.microsoft.com/en-us/rest/api/compute/cloudservices/rest-swap-deployment)
- design a hotfix path plan for responding to high priority code fixes
  - [Releasing Hotfixes](https://docs.microsoft.com/en-us/azure/devops/learn/devops-at-microsoft/release-flow#releasing-hotfixes)

---

I hope you enjoyed all the Microsoft Docs for AZ-400 Study Guide. I recommend you to take practice tests before appearing for official exam, so that you will be confident in the actual exam.

> Practice Tests: [AZ-400 Microsoft Azure DevOps Expert - Prc Test:UPDATED 2021](https://www.udemy.com/course/az-400-microsoft-azure-devops-expert-prc-testupdated-2020-s/?referralCode=C4D94279B68D5D923FAD)

Happy blogging!
