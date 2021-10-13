---
title: AZ-104 Exam Study Guide - Microsoft Azure Administrator
date: "2021-02-15T00:00:00.000Z"
description: "Preparing for AZ-104 Microsoft Azure Administrator exam? Check out our site for study materials(Microsoft docs) for AZ-104 exam objective."
---

If you are preparing for AZ-104 Microsoft Azure Administrator study guide, this study materials helps you to take the exam confidently.

I have prepared the couple of online resources from Microsoft Docs site based on the AZ-104 objectives and it covers all the topics for the exam.

### Manage Azure identities and governance(15-20%)

#### Manage Azure AD objects

- create users and groups
  - [Create Azure users and groups in Azure Active Directory](https://docs.microsoft.com/en-us/learn/modules/create-users-and-groups-in-azure-active-directory/)
  - [Create a basic group and add members using Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-groups-create-azure-portal)
- manage user and group properties
  - [Add or remove group members using Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-groups-members-azure-portal)
  - [Edit your group information using Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-groups-settings-azure-portal)
- manage device settings
  - [Manage device identities using the Azure portal](https://docs.microsoft.com/en-us/azure/active-directory/devices/device-management-azure-portal)
- perform bulk user updates
  - [Bulk create users in Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/users-bulk-add)
- manage guest accounts
  - [Quickstart: Add guest users to your directory in the Azure portal](https://docs.microsoft.com/en-us/azure/active-directory/external-identities/b2b-quickstart-add-guest-users-portal)
  - [Manage guest access with Azure AD access reviews](https://docs.microsoft.com/en-us/azure/active-directory/governance/manage-guest-access-with-access-reviews)
- configure Azure AD Join
  - [How to: Plan your Azure AD join implementation](https://docs.microsoft.com/en-us/azure/active-directory/devices/azureadjoin-plan)
  - [Tutorial: Configure hybrid Azure Active Directory join for managed domains](https://docs.microsoft.com/en-us/azure/active-directory/devices/hybrid-azuread-join-managed-domains)
- configure self-service password reset
  - [How it works: Azure AD self-service password reset](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-sspr-howitworks)
  - [Plan an Azure Active Directory self-service password reset deployment](https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-sspr-deployment)

#### Manage role-based access control (RBAC)

- create a custom role
  - [Azure custom roles](https://docs.microsoft.com/en-us/azure/role-based-access-control/custom-roles)
  - [Create and assign a custom role in Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/roles-create-custom)
- provide access to Azure resources by assigning roles
  - subscriptions
    - [Add or change Azure subscription administrators](https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/add-change-subscription-administrator)
  - resource groups
    - [Add a role assignment](https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal#add-a-role-assignment)
  - resources (VM, disk, etc.)
    - [Tutorial: Grant a user access to Azure resources using the Azure portal](https://docs.microsoft.com/en-us/azure/role-based-access-control/quickstart-assign-role-user-portal)
- interpret access assignments
  - [List Azure role assignments using the Azure portal](https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-list-portal)
  - [Understand Azure deny assignments](https://docs.microsoft.com/en-us/azure/role-based-access-control/deny-assignments)
- manage multiple directories
  - [Understand how multiple Azure Active Directory organizations interact](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/licensing-directory-independence)

#### Manage subscriptions and governance

- configure Azure policies
  - [What is Azure Policy?](https://docs.microsoft.com/en-us/azure/governance/policy/overview)
  - [Quickstart: Create a policy assignment to identify non-compliant resources](https://docs.microsoft.com/en-us/azure/governance/policy/assign-policy-portal)
- configure resource locks
  - [Understand resource locking in Azure Blueprints](https://docs.microsoft.com/en-us/azure/governance/blueprints/concepts/resource-locking)
  - [Lock resources to prevent unexpected changes](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources)
- apply tags
  - [Tutorial: Manage tag governance with Azure Policy](https://docs.microsoft.com/en-us/azure/governance/policy/tutorials/govern-tags)
  - [Tag support for Azure resources](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-support)
- create and manage resource groups
  - move resources
    - [Move resources to a new resource group or subscription](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/move-resource-group-and-subscription)
  - remove RGs
    - [Azure Resource Manager resource group and resource deletion](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/delete-resource-group?tabs=azure-powershell)
- manage subscriptions
  - [Add or change Azure subscription administrators](https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/add-change-subscription-administrator)
  - [Create an additional Azure subscription](https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/create-subscription)
- configure Cost Management
  - [What is Azure Cost Management + Billing?](https://docs.microsoft.com/en-us/azure/cost-management-billing/cost-management-billing-overview)
  - [Quickstart: Explore and analyze costs with cost analysis](https://docs.microsoft.com/en-us/azure/cost-management-billing/costs/quick-acm-cost-analysis)
- configure management groups
  - [Quickstart: Create a management group](https://docs.microsoft.com/bs-cyrl-ba/azure/governance/management-groups/create-management-group-portal)

---

### Implement and manage storage (10-15%)

#### Manage storage accounts

- configure network access to storage accounts
  - [Configure Azure Storage firewalls and virtual networks](https://docs.microsoft.com/en-us/azure/storage/common/storage-network-security)
- create and configure storage accounts
  - [Create an Azure Storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal)
- generate shared access signature
  - [Grant limited access to Azure Storage resources using shared access signatures (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview)
  - [Delegate access with a shared access signature](https://docs.microsoft.com/en-us/rest/api/storageservices/delegate-access-with-shared-access-signature)
- manage access keys
  - [Manage storage account access keys](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal)
- implement Azure storage replication
  - [Azure Storage redundancy](https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy)
- configure Azure AD Authentication for a storage account
  - [Authorize access to blobs and queues using Azure Active Directory](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad)

#### Manage data in Azure Storage

- export from Azure job
  - [Creating an export job for the Azure Import/Export service](https://docs.microsoft.com/en-us/previous-versions/azure/storage/common/storage-import-export-creating-an-export-job)
- import into Azure job
  - [Creating an export job for the Azure Import/Export service](https://docs.microsoft.com/en-us/previous-versions/azure/storage/common/storage-import-export-creating-an-export-job)
- install and use Azure Storage Explorer
  - [Get started with Storage Explorer](https://docs.microsoft.com/en-us/learn/modules/create-azure-storage-account/)
- copy data by using AZCopy
  - [Get started with AzCopy](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10)
  - [Transfer data with AzCopy and file storage](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-files)

#### Configure Azure files and Azure blob storage

- create an Azure file share
  - [Create an Azure file share](https://docs.microsoft.com/en-us/azure/storage/files/storage-how-to-create-file-share?tabs=azure-portal)
  - [Quickstart: Create and manage an Azure file share with Azure PowerShell](https://docs.microsoft.com/en-us/azure/storage/files/storage-how-to-use-files-powershell)
- create and configure Azure File Sync service
  - [Planning for an Azure File Sync deployment](https://docs.microsoft.com/en-us/azure/storage/files/storage-sync-files-planning)
  - [Tutorial: Extend Windows file servers with Azure File Sync](https://docs.microsoft.com/en-us/azure/storage/files/storage-sync-files-extend-servers)
- configure Azure blob storage
  - [Introduction to Azure Blob storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)
  - [Quickstart: Upload, download, and list blobs with the Azure portal](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal)
- configure storage tiers for Azure blobs
  - [Azure Blob storage: hot, cool, and archive access tiers](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers?tabs=azure-portal)

---

### Deploy and manage Azure compute resources (25-30%)

#### Configure VMs for high availability and scalability

- configure high availability
  - [Manage the availability of Windows virtual machines in Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/manage-availability)
  - [Availability options for virtual machines in Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/availability)
  - [Tutorial: Create and deploy highly available virtual machines with Azure PowerShell](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/tutorial-availability-sets)
- deploy and configure scale sets
  - [What are virtual machine scale sets?](https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview)
  - [Quickstart: Create a virtual machine scale set in the Azure portal](https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/quick-create-portal)

#### Automate deployment and configuration of VMs

- modify Azure Resource Manager (ARM) template
  - [What are ARM templates?](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview)
  - [Create a Windows virtual machine from a Resource Manager template](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/ps-template)
- configure VHD template
  - [Create a VM from a VHD by using the Azure portal](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/create-vm-specialized-portal)
- deploy from template
  - [Deploy Azure virtual machines from VHD templates](https://docs.microsoft.com/en-us/learn/modules/deploy-vms-from-vhd-templates/)
- save a deployment as an ARM template
  - [Download the template for a VM](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/download-template)
- automate configuration management by using custom script extensions
  - [Custom Script Extension for Windows](https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/custom-script-windows)
  - [Use the Azure Custom Script Extension Version 2 with Linux virtual machines](https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/custom-script-linux)

#### Create and configure VMs

- configure Azure Disk Encryption
  - [Azure Disk Encryption for Linux VMs](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/disk-encryption-overview)
  - [Azure Disk Encryption for Windows VMs](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/disk-encryption-overview)
- move VMs from one resource group to another
  - [Move resources to new resource group or subscription](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-move-resources)
- manage VM sizes
  - [Resize a Windows VM](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/resize-vm)
- add data discs
  - [Attach a data disk to a Windows VM with PowerShell](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/attach-disk-ps)
  - [Add a disk to a Linux VM using CLI](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/add-disk)
- configure networking
  - [Quickstart: Create a virtual network using the Azure portal](https://docs.microsoft.com/en-us/azure/virtual-network/quick-create-portal)
  - [How to open ports to a virtual machine with the Azure portal](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/nsg-quickstart-portal)
- redeploy VMs
  - [Redeploy Windows virtual machine to new Azure node](https://docs.microsoft.com/en-us/azure/virtual-machines/troubleshooting/redeploy-to-new-node-windows)
  - [Redeploy Linux virtual machine to new Azure node](https://docs.microsoft.com/en-us/azure/virtual-machines/troubleshooting/redeploy-to-new-node-linux)

#### Create and configure containers

- create and configure Azure Kubernetes Service (AKS)
  - [Tutorial: Deploy an Azure Kubernetes Service (AKS) cluster](https://docs.microsoft.com/en-us/azure/aks/tutorial-kubernetes-deploy-cluster)
  - [Quickstart: Deploy an Azure Kubernetes Service cluster using the Azure CLI](https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough)
- create and configure Azure Container Instances (ACI)
  - [Quickstart: Deploy a container instance in Azure using the Azure portal](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-quickstart-portal)

#### Create and configure Web Apps

- create and configure App Service
  - [Configure an App Service app in the Azure portal](https://docs.microsoft.com/en-us/azure/app-service/configure-common)
- create and configure App Service Plans
  - [Manage an App Service plan in Azure](https://docs.microsoft.com/en-us/azure/app-service/app-service-plan-manage)
  - [Azure App Service plan overview](https://docs.microsoft.com/en-us/azure/app-service/overview-hosting-plans)

---

### Configure and manage virtual networking (30-35%)

#### Implement and manage virtual networking

- create and configure VNET peering
  - [Virtual network peering](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview)
  - [Create, change, or delete a virtual network peering](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-peering)
- configure private and public IP addresses, network routes, network interface, subnets, and virtual network
  - [What is Azure Virtual Network?](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview)
  - [Create, change, or delete a virtual network](https://docs.microsoft.com/en-us/azure/virtual-network/manage-virtual-network)
  - [Virtual network traffic routing](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview)
  - [Tutorial: Route network traffic with a route table using the Azure portal](https://docs.microsoft.com/en-us/azure/virtual-network/tutorial-create-route-table-portal)

#### Configure name resolution

- configure Azure DNS
  - [Azure DNS Documentation](https://docs.microsoft.com/en-us/azure/dns/)
  - [Quickstart: Create an Azure DNS zone and record using the Azure portal](https://docs.microsoft.com/en-us/azure/dns/dns-getstarted-portal)
- configure custom DNS settings
  - [Use Azure DNS to provide custom domain settings for an Azure service](https://docs.microsoft.com/en-us/azure/dns/dns-custom-domain)
  - [Tutorial: Map an existing custom DNS name to Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-tutorial-custom-domain)
- configure a private or public DNS zone
  - [Quickstart: Create an Azure private DNS zone using the Azure porta](https://docs.microsoft.com/en-us/azure/dns/private-dns-getstarted-powershell)
  - [Tutorial: Host your domain in Azure DNS](https://docs.microsoft.com/en-us/azure/dns/dns-delegate-domain-azure-dns)

#### Secure access to virtual networks

- create security rules
  - [Create, change, or delete a network security group](https://docs.microsoft.com/en-us/azure/virtual-network/manage-network-security-group)
- associate an NSG to a subnet or network interface
  - [Create, change, or delete a network security group](https://docs.microsoft.com/en-us/azure/virtual-network/manage-network-security-group)
- evaluate effective security rules
  - [Create, change, or delete a network security group](https://docs.microsoft.com/en-us/azure/virtual-network/manage-network-security-group)
- deploy and configure Azure Firewall
  - [Tutorial: Deploy and configure Azure Firewall using the Azure portal](https://docs.microsoft.com/en-us/azure/firewall/tutorial-firewall-deploy-portal)
  - [Tutorial: Deploy and configure Azure Firewall in a hybrid network using the Azure portal](https://docs.microsoft.com/en-us/azure/firewall/tutorial-hybrid-portal)
- deploy and configure Azure Bastion Service
  - [Create an Azure Bastion host using the portal](https://docs.microsoft.com/en-us/azure/bastion/bastion-create-host-portal)

#### Configure load balancing

- configure Application Gateway
  - [Application Gateway configuration overview](https://docs.microsoft.com/en-us/azure/application-gateway/configuration-overview)
  - [Quickstart: Direct web traffic with Azure Application Gateway – Azure portal](https://docs.microsoft.com/en-us/azure/application-gateway/quick-create-portal)
- configure an internal load balancer
  - [Internal Load Balancing](https://azure.microsoft.com/en-ca/blog/internal-load-balancing/)
  - [Tutorial: Balance internal traffic load with a Standard load balancer in the Azure portal](https://docs.microsoft.com/en-us/azure/load-balancer/tutorial-load-balancer-standard-internal-portal)
- configure load balancing rules
  - [Quickstart: Create a Load Balancer to load balance VMs using the Azure portal](https://docs.microsoft.com/en-us/azure/load-balancer/quickstart-load-balancer-standard-public-portal)
  - [Configure load balancing and outbound rules in Standard Load Balancer using Azure CLI](https://docs.microsoft.com/bs-latn-ba/azure/load-balancer/configure-load-balancer-outbound-cli)
- configure a public load balancer
  - [Creating a public load balancer using a template](https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-get-started-internet-arm-template)
- troubleshoot load balancing
  - [Troubleshoot Azure Load Balancer](https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-troubleshoot)

#### Monitor and troubleshoot virtual networking

- monitor on-premises connectivity
  - [Diagnose on-premises connectivity via VPN gateways](https://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-diagnose-on-premises-connectivity)
- use Network Performance Monitor
  - [Network Performance Monitor solution: Performance monitoring](https://docs.microsoft.com/en-us/azure/azure-monitor/insights/network-performance-monitor-performance-monitor)
- use Network Watcher
  - [What is Azure Network Watcher?](https://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-monitoring-overview)
- troubleshoot external networking
  - [Troubleshoot Virtual Network Gateway and Connections using Azure Network Watcher PowerShell](https://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-troubleshoot-manage-powershell)
- troubleshoot virtual network connectivity
  - [Troubleshooting connectivity problems between Azure VMs](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-troubleshoot-connectivity-problem-between-vms)

#### Integrate an on-premises network with an Azure virtual network

- create and configure Azure VPN Gateway
  - [Create a route-based VPN gateway using the Azure portal](https://docs.microsoft.com/en-us/azure/vpn-gateway/create-routebased-vpn-gateway-portal)
  - [Tutorial: Create and manage a VPN gateway using PowerShell](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-tutorial-create-gateway-powershell)
- create and configure VPNs
  - [Create a virtual network with a Site-to-Site VPN connection using CLI](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-howto-site-to-site-resource-manager-cli)
  - [Configure a site-to-site VPN over ExpressRoute Microsoft peering](https://docs.microsoft.com/en-us/azure/expressroute/site-to-site-vpn-over-microsoft-peering)
- configure ExpressRoute
  - [Connect an on-premises network to Azure using ExpressRoute](https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/expressroute)
- configure Azure Virtual WAN
  - [Tutorial: Create a Site-to-Site connection using Azure Virtual WAN](https://docs.microsoft.com/en-us/azure/virtual-wan/virtual-wan-site-to-site-portal)

---

### Monitor and back up Azure resources (10-15%)

#### Monitor resources by using Azure Monitor

- configure and interpret metrics
  - analyze metrics across subscriptions
    - [Metrics in Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/data-platform-metrics)
    - [Quickstart: Monitor an Azure resource with Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/learn/quick-monitor-azure-resource)
- configure Log Analytics
  - implement a Log Analytics workspace
    - [Collect and analyze Azure activity logs in Log Analytics workspace in Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/collect-activity-logs)
    - [Manage access to log data and workspaces in Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/manage-access)
  - configure diagnostic settings
    - [Automatically enable Diagnostic Settings at resource creation using a Resource Manager template](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/diagnostic-logs-stream-template)
- query and analyze logs
  - create a query
    - [Tutorial: Get started with Log Analytics queries](https://docs.microsoft.com/en-us/azure/azure-monitor/log-query/get-started-portal)
  - save a query to the dashboard
    - [Get started with log queries in Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/log-query/get-started-queries)
  - interpret graphs
    - [Creating charts and diagrams from Azure Monitor log queries](https://docs.microsoft.com/en-us/azure/azure-monitor/log-query/charts)
- set up alerts and actions
  - create and test alerts
    - [Overview of alerts in Microsoft Azure](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-overview)
    - [Create, view, and manage activity log alerts using Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-activity-log)
  - create action groups
    - [Create and manage action groups in the Azure portal](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/action-groups)
  - view alerts in Azure Monitor
    - [Create, view, and manage activity log alerts using Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-activity-log)
    - [Create, view, and manage log alerts using Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-log)
  - analyze alerts across subscriptions
    - [Azure Monitor alerting just got better!](https://azure.microsoft.com/en-us/blog/azure-monitor-alerting-just-got-better/)
- configure Application Insights
  - [Manage Application Insights resources using PowerShell](https://docs.microsoft.com/en-us/azure/azure-monitor/app/powershell)

#### Implement backup and recovery

- configure and review backup reports
  - [Configure Azure Backup reports](https://docs.microsoft.com/en-us/azure/backup/backup-azure-configure-reports)
- perform backup and restore operations by using Azure Backup Service
  - [Azure Backup service documentation](https://docs.microsoft.com/en-us/azure/backup/)
  - [Back up a virtual machine in Azure](https://docs.microsoft.com/en-us/azure/backup/quick-backup-vm-portal)
  - [Back up a virtual machine in Azure with PowerShell](https://docs.microsoft.com/en-us/azure/backup/quick-backup-vm-powershell)
- create a Recovery Services Vault
  - use soft delete to recover Azure VMs
    - [Soft delete for virtual machines in Azure Backup](https://azure.microsoft.com/en-us/updates/soft-delete-virtual-machine-backup/)
- create and configure backup policy
  - [Manage Azure VM backups with Azure Backup service](https://docs.microsoft.com/en-us/azure/backup/backup-azure-manage-vms)
- perform site-to-site recovery by using Azure Site Recovery
  - [About Site Recovery](https://docs.microsoft.com/en-us/azure/site-recovery/site-recovery-overview)
  - [Quickstart: Set up disaster recovery to a secondary Azure region for an Azure VM](https://docs.microsoft.com/en-us/azure/site-recovery/azure-to-azure-quickstart)

---

I hope you enjoyed all the Microsoft Docs for AZ-104 Study Guide. I recommend you to take practice tests before appearing for official exam, so that you will be confident in the actual exam.

Happy blogging!
