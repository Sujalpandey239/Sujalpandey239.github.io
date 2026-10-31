import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Maximize2, Minimize2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'success';
  text: string | React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const { setAccentById } = useTheme();
  const [inputVal, setInputVal] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: '1',
      type: 'output',
      text: 'SujalOS v2.4.0 (x86_64-pc-aws-linux-gnu). All cloud services operational.'
    },
    {
      id: '2',
      type: 'output',
      text: 'Type "help" to view available DevOps commands, or click any chip below.'
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const newHistory: TerminalLine[] = [
      ...history,
      { id: Date.now().toString(), type: 'input', text: trimmed }
    ];

    const args = trimmed.toLowerCase().split(' ');
    const mainCmd = args[0];

    switch (mainCmd) {
      case 'help':
        newHistory.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          text: (
            <div className="space-y-1 text-zinc-300">
              <div>Available Commands:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
                <div><span className="text-[var(--accent)] font-bold">whoami</span> - Display professional summary</div>
                <div><span className="text-[var(--accent)] font-bold">skills</span> - List core cloud & Linux stack</div>
                <div><span className="text-[var(--accent)] font-bold">aws [service]</span> - Query AWS resources (e.g. `aws s3 ls`)</div>
                <div><span className="text-[var(--accent)] font-bold">certs</span> - List verified accreditations</div>
                <div><span className="text-[var(--accent)] font-bold">theme [color]</span> - Change theme (lime/mint/orange/blue)</div>
                <div><span className="text-[var(--accent)] font-bold">contact</span> - Reach out directly</div>
                <div><span className="text-[var(--accent)] font-bold">clear</span> - Clear terminal history</div>
              </div>
            </div>
          )
        });
        break;

      case 'whoami':
        newHistory.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          text: `${PORTFOLIO_DATA.profile.name} — 4th Year B.Tech CSE student at ABESIT, aspiring Cloud & DevOps Engineer. Hands-on with AWS (Lambda, S3, DynamoDB, IAM) and Linux systems administration.`
        });
        break;

      case 'skills':
        newHistory.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          text: (
            <div className="text-xs space-y-1">
              <div>[AWS Cloud]: Lambda, S3, DynamoDB, API Gateway, CloudWatch, SQS, SNS, IAM, EC2</div>
              <div>[Systems & Automation]: Linux OS, Bash Scripting, Systemd, Networking, Cron</div>
              <div>[DevOps & Data]: Solutions Architecture, Docker, Git, CI/CD, DBMS/SQL</div>
            </div>
          )
        });
        break;

      case 'aws':
        if (args[1] === 's3' && args[2] === 'ls') {
          newHistory.push({
            id: (Date.now() + 1).toString(),
            type: 'output',
            text: (
              <div className="text-xs text-zinc-300 font-mono">
                <div>2026-10-31 08:12:04 s3://sujal-pandey-portfolio-assets</div>
                <div>2026-10-31 08:14:22 s3://cloud-event-pipeline-telemetry</div>
                <div>2026-10-31 08:19:50 s3://backup-encrypted-snapshots-apse1</div>
              </div>
            )
          });
        } else if (args[1] === 'lambda' || args[1] === 'serverless') {
          newHistory.push({
            id: (Date.now() + 1).toString(),
            type: 'output',
            text: (
              <div className="text-xs text-zinc-300 font-mono">
                <div>[FUNCTION] event-ingest-stream | Runtime: Node.js 20.x | Memory: 256MB | Status: Active</div>
                <div>[FUNCTION] data-sanitizer-proc | Runtime: Python 3.12 | Memory: 512MB | Status: Active</div>
                <div>[FUNCTION] dlq-alert-dispatcher | Runtime: Python 3.12 | Memory: 128MB | Status: Active</div>
              </div>
            )
          });
        } else {
          newHistory.push({
            id: (Date.now() + 1).toString(),
            type: 'output',
            text: 'AWS CLI: Try "aws s3 ls" or "aws lambda". All IAM access keys validated via STS AssumeRole.'
          });
        }
        break;

      case 'certs':
        newHistory.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          text: (
            <div className="text-xs space-y-1 text-zinc-300">
              {PORTFOLIO_DATA.certifications.map((c, i) => (
                <div key={i}>
                  [{c.issueDate}] <span className="text-[var(--accent)]">{c.title}</span> — {c.issuer}
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'theme':
        const targetColor = args[1];
        if (['lime', 'mint', 'orange', 'blue'].includes(targetColor)) {
          setAccentById(targetColor);
          newHistory.push({
            id: (Date.now() + 1).toString(),
            type: 'success',
            text: `Theme accent switched to "${targetColor}" successfully.`
          });
        } else {
          newHistory.push({
            id: (Date.now() + 1).toString(),
            type: 'error',
            text: 'Usage: theme [lime | mint | orange | blue]'
          });
        }
        break;

      case 'contact':
        newHistory.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          text: `Email: ${PORTFOLIO_DATA.profile.email} | LinkedIn: ${PORTFOLIO_DATA.profile.linkedin}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'sudo':
        newHistory.push({
          id: (Date.now() + 1).toString(),
          type: 'error',
          text: 'sujal-guest is not in the sudoers file. This incident has been logged to CloudWatch 🚨'
        });
        break;

      default:
        newHistory.push({
          id: (Date.now() + 1).toString(),
          type: 'error',
          text: `Command not found: "${trimmed}". Type "help" for a list of commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const commandChips = [
    'help',
    'whoami',
    'skills',
    'aws s3 ls',
    'certs',
    'theme mint',
    'clear'
  ];

  return (
    <section id="terminal" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#232732] pb-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Console</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Live DevOps Terminal
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Direct CLI interface to inspect cloud resources, query architecture modules, or dynamically switch portfolio themes.
          </p>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="font-mono text-[11px] text-zinc-500 mr-1">Quick Run:</span>
          {commandChips.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded-lg font-mono text-xs bg-[#151722] hover:bg-[#1E2230] border border-[#242938] hover:border-[var(--accent)] text-zinc-300 hover:text-[var(--accent)] transition-all"
            >
              ${cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Window Box */}
      <div className={`bg-[#0A0C10] border border-[#232732] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${isExpanded ? 'min-h-[600px]' : 'min-h-[380px]'}`}>
        {/* Terminal Title Bar */}
        <div className="bg-[#10121A] px-5 py-3 border-b border-[#202432] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-3 font-mono text-xs text-zinc-400 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>sujal@aws-cloud-bastion:~</span>
            </span>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-zinc-400 hover:text-white p-1 rounded-md"
            title={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm overflow-y-auto max-h-[480px] space-y-3">
          {history.map((line) => (
            <div key={line.id} className="leading-relaxed">
              {line.type === 'input' ? (
                <div className="flex items-center gap-2 text-zinc-300">
                  <span className="text-[var(--accent)] font-bold">sujal@cloud:~$</span>
                  <span>{line.text}</span>
                </div>
              ) : line.type === 'error' ? (
                <div className="text-rose-400 pl-4">{line.text}</div>
              ) : line.type === 'success' ? (
                <div className="text-emerald-400 pl-4">{line.text}</div>
              ) : (
                <div className="text-zinc-300 pl-4">{line.text}</div>
              )}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleFormSubmit} className="p-4 bg-[#0D0F16] border-t border-[#1C202C] flex items-center gap-3">
          <span className="text-[var(--accent)] font-mono font-bold text-xs sm:text-sm pl-2 select-none">
            sujal@cloud:~$
          </span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or any command..."
            className="flex-1 bg-transparent border-0 outline-none font-mono text-xs sm:text-sm text-white placeholder-zinc-600 focus:ring-0"
            autoComplete="off"
            spellCheck={false}
          />
          <button
            type="submit"
            className="p-2 rounded-lg bg-[#181B26] hover:bg-[var(--accent)] hover:text-[#0B0C0F] text-zinc-400 transition-colors"
            title="Execute"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};
