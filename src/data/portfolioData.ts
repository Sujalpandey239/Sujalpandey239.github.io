export interface Project {
  id: string;
  title: string;
  badge: string;
  description: string;
  architecture: string[];
  metrics: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
  verified: boolean;
  highlight?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  location: string;
  period: string;
  status: 'Current' | 'Completed';
  highlights: string[];
  tags: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string;
  badge?: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Sujal Pandey",
    firstName: "Sujal",
    lastName: "Pandey",
    handle: "sujal.pandey",
    title: "AWS Cloud & DevOps Engineer",
    badge: "Open to Cloud & DevOps Roles",
    location: "Delhi-NCR / Remote & Relocation Ready",
    email: "sujalpandey620@gmail.com",
    linkedin: "https://www.linkedin.com/in/sujal-pandey-03642331b/",
    github: "https://github.com",
    shortBio: "Fourth-year B.Tech CSE student specializing in AWS Cloud and Linux systems. Completed AWS Cloud Internship at Navodita InfoTech and certified in AWS Essentials & Cloud Fundamentals. Actively looking for Cloud Engineer and DevOps opportunities.",
    aboutBullets: [
      "Proficient in AWS core services (Lambda, S3, DynamoDB, API Gateway, IAM, CloudWatch).",
      "Hands-on with Linux system administration, shell scripting, and basic automation.",
      "Completed AWS Solutions Architecture Simulation (Forage) and IBM Cloud Fundamentals.",
      "Focused on secure cloud deployments, reliability, and clean system architecture."
    ],
    stats: [
      { label: "Verified Credentials", value: "5" },
      { label: "AWS Services", value: "12+" },
      { label: "College Standing", value: "ABESIT '27" },
      { label: "Internship", value: "Navodita Info" }
    ]
  },

  skillsCategories: [
    {
      id: "aws-serverless",
      label: "AWS & Serverless",
      number: "01",
      icon: "Cloud",
      title: "AWS Cloud & Event-Driven Serverless",
      description: "Architecting decoupled, highly available architectures using AWS core compute, storage, and managed services.",
      points: [
        "Serverless functions with AWS Lambda & Amazon API Gateway integration",
        "Storage & database persistence with Amazon S3 lifecycle rules and DynamoDB NoSQL",
        "Asynchronous messaging and decoupling with Amazon SQS and Amazon SNS",
        "Monitoring, metrics, log tracing, and automated alarms via Amazon CloudWatch",
        "Granular security, RBAC policies, and least-privilege access using AWS IAM"
      ],
      tags: ["AWS Lambda", "Amazon S3", "DynamoDB", "API Gateway", "CloudWatch", "SQS / SNS", "AWS IAM", "EC2"]
    },
    {
      id: "linux-automation",
      label: "Linux & Cloud Automation",
      number: "02",
      icon: "Terminal",
      title: "Linux CLI, Systems & Infrastructure Automation",
      description: "Deep command-line proficiency, POSIX systems management, process control, and custom bash tooling.",
      points: [
        "Advanced Linux CLI navigation, file hierarchy, permissions, and ACL configurations",
        "Automated administrative routines and log rotation with custom Bash scripts",
        "Process lifecycle management, resource monitoring (top/htop, systemd, crontab)",
        "Networking fundamentals: DNS, HTTP/HTTPS, SSH keys, security group hardening"
      ],
      tags: ["Linux (Ubuntu/CentOS)", "Bash Scripting", "Systemd", "SSH Hardening", "Cron Automation", "Networking"]
    },
    {
      id: "architecture-devops",
      label: "Architecture & DevOps",
      number: "03",
      icon: "Cpu",
      title: "Cloud Solutions Architecture & DevOps Pipelines",
      description: "Translating enterprise requirements into resilient, fault-tolerant, cost-optimized multi-tier architectures.",
      points: [
        "Practical experience through AWS Solutions Architecture simulation",
        "Containerization fundamentals with Docker for microservice isolation",
        "CI/CD automation concepts with GitHub Actions and automated test runs",
        "Architecting across Public, Private, and Hybrid cloud deployment patterns"
      ],
      tags: ["Solutions Architecture", "Docker", "CI/CD Pipelines", "Hybrid Cloud", "Fault Tolerance", "GitHub Actions"]
    },
    {
      id: "software-data",
      label: "Software & Data Systems",
      number: "04",
      icon: "Database",
      title: "Algorithms, DBMS & Emerging Technologies",
      description: "Strong foundational computer science background powering robust backend logic and efficient data retrieval.",
      points: [
        "Relational database modeling, query optimization, and schema design (DBMS Part-1 certified)",
        "Algorithmic problem solving and data structure optimization for low latency",
        "Exploring emerging AI/ML workflows and cloud data pipelines",
        "RESTful API design standards and integration best practices"
      ],
      tags: ["DBMS / SQL", "Data Structures", "Algorithms", "REST APIs", "AI/Data Science", "Python / C++"]
    }
  ],

  projects: [
    {
      id: "serverless-event-pipeline",
      title: "Event-Driven Serverless Ingestion Engine",
      badge: "AWS Serverless",
      description: "A resilient, auto-scaling pipeline designed to ingest, validate, and persist high-throughput event payloads with zero server provisioning.",
      architecture: [
        "Amazon API Gateway endpoints routing requests with JWT authentication",
        "AWS Lambda execution handlers triggering asynchronously via Amazon SNS/SQS queues",
        "Amazon S3 data lake storage with lifecycle archival and DynamoDB metadata store",
        "CloudWatch alarm thresholds tied to dead-letter queues (DLQ) for fault isolation"
      ],
      metrics: "Sub-50ms p95 latency | 100% serverless scale-to-zero",
      tags: ["AWS Lambda", "API Gateway", "DynamoDB", "Amazon S3", "Amazon SQS", "CloudWatch"],
      github: "https://github.com",
      demo: "#pipeline",
      featured: true
    },
    {
      id: "linux-auto-infra",
      title: "Automated Linux Cloud Instance Provisioner & Hardener",
      badge: "Systems & Security",
      description: "A modular automation toolkit to bootstrap, audit security baselines, and configure production-ready Linux compute nodes on AWS EC2.",
      architecture: [
        "Automated bash provisioning scripts enforcing CIS security benchmark baselines",
        "UFW/Iptables firewall configuration and hardened SSH key-based access policies",
        "Systemd unit generation with automated log rotation and health telemetry scripts",
        "Automated backup snapshots synced securely to encrypted Amazon S3 buckets"
      ],
      metrics: "Reduced node setup time from 45 min to < 90 seconds",
      tags: ["Linux", "Bash", "AWS EC2", "Amazon S3", "Security Hardening", "Systemd"],
      github: "https://github.com",
      featured: true
    },
    {
      id: "cloud-resilient-web-tier",
      title: "Multi-AZ Fault Tolerant Cloud Web Tier",
      badge: "Solutions Architecture",
      description: "An enterprise-grade multi-tier web infrastructure designed per AWS Well-Architected Framework for maximum uptime and security.",
      architecture: [
        "Application Load Balancer (ALB) distributing traffic across dual Availability Zones",
        "Stateless compute layer with auto-scaling triggers based on CPU & request count",
        "Private database subnet isolation with RDS multi-AZ failover and read replicas",
        "AWS IAM least-privilege instance profiles preventing credential hardcoding"
      ],
      metrics: "99.95% High Availability target with automated failover",
      tags: ["AWS VPC", "ALB", "Auto Scaling", "IAM", "Multi-AZ", "Solutions Architecture"],
      github: "https://github.com",
      featured: true
    }
  ],

  certifications: [
    {
      id: "aws-dev-assoc",
      title: "AWS Certified Associate Essentials",
      issuer: "Infosys Springboard",
      issueDate: "Feb 2026",
      verified: true,
      highlight: true,
      description: "Demonstrated practical knowledge in cloud-native application patterns, serverless architecture, and AWS core integrations. Focus areas: Serverless Application Development, RESTful API Integration, IAM policies, Event-Driven Architectures, and Automated Deployment.",
      skills: ["AWS Lambda", "Amazon S3", "DynamoDB", "API Gateway", "CloudWatch", "SQS", "SNS", "AWS IAM"],
      credentialUrl: "https://www.linkedin.com/in/sujal-pandey-03642331b/"
    },
    {
      id: "forage-aws-sa",
      title: "AWS Solutions Architecture Job Simulation",
      issuer: "Forage",
      issueDate: "Jan 2026",
      credentialId: "pWbufcFz85JkP4t8Y",
      verified: true,
      highlight: true,
      description: "Acted as an AWS Solutions Architect designing scalable, secure, and cost-effective cloud architectures for enterprise business challenges.",
      skills: ["Solutions Architecture", "Cloud Resilience", "AWS Compute & Storage", "Cost Optimization"],
      credentialUrl: "https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_2ity2i8rxmEwbaMF6_1768892231008_completion_certificate.pdf"
    },
    {
      id: "ibm-cloud-fund",
      title: "Cloud Computing Fundamentals",
      issuer: "IBM SkillsBuild",
      issueDate: "Oct 2026",
      verified: true,
      highlight: false,
      description: "Earned from IBM SkillsBuild, covering cloud computing models (IaaS, PaaS, SaaS), deployment topologies (Public, Private, Hybrid), and foundational cloud operations.",
      skills: ["Cloud Computing", "Hybrid Cloud", "Cloud Infrastructure", "IaaS / PaaS / SaaS"],
      credentialUrl: "https://www.credly.com/badges/6c783e6d-6ae1-4bcb-ad23-130c2aaaf9f1/linked_in_profile"
    },
    {
      id: "linux-aws-abesit",
      title: "Basic Fundamentals of Linux & AWS Cloud Computing",
      issuer: "ABESIT",
      issueDate: "Aug 2025",
      verified: true,
      highlight: false,
      description: "Hands-on certification covering Linux CLI navigation, file permissions, bash scripting, and AWS core compute (EC2), storage (S3), and networking fundamentals.",
      skills: ["Linux OS", "Bash Scripting", "Amazon EC2", "Amazon S3", "DevOps Essentials"],
      credentialUrl: "https://www.linkedin.com/in/sujal-pandey-03642331b/"
    },
    {
      id: "infosys-dbms",
      title: "Database Management Systems (DBMS) Part 1",
      issuer: "Infosys Springboard",
      issueDate: "Sep 2025",
      verified: true,
      highlight: false,
      description: "Rigorous certification covering relational database design principles, normalization, SQL indexing, and transaction management.",
      skills: ["DBMS", "SQL", "Database Design", "Relational Modeling"],
      credentialUrl: "https://www.linkedin.com/in/sujal-pandey-03642331b/"
    }
  ],

  experience: [
    {
      role: "AWS Cloud Intern",
      company: "Navodita InfoTech",
      type: "Internship",
      location: "Remote / Hybrid",
      period: "2026",
      status: "Completed",
      highlights: [
        "Configured and managed core AWS cloud services including Amazon S3 buckets, EC2 compute instances, and IAM access policies.",
        "Collaborated on designing cloud infrastructure and automating deployment routines using Linux CLI and bash scripts.",
        "Monitored system metrics, access logs, and performance indicators using AWS CloudWatch.",
        "Applied cloud security best practices including least-privilege IAM roles and encrypted storage."
      ],
      tags: ["AWS Cloud", "Amazon S3", "AWS IAM", "Linux CLI", "CloudWatch", "Cloud Automation"]
    }
  ],

  education: [
    {
      institution: "ABESIT",
      degree: "Bachelor of Technology, Computer Science and Engineering",
      period: "Sep 2023 – Apr 2027",
      location: "Ghaziabad, India",
      details: "Specializing in Computer Science & Engineering. Deep focus on Cloud Computing, Linux, Operating Systems, Database Management Systems, and Object-Oriented System Design.",
      badge: "Current / 4th Year"
    },
    {
      institution: "Akash Model Sr. Sec. School",
      degree: "Senior Secondary Education (Class XII)",
      period: "Completed",
      location: "India",
      details: "Science stream with Mathematics & Computer Science focus."
    },
    {
      institution: "Army Public School (APS)",
      degree: "Secondary Education (Class X)",
      period: "Completed",
      location: "India",
      details: "Solid academic foundation and discipline from Army Public School."
    }
  ],

  themeAccents: [
    { id: 'lime', name: 'Cyber Lime', color: '#C6F432', glow: 'rgba(198, 244, 50, 0.35)', soft: 'rgba(198, 244, 50, 0.12)' },
    { id: 'mint', name: 'Quantum Mint', color: '#5EE0C1', glow: 'rgba(94, 224, 193, 0.35)', soft: 'rgba(94, 224, 193, 0.12)' },
    { id: 'orange', name: 'Hyper Orange', color: '#FF8A5B', glow: 'rgba(255, 138, 91, 0.35)', soft: 'rgba(255, 138, 91, 0.12)' },
    { id: 'blue', name: 'Glacier Blue', color: '#9BB4FF', glow: 'rgba(155, 180, 255, 0.35)', soft: 'rgba(155, 180, 255, 0.12)' }
  ]
};
