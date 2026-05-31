import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Bot, BriefcaseBusiness, CheckCircle2, FileText, Globe2, Handshake, Layers3, LockKeyhole, MessageSquareText, PencilRuler, Radar, Sparkles, Target, Workflow, Zap } from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01',
    title: 'WhatsApp Business Command Center',
    status: 'Demo v1 built',
    tag: 'Saudi/Gulf operations',
    icon: MessageSquareText,
    summary: 'A WhatsApp-first AI inbox for customer requests, Arabic reply drafts, owner approval, follow-ups, and lead tracking.',
    proof: ['Arabic intent routing', 'Approval queue', 'Follow-up log'],
  },
  {
    number: '02',
    title: 'AI Business Process Auditor',
    status: 'Demo v1 built',
    tag: 'Consulting funnel',
    icon: Radar,
    summary: 'A diagnostic tool that interviews a business and returns an automation map: impact, effort, risk, and first agent to build.',
    proof: ['Intake form', 'Scoring model', 'PDF-style report'],
  },
  {
    number: '03',
    title: 'Miso: Creator Content OS',
    status: 'Live build log',
    tag: 'Personal brand engine',
    icon: Bot,
    summary: 'A separate Telegram agent for Arabic scripts, LinkedIn posts, content calendars, safety review, and weekly growth loops.',
    proof: ['Telegram agent', 'Specialist roles', '15-day sprint'],
  },
  {
    number: '04',
    title: 'LinkedIn Talent + Recruiter Radar',
    status: 'Building in public',
    tag: 'Career system',
    icon: BriefcaseBusiness,
    summary: 'A professional growth workflow for posts, recruiter mapping, outreach drafts, application tracking, and follow-up reminders.',
    proof: ['Recruiter CRM', 'Outreach drafts', 'Job tracker'],
  },
  {
    number: '05',
    title: 'Arabic Company Knowledge Assistant',
    status: 'Planned',
    tag: 'Arabic RAG',
    icon: FileText,
    summary: 'A bilingual assistant that answers from company documents with citations, uncertainty labels, and escalation behavior.',
    proof: ['Source citations', 'Arabic Q&A', 'Escalation rules'],
  },
  {
    number: '06',
    title: 'Agent Monitoring + Cost Dashboard',
    status: 'Planned',
    tag: 'Trust layer',
    icon: LockKeyhole,
    summary: 'A visibility layer for AI systems: run logs, cost estimates, approvals, failures, tool usage, and human overrides.',
    proof: ['Run history', 'Cost view', 'Approval states'],
  }
];

const services = [
  ['AI Agent Systems', 'Custom agents for support, sales, content, research, and operations.'],
  ['WhatsApp Automation', 'Arabic customer handling and lead workflows for Saudi/Gulf businesses.'],
  ['AI Workflow Audits', 'Find what should actually be automated before building the wrong thing.'],
  ['Content Operating Systems', 'Turn ideas into scripts, posts, calendars, approvals, and analytics.']
];

const roadmap = [
  ['Built', 'Portfolio foundation + resource funnel mockup'],
  ['Built', 'AI Business Process Auditor demo v1'],
  ['Built', 'WhatsApp Command Center demo v1'],
  ['Next', 'Miso Creator OS case study'],
  ['After', 'LinkedIn Recruiter Radar'],
  ['After', 'Arabic Knowledge Assistant']
];

const auditRows = [
  ['Customer follow-ups', 'High', 'Medium', 'First automation'],
  ['Quote requests', 'High', 'Low', 'Quick win'],
  ['Internal FAQs', 'Medium', 'Low', 'Knowledge bot'],
  ['Complaint triage', 'High', 'High', 'Approval required']
];

const inboxRows = [
  { name: 'سارة', type: 'Price request', priority: 'High', draft: 'أهلًا سارة، شكرًا لتواصلك. ممكن ترسلين لنا تفاصيل الطلب عشان نعطيك السعر الأنسب؟' },
  { name: 'Abdullah', type: 'Follow-up', priority: 'Medium', draft: 'هلا عبدالله، حبيت أتابع معك بخصوص الطلب السابق. هل ما زلت مهتم؟' },
  { name: 'Noura', type: 'Complaint', priority: 'Owner approval', draft: 'أهلًا نورة، نعتذر عن التجربة. بنراجع الموضوع ونتواصل معك بحل مناسب.' }
];

