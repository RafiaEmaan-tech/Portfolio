export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rafiaeman.com"
).replace(/\/$/, "");

export const profile = {
  name: "Rafia Eman",
  role: "HR & Recruitment Professional",
  currentTitle: "Human Resources Executive",
  location: "Islamabad, Pakistan",
  city: "Islamabad",
  country: "PK",
  email: "rafiaeman147@gmail.com",
  linkedin: "https://www.linkedin.com/in/rafia-eman-57316a432",
  photo: "/rafia-eman-hr-professional.jpg",
  cv: "/Rafia-Eman-HR-CV.pdf",
  summary:
    "HR professional with hands-on experience across the full employee lifecycle: recruitment, candidate screening and interviewing, onboarding documentation, employee data management, attendance and leave administration, payroll coordination and salary reconciliation.",
  summaryLong:
    "Known for accurate documentation, discrepancy resolution and clear management reporting, with strong Google Sheets skills and the ability to coordinate effectively with Finance, Team Leads and senior management.",
};

export const seo = {
  title: "Rafia Eman | HR Executive & Recruitment Specialist in Islamabad, Pakistan",
  shortTitle: "Rafia Eman — HR & Recruitment Professional",
  description:
    "Rafia Eman is an HR Executive and Recruitment Specialist in Islamabad, Pakistan, experienced in talent acquisition, candidate screening, onboarding, payroll administration, salary reconciliation, attendance & leave management and HR reporting.",
  keywords: [
    "Rafia Eman",
    "Rafia Eman HR",
    "HR Executive Islamabad",
    "HR professional Pakistan",
    "Human Resources Executive",
    "Recruitment specialist Islamabad",
    "Talent acquisition Pakistan",
    "HR recruiter Rawalpindi",
    "Payroll administration",
    "Salary reconciliation",
    "Onboarding specialist",
    "Attendance and leave management",
    "HR operations",
    "HR administration",
    "Employee data management",
    "HR reporting",
    "HR portfolio",
    "Hire HR executive Pakistan",
  ],
};

export const competencies = [
  "Recruitment & Talent Acquisition",
  "Candidate Screening & Interviewing",
  "Onboarding & Appointment Letters",
  "HR & Office Administration",
  "Payroll & Salary Administration",
  "Attendance & Leave Management",
  "Salary Reconciliation & Verification",
  "Bank / Payment Reconciliation",
  "Employee Data Management",
  "Expense Tracking & Reporting",
  "HR & Recruitment Reporting",
  "Finance Coordination",
  "HR Documentation & Records",
  "Google Sheets / Spreadsheets",
  "Customer Service & Communication",
];

export type Role = {
  title: string;
  company: string;
  companyUrl?: string;
  place: string;
  type?: string;
  start: string;
  end: string;
  startISO: string;
  endISO: string;
  points: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    title: "Human Resources Executive",
    company: "Bali Tech Pvt. Ltd",
    companyUrl: "https://balitech.org/",
    place: "Islamabad",
    type: "Full-time",
    start: "Mar 2026",
    end: "Oct 2026",
    startISO: "2026-03",
    endISO: "2026-10",
    points: [
      "Conducted initial interviews, candidate screening and recruitment follow-ups; coordinated final interviews and supported hiring decisions.",
      "Managed onboarding documentation and prepared appointment letters for new joiners.",
      "Maintained employee records, recruitment trackers and HR data in Google Sheets.",
      "Administered attendance and leave records and applied working-day data to salary calculations.",
      "Handled salary administration — working-day calculations, leave-based deductions and regularity/punctuality adjustments.",
      "Reconciled salary records with Finance sheets, verified amounts against appointment letters and resolved discrepancies.",
      "Investigated bank/payment discrepancies where credited amounts differed from approved salaries, coordinating corrections with Finance.",
      "Prepared weekly recruitment and HR management reports covering interviews, hiring, follow-ups and departmental activity.",
      "Liaised with Team Leads, Finance and management; handled candidate and employee queries with confidentiality and accuracy.",
    ],
    tags: ["Recruitment", "Onboarding", "Payroll", "Reconciliation", "HR Reporting"],
  },
  {
    title: "Call Center Specialist",
    company: "Insync BPO",
    companyUrl: "https://www.facebook.com/p/Insync-BPO-61577806439954/",
    place: "Islamabad",
    start: "Apr 2025",
    end: "Feb 2026",
    startISO: "2025-04",
    endISO: "2026-02",
    points: [
      "Handled high-volume inbound and outbound customer communication professionally.",
      "Maintained accurate customer information and followed structured processes and documentation requirements.",
      "Built strong verbal communication, customer-handling, problem-solving and follow-up skills.",
      "Performed in a target-driven setting demanding accuracy, consistency and time management.",
    ],
    tags: ["Communication", "Documentation", "Target-driven"],
  },
  {
    title: "Senior Teacher",
    company: "Education",
    place: "Rawalpindi",
    type: "Full-time",
    start: "Aug 2023",
    end: "Apr 2025",
    startISO: "2023-08",
    endISO: "2025-04",
    points: [
      "Managed classroom responsibilities, scheduling and coordination with students and parents.",
      "Developed strong organisational, presentation and interpersonal skills.",
    ],
    tags: ["Coordination", "Scheduling", "Interpersonal"],
  },
];

export const toolkit = [
  "Google Sheets — trackers, data entry, reconciliation & reporting",
  "HR documentation, employee records & recruitment trackers",
  "Payroll & salary data administration",
  "Salary and bank/payment transaction reconciliation",
  "Management & recruitment reporting",
  "Data entry, record keeping & discrepancy checking",
  "Professional communication & candidate handling",
];

export const languages = [
  { name: "English", level: "Professional working proficiency", value: 85 },
  { name: "Urdu", level: "Native / Fluent", value: 100 },
];

export const education = {
  degree: "Bachelor of Business Administration (BBA)",
  school: "Virtual University of Pakistan",
  schoolUrl: "https://www.vu.edu.pk",
};

export const faqs = [
  {
    q: "Who is Rafia Eman?",
    a: "Rafia Eman is an HR & Recruitment Professional based in Islamabad, Pakistan, with experience as a Human Resources Executive handling recruitment, onboarding, employee records, attendance and leave, payroll coordination and salary reconciliation.",
  },
  {
    q: "What HR services can Rafia Eman help with?",
    a: "Full-cycle recruitment and candidate screening, interview coordination, onboarding documentation and appointment letters, employee data management, attendance and leave administration, payroll and salary administration, salary and bank reconciliation, expense tracking, and weekly HR and recruitment reporting.",
  },
  {
    q: "Is Rafia Eman open to new HR roles?",
    a: "Yes. Rafia is open to HR Executive, HR Officer, Recruitment and HR Operations roles in Islamabad and Rawalpindi, as well as remote opportunities. Rafia can be reached by email at rafiaeman147@gmail.com or on LinkedIn.",
  },
  {
    q: "What tools does Rafia use for HR operations?",
    a: "Rafia works extensively in Google Sheets for recruitment trackers, employee records, attendance-based salary calculations, salary reconciliation against Finance sheets, and management reporting.",
  },
];
