import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  SiPython, SiJavascript, SiPytorch, SiOpencv, 
  SiNumpy, SiPostgresql, SiRedis, SiFastapi, 
  SiReact, SiDocker, SiGit, SiGithub, SiLangchain 
} from "react-icons/si";
import { ArrowRight, ExternalLink, ChevronDown, Trophy, Mail, Phone, MapPin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference">
        <div className="font-mono text-xs tracking-widest font-bold text-primary">RJ_</div>
        <div className="flex gap-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#open-source" className="hover:text-primary transition-colors">Open Source</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="font-mono text-primary mb-4 tracking-wider text-sm">
            &gt; SYSTEM_READY
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
            Rishabh Jain.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light mb-10 leading-relaxed">
            I engineer <span className="text-foreground font-medium">intelligence</span> and <span className="text-foreground font-medium">systems</span>. Open-source contributor. AI/ML developer. Builder of impactful tools.
          </p>
          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <a href="mailto:rishabhj2005@email.com">
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-black rounded-none">
                Initialize Contact
              </Button>
            </a>
            <a href="https://github.com/Rishabh060105" target="_blank" rel="noreferrer">
              <Button variant="ghost" className="rounded-none border border-border hover:bg-white/5">
                <SiGithub className="mr-2" /> GitHub
              </Button>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-6 md:left-24 text-muted-foreground"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Stats/About Strip */}
      <section id="about" className="border-y border-border/50 bg-white/5 py-12 px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-1">
            <div className="font-mono text-xs text-muted-foreground">Education</div>
            <div className="font-medium">PES University</div>
            <div className="text-sm text-muted-foreground">BTech CS (AI & ML)</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-xs text-muted-foreground">Timeline</div>
            <div className="font-medium">2023 – 2027</div>
            <div className="text-sm text-muted-foreground">3rd Year</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-xs text-muted-foreground">Performance</div>
            <div className="font-medium">8.0 CGPA</div>
            <div className="text-sm text-muted-foreground">Distinction Scholar</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-xs text-muted-foreground">Location</div>
            <div className="font-medium">Bangalore, IN</div>
            <div className="text-sm text-muted-foreground">Base of Operations</div>
          </div>
        </div>
      </section>

      {/* Open Source Highlight */}
      <section id="open-source" className="py-32 px-6 md:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] w-12 bg-primary"></div>
            <h2 className="text-3xl font-mono uppercase tracking-widest text-primary">Open Source Core</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">Accord Project</h3>
                <p className="text-xl text-muted-foreground font-light">
                  Architecting deterministic legal logic from probabilistic natural language.
                </p>
              </div>

              <ul className="space-y-6 font-mono text-sm leading-relaxed text-muted-foreground border-l border-border/50 pl-6">
                <li className="relative">
                  <span className="absolute -left-[29px] top-2 w-2 h-2 bg-primary"></span>
                  <strong className="text-foreground">TypeScript Pipeline:</strong> Translating natural language into structured intermediate representations (IR) for legal templates.
                </li>
                <li className="relative">
                  <span className="absolute -left-[29px] top-2 w-2 h-2 bg-primary"></span>
                  <strong className="text-foreground">Validation Engine:</strong> Contributed to IR validation and repair—handling missing fields, type mismatches, and schema inconsistencies.
                </li>
                <li className="relative">
                  <span className="absolute -left-[29px] top-2 w-2 h-2 bg-primary"></span>
                  <strong className="text-foreground">Artifact Generation:</strong> Generating Accord-compatible artifacts including Concerto models, TemplateMark grammars, and Ergo logic stubs.
                </li>
                <li className="relative">
                  <span className="absolute -left-[29px] top-2 w-2 h-2 bg-primary"></span>
                  <strong className="text-foreground">CLI Infrastructure:</strong> Stage-based pipeline integrating LLM outputs with deterministic processing steps.
                </li>
              </ul>
              
              <div className="pt-4">
                <Badge variant="outline" className="rounded-none border-primary text-primary bg-primary/10">2026–Present Contributor</Badge>
              </div>
            </div>

            <div className="relative aspect-square md:aspect-[4/3] bg-card border border-border/50 p-6 font-mono text-xs md:text-sm text-muted-foreground overflow-hidden flex flex-col group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 z-10 pointer-events-none"></div>
              <div className="flex items-center justify-between mb-4 border-b border-border/50 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-primary">pipeline.ts</div>
              </div>
              <pre className="flex-1 overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity">
                <code className="language-typescript">
{`// Validating Intermediate Representation
export async function validateIR(
  ast: TemplateAST, 
  schema: SchemaDefinition
): Promise<ValidationResult> {
  const errors = [];
  
  // Checking type mismatches
  for (const node of ast.nodes) {
    if (!schema.has(node.type)) {
      errors.push(
        new SchemaInconsistencyError(node)
      );
    }
  }
  
  // Repairing missing fields via LLM context
  if (errors.length > 0) {
    const repaired = await repairWithLLM(
      ast, errors
    );
    return { valid: true, ast: repaired };
  }
  
  return { valid: true, ast };
}`}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 md:px-24 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[1px] w-12 bg-primary"></div>
            <h2 className="text-3xl font-mono uppercase tracking-widest">Selected Works</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <Card className="bg-background border-border/50 rounded-none overflow-hidden group hover:border-primary/50 transition-colors">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <Code2 className="w-8 h-8 text-primary" />
                  <span className="font-mono text-xs text-muted-foreground">2026</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">LegalGPT</h3>
                <p className="text-muted-foreground mb-6 font-light flex-1">
                  RAG system for Indian Corporate Law. PDF parsing to semantic chunking to MiniLM embeddings into ChromaDB.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="rounded-none font-mono text-[10px]">FastAPI</Badge>
                  <Badge variant="secondary" className="rounded-none font-mono text-[10px]">Llama3/Groq</Badge>
                  <Badge variant="secondary" className="rounded-none font-mono text-[10px]">ChromaDB</Badge>
                </div>
                <div className="font-mono text-xs text-muted-foreground border-t border-border/50 pt-4">
                  Cosine similarity ranking.
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="bg-background border-border/50 rounded-none overflow-hidden group hover:border-primary/50 transition-colors relative">
              <div className="absolute top-0 right-0 p-4">
                <Trophy className="w-5 h-5 text-yellow-500" />
              </div>
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <Code2 className="w-8 h-8 text-primary" />
                  <span className="font-mono text-xs text-muted-foreground">2025</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Suspicious Activity Detection</h3>
                <p className="text-muted-foreground mb-6 font-light flex-1">
                  PyTorch pipeline combining YOLOv8-Pose and LSTM temporal modeling. Extracts motion-dynamics features from pose trajectories.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="rounded-none font-mono text-[10px]">PyTorch</Badge>
                  <Badge variant="secondary" className="rounded-none font-mono text-[10px]">YOLOv8</Badge>
                  <Badge variant="secondary" className="rounded-none font-mono text-[10px]">LSTM</Badge>
                </div>
                <div className="font-mono text-xs text-primary border-t border-border/50 pt-4 flex justify-between">
                  <span>HCLTech Ideathon WINNER</span>
                  <span>88.08% Acc | 0.885 AUC</span>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="bg-background border-border/50 rounded-none overflow-hidden group hover:border-primary/50 transition-colors">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <Code2 className="w-8 h-8 text-primary" />
                  <span className="font-mono text-xs text-muted-foreground">2025</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Intel CPU Perf Analyzer</h3>
                <p className="text-muted-foreground mb-6 font-light flex-1">
                  AI-assisted CPU log analysis utilizing CrewAI multi-agent framework for parsing, bottleneck detection, and recommendation generation.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="rounded-none font-mono text-[10px]">CrewAI</Badge>
                  <Badge variant="secondary" className="rounded-none font-mono text-[10px]">Agents</Badge>
                </div>
                <div className="font-mono text-xs text-muted-foreground border-t border-border/50 pt-4">
                  Detects L3 cache misses, thermal limits.
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="bg-background border-border/50 rounded-none overflow-hidden group hover:border-primary/50 transition-colors">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <Code2 className="w-8 h-8 text-primary" />
                  <span className="font-mono text-xs text-muted-foreground">2025</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">PUB-SUB Messaging</h3>
                <p className="text-muted-foreground mb-6 font-light flex-1">
                  Distributed Publish-Subscribe messaging system with Kafka-inspired event streaming architecture and topic-based routing.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="rounded-none font-mono text-[10px]">Distributed Systems</Badge>
                  <Badge variant="secondary" className="rounded-none font-mono text-[10px]">Event Streaming</Badge>
                </div>
                <div className="font-mono text-xs text-muted-foreground border-t border-border/50 pt-4">
                  Asynchronous producers/consumers.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack & Achievements */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24">
          
          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] w-12 bg-primary"></div>
              <h2 className="text-2xl font-mono uppercase tracking-widest">Stack.</h2>
            </div>
            
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-6 text-muted-foreground">
              <div className="flex flex-col items-center gap-2 hover:text-primary transition-colors group"><SiPython className="w-8 h-8 group-hover:-translate-y-1 transition-transform" /><span className="text-[10px] font-mono">Python</span></div>
              <div className="flex flex-col items-center gap-2 hover:text-primary transition-colors group"><SiJavascript className="w-8 h-8 group-hover:-translate-y-1 transition-transform" /><span className="text-[10px] font-mono">JS</span></div>
              <div className="flex flex-col items-center gap-2 hover:text-primary transition-colors group"><SiPytorch className="w-8 h-8 group-hover:-translate-y-1 transition-transform" /><span className="text-[10px] font-mono">PyTorch</span></div>
              <div className="flex flex-col items-center gap-2 hover:text-primary transition-colors group"><SiOpencv className="w-8 h-8 group-hover:-translate-y-1 transition-transform" /><span className="text-[10px] font-mono">OpenCV</span></div>
              <div className="flex flex-col items-center gap-2 hover:text-primary transition-colors group"><SiNumpy className="w-8 h-8 group-hover:-translate-y-1 transition-transform" /><span className="text-[10px] font-mono">NumPy</span></div>
              <div className="flex flex-col items-center gap-2 hover:text-primary transition-colors group"><SiLangchain className="w-8 h-8 group-hover:-translate-y-1 transition-transform" /><span className="text-[10px] font-mono">LangChain</span></div>
              <div className="flex flex-col items-center gap-2 hover:text-primary transition-colors group"><SiFastapi className="w-8 h-8 group-hover:-translate-y-1 transition-transform" /><span className="text-[10px] font-mono">FastAPI</span></div>
              <div className="flex flex-col items-center gap-2 hover:text-primary transition-colors group"><SiReact className="w-8 h-8 group-hover:-translate-y-1 transition-transform" /><span className="text-[10px] font-mono">React</span></div>
              <div className="flex flex-col items-center gap-2 hover:text-primary transition-colors group"><SiPostgresql className="w-8 h-8 group-hover:-translate-y-1 transition-transform" /><span className="text-[10px] font-mono">Postgres</span></div>
              <div className="flex flex-col items-center gap-2 hover:text-primary transition-colors group"><SiRedis className="w-8 h-8 group-hover:-translate-y-1 transition-transform" /><span className="text-[10px] font-mono">Redis</span></div>
              <div className="flex flex-col items-center gap-2 hover:text-primary transition-colors group"><SiDocker className="w-8 h-8 group-hover:-translate-y-1 transition-transform" /><span className="text-[10px] font-mono">Docker</span></div>
              <div className="flex flex-col items-center gap-2 hover:text-primary transition-colors group"><SiGit className="w-8 h-8 group-hover:-translate-y-1 transition-transform" /><span className="text-[10px] font-mono">Git</span></div>
            </div>

            <div className="mt-8 font-mono text-xs text-muted-foreground/60 border-l border-border/50 pl-4">
              <p>Concepts: Deep Learning, CV, NLP, RAG, Transformers, Vector Search, Temporal Modeling.</p>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] w-12 bg-primary"></div>
              <h2 className="text-2xl font-mono uppercase tracking-widest">Telemetry.</h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1"><Trophy className="w-5 h-5 text-primary" /></div>
                <div>
                  <h4 className="font-bold text-lg">HCLTech Ideathon Winner</h4>
                  <p className="text-muted-foreground font-mono text-sm mt-1">2025 • INR 50,000 cash prize</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1"><Trophy className="w-5 h-5 text-primary" /></div>
                <div>
                  <h4 className="font-bold text-lg">Distinction Scholarship</h4>
                  <p className="text-muted-foreground font-mono text-sm mt-1">PES University • Awarded 3 times</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1"><Trophy className="w-5 h-5 text-primary" /></div>
                <div>
                  <h4 className="font-bold text-lg">CodeBlitz Hackathon</h4>
                  <p className="text-muted-foreground font-mono text-sm mt-1">2024 • Top 10 Teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="border-t border-border/50 bg-white/5 py-16 px-6 md:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="font-mono text-2xl font-bold tracking-tighter mb-2">RJ_</div>
            <p className="text-muted-foreground font-mono text-sm">System terminating. Handshake ready.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 font-mono text-sm">
            <a href="mailto:rishabhj2005@email.com" className="flex items-center gap-2 hover:text-primary transition-colors text-muted-foreground">
              <Mail className="w-4 h-4" /> rishabhj2005@email.com
            </a>
            <a href="tel:+917498111506" className="flex items-center gap-2 hover:text-primary transition-colors text-muted-foreground">
              <Phone className="w-4 h-4" /> +91-7498111506
            </a>
            <a href="https://linkedin.com/in/rishabh-jain-671456300" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors text-muted-foreground">
              <ExternalLink className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
