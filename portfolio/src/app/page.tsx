import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Linkedin, Mail, Cloud, Server, Database } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "TechHealth Infrastructure Migration",
      description:
        "Migrated from Console as Code to Infrastructure as Code with AWS CDK TypeScript",
      technologies: ["AWS CDK", "TypeScript", "RDS (MySQL)", "EC2", "Systems Manager Session Manager", "Secrets Manager"],
      link: "https://github.com/iibluearth/techhealth-migration",
      type: "Infrastructure",
    },
    {
      title: "Identity and Access Management",
      description:
        "Secured StartupCo’s AWS environment by replacing shared root access with IAM users and groups, enforcing MFA, and applying least-privilege access controls for compliance and security.",
      technologies: ["IAM", "MFA", "AWS Organizations", "Secret Manager", "CloudWatch"],
      link: "https://github.com/iibluearth/identity-and-access-management",
      type: "Security",
    },
    {
      title: "CloudPipe: DevOps CI/CD Pipeline",
      description:
        "Automated static website deployments by integrating GitHub Actions with AWS S3, replacing manual uploads with a reliable CI/CD pipeline.",
      technologies: ["S3", "GitHub Actions", "CloudFormation", "IAM", "AWS CLI"],
      link: "https://github.com/iibluearth/cloudpipe-deploy",
      type: "Data Engineering",
    },
    {
      title: "Scalable Web Application Architecture",
      description:
        "Design a secure, highly available, and cost-efficient cloud infrastructure that automatically scales to handle high traffic while optimizing performance and reliability.",
      technologies: ["ELB", "EC2 / Auto Scaling Groups", "RDS (Multi-AZ, Read Replicas)", "S3 + CloudFront", "IAM & Security Groups"],
      link: "https://github.com/example/cloud-security",
      type: "Cloud Architecture",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Pink Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="mb-8">
            <Image
              src="/profile.jpeg"
              alt="Profile picture"
              width={150}
              height={150}
              className="rounded-full mx-auto border-4 border-primary/20 shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Cloud & Software Engineer
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Designing and building scalable, secure, and cost-effective cloud solutions that power modern applications
            and drive business growth.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          >
            View My Projects
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            A showcase of cloud infrastructure and automation solutions I've built
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    {project.type === "Infrastructure" && <Cloud className="h-5 w-5 text-primary" />}
                    {project.type === "Monitoring" && <Server className="h-5 w-5 text-primary" />}
                    {project.type === "Data Engineering" && <Database className="h-5 w-5 text-primary" />}
                    {project.type === "Security" && <Server className="h-5 w-5 text-primary" />}
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I’m a passionate software engineer with cloud computing experience, specializing in designing scalable and secure infrastructure.
              I enjoy building cost-effective systems and automation solutions that enable teams to deploy applications reliably and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Cloud Architecture</h3>
              <p className="text-sm text-muted-foreground">
                Designing resilient, scalable solutions across AWS


              </p>
            </div>
            <div>
              <Server className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">DevOps & Automation</h3>
              <p className="text-sm text-muted-foreground">
                Streamlining deployments with CI/CD pipelines and infrastructure as code
              </p>
            </div>
            <div>
              <Database className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Data & Security</h3>
              <p className="text-sm text-muted-foreground">
                Building secure data pipelines and implementing compliance frameworks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg">
            Interested in collaborating or discussing cloud architecture? I'd love to hear from you.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:kaylamann777@gmail.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://www.linkedin.com/in/kmann777/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/iibluearth"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Cloud Engineer Portfolio. Built with Next.js and deployed on Vercel.
          </p>
        </div>
      </footer>
    </div>
  )
}

