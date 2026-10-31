import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitCommit, CheckCircle2, Play, RefreshCw, Terminal, Layers, Box, Cloud, ShieldCheck, Activity } from 'lucide-react';

interface Stage {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  status: 'passed' | 'running' | 'idle';
  duration: string;
  detail: string;
}

export const PipelineSimulator: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [logs, setLogs] = useState<string[]>([
    '[INIT] AWS CI/CD Pipeline initialized for production...',
    '[AUTH] Verifying AWS IAM role credentials: sts:AssumeRole -> SUCCESS',
    '[COMMIT] SHA: 8a4b3f1 -> "feat(infra): optimize lambda cold-start & add S3 lifecycle rules"',
    '[BUILD] Running automated tests: 24/24 passing (100% coverage)',
  ]);

  const stages: Stage[] = [
    {
      id: 'commit',
      name: 'Source Code',
      icon: GitCommit,
      status: activeStageIndex > 0 ? 'passed' : activeStageIndex === 0 ? 'running' : 'idle',
      duration: '0.8s',
      detail: 'GitHub Webhook triggered on main branch'
    },
    {
      id: 'test',
      name: 'Lint & Unit Tests',
      icon: ShieldCheck,
      status: activeStageIndex > 1 ? 'passed' : activeStageIndex === 1 ? 'running' : 'idle',
      duration: '2.4s',
      detail: 'Static analysis, syntax check & security audit'
    },
    {
      id: 'docker',
      name: 'Container Build',
      icon: Box,
      status: activeStageIndex > 2 ? 'passed' : activeStageIndex === 2 ? 'running' : 'idle',
      duration: '3.1s',
      detail: 'Docker multi-stage build & ECR image push'
    },
    {
      id: 'terraform',
      name: 'IaC & Plan',
      icon: Layers,
      status: activeStageIndex > 3 ? 'passed' : activeStageIndex === 3 ? 'running' : 'idle',
      duration: '1.9s',
      detail: 'Terraform plan: 0 to destroy, 4 to update'
    },
    {
      id: 'deploy',
      name: 'AWS Cloud Rollout',
      icon: Cloud,
      status: activeStageIndex === 4 ? 'running' : activeStageIndex > 4 ? 'passed' : 'idle',
      duration: '1.2s',
      detail: 'Zero-downtime deployment to AWS Lambda & S3'
    }
  ];

  const logMessages = [
    '[SOURCE] Triggered by push event -> repo: sujal-pandey/cloud-workload',
    '[TEST] Executing test suite: 42 assertions passed in 2.1s',
    '[CONTAINER] Building minimal Alpine image -> size: 38MB. Vulnerability scan: 0 CVEs',
    '[IAC] Verifying CloudFormation/Terraform resource dependencies -> OK',
    '[DEPLOY] Publishing Lambda function alias: v2.4.0-prod',
    '[ALB] Traffic shifted: 10% -> 50% -> 100%. Healthcheck returned HTTP 200 OK',
    '[STATUS] Deployment successfully completed with zero downtime!'
  ];

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setActiveStageIndex((prev) => {
        const next = (prev + 1) % 6;
        if (next < logMessages.length) {
          const timestamp = new Date().toISOString().substring(11, 19);
          setLogs((l) => [...l.slice(-7), `[${timestamp}] ${logMessages[next]}`]);
        }
        return next;
      });
    }, 2400);

    return () => clearInterval(interval);
  }, [isRunning]);

  const restartPipeline = () => {
    setActiveStageIndex(0);
    setLogs([
      `[${new Date().toISOString().substring(11, 19)}] [MANUAL] Pipeline restarted by operator`,
      `[${new Date().toISOString().substring(11, 19)}] [INIT] Triggering fresh CI/CD rollout...`
    ]);
  };

  return (
    <section id="pipeline" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#232732] pb-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-2">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>Interactive DevOps Pipeline</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Automated Cloud Deployment Simulator
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            Live visualization of a continuous integration and deployment workflow for cloud-native architectures on AWS.
          </p>
        </div>

        {/* Pipeline Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#14161D] border border-[#2B303D] hover:border-zinc-500 font-mono text-xs text-zinc-300 hover:text-white transition-all"
          >
            <Play className={`w-3.5 h-3.5 ${isRunning ? 'text-amber-400' : 'text-emerald-400'}`} />
            <span>{isRunning ? 'Pause Animation' : 'Resume Pipeline'}</span>
          </button>

          <button
            onClick={restartPipeline}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#14161D] border border-[#2B303D] hover:border-[var(--accent)] font-mono text-xs text-zinc-300 hover:text-[var(--accent)] transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Re-trigger Build</span>
          </button>
        </div>
      </div>

      {/* Visual Pipeline Track */}
      <div className="bg-[#12141B] border border-[#232732] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Subtle grid pattern inside card */}
        <div className="absolute inset-0 bg-cyber-grid opacity-50 pointer-events-none" />

        {/* Pipeline Stages Stepper */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-4">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isCompleted = stage.status === 'passed' || (activeStageIndex > idx);
            const isCurrent = stage.status === 'running' || (activeStageIndex === idx);

            return (
              <motion.div
                key={stage.id}
                layout
                className={`relative flex flex-col justify-between p-4 rounded-2xl border transition-all duration-300 ${
                  isCurrent
                    ? 'bg-[#181B26] border-[var(--accent)] shadow-[0_0_25px_var(--accent-glow)]'
                    : isCompleted
                    ? 'bg-[#14161E] border-emerald-500/40 text-zinc-300'
                    : 'bg-[#0E1015] border-[#222530] text-zinc-500'
                }`}
              >
                {/* Connecting Pulse Beam for desktop */}
                {idx < stages.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <span className="text-zinc-600 font-mono text-xs">→</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`p-2 rounded-xl ${
                        isCurrent
                          ? 'bg-[var(--accent)] text-[#0B0C0F]'
                          : isCompleted
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-[#1A1D26] text-zinc-500'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[11px] text-zinc-400">
                      {stage.duration}
                    </span>
                  </div>

                  <h3 className={`font-display font-bold text-sm mb-1 ${isCurrent ? 'text-white' : ''}`}>
                    {stage.name}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {stage.detail}
                  </p>
                </div>

                {/* Status Indicator Pill */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px]">
                  <span>Status:</span>
                  {isCurrent ? (
                    <span className="inline-flex items-center gap-1.5 text-[var(--accent)] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-ping" />
                      RUNNING
                    </span>
                  ) : isCompleted ? (
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      PASSED
                    </span>
                  ) : (
                    <span className="text-zinc-600">QUEUED</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Terminal Output Drawer */}
        <div className="mt-8 bg-[#090A0E] border border-[#20232E] rounded-2xl p-4 sm:p-5 font-mono text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#1E212B] mb-3 text-zinc-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-zinc-300 font-semibold">CloudWatch CI/CD Real-time Stream</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] text-emerald-400 font-mono">STREAMING LIVE</span>
            </div>
          </div>

          <div className="space-y-1.5 max-h-40 overflow-y-auto font-mono text-[11px] sm:text-xs">
            <AnimatePresence>
              {logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-2 text-zinc-300"
                >
                  <span className="text-zinc-600 select-none">&gt;</span>
                  <span className={log.includes('SUCCESS') || log.includes('passed') || log.includes('200 OK') ? 'text-emerald-400' : log.includes('AWS') || log.includes('Lambda') ? 'text-[var(--accent)]' : 'text-zinc-300'}>
                    {log}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
