import type { ReactNode } from "react";

export type Lang = "en" | "id";

export const sectionTitles: Record<Lang, { id: string; title: string; icon: string }[]> = {
  en: [
    { id: "about", title: "About", icon: "User" },
    { id: "skillset", title: "Skillset", icon: "Code" },
    { id: "experiences", title: "Experiences", icon: "Briefcase" },
    { id: "contributions", title: "Contributions", icon: "Globe" },
    { id: "blogs", title: "Blogs", icon: "BookOpen" },
    { id: "training-certifications", title: "Certifications", icon: "Award" },
  ],
  id: [
    { id: "about", title: "Tentang", icon: "User" },
    { id: "skillset", title: "Keahlian", icon: "Code" },
    { id: "experiences", title: "Pengalaman", icon: "Briefcase" },
    { id: "contributions", title: "Kontribusi", icon: "Globe" },
    { id: "blogs", title: "Blog", icon: "BookOpen" },
    { id: "training-certifications", title: "Sertifikasi", icon: "Award" },
  ],
};

type About = {
  heading: string;
  name: string;
  p1: ReactNode;
  p2: ReactNode;
  p3: ReactNode;
};

type Skill = string;

type Experience = {
  heading: string;
  jobs: {
    title: string;
    location: string;
    period: string;
    role: string;
    bullets: ReactNode[];
  }[];
};

type Contributions = {
  heading: string;
  openSource: string;
  community: string;
  helmContributor: string;
  artifactHub: string;
  speaker: string;
  viewEventDetails: string;
};

type Blogs = {
  heading: string;
  mediumDesc: string;
  hashnodeDesc: string;
  readArticles: string;
};

type Certifications = {
  heading: string;
  items: string[];
};

export type Content = {
  about: About;
  skillset: { heading: string; skills: Skill[] };
  experiences: Experience;
  contributions: Contributions;
  blogs: Blogs;
  certifications: Certifications;
};

