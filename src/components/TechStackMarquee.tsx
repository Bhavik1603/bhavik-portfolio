'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const tech = [
    { name: 'Kinesis', src: '/icons/tech/kinesis.svg' },
    { name: 'Lambda', src: '/icons/tech/Lambda.svg' },
    { name: 'Step Functions', src: '/icons/tech/step functions.svg' },
    { name: 'SageMaker', src: '/icons/tech/SageMaker.svg' },
    { name: 'Cloud Formation', src: '/icons/tech/CloudFormation.svg' },
    { name: 'Cognito', src: '/icons/tech/Cognito.svg' },
    { name: 'EC2', src: '/icons/tech/EC2.svg' },
    { name: 'EKS Cloud', src: '/icons/tech/EKS Cloud.svg' },
    { name: 'Glue', src: '/icons/tech/Glue.svg' },
    { name: 'RDS', src: '/icons/tech/RDS.svg' },
    { name: 'Elastic Kubernetes Service', src: '/icons/tech/Elastic Kubernetes Service.svg' },
    { name: 'S3', src: '/icons/tech/Simple Storage Service.svg' },
    { name: 'Apache Spark', src: '/icons/tech/Apache Spark.svg' },
    { name: 'AWS', src: '/icons/tech/AWS.svg' },
    { name: 'C++', src: '/icons/tech/C++ (CPlusPlus).svg' },
    { name: 'Docker', src: '/icons/tech/Docker.svg' },
    { name: 'FastAPI', src: '/icons/tech/FastAPI.svg' },
    { name: 'Flask', src: '/icons/tech/Flask.svg' },
    { name: 'Git', src: '/icons/tech/Git.svg' },
    { name: 'HashiCorp Terraform', src: '/icons/tech/HashiCorp Terraform.svg' },
    { name: 'Pandas', src: '/icons/tech/Pandas.svg' },
    { name: 'postgresSQL', src: '/icons/tech/postgresSQL.svg' },
    { name: 'Python', src: '/icons/tech/Python.svg' }
];

const duplicated = [...tech, ...tech];

export default function TechStackMarquee() {
    return (
        <section className="py-20 px-4 bg-muted/30 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Tech Stack I Ship With</h2>

                {/* Row 1 */}
                <motion.div
                    animate={{ x: [0, -1920] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    className="flex gap-16 items-center"
                >
                    {duplicated.map((item, i) => (
                        <div
                            key={`${item.name}-${i}`}
                            className="flex-shrink-0 w-48 h-32 bg-background/80 backdrop-blur rounded-xl border shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center p-6"
                        >
                            <Image
                                src={item.src}
                                alt={item.name}
                                width={160}
                                height={80}
                                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Row 2 - reverse direction */}
                <motion.div
                    animate={{ x: [-1920, 0] }}
                    transition={{ repeat: Infinity, duration: 36, ease: "linear" }}
                    className="flex gap-16 items-center mt-12"
                >
                    {duplicated.slice(4).map((item, i) => (
                        <div
                            key={`${item.name}-rev-${i}`}
                            className="flex-shrink-0 w-48 h-32 bg-background/80 backdrop-blur rounded-xl border shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center p-6"
                        >
                            <Image
                                src={item.src}
                                alt={item.name}
                                width={160}
                                height={80}
                                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}