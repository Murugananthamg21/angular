import { SidebarData } from "../Model/sidebar-data";

export const MEDICAL_SIDEBAR: SidebarData[] = [
    {
        category: 'Main',
        title: 'Dashboard',
        icon: 'bi bi-speedometer2',
        options: [
            { name: 'Overview', url: '/dashboard/overview' },
            { name: 'Analytics', url: '/dashboard/analytics' },
        ],
    },
    {
        category: 'Patient Management',
        title: 'Patients',
        icon: 'bi bi-person-vcard',
        options: [
            { name: 'All Patients', url: '/patients' },
            { name: 'Add Patient', url: '/patients/add' },
            { name: 'Appointments', url: '/patients/appointments' },
            { name: 'Medical Records', url: '/patients/records' },
        ],
    },
    {
        category: 'Doctor Management',
        title: 'Doctors',
        icon: 'bi bi-person-badge',
        options: [
            { name: 'All Doctors', url: '/doctors' },
            { name: 'Add Doctor', url: '/doctors/add' },
            { name: 'Schedules', url: '/doctors/schedules' },
            { name: 'Departments', url: '/doctors/departments' },
        ],
    },
    {
        category: 'Appointments',
        title: 'Appointments',
        icon: 'bi bi-calendar-check',
        options: [
            { name: 'All Appointments', url: '/appointments' },
            { name: 'New Appointment', url: '/appointments/new' },
            { name: 'Pending Approvals', url: '/appointments/pending' },
        ],
    },
    {
        category: 'Billing & Finance',
        title: 'Billing',
        icon: 'bi bi-receipt',
        options: [
            { name: 'Invoices', url: '/billing/invoices' },
            { name: 'Payments', url: '/billing/payments' },
            { name: 'Insurance Claims', url: '/billing/insurance' },
            { name: 'Financial Reports', url: '/billing/reports' },
        ],
    },
    {
        category: 'Inventory',
        title: 'Pharmacy',
        icon: 'bi bi-capsule-pill',
        options: [
            { name: 'Medicines Stock', url: '/pharmacy/stock' },
            { name: 'Add Medicine', url: '/pharmacy/add' },
            { name: 'Suppliers', url: '/pharmacy/suppliers' },
            { name: 'Orders', url: '/pharmacy/orders' },
        ],
    },
    {
        category: 'HR & Staff',
        title: 'Staff',
        icon: 'bi bi-people',
        options: [
            { name: 'All Staff', url: '/staff' },
            { name: 'Add Staff', url: '/staff/add' },
            { name: 'Roles & Permissions', url: '/staff/roles' },
            { name: 'Attendance', url: '/staff/attendance' },
        ],
    },
    {
        category: 'Reports',
        title: 'Reports',
        icon: 'bi bi-graph-up',
        options: [
            { name: 'Daily Reports', url: '/reports/daily' },
            { name: 'Monthly Reports', url: '/reports/monthly' },
            { name: 'Department Reports', url: '/reports/departments' },
        ],
    },
    {
        category: 'System',
        title: 'Settings',
        icon: 'bi bi-gear',
        options: [
            { name: 'General Settings', url: '/settings/general' },
            { name: 'User Management', url: '/settings/users' },
            { name: 'Backup & Restore', url: '/settings/backup' },
        ],
    },
    {
        category: 'Support',
        title: 'Help & Support',
        icon: 'bi bi-question-circle',
        options: [
            { name: 'Help Center', url: '/help' },
            { name: 'Contact Support', url: '/help/contact' },
            { name: 'System Logs', url: '/help/logs' },
        ],
    },
];