export const content: Record<Lang, Content> = {
  en: {
    about: {
      heading: "/ about",
      name: "Rizky Faza",
      p1: (
        <>
          DevOps and Site Reliability Engineer with approximately 5 years of
          hands-on experience across{" "}
          <span className="text-zinc-100 underline decoration-zinc-800 underline-offset-4">
            Azure, AWS, and GCP
          </span>
          .
        </>
      ),
      p2: (
        <>
          Focusing on{" "}
          <span className="text-zinc-100 underline decoration-zinc-800 underline-offset-4">
            automation, scalability, and reliability
          </span>
          . Highly adaptable, currently operating in an Azure-centric
          environment while maintaining cross-cloud competency.
        </>
      ),
      p3: (
        <>
          Currently expanding capabilities toward system design and backend
          engineering following a structured T-shaped learning approach.
        </>
      ),
    },
    skillset: {
      heading: "/ skillset",
      skills: [
        "Azure / AWS / GCP",
        "Kubernetes / Docker",
        "Terraform",
        "Ansible",
        "Pulumi",
        "ArgoCD",
        "FluxCD",
        "Helm Charts",
        "Monitoring & Observability Stacks",
        "CI/CD Governance",
        "Cloudflare / DNS",
        "Infrastructure Automation",
        "System Reliability",
        "Troubleshooting",
        "Mentoring",
      ],
    },
    experiences: {
      heading: "/ experiences",
      jobs: [
        {
          title: "Sensoneo j.s.a (Contract) - Remote",
          location: "Location: Slovakia",
          period: "May 2025 - Present",
          role: "L2 DevOps Engineer",
          bullets: [
            <>
              Led migration from manual script-based deployments to{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                standardized Helm charts with GitOps
              </b>
              , streamlining release workflows across services.
            </>,
            <>
              Standardized{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                readiness probes across all services
              </b>{" "}
              (previously none), eliminating silent bad-release traffic
              exposure.
            </>,
            <>
              Re-architected shared Helm charts, resolving{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                5 template defects
              </b>{" "}
              blocking multi-service adoption.
            </>,
            <>
              Built{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Argus, an internal SRE agent
              </b>{" "}
              — Teams interface, LiteLLM gateway, automated Jira triage.
            </>,
            <>
              Maintain and improving{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Terraform IaC across 12 Azure subscriptions and 4 environments
              </b>{" "}
              — AKS, App Service, Functions, APIM, Front Door, Key Vault.
            </>,
            <>
              Built{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Azure DevOps pipelines with self-hosted and VNet-injected agent
                pools
              </b>{" "}
              for network-isolated deployments to private endpoints.
            </>,
            <>
              Implemented{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                observability stack with Azure Managed Grafana and Prometheus
              </b>
              , alert rules codified across all environments.
            </>,
            <>
              Investigated{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                €18K/year Log Analytics overspend
              </b>
              , auditing 77 dashboards to isolate ingestion volume as root
              cause.
            </>,
            <>
              Designed and consolidated{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                APIM API products across 4 environments
              </b>
              , implementing key-based authentication for public endpoints.
            </>,
            <>
              Plan and deploy{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Event Hubs telemetry pipeline
              </b>{" "}
              sustaining 284–853 messages/minute from IoT sensor fleet.
            </>,
            <>
              Resolved production incidents across{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Data Factory, App Service, and distributed tracing
              </b>
              ; owned client-facing escalation queue.
            </>,
            <>
              Managed{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Entra ID roles, service principals, and Key Vault CSI secret
                mounts
              </b>{" "}
              across multiple tenants.
            </>,
          ],
        },
        {
          title: "Ordivo Teknologi Indonesia (Contract)",
          location: "Location: Indonesia",
          period: "Dec 2023 - May 2025",
          role: "Site Reliability Engineer",
          bullets: [
            <>
              Optimized{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Kubernetes networking
              </b>{" "}
              (ingress/egress), reducing cloud costs by ~16%.
            </>,
            <>
              Analyzed resource utilization to{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                resolve cluster bottlenecks
              </b>
              , improving performance by ~10%.
            </>,
            <>
              Led{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                DNS migration
              </b>{" "}
              from AWS Route53 to Cloudflare, optimizing cost and latency.
            </>,
            <>
              Developed{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Terraform-based IaC
              </b>{" "}
              for AWS services including ECS, ALB, and CodePipeline.
            </>,
            <>
              Re-architected Helm charts and implemented{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                GitOps workflows
              </b>{" "}
              with ArgoCD.
            </>,
            <>
              Defined incident response guidelines and implemented an{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                observability stack
              </b>{" "}
              with Prometheus and Grafana.
            </>,
          ],
        },
        {
          title: "Cargo Community Network (Remote)",
          location: "Location: Singapore",
          period: "May 2023 - Aug 2023",
          role: "Software Engineer – DevOps Analyst",
          bullets: [
            <>
              Optimized usage of{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Azure DevOps Server REST API
              </b>{" "}
              to improve workflow efficiency.
            </>,
            <>
              Enhanced{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Nagios XI monitoring
              </b>{" "}
              and automated Azure WAF rules using Terraform.
            </>,
            <>
              Authored{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                DevOps governance documentation
              </b>{" "}
              to standardize enterprise processes.
            </>,
          ],
        },
        {
          title: "Livecom B.V (Hybrid)",
          location: "Location: Netherlands",
          period: "Jul 2022 - Mar 2023",
          role: "DevOps Engineer",
          bullets: [
            <>
              Improved monitoring with Prometheus/Grafana, enabling{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                actionable performance insights
              </b>
              .
            </>,
            <>
              Automated log management and{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Docker orchestration
              </b>{" "}
              using Bash scripts.
            </>,
            <>
              Managed{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Elasticsearch clusters
              </b>{" "}
              and integrated Keycloak authentication.
            </>,
            <>
              Resolved CI/CD issues across React.js, .NET, and Java
              applications.
            </>,
          ],
        },
        {
          title: "D-Shore B.V (Hybrid)",
          location: "Location: Netherlands",
          period: "Jun 2021 - Sep 2022",
          role: "Jr. DevOps Engineer",
          bullets: [
            <>
              Built end-to-end{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                CI/CD pipelines
              </b>{" "}
              using Azure DevOps.
            </>,
            <>
              Developed Azure IaC using{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Bicep and ARM Templates
              </b>
              .
            </>,
            <>
              Integrated code quality and security tools to improve{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                deployment reliability
              </b>
              .
            </>,
          ],
        },
      ],
    },
    contributions: {
      heading: "/ contributions",
      openSource: "Open Source",
      community: "Community",
      helmContributor: "Helm Chart Contributor – Documenso",
      artifactHub: "Artifact Hub",
      speaker: "Speaker at iCCom-MeetHub Bandung",
      viewEventDetails: "View Event Details",
    },
    blogs: {
      heading: "/ blogs",
      mediumDesc:
        "My main blog, where I write about DevOps, SRE, and other technical topics.",
      hashnodeDesc: "I also publish the writings here, but not as often as on Medium.",
      readArticles: "Read Articles",
    },
    certifications: {
      heading: "/ certifications",
      items: [
        "AWS Academy Cloud Developing",
        "AWS Cloud Quest - Cloud Practitioner",
        "LFS169: Introduction to GitOps",
      ],
    },
  },

  id: {
    about: {
      heading: "/ tentang",
      name: "Rizky Faza",
      p1: (
        <>
          DevOps dan Site Reliability Engineer dengan sekitar 5 tahun
          pengalaman langsung menangani{" "}
          <span className="text-zinc-100 underline decoration-zinc-800 underline-offset-4">
            Azure, AWS, dan GCP
          </span>
          .
        </>
      ),
      p2: (
        <>
          Fokus pada{" "}
          <span className="text-zinc-100 underline decoration-zinc-800 underline-offset-4">
            otomatisasi, skala, dan keandalan
          </span>
          . Sangat mudah beradaptasi, saat ini bekerja di lingkungan yang
          berpusat pada Azure sambil tetap menguasai cloud lain.
        </>
      ),
      p3: (
        <>
          Saat ini memperdalam kemampuan menuju desain sistem dan rekayasa
          backend dengan pendekatan belajar berbentuk T yang terstruktur.
        </>
      ),
    },
    skillset: {
      heading: "/ keahlian",
      skills: [
        "Azure / AWS / GCP",
        "Kubernetes / Docker",
        "Terraform",
        "Ansible",
        "Pulumi",
        "ArgoCD",
        "FluxCD",
        "Helm Charts",
        "Pemantauan & Observability",
        "Tata Kelola CI/CD",
        "Cloudflare / DNS",
        "Otomatisasi Infrastruktur",
        "Keandalan Sistem",
        "Pemecahan Masalah",
        "Pembinaan Tim",
      ],
    },
    experiences: {
      heading: "/ pengalaman",
      jobs: [
        {
          title: "Sensoneo j.s.a (Kontrak) - Remote",
          location: "Lokasi: Slovakia",
          period: "Mei 2025 - Sekarang",
          role: "L2 DevOps Engineer",
          bullets: [
            <>
              Memimpin migrasi dari deployment berbasis skrip manual ke{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Helm chart terstandar dengan GitOps
              </b>
              , merapikan alur rilis di semua layanan.
            </>,
            <>
              Menstandarkan{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                readiness probe di semua layanan
              </b>{" "}
              (sebelumnya tidak ada), menghilangkan risiko traffic tersalur ke
              rilis buruk secara diam-diam.
            </>,
            <>
              Merombak arsitektur Helm chart bersama, memperbaiki{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                5 cacat template
              </b>{" "}
              yang menghalangi adopsi multi-layanan.
            </>,
            <>
              Membangun{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Argus, agen SRE internal
              </b>{" "}
              — antarmuka Teams, gateway LiteLLM, triase Jira otomatis.
            </>,
            <>
              Mengembangkan{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Terraform IaC di 12 subscription Azure dan 4 lingkungan
              </b>{" "}
              — AKS, App Service, Functions, APIM, Front Door, Key Vault.
            </>,
            <>
              Membangun{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                pipeline Azure DevOps dengan self-hosted dan agent pool
                VNet-injected
              </b>{" "}
              untuk deployment terisolasi jaringan ke private endpoint.
            </>,
            <>
              Menerapkan{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                tumpukan observability dengan Azure Managed Grafana dan
                Prometheus
              </b>
              , aturan alert yang dikodekan di semua lingkungan.
            </>,
            <>
              Menyelidiki{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                pengeluaran berlebih Log Analytics €18K/tahun
              </b>
              , mengaudit 77 dashboard untuk menemukan volume ingest sebagai
              akar masalah.
            </>,
            <>
              Merancang dan merapikan{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                produk API APIM di 4 lingkungan
              </b>
              , menerapkan autentikasi berbasis kunci untuk endpoint publik.
            </>,
            <>
              Menerapkan{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                pipeline telemetri Event Hubs
              </b>{" "}
              yang menopang 284–853 pesan/menit dari armada sensor IoT.
            </>,
            <>
              Menangani insiden produksi di{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Data Factory, App Service, dan distributed tracing
              </b>
              ; memegang antrean eskalasi berhadapan klien.
            </>,
            <>
              Mengelola{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                peran Entra ID, service principal, dan mount rahasia Key Vault
                CSI
              </b>{" "}
              di beberapa tenant.
            </>,
          ],
        },
        {
          title: "Ordivo Teknologi Indonesia (Kontrak)",
          location: "Lokasi: Indonesia",
          period: "Des 2023 - Mei 2025",
          role: "Site Reliability Engineer",
          bullets: [
            <>
              Mengoptimalkan{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                jaringan Kubernetes
              </b>{" "}
              (masuk/keluar), mengurangi biaya cloud sekitar 16%.
            </>,
            <>
              Menganalisis pemakaian sumber daya untuk{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                mengatasi kemacetan server
              </b>
              , meningkatkan performa sekitar 10%.
            </>,
            <>
              Memimpin{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                migrasi DNS
              </b>{" "}
              dari AWS Route53 ke Cloudflare untuk menghemat biaya dan waktu.
            </>,
            <>
              Mengembangkan{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                infrastruktur-kode Terraform
              </b>{" "}
              untuk layanan AWS seperti ECS, ALB, dan CodePipeline.
            </>,
            <>
              Merombak Helm charts dan menerapkan{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                alur kerja GitOps
              </b>{" "}
              dengan ArgoCD.
            </>,
            <>
              Menyusun panduan penanganan insiden dan menerapkan{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                sistem pemantauan
              </b>{" "}
              dengan Prometheus dan Grafana.
            </>,
          ],
        },
        {
          title: "Cargo Community Network (Remote)",
          location: "Lokasi: Singapura",
          period: "Mei 2023 - Agu 2023",
          role: "Software Engineer – DevOps Analyst",
          bullets: [
            <>
              Mengoptimalkan pemakaian{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                API REST Azure DevOps Server
              </b>{" "}
              untuk meningkatkan efisiensi kerja.
            </>,
            <>
              Meningkatkan{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                pemantauan Nagios XI
              </b>{" "}
              dan mengotomatiskan aturan WAF Azure menggunakan Terraform.
            </>,
            <>
              Menyusun{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                dokumentasi tata kelola DevOps
              </b>{" "}
              untuk menstandarkan proses perusahaan.
            </>,
          ],
        },
        {
          title: "Livecom B.V (Hybrid)",
          location: "Lokasi: Belanda",
          period: "Jul 2022 - Mar 2023",
          role: "DevOps Engineer",
          bullets: [
            <>
              Meningkatkan pemantauan dengan Prometheus/Grafana, menghasilkan{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                wawasan performa yang berguna
              </b>
              .
            </>,
            <>
              Mengotomatiskan pengelolaan log dan{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                pengaturan Docker
              </b>{" "}
              menggunakan skrip Bash.
            </>,
            <>
              Mengelola{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                cluster Elasticsearch
              </b>{" "}
              dan mengintegrasikan autentikasi Keycloak.
            </>,
            <>
              Memperbaiki masalah CI/CD di aplikasi React.js, .NET, dan Java.
            </>,
          ],
        },
        {
          title: "D-Shore B.V (Hybrid)",
          location: "Lokasi: Belanda",
          period: "Jun 2021 - Sep 2022",
          role: "Jr. DevOps Engineer",
          bullets: [
            <>
              Membangun{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                alur CI/CD end-to-end
              </b>{" "}
              menggunakan Azure DevOps.
            </>,
            <>
              Mengembangkan infrastruktur Azure menggunakan{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                Bicep dan ARM Templates
              </b>
              .
            </>,
            <>
              Mengintegrasikan alat kualitas dan keamanan kode untuk{" "}
              <b className="text-zinc-100 underline decoration-zinc-800">
                keandalan peluncuran
              </b>
              .
            </>,
          ],
        },
      ],
    },
    contributions: {
      heading: "/ kontribusi",
      openSource: "Open Source",
      community: "Komunitas",
      helmContributor: "Kontributor Helm Chart – Documenso",
      artifactHub: "Artifact Hub",
      speaker: "Pembicara di iCCom-MeetHub Bandung",
      viewEventDetails: "Lihat Detail Acara",
    },
    blogs: {
      heading: "/ blog",
      mediumDesc:
        "Blog utama saya, tempat saya menulis tentang DevOps, SRE, dan topik teknis lainnya.",
      hashnodeDesc:
        "Saya juga menulis di sini, tetapi tidak sesering di Medium.",
      readArticles: "Baca Artikel",
    },
    certifications: {
      heading: "/ sertifikasi",
      items: [
        "AWS Academy Cloud Developing",
        "AWS Cloud Quest - Cloud Practitioner",
        "LFS169: Introduction to GitOps",
      ],
    },
  },
};
