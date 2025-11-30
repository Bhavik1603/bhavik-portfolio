import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, MapPin, Calendar, Award } from 'lucide-react';
import Link from 'next/link';
import GitHubStats from '@/components/GitHubStats';
import TechStackMarquee from '@/components/TechStackMarquee';
import Image from 'next/image';

export default function Home() {
  const projects = [
    {
      title: "Real-Time Fraud Detection with PySpark on EKS + SageMaker",
      desc: "Serverless pipeline ingesting 50k TPS via Kinesis → PySpark streaming + SageMaker ML inference. Reduced false positives by 41%.",
      tags: ["PySpark", "Kinesis", "EKS", "SageMaker", "50k TPS"],
      github: "https://github.com/Bhavik1603",
    },
    {
      title: "Iceberg Data Lakehouse with Glue & Athena (68% Cost Reduction)",
      desc: "Zero-ETL lakehouse using Glue crawlers, PySpark jobs, and Apache Iceberg tables. Enabled schema evolution + reduced Athena query costs by 68%.",
      tags: ["Apache Iceberg", "AWS Glue", "Athena", "Cost Optimization"],
      github: "https://github.com/Bhavik1603",
    },
    {
      title: "Multi-Domain Data Processing on EKS with Argo Workflows",
      desc: "Kubernetes-native data mesh with ArgoCD + Argo Workflows orchestrating PySpark jobs across domains. Isolated scaling + cost tagging.",
      tags: ["EKS", "ArgoCD", "Argo Workflows", "Karpenter", "Data Mesh"],
      github: "https://github.com/Bhavik1603",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <Badge className="text-lg px-4 py-1">4× AWS Certified • TCS (Vanguard Client)</Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Bhavik Mundra</h1>
          <p className="text-2xl md:text-3xl text-muted-foreground">
            Data Engineer • AWS | PySpark | Real-Time Pipelines
          </p>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Building production-grade PySpark ETLs on AWS Glue & EMR on EKS • Migrated mainframe/COBOL workloads for Vanguard
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" asChild>
              <a href="#projects">See Projects <ArrowRight className="ml-2" /></a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/Bhavik_Mundra_Resume.pdf" target="_blank">Download Resume</a>
            </Button>
          </div>
          <div className="flex justify-center space-x-6 pt-8">
            <a href="https://github.com/Bhavik1603" target="_blank" className="text-muted-foreground hover:text-primary"><Github className="w-6 h-6" /></a>
            <a href="https://linkedin.com/in/bhavik-mundra" target="_blank" className="text-muted-foreground hover:text-primary"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:bhavik.mundra1603@gmail.com" className="text-muted-foreground hover:text-primary"><Mail className="w-6 h-6" /></a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg">
              <p>
                I'm a <strong>Data Engineer</strong> with production experience delivering high-scale, regulated financial workloads at <strong>TCS for Vanguard</strong>.
              </p>
              <p>
                I specialize in modernizing legacy ETL systems — migrating mainframe/COBOL + DB2 jobs to fully serverless AWS architectures using PySpark, Glue, Lambda, Step Functions, and EMR on EKS.
              </p>
              <p>
                Currently focused on building real-time streaming pipelines, data lakehouses with Apache Iceberg, and Kubernetes-native data platforms using Argo Workflows and Karpenter.
              </p>
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Ujjain → Indore, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Available for full-time roles</span>
                </div>
              </div>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8 border">
              <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {["AWS Glue", "PySpark", "EMR on EKS", "Apache Iceberg", "Kinesis", "Lambda", "Step Functions", "Terraform", "ArgoCD", "Karpenter", "SageMaker"].map(skill => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* GitHub Stats Section */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <GitHubStats />
        </div>
      </section>
      {/* Experience */}
      <section id="experience" className="py-24 px-4 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold">Data Engineer</h3>
                <p className="text-xl text-primary">Tata Consultancy Services (TCS)</p>
                <p className="text-muted-foreground">Vanguard Project — Client-Embedded Team</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <Badge variant="secondary" className="mb-2">Mar 2025 – Present</Badge>
                <p className="text-sm text-muted-foreground flex items-center gap-1 justify-end">
                  <MapPin className="w-4 h-4" /> Indore, India
                </p>
              </div>
            </div>
            <Separator className="my-6" />
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-0.5" />
                <span>Collaborated directly with Vanguard’s US team to migrate mainframe/COBOL ETL jobs and DB2 data to AWS, enabling real-time client portfolio calculations.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-0.5" />
                <span>Developed production-grade PySpark ETL pipelines in AWS Glue, serverless Lambda functions, orchestrated via Step Functions, with S3 + CloudFormation (IaC).</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-0.5" />
                <span>Designed secure, cost-efficient AWS architecture for regulated financial workloads.</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <TechStackMarquee />
      {/* Projects */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="p-6 hover:shadow-2xl transition-all group">
              <h3 className="text-2xl font-bold mb-3">Real-Time Fraud Detection with PySpark on EKS + SageMaker</h3>
              <p className="text-muted-foreground mb-6">50k TPS pipeline via Kinesis → PySpark streaming + SageMaker inference. Cut false positives by <strong>41%</strong>.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["PySpark", "Kinesis", "EKS", "SageMaker", "50k TPS"].map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
              </div>
              <a href="https://github.com/Bhavik1603" target="_blank" className="text-primary flex items-center gap-2 hover:underline">
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </Card>

            {/* Project 2 */}
            <Card className="p-6 hover:shadow-2xl transition-all group">
              <h3 className="text-2xl font-bold mb-3">Iceberg Data Lakehouse with Glue & Athena</h3>
              <p className="text-muted-foreground mb-6">Zero-ETL lakehouse with schema evolution → reduced Athena query costs by <strong>68%</strong>.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Apache Iceberg", "Glue", "Athena", "Cost Optimization"].map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
              </div>
              <a href="https://github.com/Bhavik1603" target="_blank" className="text-primary flex items-center gap-2 hover:underline">
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </Card>

            {/* Project 3 - NEW */}
            <Card className="p-6 hover:shadow-2xl transition-all group border-primary/30">
              <div className="flex items-center gap-2 mb-2">

                <Badge>72% Cost Reduction</Badge>
              </div>
              <h3 className="text-2xl font-bold mb-3">Spot-Optimized PySpark Platform with Karpenter</h3>
              <p className="text-muted-foreground mb-6">90% Spot Graviton fleet on EMR on EKS using Karpenter + Slack-triggered Step Functions → <strong>savings of 72%</strong>.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Karpenter", "EMR on EKS", "Spot Instances", "Graviton", "Step Functions"].map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
              </div>
              <a href="https://github.com/Bhavik1603" target="_blank" className="text-primary flex items-center gap-2 hover:underline">
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </Card>

            {/* Project 4 - NEW */}
            <Card className="p-6 hover:shadow-2xl transition-all group border-primary/30">
              <div className="flex items-center gap-2 mb-2">

                <Badge>RTO &lt; 3 min</Badge>
              </div>
              <h3 className="text-2xl font-bold mb-3">Multi-Region PySpark Failover (RTO &lt; 3 min)</h3>
              <p className="text-muted-foreground mb-6">Active-passive DR for 2TB analytics using S3 CRR, DynamoDB Global Tables, Route53 health checks + Terraform automation.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Disaster Recovery", "S3 CRR", "DynamoDB Global", "Route53", "Terraform"].map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
              </div>
              <a href="https://github.com/Bhavik1603" target="_blank" className="text-primary flex items-center gap-2 hover:underline">
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </Card>

            {/* Project 5 - NEW */}
            <Card className="p-6 hover:shadow-2xl transition-all group border-primary/30">
              <div className="flex items-center gap-2 mb-2">

                <Badge>LLM-Powered</Badge>
              </div>
              <h3 className="text-2xl font-bold mb-3">LLM-Powered Anomaly Detection with Bedrock</h3>
              <p className="text-muted-foreground mb-6">PySpark + Bedrock Titan embeddings on EKS → OpenSearch + plain-English Slack alerts via LLM summaries.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Bedrock Titan", "OpenSearch", "EKS", "LLM", "Anomaly Detection"].map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
              </div>
              <a href="https://github.com/Bhavik1603" target="_blank" className="text-primary flex items-center gap-2 hover:underline">
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </Card>

            {/* Project 6 - Old one kept */}
            <Card className="p-6 hover:shadow-2xl transition-all group">
              <h3 className="text-2xl font-bold mb-3">Multi-Domain Data Processing with Argo Workflows</h3>
              <p className="text-muted-foreground mb-6">Kubernetes-native data mesh with ArgoCD + isolated scaling and cost tagging.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["ArgoCD", "Argo Workflows", "EKS", "Data Mesh"].map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
              </div>
              <a href="https://github.com/Bhavik1603" target="_blank" className="text-primary flex items-center gap-2 hover:underline">
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">AWS Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "AWS Certified Data Engineer – Associate",
                issued: "2025",
                logo: "/icons/certs/dataengineer.png",
                url: "https://www.credly.com/badges/YOUR_DATA_ENGINEER_BADGE_ID/public_url", // ← put your real link
              },
              {
                name: "AWS Certified Developer – Associate",
                issued: "2025",
                logo: "/icons/certs/developer.png",
                url: "https://www.credly.com/badges/YOUR_DEVELOPER_BADGE_ID/public_url",
              },
              {
                name: "AWS Certified Solutions Architect – Associate",
                issued: "2025",
                logo: "/icons/certs/solutionarchitect.png",
                url: "https://www.credly.com/badges/YOUR_SAA_BADGE_ID/public_url",
              },
              {
                name: "AWS Certified Cloud Practitioner",
                issued: "2023",
                logo: "/icons/certs/cloudpractitioner.png",
                url: "https://www.credly.com/badges/YOUR_CCP_BADGE_ID/public_url",
              },
            ].map((cert) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-primary/50">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <Image
                        src={cert.logo}
                        alt={cert.name}
                        width={120}
                        height={120}
                        className="object-contain drop-shadow-lg"
                      />

                    </div>
                    <div>
                      <p className="font-semibold text-lg leading-tight">{cert.name}</p>
                      <p className="text-sm text-muted-foreground mt-2">Issued {cert.issued}</p>
                    </div>
                    <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">View Certificate</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12 text-sm">
            All certificates are publicly verifiable on AWS Credly
          </p>
        </div>
      </section>

      <footer className="py-12 text-center border-t">
        <p className="text-muted-foreground">
          Bhavik Mundra • AWS Data Engineer • PySpark • Glue • EMR on EKS • Apache Iceberg • Terraform • EKS • Karpenter • Bedrock •
          Available for Data Engineer & Cloud Engineer roles in India • Ujjain/Indore, Madhya Pradesh
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          © 2025 Bhavik Mundra. Built with Next.js 15 + Tailwind + shadcn/ui
        </p>
      </footer>
    </>
  );
}