function ProjectCard({ p }) {
  const Icon = p.icon;
  return <article className="project-card">
    <div className="project-topline"><span>{p.number}</span><span>{p.status}</span></div>
    <div className="project-icon"><Icon size={22}/></div>
    <p className="tag">{p.tag}</p>
    <h3>{p.title}</h3>
    <p className="summary">{p.summary}</p>
    <div className="proof-row">{p.proof.map(x => <small key={x}>{x}</small>)}</div>
    <a href="#contact" className="card-link">Build like this <ArrowUpRight size={16}/></a>
  </article>
}

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top"><span className="brand-mark">ح</span><span>Hamad Lab</span></a>
        <div className="nav-links"><a href="#projects">Projects</a><a href="#method">Method</a><a href="#services">Services</a><a href="#waitlist">Resources</a></div>
      </nav>

      <section id="top" className="hero">
        <div className="hero-left">
          <div className="eyebrow"><Sparkles size={16}/> Applied AI systems, built in public</div>
          <h1>Practical AI systems for messy real-world work.</h1>
          <p className="lead">I build workflow products, agents, and prototypes for businesses that run on messages, documents, follow-ups, and repeated decisions.</p>
          <div className="cta-row">
            <a className="button ink" href="#projects">Explore the project lab <ArrowUpRight size={18}/></a>
            <a className="button paper" href="#waitlist">Get the templates</a>
          </div>
        </div>
        <div className="hero-board" aria-label="AI workflow board">
          <div className="board-title"><span>Weekly Build Board</span><strong>Live portfolio</strong></div>
          <div className="sticky-note note-a"><b>Problem</b><span>Business workflows are scattered across WhatsApp, sheets, docs, and memory.</span></div>
          <div className="sticky-note note-b"><b>System</b><span>Agents with roles, approvals, logs, and human control.</span></div>
          <div className="sticky-note note-c"><b>Output</b><span>Working demos, case studies, templates, and services.</span></div>
          <div className="mini-flow"><span>Idea</span><i/> <span>Agent</span><i/> <span>Approval</span><i/> <span>Result</span></div>
        </div>
      </section>

      <section className="intro-strip">
        <span>Not a prompt portfolio</span>
        <span>Arabic-first systems</span>
        <span>Human approvals</span>
        <span>Business workflows</span>
      </section>

      <section id="method" className="section method">
        <div className="section-kicker">The angle</div>
        <div className="method-grid">
          <h2>I am not trying to look like another “AI website.”</h2>
          <p>The portfolio is designed like a product lab: clear problems, sharp demos, proof assets, and weekly builds. The point is to show engineering judgment, taste, and execution, not neon robots.</p>
        </div>
        <div className="principles">
          <div><Layers3/><h3>Systems over demos</h3><p>Every project has a workflow, user, approval point, and measurable output.</p></div>
          <div><CheckCircle2/><h3>Honest labels</h3><p>Live, building, prototype, and planned projects are clearly separated.</p></div>
          <div><PencilRuler/><h3>Designed to sell</h3><p>The site attracts employers, consulting clients, and future learners without fake claims.</p></div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-heading">
          <div><div className="section-kicker">Project lab</div><h2>One serious AI system every week.</h2></div>
          <p>These are the systems being built into real portfolio assets: demos, screenshots, architecture diagrams, templates, and case studies.</p>
        </div>
        <div className="project-grid">{projects.map(p => <ProjectCard key={p.title} p={p}/>)}</div>
      </section>

      <section id="demos" className="section demos-section">
        <div className="section-heading">
          <div><div className="section-kicker">Built demos</div><h2>Two projects are already becoming real assets.</h2></div>
          <p>These are portfolio-ready demo surfaces using sample data. Next step is connecting storage, forms, and real screenshots.</p>
        </div>
        <div className="demo-grid">
          <article className="demo-card audit-demo">
            <div className="demo-header"><Radar/><span>AI Business Process Auditor</span></div>
            <h3>Automation Opportunity Report</h3>
            <p className="demo-muted">Sample result for a service business that receives leads through WhatsApp.</p>
            <div className="score-wheel"><strong>82</strong><span>Automation Fit</span></div>
            <div className="audit-table">
              {auditRows.map(([task, impact, effort, note]) => <div className="audit-row" key={task}><b>{task}</b><span>{impact}</span><span>{effort}</span><em>{note}</em></div>)}
            </div>
          </article>
          <article className="demo-card inbox-demo">
            <div className="demo-header"><MessageSquareText/><span>WhatsApp Business Command Center</span></div>
            <h3>Arabic customer triage inbox</h3>
            <p className="demo-muted">Sample inbox showing intent classification, priority, and human-approved reply drafts.</p>
            <div className="inbox-list">
              {inboxRows.map(row => <div className="inbox-item" key={row.name}><div><b>{row.name}</b><span>{row.type} • {row.priority}</span></div><p>{row.draft}</p></div>)}
            </div>
          </article>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="section-heading">
          <div><div className="section-kicker">Services</div><h2>What the projects become.</h2></div>
          <p>Each offer is backed by a project, not just a buzzword.</p>
        </div>
        <div className="service-grid">
          {services.map(([title, desc], i) => <div className="service-card" key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{desc}</p></div>)}
        </div>
      </section>

      <section className="section timeline-section">
        <div className="section-kicker">Build schedule</div>
        <h2>The public roadmap</h2>
        <div className="timeline">{roadmap.map(([date, item]) => <div className="timeline-row" key={date}><span>{date}</span><strong>{item}</strong></div>)}</div>
      </section>

      <section id="waitlist" className="section waitlist">
        <div className="waitlist-copy">
          <div className="section-kicker">WhatsApp-first resources</div>
          <h2>Templates people sign up for, not random freebies.</h2>
          <p>Free resources will be gated with name, WhatsApp, and optional email. This builds the audience for consulting and future learning products, without selling courses before permission is ready.</p>
        </div>
        <form className="lead-form" onSubmit={(e)=>e.preventDefault()}>
          <label>Name<input placeholder="Hamad" /></label>
          <label>WhatsApp<input placeholder="+966..." /></label>
          <label>Email optional<input placeholder="you@example.com" /></label>
          <button className="button ink" type="submit">Join the resource list <Zap size={17}/></button>
          <small>Demo form. I will connect real storage/WhatsApp after approval.</small>
        </form>
      </section>

      <section id="contact" className="section contact">
        <Handshake size={30}/>
        <h2>Have a workflow that needs an AI system?</h2>
        <p>Messages, leads, documents, support, sales, hiring, content, follow-ups. If it repeats, we can probably turn it into a useful system.</p>
        <a className="button ink" href="mailto:hello@example.com">Contact setup coming next <ArrowUpRight size={18}/></a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
