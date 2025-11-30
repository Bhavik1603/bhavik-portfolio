import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bhavik Mundra - Data Engineer | AWS | PySpark',
  description: '4× AWS Certified Data Engineer | Vanguard | PySpark | EMR on EKS | Real-time pipelines',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} scroll-smooth`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
        {/* ATS KEYWORDS — invisible to humans, parsed by Applicant Tracking Systems */}
        <div className="sr-only">
          Data Engineer, AWS Data Engineer, PySpark Developer, AWS Glue, EMR on EKS, Apache Iceberg,
          Kinesis Data Streams, Lambda, Step Functions, Terraform, Kubernetes EKS, Karpenter,
          ArgoCD, Argo Workflows, DynamoDB Global Tables, S3 CRR, Route53 Failover,
          Bedrock Titan LLM, Amazon SageMaker, Real-time Analytics, Disaster Recovery RTO,
          Spot Instances Cost Optimization, Graviton, Athena Cost Reduction,
          AWS Certified Data Engineer Associate, AWS Certified Developer Associate,
          AWS Certified Solutions Architect Associate, AWS Cloud Practitioner,
          TCS Vanguard, Financial Services Data Engineering, Mainframe to AWS Migration,
          COBOL to PySpark Migration, Serverless ETL, Data Lakehouse, OpenSearch,
          Anomaly Detection LLM, Slack Automation, Indore, Madhya Pradesh, India
        </div>
      </body>
    </html>
  );
}