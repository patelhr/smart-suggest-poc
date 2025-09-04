export interface ModuleNode { id:string; name:string; route:string; category:string; subcategory:string; child:string; tags?:string[]; contextHints?:string[]; description?:string; demoType:'form'|'table'|'upload'|'calculator'|'kpi'|'editor'|'todo'|'selector'|'counter'; }
export const ALL_MODULES: ModuleNode[] = [
  {
    "id": "sales-orders-create-order",
    "name": "Create Order",
    "route": "/sales/orders/create-order",
    "category": "Sales",
    "subcategory": "Orders",
    "child": "Create Order",
    "tags": [
      "Sales",
      "Orders",
      "Create Order"
    ],
    "contextHints": [
      "Sales",
      "Orders"
    ],
    "description": "Create Order in Orders \u00b7 Sales",
    "demoType": "form"
  },
  {
    "id": "sales-orders-order-returns",
    "name": "Order Returns",
    "route": "/sales/orders/order-returns",
    "category": "Sales",
    "subcategory": "Orders",
    "child": "Order Returns",
    "tags": [
      "Sales",
      "Orders",
      "Order Returns"
    ],
    "contextHints": [
      "Sales",
      "Orders"
    ],
    "description": "Order Returns in Orders \u00b7 Sales",
    "demoType": "table"
  },
  {
    "id": "sales-orders-discount-calculator",
    "name": "Discount Calculator",
    "route": "/sales/orders/discount-calculator",
    "category": "Sales",
    "subcategory": "Orders",
    "child": "Discount Calculator",
    "tags": [
      "Sales",
      "Orders",
      "Discount Calculator"
    ],
    "contextHints": [
      "Sales",
      "Orders"
    ],
    "description": "Discount Calculator in Orders \u00b7 Sales",
    "demoType": "calculator"
  },
  {
    "id": "sales-invoices-new-invoice",
    "name": "New Invoice",
    "route": "/sales/invoices/new-invoice",
    "category": "Sales",
    "subcategory": "Invoices",
    "child": "New Invoice",
    "tags": [
      "Sales",
      "Invoices",
      "New Invoice"
    ],
    "contextHints": [
      "Sales",
      "Invoices"
    ],
    "description": "New Invoice in Invoices \u00b7 Sales",
    "demoType": "form"
  },
  {
    "id": "sales-invoices-invoice-list",
    "name": "Invoice List",
    "route": "/sales/invoices/invoice-list",
    "category": "Sales",
    "subcategory": "Invoices",
    "child": "Invoice List",
    "tags": [
      "Sales",
      "Invoices",
      "Invoice List"
    ],
    "contextHints": [
      "Sales",
      "Invoices"
    ],
    "description": "Invoice List in Invoices \u00b7 Sales",
    "demoType": "table"
  },
  {
    "id": "sales-invoices-send-reminder",
    "name": "Send Reminder",
    "route": "/sales/invoices/send-reminder",
    "category": "Sales",
    "subcategory": "Invoices",
    "child": "Send Reminder",
    "tags": [
      "Sales",
      "Invoices",
      "Send Reminder"
    ],
    "contextHints": [
      "Sales",
      "Invoices"
    ],
    "description": "Send Reminder in Invoices \u00b7 Sales",
    "demoType": "editor"
  },
  {
    "id": "sales-quotes-create-quote",
    "name": "Create Quote",
    "route": "/sales/quotes/create-quote",
    "category": "Sales",
    "subcategory": "Quotes",
    "child": "Create Quote",
    "tags": [
      "Sales",
      "Quotes",
      "Create Quote"
    ],
    "contextHints": [
      "Sales",
      "Quotes"
    ],
    "description": "Create Quote in Quotes \u00b7 Sales",
    "demoType": "form"
  },
  {
    "id": "sales-quotes-quote-list",
    "name": "Quote List",
    "route": "/sales/quotes/quote-list",
    "category": "Sales",
    "subcategory": "Quotes",
    "child": "Quote List",
    "tags": [
      "Sales",
      "Quotes",
      "Quote List"
    ],
    "contextHints": [
      "Sales",
      "Quotes"
    ],
    "description": "Quote List in Quotes \u00b7 Sales",
    "demoType": "table"
  },
  {
    "id": "sales-quotes-convert-to-order",
    "name": "Convert to Order",
    "route": "/sales/quotes/convert-to-order",
    "category": "Sales",
    "subcategory": "Quotes",
    "child": "Convert to Order",
    "tags": [
      "Sales",
      "Quotes",
      "Convert to Order"
    ],
    "contextHints": [
      "Sales",
      "Quotes"
    ],
    "description": "Convert to Order in Quotes \u00b7 Sales",
    "demoType": "selector"
  },
  {
    "id": "inventory-products-add-product",
    "name": "Add Product",
    "route": "/inventory/products/add-product",
    "category": "Inventory",
    "subcategory": "Products",
    "child": "Add Product",
    "tags": [
      "Inventory",
      "Products",
      "Add Product"
    ],
    "contextHints": [
      "Inventory",
      "Products"
    ],
    "description": "Add Product in Products \u00b7 Inventory",
    "demoType": "form"
  },
  {
    "id": "inventory-products-product-catalog",
    "name": "Product Catalog",
    "route": "/inventory/products/product-catalog",
    "category": "Inventory",
    "subcategory": "Products",
    "child": "Product Catalog",
    "tags": [
      "Inventory",
      "Products",
      "Product Catalog"
    ],
    "contextHints": [
      "Inventory",
      "Products"
    ],
    "description": "Product Catalog in Products \u00b7 Inventory",
    "demoType": "table"
  },
  {
    "id": "inventory-products-bulk-upload",
    "name": "Bulk Upload",
    "route": "/inventory/products/bulk-upload",
    "category": "Inventory",
    "subcategory": "Products",
    "child": "Bulk Upload",
    "tags": [
      "Inventory",
      "Products",
      "Bulk Upload"
    ],
    "contextHints": [
      "Inventory",
      "Products"
    ],
    "description": "Bulk Upload in Products \u00b7 Inventory",
    "demoType": "upload"
  },
  {
    "id": "inventory-stock-stock-adjustment",
    "name": "Stock Adjustment",
    "route": "/inventory/stock/stock-adjustment",
    "category": "Inventory",
    "subcategory": "Stock",
    "child": "Stock Adjustment",
    "tags": [
      "Inventory",
      "Stock",
      "Stock Adjustment"
    ],
    "contextHints": [
      "Inventory",
      "Stock"
    ],
    "description": "Stock Adjustment in Stock \u00b7 Inventory",
    "demoType": "form"
  },
  {
    "id": "inventory-stock-low-stock-report",
    "name": "Low Stock Report",
    "route": "/inventory/stock/low-stock-report",
    "category": "Inventory",
    "subcategory": "Stock",
    "child": "Low Stock Report",
    "tags": [
      "Inventory",
      "Stock",
      "Low Stock Report"
    ],
    "contextHints": [
      "Inventory",
      "Stock"
    ],
    "description": "Low Stock Report in Stock \u00b7 Inventory",
    "demoType": "kpi"
  },
  {
    "id": "inventory-stock-reorder-planner",
    "name": "Reorder Planner",
    "route": "/inventory/stock/reorder-planner",
    "category": "Inventory",
    "subcategory": "Stock",
    "child": "Reorder Planner",
    "tags": [
      "Inventory",
      "Stock",
      "Reorder Planner"
    ],
    "contextHints": [
      "Inventory",
      "Stock"
    ],
    "description": "Reorder Planner in Stock \u00b7 Inventory",
    "demoType": "selector"
  },
  {
    "id": "inventory-warehouses-bin-transfer",
    "name": "Bin Transfer",
    "route": "/inventory/warehouses/bin-transfer",
    "category": "Inventory",
    "subcategory": "Warehouses",
    "child": "Bin Transfer",
    "tags": [
      "Inventory",
      "Warehouses",
      "Bin Transfer"
    ],
    "contextHints": [
      "Inventory",
      "Warehouses"
    ],
    "description": "Bin Transfer in Warehouses \u00b7 Inventory",
    "demoType": "form"
  },
  {
    "id": "inventory-warehouses-inbound-shipments",
    "name": "Inbound Shipments",
    "route": "/inventory/warehouses/inbound-shipments",
    "category": "Inventory",
    "subcategory": "Warehouses",
    "child": "Inbound Shipments",
    "tags": [
      "Inventory",
      "Warehouses",
      "Inbound Shipments"
    ],
    "contextHints": [
      "Inventory",
      "Warehouses"
    ],
    "description": "Inbound Shipments in Warehouses \u00b7 Inventory",
    "demoType": "table"
  },
  {
    "id": "inventory-warehouses-outbound-shipments",
    "name": "Outbound Shipments",
    "route": "/inventory/warehouses/outbound-shipments",
    "category": "Inventory",
    "subcategory": "Warehouses",
    "child": "Outbound Shipments",
    "tags": [
      "Inventory",
      "Warehouses",
      "Outbound Shipments"
    ],
    "contextHints": [
      "Inventory",
      "Warehouses"
    ],
    "description": "Outbound Shipments in Warehouses \u00b7 Inventory",
    "demoType": "table"
  },
  {
    "id": "customers-crm-add-contact",
    "name": "Add Contact",
    "route": "/customers/crm/add-contact",
    "category": "Customers",
    "subcategory": "CRM",
    "child": "Add Contact",
    "tags": [
      "Customers",
      "CRM",
      "Add Contact"
    ],
    "contextHints": [
      "Customers",
      "CRM"
    ],
    "description": "Add Contact in CRM \u00b7 Customers",
    "demoType": "form"
  },
  {
    "id": "customers-crm-contact-list",
    "name": "Contact List",
    "route": "/customers/crm/contact-list",
    "category": "Customers",
    "subcategory": "CRM",
    "child": "Contact List",
    "tags": [
      "Customers",
      "CRM",
      "Contact List"
    ],
    "contextHints": [
      "Customers",
      "CRM"
    ],
    "description": "Contact List in CRM \u00b7 Customers",
    "demoType": "table"
  },
  {
    "id": "customers-crm-import-leads",
    "name": "Import Leads",
    "route": "/customers/crm/import-leads",
    "category": "Customers",
    "subcategory": "CRM",
    "child": "Import Leads",
    "tags": [
      "Customers",
      "CRM",
      "Import Leads"
    ],
    "contextHints": [
      "Customers",
      "CRM"
    ],
    "description": "Import Leads in CRM \u00b7 Customers",
    "demoType": "upload"
  },
  {
    "id": "customers-accounts-create-account",
    "name": "Create Account",
    "route": "/customers/accounts/create-account",
    "category": "Customers",
    "subcategory": "Accounts",
    "child": "Create Account",
    "tags": [
      "Customers",
      "Accounts",
      "Create Account"
    ],
    "contextHints": [
      "Customers",
      "Accounts"
    ],
    "description": "Create Account in Accounts \u00b7 Customers",
    "demoType": "form"
  },
  {
    "id": "customers-accounts-account-directory",
    "name": "Account Directory",
    "route": "/customers/accounts/account-directory",
    "category": "Customers",
    "subcategory": "Accounts",
    "child": "Account Directory",
    "tags": [
      "Customers",
      "Accounts",
      "Account Directory"
    ],
    "contextHints": [
      "Customers",
      "Accounts"
    ],
    "description": "Account Directory in Accounts \u00b7 Customers",
    "demoType": "table"
  },
  {
    "id": "customers-accounts-merge-duplicates",
    "name": "Merge Duplicates",
    "route": "/customers/accounts/merge-duplicates",
    "category": "Customers",
    "subcategory": "Accounts",
    "child": "Merge Duplicates",
    "tags": [
      "Customers",
      "Accounts",
      "Merge Duplicates"
    ],
    "contextHints": [
      "Customers",
      "Accounts"
    ],
    "description": "Merge Duplicates in Accounts \u00b7 Customers",
    "demoType": "selector"
  },
  {
    "id": "customers-engagement-send-email",
    "name": "Send Email",
    "route": "/customers/engagement/send-email",
    "category": "Customers",
    "subcategory": "Engagement",
    "child": "Send Email",
    "tags": [
      "Customers",
      "Engagement",
      "Send Email"
    ],
    "contextHints": [
      "Customers",
      "Engagement"
    ],
    "description": "Send Email in Engagement \u00b7 Customers",
    "demoType": "editor"
  },
  {
    "id": "customers-engagement-call-log",
    "name": "Call Log",
    "route": "/customers/engagement/call-log",
    "category": "Customers",
    "subcategory": "Engagement",
    "child": "Call Log",
    "tags": [
      "Customers",
      "Engagement",
      "Call Log"
    ],
    "contextHints": [
      "Customers",
      "Engagement"
    ],
    "description": "Call Log in Engagement \u00b7 Customers",
    "demoType": "form"
  },
  {
    "id": "customers-engagement-tasks",
    "name": "Tasks",
    "route": "/customers/engagement/tasks",
    "category": "Customers",
    "subcategory": "Engagement",
    "child": "Tasks",
    "tags": [
      "Customers",
      "Engagement",
      "Tasks"
    ],
    "contextHints": [
      "Customers",
      "Engagement"
    ],
    "description": "Tasks in Engagement \u00b7 Customers",
    "demoType": "todo"
  },
  {
    "id": "finance-expenses-log-expense",
    "name": "Log Expense",
    "route": "/finance/expenses/log-expense",
    "category": "Finance",
    "subcategory": "Expenses",
    "child": "Log Expense",
    "tags": [
      "Finance",
      "Expenses",
      "Log Expense"
    ],
    "contextHints": [
      "Finance",
      "Expenses"
    ],
    "description": "Log Expense in Expenses \u00b7 Finance",
    "demoType": "form"
  },
  {
    "id": "finance-expenses-expense-report",
    "name": "Expense Report",
    "route": "/finance/expenses/expense-report",
    "category": "Finance",
    "subcategory": "Expenses",
    "child": "Expense Report",
    "tags": [
      "Finance",
      "Expenses",
      "Expense Report"
    ],
    "contextHints": [
      "Finance",
      "Expenses"
    ],
    "description": "Expense Report in Expenses \u00b7 Finance",
    "demoType": "table"
  },
  {
    "id": "finance-expenses-export-csv",
    "name": "Export CSV",
    "route": "/finance/expenses/export-csv",
    "category": "Finance",
    "subcategory": "Expenses",
    "child": "Export CSV",
    "tags": [
      "Finance",
      "Expenses",
      "Export CSV"
    ],
    "contextHints": [
      "Finance",
      "Expenses"
    ],
    "description": "Export CSV in Expenses \u00b7 Finance",
    "demoType": "selector"
  },
  {
    "id": "finance-payments-record-payment",
    "name": "Record Payment",
    "route": "/finance/payments/record-payment",
    "category": "Finance",
    "subcategory": "Payments",
    "child": "Record Payment",
    "tags": [
      "Finance",
      "Payments",
      "Record Payment"
    ],
    "contextHints": [
      "Finance",
      "Payments"
    ],
    "description": "Record Payment in Payments \u00b7 Finance",
    "demoType": "form"
  },
  {
    "id": "finance-payments-payouts",
    "name": "Payouts",
    "route": "/finance/payments/payouts",
    "category": "Finance",
    "subcategory": "Payments",
    "child": "Payouts",
    "tags": [
      "Finance",
      "Payments",
      "Payouts"
    ],
    "contextHints": [
      "Finance",
      "Payments"
    ],
    "description": "Payouts in Payments \u00b7 Finance",
    "demoType": "table"
  },
  {
    "id": "finance-payments-reconcile",
    "name": "Reconcile",
    "route": "/finance/payments/reconcile",
    "category": "Finance",
    "subcategory": "Payments",
    "child": "Reconcile",
    "tags": [
      "Finance",
      "Payments",
      "Reconcile"
    ],
    "contextHints": [
      "Finance",
      "Payments"
    ],
    "description": "Reconcile in Payments \u00b7 Finance",
    "demoType": "selector"
  },
  {
    "id": "finance-budgets-create-budget",
    "name": "Create Budget",
    "route": "/finance/budgets/create-budget",
    "category": "Finance",
    "subcategory": "Budgets",
    "child": "Create Budget",
    "tags": [
      "Finance",
      "Budgets",
      "Create Budget"
    ],
    "contextHints": [
      "Finance",
      "Budgets"
    ],
    "description": "Create Budget in Budgets \u00b7 Finance",
    "demoType": "form"
  },
  {
    "id": "finance-budgets-budget-vs-actuals",
    "name": "Budget vs Actuals",
    "route": "/finance/budgets/budget-vs-actuals",
    "category": "Finance",
    "subcategory": "Budgets",
    "child": "Budget vs Actuals",
    "tags": [
      "Finance",
      "Budgets",
      "Budget vs Actuals"
    ],
    "contextHints": [
      "Finance",
      "Budgets"
    ],
    "description": "Budget vs Actuals in Budgets \u00b7 Finance",
    "demoType": "kpi"
  },
  {
    "id": "finance-budgets-adjust-allocation",
    "name": "Adjust Allocation",
    "route": "/finance/budgets/adjust-allocation",
    "category": "Finance",
    "subcategory": "Budgets",
    "child": "Adjust Allocation",
    "tags": [
      "Finance",
      "Budgets",
      "Adjust Allocation"
    ],
    "contextHints": [
      "Finance",
      "Budgets"
    ],
    "description": "Adjust Allocation in Budgets \u00b7 Finance",
    "demoType": "editor"
  },
  {
    "id": "hr-recruitment-post-job",
    "name": "Post Job",
    "route": "/hr/recruitment/post-job",
    "category": "HR",
    "subcategory": "Recruitment",
    "child": "Post Job",
    "tags": [
      "HR",
      "Recruitment",
      "Post Job"
    ],
    "contextHints": [
      "HR",
      "Recruitment"
    ],
    "description": "Post Job in Recruitment \u00b7 HR",
    "demoType": "form"
  },
  {
    "id": "hr-recruitment-candidate-list",
    "name": "Candidate List",
    "route": "/hr/recruitment/candidate-list",
    "category": "HR",
    "subcategory": "Recruitment",
    "child": "Candidate List",
    "tags": [
      "HR",
      "Recruitment",
      "Candidate List"
    ],
    "contextHints": [
      "HR",
      "Recruitment"
    ],
    "description": "Candidate List in Recruitment \u00b7 HR",
    "demoType": "table"
  },
  {
    "id": "hr-recruitment-schedule-interview",
    "name": "Schedule Interview",
    "route": "/hr/recruitment/schedule-interview",
    "category": "HR",
    "subcategory": "Recruitment",
    "child": "Schedule Interview",
    "tags": [
      "HR",
      "Recruitment",
      "Schedule Interview"
    ],
    "contextHints": [
      "HR",
      "Recruitment"
    ],
    "description": "Schedule Interview in Recruitment \u00b7 HR",
    "demoType": "selector"
  },
  {
    "id": "hr-employees-add-employee",
    "name": "Add Employee",
    "route": "/hr/employees/add-employee",
    "category": "HR",
    "subcategory": "Employees",
    "child": "Add Employee",
    "tags": [
      "HR",
      "Employees",
      "Add Employee"
    ],
    "contextHints": [
      "HR",
      "Employees"
    ],
    "description": "Add Employee in Employees \u00b7 HR",
    "demoType": "form"
  },
  {
    "id": "hr-employees-employee-directory",
    "name": "Employee Directory",
    "route": "/hr/employees/employee-directory",
    "category": "HR",
    "subcategory": "Employees",
    "child": "Employee Directory",
    "tags": [
      "HR",
      "Employees",
      "Employee Directory"
    ],
    "contextHints": [
      "HR",
      "Employees"
    ],
    "description": "Employee Directory in Employees \u00b7 HR",
    "demoType": "table"
  },
  {
    "id": "hr-employees-leave-requests",
    "name": "Leave Requests",
    "route": "/hr/employees/leave-requests",
    "category": "HR",
    "subcategory": "Employees",
    "child": "Leave Requests",
    "tags": [
      "HR",
      "Employees",
      "Leave Requests"
    ],
    "contextHints": [
      "HR",
      "Employees"
    ],
    "description": "Leave Requests in Employees \u00b7 HR",
    "demoType": "todo"
  },
  {
    "id": "hr-payroll-run-payroll",
    "name": "Run Payroll",
    "route": "/hr/payroll/run-payroll",
    "category": "HR",
    "subcategory": "Payroll",
    "child": "Run Payroll",
    "tags": [
      "HR",
      "Payroll",
      "Run Payroll"
    ],
    "contextHints": [
      "HR",
      "Payroll"
    ],
    "description": "Run Payroll in Payroll \u00b7 HR",
    "demoType": "selector"
  },
  {
    "id": "hr-payroll-salary-slips",
    "name": "Salary Slips",
    "route": "/hr/payroll/salary-slips",
    "category": "HR",
    "subcategory": "Payroll",
    "child": "Salary Slips",
    "tags": [
      "HR",
      "Payroll",
      "Salary Slips"
    ],
    "contextHints": [
      "HR",
      "Payroll"
    ],
    "description": "Salary Slips in Payroll \u00b7 HR",
    "demoType": "table"
  },
  {
    "id": "hr-payroll-tax-declarations",
    "name": "Tax Declarations",
    "route": "/hr/payroll/tax-declarations",
    "category": "HR",
    "subcategory": "Payroll",
    "child": "Tax Declarations",
    "tags": [
      "HR",
      "Payroll",
      "Tax Declarations"
    ],
    "contextHints": [
      "HR",
      "Payroll"
    ],
    "description": "Tax Declarations in Payroll \u00b7 HR",
    "demoType": "upload"
  },
  {
    "id": "operations-logistics-create-shipment",
    "name": "Create Shipment",
    "route": "/operations/logistics/create-shipment",
    "category": "Operations",
    "subcategory": "Logistics",
    "child": "Create Shipment",
    "tags": [
      "Operations",
      "Logistics",
      "Create Shipment"
    ],
    "contextHints": [
      "Operations",
      "Logistics"
    ],
    "description": "Create Shipment in Logistics \u00b7 Operations",
    "demoType": "form"
  },
  {
    "id": "operations-logistics-track-shipment",
    "name": "Track Shipment",
    "route": "/operations/logistics/track-shipment",
    "category": "Operations",
    "subcategory": "Logistics",
    "child": "Track Shipment",
    "tags": [
      "Operations",
      "Logistics",
      "Track Shipment"
    ],
    "contextHints": [
      "Operations",
      "Logistics"
    ],
    "description": "Track Shipment in Logistics \u00b7 Operations",
    "demoType": "selector"
  },
  {
    "id": "operations-logistics-delivery-exceptions",
    "name": "Delivery Exceptions",
    "route": "/operations/logistics/delivery-exceptions",
    "category": "Operations",
    "subcategory": "Logistics",
    "child": "Delivery Exceptions",
    "tags": [
      "Operations",
      "Logistics",
      "Delivery Exceptions"
    ],
    "contextHints": [
      "Operations",
      "Logistics"
    ],
    "description": "Delivery Exceptions in Logistics \u00b7 Operations",
    "demoType": "table"
  },
  {
    "id": "operations-procurement-new-purchase-order",
    "name": "New Purchase Order",
    "route": "/operations/procurement/new-purchase-order",
    "category": "Operations",
    "subcategory": "Procurement",
    "child": "New Purchase Order",
    "tags": [
      "Operations",
      "Procurement",
      "New Purchase Order"
    ],
    "contextHints": [
      "Operations",
      "Procurement"
    ],
    "description": "New Purchase Order in Procurement \u00b7 Operations",
    "demoType": "form"
  },
  {
    "id": "operations-procurement-po-list",
    "name": "PO List",
    "route": "/operations/procurement/po-list",
    "category": "Operations",
    "subcategory": "Procurement",
    "child": "PO List",
    "tags": [
      "Operations",
      "Procurement",
      "PO List"
    ],
    "contextHints": [
      "Operations",
      "Procurement"
    ],
    "description": "PO List in Procurement \u00b7 Operations",
    "demoType": "table"
  },
  {
    "id": "operations-procurement-vendor-comparison",
    "name": "Vendor Comparison",
    "route": "/operations/procurement/vendor-comparison",
    "category": "Operations",
    "subcategory": "Procurement",
    "child": "Vendor Comparison",
    "tags": [
      "Operations",
      "Procurement",
      "Vendor Comparison"
    ],
    "contextHints": [
      "Operations",
      "Procurement"
    ],
    "description": "Vendor Comparison in Procurement \u00b7 Operations",
    "demoType": "kpi"
  },
  {
    "id": "operations-quality-qc-checklist",
    "name": "QC Checklist",
    "route": "/operations/quality/qc-checklist",
    "category": "Operations",
    "subcategory": "Quality",
    "child": "QC Checklist",
    "tags": [
      "Operations",
      "Quality",
      "QC Checklist"
    ],
    "contextHints": [
      "Operations",
      "Quality"
    ],
    "description": "QC Checklist in Quality \u00b7 Operations",
    "demoType": "todo"
  },
  {
    "id": "operations-quality-defect-log",
    "name": "Defect Log",
    "route": "/operations/quality/defect-log",
    "category": "Operations",
    "subcategory": "Quality",
    "child": "Defect Log",
    "tags": [
      "Operations",
      "Quality",
      "Defect Log"
    ],
    "contextHints": [
      "Operations",
      "Quality"
    ],
    "description": "Defect Log in Quality \u00b7 Operations",
    "demoType": "table"
  },
  {
    "id": "operations-quality-capa-form",
    "name": "CAPA Form",
    "route": "/operations/quality/capa-form",
    "category": "Operations",
    "subcategory": "Quality",
    "child": "CAPA Form",
    "tags": [
      "Operations",
      "Quality",
      "CAPA Form"
    ],
    "contextHints": [
      "Operations",
      "Quality"
    ],
    "description": "CAPA Form in Quality \u00b7 Operations",
    "demoType": "form"
  },
  {
    "id": "marketing-campaigns-create-campaign",
    "name": "Create Campaign",
    "route": "/marketing/campaigns/create-campaign",
    "category": "Marketing",
    "subcategory": "Campaigns",
    "child": "Create Campaign",
    "tags": [
      "Marketing",
      "Campaigns",
      "Create Campaign"
    ],
    "contextHints": [
      "Marketing",
      "Campaigns"
    ],
    "description": "Create Campaign in Campaigns \u00b7 Marketing",
    "demoType": "form"
  },
  {
    "id": "marketing-campaigns-campaign-analytics",
    "name": "Campaign Analytics",
    "route": "/marketing/campaigns/campaign-analytics",
    "category": "Marketing",
    "subcategory": "Campaigns",
    "child": "Campaign Analytics",
    "tags": [
      "Marketing",
      "Campaigns",
      "Campaign Analytics"
    ],
    "contextHints": [
      "Marketing",
      "Campaigns"
    ],
    "description": "Campaign Analytics in Campaigns \u00b7 Marketing",
    "demoType": "kpi"
  },
  {
    "id": "marketing-campaigns-audience-selector",
    "name": "Audience Selector",
    "route": "/marketing/campaigns/audience-selector",
    "category": "Marketing",
    "subcategory": "Campaigns",
    "child": "Audience Selector",
    "tags": [
      "Marketing",
      "Campaigns",
      "Audience Selector"
    ],
    "contextHints": [
      "Marketing",
      "Campaigns"
    ],
    "description": "Audience Selector in Campaigns \u00b7 Marketing",
    "demoType": "selector"
  },
  {
    "id": "marketing-content-asset-library",
    "name": "Asset Library",
    "route": "/marketing/content/asset-library",
    "category": "Marketing",
    "subcategory": "Content",
    "child": "Asset Library",
    "tags": [
      "Marketing",
      "Content",
      "Asset Library"
    ],
    "contextHints": [
      "Marketing",
      "Content"
    ],
    "description": "Asset Library in Content \u00b7 Marketing",
    "demoType": "table"
  },
  {
    "id": "marketing-content-upload-asset",
    "name": "Upload Asset",
    "route": "/marketing/content/upload-asset",
    "category": "Marketing",
    "subcategory": "Content",
    "child": "Upload Asset",
    "tags": [
      "Marketing",
      "Content",
      "Upload Asset"
    ],
    "contextHints": [
      "Marketing",
      "Content"
    ],
    "description": "Upload Asset in Content \u00b7 Marketing",
    "demoType": "upload"
  },
  {
    "id": "marketing-content-content-calendar",
    "name": "Content Calendar",
    "route": "/marketing/content/content-calendar",
    "category": "Marketing",
    "subcategory": "Content",
    "child": "Content Calendar",
    "tags": [
      "Marketing",
      "Content",
      "Content Calendar"
    ],
    "contextHints": [
      "Marketing",
      "Content"
    ],
    "description": "Content Calendar in Content \u00b7 Marketing",
    "demoType": "table"
  },
  {
    "id": "marketing-seo-keyword-planner",
    "name": "Keyword Planner",
    "route": "/marketing/seo/keyword-planner",
    "category": "Marketing",
    "subcategory": "SEO",
    "child": "Keyword Planner",
    "tags": [
      "Marketing",
      "SEO",
      "Keyword Planner"
    ],
    "contextHints": [
      "Marketing",
      "SEO"
    ],
    "description": "Keyword Planner in SEO \u00b7 Marketing",
    "demoType": "editor"
  },
  {
    "id": "marketing-seo-backlink-list",
    "name": "Backlink List",
    "route": "/marketing/seo/backlink-list",
    "category": "Marketing",
    "subcategory": "SEO",
    "child": "Backlink List",
    "tags": [
      "Marketing",
      "SEO",
      "Backlink List"
    ],
    "contextHints": [
      "Marketing",
      "SEO"
    ],
    "description": "Backlink List in SEO \u00b7 Marketing",
    "demoType": "table"
  },
  {
    "id": "marketing-seo-site-audit-notes",
    "name": "Site Audit Notes",
    "route": "/marketing/seo/site-audit-notes",
    "category": "Marketing",
    "subcategory": "SEO",
    "child": "Site Audit Notes",
    "tags": [
      "Marketing",
      "SEO",
      "Site Audit Notes"
    ],
    "contextHints": [
      "Marketing",
      "SEO"
    ],
    "description": "Site Audit Notes in SEO \u00b7 Marketing",
    "demoType": "editor"
  },
  {
    "id": "support-tickets-new-ticket",
    "name": "New Ticket",
    "route": "/support/tickets/new-ticket",
    "category": "Support",
    "subcategory": "Tickets",
    "child": "New Ticket",
    "tags": [
      "Support",
      "Tickets",
      "New Ticket"
    ],
    "contextHints": [
      "Support",
      "Tickets"
    ],
    "description": "New Ticket in Tickets \u00b7 Support",
    "demoType": "form"
  },
  {
    "id": "support-tickets-ticket-queue",
    "name": "Ticket Queue",
    "route": "/support/tickets/ticket-queue",
    "category": "Support",
    "subcategory": "Tickets",
    "child": "Ticket Queue",
    "tags": [
      "Support",
      "Tickets",
      "Ticket Queue"
    ],
    "contextHints": [
      "Support",
      "Tickets"
    ],
    "description": "Ticket Queue in Tickets \u00b7 Support",
    "demoType": "table"
  },
  {
    "id": "support-tickets-sla-dashboard",
    "name": "SLA Dashboard",
    "route": "/support/tickets/sla-dashboard",
    "category": "Support",
    "subcategory": "Tickets",
    "child": "SLA Dashboard",
    "tags": [
      "Support",
      "Tickets",
      "SLA Dashboard"
    ],
    "contextHints": [
      "Support",
      "Tickets"
    ],
    "description": "SLA Dashboard in Tickets \u00b7 Support",
    "demoType": "kpi"
  },
  {
    "id": "support-knowledge-base-new-article",
    "name": "New Article",
    "route": "/support/knowledge-base/new-article",
    "category": "Support",
    "subcategory": "Knowledge Base",
    "child": "New Article",
    "tags": [
      "Support",
      "Knowledge Base",
      "New Article"
    ],
    "contextHints": [
      "Support",
      "Knowledge Base"
    ],
    "description": "New Article in Knowledge Base \u00b7 Support",
    "demoType": "editor"
  },
  {
    "id": "support-knowledge-base-article-list",
    "name": "Article List",
    "route": "/support/knowledge-base/article-list",
    "category": "Support",
    "subcategory": "Knowledge Base",
    "child": "Article List",
    "tags": [
      "Support",
      "Knowledge Base",
      "Article List"
    ],
    "contextHints": [
      "Support",
      "Knowledge Base"
    ],
    "description": "Article List in Knowledge Base \u00b7 Support",
    "demoType": "table"
  },
  {
    "id": "support-knowledge-base-import-articles",
    "name": "Import Articles",
    "route": "/support/knowledge-base/import-articles",
    "category": "Support",
    "subcategory": "Knowledge Base",
    "child": "Import Articles",
    "tags": [
      "Support",
      "Knowledge Base",
      "Import Articles"
    ],
    "contextHints": [
      "Support",
      "Knowledge Base"
    ],
    "description": "Import Articles in Knowledge Base \u00b7 Support",
    "demoType": "upload"
  },
  {
    "id": "support-feedback-nps-survey",
    "name": "NPS Survey",
    "route": "/support/feedback/nps-survey",
    "category": "Support",
    "subcategory": "Feedback",
    "child": "NPS Survey",
    "tags": [
      "Support",
      "Feedback",
      "NPS Survey"
    ],
    "contextHints": [
      "Support",
      "Feedback"
    ],
    "description": "NPS Survey in Feedback \u00b7 Support",
    "demoType": "form"
  },
  {
    "id": "support-feedback-responses",
    "name": "Responses",
    "route": "/support/feedback/responses",
    "category": "Support",
    "subcategory": "Feedback",
    "child": "Responses",
    "tags": [
      "Support",
      "Feedback",
      "Responses"
    ],
    "contextHints": [
      "Support",
      "Feedback"
    ],
    "description": "Responses in Feedback \u00b7 Support",
    "demoType": "table"
  },
  {
    "id": "support-feedback-feature-requests",
    "name": "Feature Requests",
    "route": "/support/feedback/feature-requests",
    "category": "Support",
    "subcategory": "Feedback",
    "child": "Feature Requests",
    "tags": [
      "Support",
      "Feedback",
      "Feature Requests"
    ],
    "contextHints": [
      "Support",
      "Feedback"
    ],
    "description": "Feature Requests in Feedback \u00b7 Support",
    "demoType": "todo"
  },
  {
    "id": "analytics-dashboards-sales-kpis",
    "name": "Sales KPIs",
    "route": "/analytics/dashboards/sales-kpis",
    "category": "Analytics",
    "subcategory": "Dashboards",
    "child": "Sales KPIs",
    "tags": [
      "Analytics",
      "Dashboards",
      "Sales KPIs"
    ],
    "contextHints": [
      "Analytics",
      "Dashboards"
    ],
    "description": "Sales KPIs in Dashboards \u00b7 Analytics",
    "demoType": "kpi"
  },
  {
    "id": "analytics-dashboards-cohort-analysis",
    "name": "Cohort Analysis",
    "route": "/analytics/dashboards/cohort-analysis",
    "category": "Analytics",
    "subcategory": "Dashboards",
    "child": "Cohort Analysis",
    "tags": [
      "Analytics",
      "Dashboards",
      "Cohort Analysis"
    ],
    "contextHints": [
      "Analytics",
      "Dashboards"
    ],
    "description": "Cohort Analysis in Dashboards \u00b7 Analytics",
    "demoType": "table"
  },
  {
    "id": "analytics-dashboards-funnel-overview",
    "name": "Funnel Overview",
    "route": "/analytics/dashboards/funnel-overview",
    "category": "Analytics",
    "subcategory": "Dashboards",
    "child": "Funnel Overview",
    "tags": [
      "Analytics",
      "Dashboards",
      "Funnel Overview"
    ],
    "contextHints": [
      "Analytics",
      "Dashboards"
    ],
    "description": "Funnel Overview in Dashboards \u00b7 Analytics",
    "demoType": "kpi"
  },
  {
    "id": "analytics-reports-ad-hoc-query",
    "name": "Ad-hoc Query",
    "route": "/analytics/reports/ad-hoc-query",
    "category": "Analytics",
    "subcategory": "Reports",
    "child": "Ad-hoc Query",
    "tags": [
      "Analytics",
      "Reports",
      "Ad-hoc Query"
    ],
    "contextHints": [
      "Analytics",
      "Reports"
    ],
    "description": "Ad-hoc Query in Reports \u00b7 Analytics",
    "demoType": "editor"
  },
  {
    "id": "analytics-reports-report-library",
    "name": "Report Library",
    "route": "/analytics/reports/report-library",
    "category": "Analytics",
    "subcategory": "Reports",
    "child": "Report Library",
    "tags": [
      "Analytics",
      "Reports",
      "Report Library"
    ],
    "contextHints": [
      "Analytics",
      "Reports"
    ],
    "description": "Report Library in Reports \u00b7 Analytics",
    "demoType": "table"
  },
  {
    "id": "analytics-reports-schedule-report",
    "name": "Schedule Report",
    "route": "/analytics/reports/schedule-report",
    "category": "Analytics",
    "subcategory": "Reports",
    "child": "Schedule Report",
    "tags": [
      "Analytics",
      "Reports",
      "Schedule Report"
    ],
    "contextHints": [
      "Analytics",
      "Reports"
    ],
    "description": "Schedule Report in Reports \u00b7 Analytics",
    "demoType": "selector"
  },
  {
    "id": "analytics-data-upload-csv",
    "name": "Upload CSV",
    "route": "/analytics/data/upload-csv",
    "category": "Analytics",
    "subcategory": "Data",
    "child": "Upload CSV",
    "tags": [
      "Analytics",
      "Data",
      "Upload CSV"
    ],
    "contextHints": [
      "Analytics",
      "Data"
    ],
    "description": "Upload CSV in Data \u00b7 Analytics",
    "demoType": "upload"
  },
  {
    "id": "analytics-data-model-monitor",
    "name": "Model Monitor",
    "route": "/analytics/data/model-monitor",
    "category": "Analytics",
    "subcategory": "Data",
    "child": "Model Monitor",
    "tags": [
      "Analytics",
      "Data",
      "Model Monitor"
    ],
    "contextHints": [
      "Analytics",
      "Data"
    ],
    "description": "Model Monitor in Data \u00b7 Analytics",
    "demoType": "kpi"
  },
  {
    "id": "analytics-data-field-mapping",
    "name": "Field Mapping",
    "route": "/analytics/data/field-mapping",
    "category": "Analytics",
    "subcategory": "Data",
    "child": "Field Mapping",
    "tags": [
      "Analytics",
      "Data",
      "Field Mapping"
    ],
    "contextHints": [
      "Analytics",
      "Data"
    ],
    "description": "Field Mapping in Data \u00b7 Analytics",
    "demoType": "selector"
  },
  {
    "id": "settings-security-change-password",
    "name": "Change Password",
    "route": "/settings/security/change-password",
    "category": "Settings",
    "subcategory": "Security",
    "child": "Change Password",
    "tags": [
      "Settings",
      "Security",
      "Change Password"
    ],
    "contextHints": [
      "Settings",
      "Security"
    ],
    "description": "Change Password in Security \u00b7 Settings",
    "demoType": "form"
  },
  {
    "id": "settings-security-api-keys",
    "name": "API Keys",
    "route": "/settings/security/api-keys",
    "category": "Settings",
    "subcategory": "Security",
    "child": "API Keys",
    "tags": [
      "Settings",
      "Security",
      "API Keys"
    ],
    "contextHints": [
      "Settings",
      "Security"
    ],
    "description": "API Keys in Security \u00b7 Settings",
    "demoType": "selector"
  },
  {
    "id": "settings-security-user-roles",
    "name": "User Roles",
    "route": "/settings/security/user-roles",
    "category": "Settings",
    "subcategory": "Security",
    "child": "User Roles",
    "tags": [
      "Settings",
      "Security",
      "User Roles"
    ],
    "contextHints": [
      "Settings",
      "Security"
    ],
    "description": "User Roles in Security \u00b7 Settings",
    "demoType": "table"
  },
  {
    "id": "settings-organization-company-profile",
    "name": "Company Profile",
    "route": "/settings/organization/company-profile",
    "category": "Settings",
    "subcategory": "Organization",
    "child": "Company Profile",
    "tags": [
      "Settings",
      "Organization",
      "Company Profile"
    ],
    "contextHints": [
      "Settings",
      "Organization"
    ],
    "description": "Company Profile in Organization \u00b7 Settings",
    "demoType": "form"
  },
  {
    "id": "settings-organization-billing-settings",
    "name": "Billing Settings",
    "route": "/settings/organization/billing-settings",
    "category": "Settings",
    "subcategory": "Organization",
    "child": "Billing Settings",
    "tags": [
      "Settings",
      "Organization",
      "Billing Settings"
    ],
    "contextHints": [
      "Settings",
      "Organization"
    ],
    "description": "Billing Settings in Organization \u00b7 Settings",
    "demoType": "form"
  },
  {
    "id": "settings-organization-audit-logs",
    "name": "Audit Logs",
    "route": "/settings/organization/audit-logs",
    "category": "Settings",
    "subcategory": "Organization",
    "child": "Audit Logs",
    "tags": [
      "Settings",
      "Organization",
      "Audit Logs"
    ],
    "contextHints": [
      "Settings",
      "Organization"
    ],
    "description": "Audit Logs in Organization \u00b7 Settings",
    "demoType": "table"
  },
  {
    "id": "settings-preferences-theme",
    "name": "Theme",
    "route": "/settings/preferences/theme",
    "category": "Settings",
    "subcategory": "Preferences",
    "child": "Theme",
    "tags": [
      "Settings",
      "Preferences",
      "Theme"
    ],
    "contextHints": [
      "Settings",
      "Preferences"
    ],
    "description": "Theme in Preferences \u00b7 Settings",
    "demoType": "selector"
  },
  {
    "id": "settings-preferences-notifications",
    "name": "Notifications",
    "route": "/settings/preferences/notifications",
    "category": "Settings",
    "subcategory": "Preferences",
    "child": "Notifications",
    "tags": [
      "Settings",
      "Preferences",
      "Notifications"
    ],
    "contextHints": [
      "Settings",
      "Preferences"
    ],
    "description": "Notifications in Preferences \u00b7 Settings",
    "demoType": "selector"
  },
  {
    "id": "settings-preferences-localization",
    "name": "Localization",
    "route": "/settings/preferences/localization",
    "category": "Settings",
    "subcategory": "Preferences",
    "child": "Localization",
    "tags": [
      "Settings",
      "Preferences",
      "Localization"
    ],
    "contextHints": [
      "Settings",
      "Preferences"
    ],
    "description": "Localization in Preferences \u00b7 Settings",
    "demoType": "selector"
  }
];
export const NAV_GROUPED = {
  "Sales": {
    "Orders": [
      {
        "name": "Create Order",
        "route": "/sales/orders/create-order",
        "id": "sales-orders-create-order"
      },
      {
        "name": "Order Returns",
        "route": "/sales/orders/order-returns",
        "id": "sales-orders-order-returns"
      },
      {
        "name": "Discount Calculator",
        "route": "/sales/orders/discount-calculator",
        "id": "sales-orders-discount-calculator"
      }
    ],
    "Invoices": [
      {
        "name": "New Invoice",
        "route": "/sales/invoices/new-invoice",
        "id": "sales-invoices-new-invoice"
      },
      {
        "name": "Invoice List",
        "route": "/sales/invoices/invoice-list",
        "id": "sales-invoices-invoice-list"
      },
      {
        "name": "Send Reminder",
        "route": "/sales/invoices/send-reminder",
        "id": "sales-invoices-send-reminder"
      }
    ],
    "Quotes": [
      {
        "name": "Create Quote",
        "route": "/sales/quotes/create-quote",
        "id": "sales-quotes-create-quote"
      },
      {
        "name": "Quote List",
        "route": "/sales/quotes/quote-list",
        "id": "sales-quotes-quote-list"
      },
      {
        "name": "Convert to Order",
        "route": "/sales/quotes/convert-to-order",
        "id": "sales-quotes-convert-to-order"
      }
    ]
  },
  "Inventory": {
    "Products": [
      {
        "name": "Add Product",
        "route": "/inventory/products/add-product",
        "id": "inventory-products-add-product"
      },
      {
        "name": "Product Catalog",
        "route": "/inventory/products/product-catalog",
        "id": "inventory-products-product-catalog"
      },
      {
        "name": "Bulk Upload",
        "route": "/inventory/products/bulk-upload",
        "id": "inventory-products-bulk-upload"
      }
    ],
    "Stock": [
      {
        "name": "Stock Adjustment",
        "route": "/inventory/stock/stock-adjustment",
        "id": "inventory-stock-stock-adjustment"
      },
      {
        "name": "Low Stock Report",
        "route": "/inventory/stock/low-stock-report",
        "id": "inventory-stock-low-stock-report"
      },
      {
        "name": "Reorder Planner",
        "route": "/inventory/stock/reorder-planner",
        "id": "inventory-stock-reorder-planner"
      }
    ],
    "Warehouses": [
      {
        "name": "Bin Transfer",
        "route": "/inventory/warehouses/bin-transfer",
        "id": "inventory-warehouses-bin-transfer"
      },
      {
        "name": "Inbound Shipments",
        "route": "/inventory/warehouses/inbound-shipments",
        "id": "inventory-warehouses-inbound-shipments"
      },
      {
        "name": "Outbound Shipments",
        "route": "/inventory/warehouses/outbound-shipments",
        "id": "inventory-warehouses-outbound-shipments"
      }
    ]
  },
  "Customers": {
    "CRM": [
      {
        "name": "Add Contact",
        "route": "/customers/crm/add-contact",
        "id": "customers-crm-add-contact"
      },
      {
        "name": "Contact List",
        "route": "/customers/crm/contact-list",
        "id": "customers-crm-contact-list"
      },
      {
        "name": "Import Leads",
        "route": "/customers/crm/import-leads",
        "id": "customers-crm-import-leads"
      }
    ],
    "Accounts": [
      {
        "name": "Create Account",
        "route": "/customers/accounts/create-account",
        "id": "customers-accounts-create-account"
      },
      {
        "name": "Account Directory",
        "route": "/customers/accounts/account-directory",
        "id": "customers-accounts-account-directory"
      },
      {
        "name": "Merge Duplicates",
        "route": "/customers/accounts/merge-duplicates",
        "id": "customers-accounts-merge-duplicates"
      }
    ],
    "Engagement": [
      {
        "name": "Send Email",
        "route": "/customers/engagement/send-email",
        "id": "customers-engagement-send-email"
      },
      {
        "name": "Call Log",
        "route": "/customers/engagement/call-log",
        "id": "customers-engagement-call-log"
      },
      {
        "name": "Tasks",
        "route": "/customers/engagement/tasks",
        "id": "customers-engagement-tasks"
      }
    ]
  },
  "Finance": {
    "Expenses": [
      {
        "name": "Log Expense",
        "route": "/finance/expenses/log-expense",
        "id": "finance-expenses-log-expense"
      },
      {
        "name": "Expense Report",
        "route": "/finance/expenses/expense-report",
        "id": "finance-expenses-expense-report"
      },
      {
        "name": "Export CSV",
        "route": "/finance/expenses/export-csv",
        "id": "finance-expenses-export-csv"
      }
    ],
    "Payments": [
      {
        "name": "Record Payment",
        "route": "/finance/payments/record-payment",
        "id": "finance-payments-record-payment"
      },
      {
        "name": "Payouts",
        "route": "/finance/payments/payouts",
        "id": "finance-payments-payouts"
      },
      {
        "name": "Reconcile",
        "route": "/finance/payments/reconcile",
        "id": "finance-payments-reconcile"
      }
    ],
    "Budgets": [
      {
        "name": "Create Budget",
        "route": "/finance/budgets/create-budget",
        "id": "finance-budgets-create-budget"
      },
      {
        "name": "Budget vs Actuals",
        "route": "/finance/budgets/budget-vs-actuals",
        "id": "finance-budgets-budget-vs-actuals"
      },
      {
        "name": "Adjust Allocation",
        "route": "/finance/budgets/adjust-allocation",
        "id": "finance-budgets-adjust-allocation"
      }
    ]
  },
  "HR": {
    "Recruitment": [
      {
        "name": "Post Job",
        "route": "/hr/recruitment/post-job",
        "id": "hr-recruitment-post-job"
      },
      {
        "name": "Candidate List",
        "route": "/hr/recruitment/candidate-list",
        "id": "hr-recruitment-candidate-list"
      },
      {
        "name": "Schedule Interview",
        "route": "/hr/recruitment/schedule-interview",
        "id": "hr-recruitment-schedule-interview"
      }
    ],
    "Employees": [
      {
        "name": "Add Employee",
        "route": "/hr/employees/add-employee",
        "id": "hr-employees-add-employee"
      },
      {
        "name": "Employee Directory",
        "route": "/hr/employees/employee-directory",
        "id": "hr-employees-employee-directory"
      },
      {
        "name": "Leave Requests",
        "route": "/hr/employees/leave-requests",
        "id": "hr-employees-leave-requests"
      }
    ],
    "Payroll": [
      {
        "name": "Run Payroll",
        "route": "/hr/payroll/run-payroll",
        "id": "hr-payroll-run-payroll"
      },
      {
        "name": "Salary Slips",
        "route": "/hr/payroll/salary-slips",
        "id": "hr-payroll-salary-slips"
      },
      {
        "name": "Tax Declarations",
        "route": "/hr/payroll/tax-declarations",
        "id": "hr-payroll-tax-declarations"
      }
    ]
  },
  "Operations": {
    "Logistics": [
      {
        "name": "Create Shipment",
        "route": "/operations/logistics/create-shipment",
        "id": "operations-logistics-create-shipment"
      },
      {
        "name": "Track Shipment",
        "route": "/operations/logistics/track-shipment",
        "id": "operations-logistics-track-shipment"
      },
      {
        "name": "Delivery Exceptions",
        "route": "/operations/logistics/delivery-exceptions",
        "id": "operations-logistics-delivery-exceptions"
      }
    ],
    "Procurement": [
      {
        "name": "New Purchase Order",
        "route": "/operations/procurement/new-purchase-order",
        "id": "operations-procurement-new-purchase-order"
      },
      {
        "name": "PO List",
        "route": "/operations/procurement/po-list",
        "id": "operations-procurement-po-list"
      },
      {
        "name": "Vendor Comparison",
        "route": "/operations/procurement/vendor-comparison",
        "id": "operations-procurement-vendor-comparison"
      }
    ],
    "Quality": [
      {
        "name": "QC Checklist",
        "route": "/operations/quality/qc-checklist",
        "id": "operations-quality-qc-checklist"
      },
      {
        "name": "Defect Log",
        "route": "/operations/quality/defect-log",
        "id": "operations-quality-defect-log"
      },
      {
        "name": "CAPA Form",
        "route": "/operations/quality/capa-form",
        "id": "operations-quality-capa-form"
      }
    ]
  },
  "Marketing": {
    "Campaigns": [
      {
        "name": "Create Campaign",
        "route": "/marketing/campaigns/create-campaign",
        "id": "marketing-campaigns-create-campaign"
      },
      {
        "name": "Campaign Analytics",
        "route": "/marketing/campaigns/campaign-analytics",
        "id": "marketing-campaigns-campaign-analytics"
      },
      {
        "name": "Audience Selector",
        "route": "/marketing/campaigns/audience-selector",
        "id": "marketing-campaigns-audience-selector"
      }
    ],
    "Content": [
      {
        "name": "Asset Library",
        "route": "/marketing/content/asset-library",
        "id": "marketing-content-asset-library"
      },
      {
        "name": "Upload Asset",
        "route": "/marketing/content/upload-asset",
        "id": "marketing-content-upload-asset"
      },
      {
        "name": "Content Calendar",
        "route": "/marketing/content/content-calendar",
        "id": "marketing-content-content-calendar"
      }
    ],
    "SEO": [
      {
        "name": "Keyword Planner",
        "route": "/marketing/seo/keyword-planner",
        "id": "marketing-seo-keyword-planner"
      },
      {
        "name": "Backlink List",
        "route": "/marketing/seo/backlink-list",
        "id": "marketing-seo-backlink-list"
      },
      {
        "name": "Site Audit Notes",
        "route": "/marketing/seo/site-audit-notes",
        "id": "marketing-seo-site-audit-notes"
      }
    ]
  },
  "Support": {
    "Tickets": [
      {
        "name": "New Ticket",
        "route": "/support/tickets/new-ticket",
        "id": "support-tickets-new-ticket"
      },
      {
        "name": "Ticket Queue",
        "route": "/support/tickets/ticket-queue",
        "id": "support-tickets-ticket-queue"
      },
      {
        "name": "SLA Dashboard",
        "route": "/support/tickets/sla-dashboard",
        "id": "support-tickets-sla-dashboard"
      }
    ],
    "Knowledge Base": [
      {
        "name": "New Article",
        "route": "/support/knowledge-base/new-article",
        "id": "support-knowledge-base-new-article"
      },
      {
        "name": "Article List",
        "route": "/support/knowledge-base/article-list",
        "id": "support-knowledge-base-article-list"
      },
      {
        "name": "Import Articles",
        "route": "/support/knowledge-base/import-articles",
        "id": "support-knowledge-base-import-articles"
      }
    ],
    "Feedback": [
      {
        "name": "NPS Survey",
        "route": "/support/feedback/nps-survey",
        "id": "support-feedback-nps-survey"
      },
      {
        "name": "Responses",
        "route": "/support/feedback/responses",
        "id": "support-feedback-responses"
      },
      {
        "name": "Feature Requests",
        "route": "/support/feedback/feature-requests",
        "id": "support-feedback-feature-requests"
      }
    ]
  },
  "Analytics": {
    "Dashboards": [
      {
        "name": "Sales KPIs",
        "route": "/analytics/dashboards/sales-kpis",
        "id": "analytics-dashboards-sales-kpis"
      },
      {
        "name": "Cohort Analysis",
        "route": "/analytics/dashboards/cohort-analysis",
        "id": "analytics-dashboards-cohort-analysis"
      },
      {
        "name": "Funnel Overview",
        "route": "/analytics/dashboards/funnel-overview",
        "id": "analytics-dashboards-funnel-overview"
      }
    ],
    "Reports": [
      {
        "name": "Ad-hoc Query",
        "route": "/analytics/reports/ad-hoc-query",
        "id": "analytics-reports-ad-hoc-query"
      },
      {
        "name": "Report Library",
        "route": "/analytics/reports/report-library",
        "id": "analytics-reports-report-library"
      },
      {
        "name": "Schedule Report",
        "route": "/analytics/reports/schedule-report",
        "id": "analytics-reports-schedule-report"
      }
    ],
    "Data": [
      {
        "name": "Upload CSV",
        "route": "/analytics/data/upload-csv",
        "id": "analytics-data-upload-csv"
      },
      {
        "name": "Model Monitor",
        "route": "/analytics/data/model-monitor",
        "id": "analytics-data-model-monitor"
      },
      {
        "name": "Field Mapping",
        "route": "/analytics/data/field-mapping",
        "id": "analytics-data-field-mapping"
      }
    ]
  },
  "Settings": {
    "Security": [
      {
        "name": "Change Password",
        "route": "/settings/security/change-password",
        "id": "settings-security-change-password"
      },
      {
        "name": "API Keys",
        "route": "/settings/security/api-keys",
        "id": "settings-security-api-keys"
      },
      {
        "name": "User Roles",
        "route": "/settings/security/user-roles",
        "id": "settings-security-user-roles"
      }
    ],
    "Organization": [
      {
        "name": "Company Profile",
        "route": "/settings/organization/company-profile",
        "id": "settings-organization-company-profile"
      },
      {
        "name": "Billing Settings",
        "route": "/settings/organization/billing-settings",
        "id": "settings-organization-billing-settings"
      },
      {
        "name": "Audit Logs",
        "route": "/settings/organization/audit-logs",
        "id": "settings-organization-audit-logs"
      }
    ],
    "Preferences": [
      {
        "name": "Theme",
        "route": "/settings/preferences/theme",
        "id": "settings-preferences-theme"
      },
      {
        "name": "Notifications",
        "route": "/settings/preferences/notifications",
        "id": "settings-preferences-notifications"
      },
      {
        "name": "Localization",
        "route": "/settings/preferences/localization",
        "id": "settings-preferences-localization"
      }
    ]
  }
} as const;
