---
title: AZ-204 Study Guide - Developing Solutions for Microsoft Azure
date: "2021-04-22T00:00:00.000Z"
description: "Preparing AZ 204 Developing Solutions for Microsoft Azure? Check out our site for study materials(Microsoft links) for AZ 204 exam objective."
---

If you are preparing for AZ 204 exam, this study material helps to take the exam confidently. Developing solution for Azure exam (AZ 204) is a bit tougher than the Azure fundamentals exam(AZ 900). I have taken the exam AZ 204 mid of 2020 and scored 90%.

Questions focused on Azure components and solutions which are used to build apps in Azure cloud. I prepared the AZ 204 exam using the Microsoft document links and really helped to clear the exam. 

The developer's guide is availble from microsoft, you can check it [here](https://clouddamcdnprodep.azureedge.net/gdc/1862177/original). Also Its highly recommended to take **practice test** before taking the actual exam. The link is given below,

> Practice Tests: [AZ-204:Developing Solutions for Azure- Prc Test:UPDATED 2021](https://www.udemy.com/course/exam-az-204-developing-solutions-for-ms-azure-practice-test/?referralCode=DE83E178300E694B1118)

### Develop Azure compute solutions (25-30%)

#### Implement IaaS solutions

- provision VMs
  - [Quickstart: Create a Windows virtual machine in the Azure portal](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/quick-create-powershell)
  - [Tutorial: Create and Manage Windows VMs with Azure PowerShell](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/tutorial-manage-vm)
- configure VMs for remote access
  - [How to use SSH keys with Windows on Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/ssh-from-windows)
  - [Secure your management ports with just-in-time access](https://docs.microsoft.com/en-us/azure/security-center/security-center-just-in-time)
- create ARM templates
  - [What are ARM templates?](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview)
  - [Tutorial: Create and deploy your first ARM template](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-tutorial-create-first-template?tabs=azure-powershell)
  - [Understand the structure and syntax of ARM templates](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-syntax)
  - [Build Azure Resource Manager templates](https://docs.microsoft.com/en-us/learn/modules/build-azure-vm-templates/) (Microsoft Learn)
- create container images for solutions by using Docker
  - [Tutorial: Create a container image for deployment to Azure Container Instances](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-tutorial-prepare-app)
  - [Tutorial: Create an Azure container registry and push a container image](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-tutorial-prepare-acr)
  - [Quickstart: Build and run a container image using Azure Container Registry Tasks](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-quickstart-task-cli)
  - [Build and store container images with Azure Container Registry](https://docs.microsoft.com/en-us/learn/modules/build-and-store-container-images/) (Microsoft Learn)
- publish an image to the Azure Container Registry
  - [Deploy to Azure Container Instances from Azure Container Registry](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-using-azure-container-registry)
  - [Push your first image to a private Docker container registry using the Docker CLI](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli)
- run containers by using Azure Container Instance
  - [What is Azure Container Instances?](https://docs.microsoft.com/en-in/azure/container-instances/container-instances-overview)
  - [Quickstart: Deploy a container instance in Azure using Azure PowerShell](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-quickstart-powershell)
  - [Run Docker containers with Azure Container Instances](https://docs.microsoft.com/en-us/learn/modules/run-docker-with-azure-container-instances/) (Microsoft Learn)

---

#### Create Azure App Service Web Apps

- create an Azure App Service Web App
  - [Quickstart: Create an ASP.NET Core web app in Azure](https://docs.microsoft.com/en-us/azure/app-service/quickstart-dotnetcore?pivots=platform-linux)
  - [Tutorial: Build an ASP.NET Core and SQL Database app in Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/tutorial-dotnetcore-sqldb-app?pivots=platform-linux)
- enable diagnostics logging
  - [Enable diagnostics logging for apps in Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/troubleshoot-diagnostic-logs)
  - [Capture Web Application Logs with App Service Diagnostics Logging](https://docs.microsoft.com/en-us/learn/modules/capture-application-logs-app-service/) (Microsoft Learn)
- deploy code to a web app
  - [Deploy an Azure Web App](https://docs.microsoft.com/en-us/azure/devops/pipelines/targets/webapp?view=azure-devops&tabs=yaml)
  - [Continuous deployment to Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/deploy-continuous-deployment)
  - [Deploy your app to Azure App Service with a ZIP or WAR file](https://docs.microsoft.com/en-us/azure/app-service/deploy-zip)
  - [Deploy a website to Azure with Azure App Service](https://docs.microsoft.com/en-us/learn/paths/deploy-a-website-with-azure-app-service/) (Microsoft Learn)
- configure web app settings including SSL, API, and connection strings
  - [Add a TLS/SSL certificate in Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/configure-ssl-certificate)
  - [Secure a custom DNS name with a TLS/SSL binding in Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/configure-ssl-bindings)
  - [Configure an App Service app in the Azure portal](https://docs.microsoft.com/en-us/azure/app-service/configure-common)
  - [az webapp config](https://docs.microsoft.com/en-us/cli/azure/webapp/config?view=azure-cli-latest) (Microsoft Reference)
- implement autoscaling rules, including scheduled autoscaling, and scaling by operational or system metrics
  - [Get started with Autoscale in Azure](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/autoscale-get-started?toc=/azure/app-service/toc.json)
  - [Scale up an app in Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/manage-scale-up)

---

#### **Implement Azure functions**

- implement input and output bindings for a function
  - [Azure Functions triggers and bindings concepts](https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings)
  - [Azure Functions trigger and binding example](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-example)
  - [Chain Azure Functions together using input and output bindings](https://docs.microsoft.com/en-us/learn/modules/chain-azure-functions-data-using-bindings/) (Microsoft Learn)
- implement function triggers by using data operations, timers, and webhooks
    - [Azure Functions HTTP trigger](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=csharp)
    - [Azure Functions custom handlers (preview)](https://docs.microsoft.com/en-us/azure/azure-functions/functions-custom-handlers)
    - [Create a function in Azure that is triggered by a timer](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-scheduled-function)
    - [Timer trigger for Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer?tabs=csharp)
- implement Azure Durable Functions
    - [What are Durable Functions?](https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview?tabs=csharp)
    - [Create your first durable function in C#](https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-create-first-csharp?pivots=code-editor-vscode)
    - [Function chaining in Durable Functions - Hello sequence sample](https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-sequence?tabs=csharp)

---

### Develop for Azure storage (10-15%)

#### Develop solutions that use Cosmos DB storage

- select the appropriate API for your solution
    - [Welcome to Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction)
    - [Choose the appropriate API for Azure Cosmos DB](https://docs.microsoft.com/en-us/learn/modules/choose-api-for-cosmos-db/) (Microsoft Learn)
- implement partitioning schemes
    - [Partitioning in Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/partitioning-overview)
    - [Partitioning and horizontal scaling in Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/partition-data)
- interact with data using the appropriate SDK
    - [Tutorial: Build a .NET console app to manage data in Azure Cosmos DB SQL API account](https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-get-started)
    - [Quickstart: Build a .NET web app using Azure Cosmos DB's API for MongoDB](https://docs.microsoft.com/en-us/azure/cosmos-db/create-mongodb-dotnet)
    - [Quickstart: Build a Table API app with .NET SDK and Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/create-table-dotnet)
    - [Quickstart: Build a Cassandra app with .NET SDK and Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/create-cassandra-dotnet)
- set the appropriate consistency level for operations
    - [Consistency, availability, and performance tradeoffs](https://docs.microsoft.com/en-us/azure/cosmos-db/consistency-levels-tradeoffs)
    - [Consistency levels in Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/consistency-levels)
    - [Choose the right consistency level](https://docs.microsoft.com/en-us/azure/cosmos-db/consistency-levels-choosing)
- create Cosmos DB containers
    - [Create an Azure Cosmos container](https://docs.microsoft.com/en-us/azure/cosmos-db/how-to-create-container)
    - [Work with databases, containers, and items in Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/databases-containers-items)
- implement scaling (partitions, containers)
    - [Create an Azure Cosmos DB database built to scale](https://docs.microsoft.com/en-us/learn/modules/create-cosmos-db-for-scale/) (Microsoft Learn)
    - [Create Azure Cosmos containers and databases with autoscale throughput](https://docs.microsoft.com/en-us/azure/cosmos-db/provision-throughput-autoscale)
- implement server-side programming including stored procedures, triggers, and change feed notifications
    - [How to write stored procedures, triggers, and user-defined functions in Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/how-to-write-stored-procedures-triggers-udfs)

#### Develop solutions that use blob storage

- move items in Blob storage between storage accounts or containers
    - [Transfer data with AzCopy and Blob storage](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs)
    - [Copy and move blobs from one container or storage account to another from the command line and in code](https://docs.microsoft.com/en-us/learn/modules/copy-blobs-from-command-line-and-code/) (Microsoft Learn)
- set and retrieve properties and metadata
    - [Manage container properties and metadata with .NET](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-container-properties-metadata?tabs=dotnet)
    - [Organize Azure storage blobs with properties and metadata](https://docs.microsoft.com/en-us/learn/modules/organize-blobs-properties-metadata/) (Microsoft Learn)
- interact with data using the appropriate SDK
    - [Quickstart: Azure Blob storage client library v12 for .NET](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-dotnet)
    - [Quickstart: Manage blobs with JavaScript v12 SDK in Node.js](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-nodejs)
- implement data archiving and retention
    - [Azure Blob storage: hot, cool, and archive access tiers](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers?tabs=azure-portal)
    - [Rehydrate blob data from the archive tier](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-rehydration?tabs=azure-portal)
    - [Manage the Azure Blob storage lifecycle](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-lifecycle-management-concepts?tabs=azure-portal)
- implement hot, cool, and archive storage
    - [Azure Blob storage: hot, cool, and archive access tiers](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers?tabs=azure-portal)

---

### Implement Azure security (15-20%)

#### Implement user authentication and authorization

- implement OAuth2 authentication
    - [Authorize access to REST APIs with OAuth 2.0](https://docs.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/oauth?view=azure-devops)
    - [Microsoft identity platform and OAuth 2.0 authorization code flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)
- create and implement shared access signatures
    - [Delegate access with a shared access signature](https://docs.microsoft.com/en-us/rest/api/storageservices/delegate-access-with-shared-access-signature)
    - [Grant limited access to Azure Storage resources using shared access signatures (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview)
- register apps and use Azure Active Directory to authenticate users
    - [Configure your App Service or Azure Functions app to use Azure AD login](https://docs.microsoft.com/en-us/azure/app-service/configure-authentication-provider-aad)
    - [Quickstart: Register an application with the Microsoft identity platform](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)
- control access to resources by using role-based access controls (RBAC)
    - [What is Azure role-based access control (Azure RBAC)](https://docs.microsoft.com/en-us/azure/role-based-access-control/overview)
    - [Classic subscription administrator roles, Azure roles, and Azure AD roles](https://docs.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory-admin-roles)

#### Implement secure cloud solutions

- secure app configuration data by using the App Configuration and KeyVault API
    - [Tutorial: Use a managed identity to connect Key Vault to an Azure Web App with .NET](https://docs.microsoft.com/en-us/azure/key-vault/general/tutorial-net-create-vault-azure-web-app)
    - [Azure Key Vault Configuration Provider in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/security/key-vault-configuration?view=aspnetcore-3.1)
- manage keys, secrets, and certificates by using the KeyVault API
    - [About keys, secrets, and certificates](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates)
    - [Secure access to a key vault](https://docs.microsoft.com/en-us/azure/key-vault/general/secure-your-key-vault)
    - [Configure and manage secrets in Azure Key Vault](https://docs.microsoft.com/en-us/learn/modules/configure-and-manage-azure-key-vault/) (Microsoft Learn)
- implement Managed Identities for Azure resources
    - [What are managed identities for Azure resources?](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview)
    - [How to use managed identities for App Service and Azure Functions](https://docs.microsoft.com/en-us/azure/app-service/overview-managed-identity?tabs=dotnet)

---

### Monitor, troubleshoot, and optimize Azure solutions (10-15%)

#### Integrate caching and content delivery within solutions

- develop code to implement CDNs in solutions
    - [What is a content delivery network on Azure?](https://docs.microsoft.com/en-us/azure/cdn/cdn-overview)
    - [Quickstart: Create an Azure CDN profile and endpoint - ARM template](https://docs.microsoft.com/en-us/azure/cdn/create-profile-endpoint-template)
    - [Tutorial: Add Azure CDN to an Azure App Service web app](https://docs.microsoft.com/en-us/azure/cdn/cdn-add-to-web-app)
    - [Optimize Azure CDN for the type of content delivery](https://docs.microsoft.com/en-us/azure/cdn/cdn-optimization-overview)
- configure cache and expiration policies for FrontDoor, CDNs, or Redis caches
    - [Caching with Azure Front Door](https://docs.microsoft.com/en-us/azure/frontdoor/front-door-caching)
    - [Azure Front Door Rules Engine Actions](https://docs.microsoft.com/en-us/azure/frontdoor/front-door-rules-engine-actions)
    - [Manage expiration of web content in Azure CDN](https://docs.microsoft.com/en-us/azure/cdn/cdn-manage-expiration-of-cloud-service-content)
    - [How to configure Azure Cache for Redis](https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-configure)
- Store and retrieve data in Azure Redis cache
    - [Quickstart: Use Azure Cache for Redis with an ASP.NET web app](https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-web-app-howto)
    - [ASP. NET Session State Provider for Azure Cache for Redis](https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-aspnet-session-state-provider)

#### Instrument solutions to support monitoring and logging

- configure instrumentation in an app or service by using Application Insights
    - [Application Insights for Azure cloud services](https://docs.microsoft.com/en-us/azure/azure-monitor/app/cloudservices)
    - [Start monitoring your ASP.NET Web Application](https://docs.microsoft.com/en-us/azure/azure-monitor/learn/quick-monitor-portal)
- analyze log data and troubleshoot solutions by using Azure Monitor
    - [Azure Monitor overview](https://docs.microsoft.com/en-us/azure/azure-monitor/overview)
    - [Logs in Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/data-platform-logs)
    - [Tutorial: Troubleshoot an App Service app with Azure Monitor](https://docs.microsoft.com/en-us/azure/app-service/tutorial-troubleshoot-monitor)
- implement Application Insights Web Test and Alerts
    - [Monitor the availability of any website](https://docs.microsoft.com/en-us/azure/azure-monitor/app/monitor-web-app-availability)
    - [Multi-step web tests](https://docs.microsoft.com/en-us/azure/azure-monitor/app/availability-multistep)
    - [Availability alerts](https://docs.microsoft.com/en-us/azure/azure-monitor/app/availability-alerts)
- implement code that handles transient faults
    - [Transient fault handling](https://docs.microsoft.com/en-us/azure/architecture/best-practices/transient-faults)
    - [Transient Fault Handling (Building Real-World Cloud Apps with Azure)](https://docs.microsoft.com/en-us/aspnet/aspnet/overview/developing-apps-with-windows-azure/building-real-world-cloud-apps-with-windows-azure/transient-fault-handling)

---

### Connect to and consume Azure services and third-party services (25-30%)

#### Develop an App Service Logic App

- create a Logic App
    - [Overview - What is Azure Logic Apps?](https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-overview)
    - [Introduction to Azure Logic Apps](https://docs.microsoft.com/en-us/learn/modules/intro-to-logic-apps/) (Microsoft Learn)
    - [Quickstart: Create your first automated integration workflow by using Azure Logic Apps - Azure portal](https://docs.microsoft.com/en-us/azure/logic-apps/quickstart-create-first-logic-app-workflow)
    - [Tutorial: Create automated, schedule-based, recurring workflows by using Azure Logic Apps](https://docs.microsoft.com/en-us/azure/logic-apps/tutorial-build-schedule-recurring-logic-app-workflow)
- create a custom connector for Logic Apps
    - [Connectors for Azure Logic Apps](https://docs.microsoft.com/en-us/azure/connectors/apis-list)
    - [Call an API from a Logic Apps workflow using a custom connector](https://docs.microsoft.com/en-us/learn/modules/logic-apps-and-custom-connectors/) (Microsoft Learn)
- create a custom template for Logic Apps
    - [Create logic app workflows from prebuilt templates](https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-create-logic-apps-from-templates)

#### Implement API Management

- create an APIM instance
    - [Create a new Azure API Management service instance by using PowerShell](https://docs.microsoft.com/en-us/azure/api-management/powershell-create-service-instance)
- configure authentication for APIs
    - [API Management authentication policies](https://docs.microsoft.com/en-us/azure/api-management/api-management-authentication-policies)
    - [Secure an Azure API Management API with Azure AD B2C](https://docs.microsoft.com/en-us/azure/active-directory-b2c/secure-api-management?tabs=app-reg-ga)
- define policies for APIs
    - [API Management policies](https://docs.microsoft.com/en-us/azure/api-management/api-management-policies)
    - [How to set or edit Azure API Management policies](https://docs.microsoft.com/en-us/azure/api-management/set-edit-policies)
    - [API Management advanced policies](https://docs.microsoft.com/en-us/azure/api-management/api-management-advanced-policies)

#### Develop event-based solutions

- implement solutions that use Azure Event Grid
    - [What is Azure Event Grid?](https://docs.microsoft.com/en-us/azure/event-grid/overview)
    - [Quickstart: Route custom events to an Azure Function with Event Grid](https://docs.microsoft.com/en-us/azure/event-grid/custom-event-to-function)
    - [Tutorial: Stream big data into a data warehouse](https://docs.microsoft.com/en-us/azure/event-grid/event-grid-event-hubs-integration)
- implement solutions that use Azure Notification Hubs
    - [What is Azure Notification Hubs?](https://docs.microsoft.com/en-us/azure/notification-hubs/notification-hubs-push-notification-overview)
    - [Tutorial: Send notifications to specific users by using Azure Notification Hubs](https://docs.microsoft.com/en-us/azure/notification-hubs/notification-hubs-aspnet-backend-windows-dotnet-wns-notification)
- implement solutions that use Azure Event Hub
    - [Azure Event Hubs — A big data streaming platform and event ingestion service](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-about)
    - [Quickstart: Create an event hub using Azure CLI](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-quickstart-cli)
    - [Send events to and receive events from Azure Event Hubs - .NET](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-dotnet-standard-getstarted-send)

#### Develop message-based solutions

- implement solutions that use Azure Service Bus
    - [What is Azure Service Bus?](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview)
    - [Get started with Service Bus topics](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dotnet-how-to-use-topics-subscriptions)
    - [Use the Azure CLI to create a Service Bus namespace and a queue](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quickstart-cli)
- implement solutions that use Azure Queue Storage queues
    - [What are Azure queues?](https://docs.microsoft.com/en-us/azure/storage/queues/storage-queues-introduction)
    - [Get started with Azure Queue storage using .NET](https://docs.microsoft.com/en-us/azure/storage/queues/storage-dotnet-how-to-use-queues?tabs=dotnet)
    - [Tutorial: Work with Azure storage queues in .NET](https://docs.microsoft.com/en-us/azure/storage/queues/storage-tutorial-queues?tabs=dotnet)

I hope you enjoyed all the Microsoft Docs for AZ-204 Study Guide. I recommend you to take practice tests before appearing for official exam, so that you will be confident in the actual exam.

> [AZ-204:Developing Solutions for Azure- Prc Test:UPDATED 2021](https://www.udemy.com/course/exam-az-204-developing-solutions-for-ms-azure-practice-test/?referralCode=DE83E178300E694B1118)

Happy blogging!