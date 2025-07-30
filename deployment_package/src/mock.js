// Mock data for DevOps Portfolio
export const mockData = {
  hero: {
    name: "Prashant Choudhary",
    role: "DevOps Engineer | Cloud Enthusiast | Automation Expert",
    intro: "DevOps Intern with hands-on experience in AWS, Kubernetes, CI/CD, and Infrastructure as Code. Certified by AWS and KodeKloud. I'm passionate about automation, cloud-native technologies, and building self-healing, scalable infrastructure.",
    email: "prashantchoudhary2606@gmail.com",
    github: "https://github.com/Prashant260",
    linkedin: "https://www.linkedin.com/in/prashant-choudhary-392a1620b/"
  },
  about: {
    description: "I'm a DevOps Engineer who enjoys building scalable, reliable, and automated infrastructure. I've interned at Elevate Labs where I was awarded Best Performer for my contributions. I've deployed web apps on Kubernetes, automated systems with Ansible, and earned several DevOps certifications. I believe in continuous learning, problem-solving, and simplifying complex workflows using tools like Docker, Prometheus, Terraform, and GitHub Actions."
  },
  skills: {
    categories: [
      {
        title: "Programming",
        items: ["Java", "Shell Scripting"]
      },
      {
        title: "Cloud Platforms",
        items: ["AWS"]
      },
      {
        title: "Infrastructure as Code",
        items: ["Terraform", "YAML"]
      },
      {
        title: "Containerization",
        items: ["Docker", "Kubernetes"]
      },
      {
        title: "Automation & Monitoring",
        items: ["Ansible", "Prometheus", "Alertmanager"]
      },
      {
        title: "CI/CD Tools",
        items: ["GitHub Actions"]
      },
      {
        title: "Version Control",
        items: ["Git", "GitHub"]
      },
      {
        title: "OS & Tools",
        items: ["Linux (Ubuntu)", "AWS CLI"]
      }
    ]
  },
  experience: {
    position: "DevOps Intern",
    company: "Elevate Labs",
    duration: "April 2025 – May 2025",
    achievements: [
      "Worked with Kubernetes, Docker, Terraform, and AWS",
      "Automated CI/CD pipelines using GitHub Actions",
      "Implemented monitoring with Prometheus and Alertmanager",
      "Created auto-remediation using Ansible",
      "Awarded \"Best Performer\" for analytical thinking and dedication"
    ]
  },
  projects: [
    {
      id: 1,
      title: "Self-Healing Infrastructure",
      tech: ["Prometheus", "Alertmanager", "Ansible"],
      description: "Built an automated self-healing infrastructure. Used Prometheus for monitoring, Alertmanager for alerting, and Ansible for remediation. Restarted failed services using YAML alert rules.",
      github: "https://github.com/Prashant260/self-healing-infra"
    },
    {
      id: 2,
      title: "Python Web App Deployment on Kubernetes",
      tech: ["Docker", "Kubernetes"],
      description: "Containerized a Python web app with Docker. Deployed it on Kubernetes using YAML manifests. Configured Services for external access and autoscaling.",
      github: "https://github.com/Prashant260/k8s-python-app"
    }
  ],
  certifications: {
    courses: [
      {
        name: "Kubernetes for Beginners",
        provider: "KodeKloud",
        date: "2025",
        link: "https://drive.google.com/file/d/1cMwNTaKNkvnkftWHxDeSnrTc-NsoWJAH/view?usp=sharing"
      },
      {
        name: "Terraform Basics",
        provider: "KodeKloud", 
        date: "2025",
        link: "https://drive.google.com/file/d/1oR30a3HMPZ9XRQ7rWnNeRWQtbGSkvw_g/view?usp=sharing"
      },
      {
        name: "AWS CLI Basics",
        provider: "AWS",
        date: "July 12, 2025",
        link: "https://drive.google.com/file/d/18h0p9MoQJ1-UBk49cw659z-DhVHAqIyE/view?usp=sharing"
      },
      {
        name: "Getting Started with DevOps on AWS",
        provider: "AWS",
        date: "July 11, 2025", 
        link: "https://drive.google.com/file/d/1wPFfixFc6-_oHQjR1jr3HjWhkk4jNXuL/view?usp=sharing"
      },
      {
        name: "Git Basics",
        provider: "Self-Learning",
        date: "2025",
        link: "https://drive.google.com/file/d/1EAHUBr8I_t3vWHvmq-AvDHC7WJuaqwJ7/view?usp=sharing"
      },
      
    ],
    achievements: [
      {
        name: "Best Performer - DevOps Intern",
        provider: "Elevate Labs",
        date: "May 2025",
        link: "https://drive.google.com/file/d/1TQA2KS970DDXeM-sBGX3JghqjfEyBsvq/view?usp=sharing"
      },
     
    ]
  },
  education: {
    degree: "B.Tech (I.T.)",
    institution: "UIT BU Bhopal",
    duration: "2022–Present",
    additional: [
      "Higher Secondary (12th) – 72% (2022)",
      "Secondary (10th) – 93% (2020)"
    ]
  }
};
