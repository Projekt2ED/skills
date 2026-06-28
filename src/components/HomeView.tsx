import React from 'react';
import { 
  Bot, 
  ChevronRight, 
  Cpu, 
  Workflow, 
  Brain, 
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';

interface HomeViewProps {
  onSelectEmployee: (employeeId: 'ip-video' | 'sales-assistant' | 'short-drama') => void;
}

export default function HomeView({ onSelectEmployee }: HomeViewProps) {
  // Active AI Digital Employees
  const activeEmployees = [
    {
      id: 'ip-video' as const,
      name: '多语种视频助理',
      enName: 'Global Video Officer',
      badge: '已上线',
      tagline: '视频翻译、配音克隆、口型对齐，一站搞定',
      skills: ['爆款文案拆解', '人声克隆', '智能口型对齐', '多语种分发'],
      borderColor: 'hover:border-indigo-500/30',
      image: '/images/marketing_video_creator_1782511641803.jpg'
    },
    {
      id: 'sales-assistant' as const,
      name: '销售转化助理',
      enName: 'Smart Sales Assistant',
      badge: '已上线',
      tagline: '话术生成、异议处理、客户跟进全程托管',
      skills: ['异议转化处理', '社媒跟进信撰写', '24h 自动化响应', '商务谈判模式'],
      borderColor: 'hover:border-teal-500/30',
      image: '/images/sales_copilot_hero_1782511656996.jpg'
    },
    {
      id: 'short-drama' as const,
      name: '短剧策划助理',
      enName: 'Drama Scriptwriter',
      badge: '已上线',
      tagline: '剧本大纲、分镜脚本、宣发文案一键生成',
      skills: ['黄金爽点设计', '分镜脚本自动生成', '海外爆款节奏', '地道语境润色'],
      borderColor: 'hover:border-purple-500/30',
      image: '/images/short_drama_cinema_1782511673522.jpg'
    }
  ];

  // Upcoming Pipeline
  const futureEmployees = [
    {
      name: '海外社媒代运营官',
      enName: 'Social Matrix Operator',
      status: '训练中',
      desc: '一键挂接海外主流平台，自动分发与智能高情商互动。'
    },
    {
      name: '广告投放视觉分析师',
      enName: 'Ads Multi-modal Creative',
      status: '训练中',
      desc: '高点击率海报自适应合成，广告文案变体多维调优。'
    },
    {
      name: '独立站流量内容写手',
      enName: 'SEO Copywriting Agent',
      status: '训练中',
      desc: '生成符合搜索引擎算法的高权重软文，持续引流。'
    }
  ];

  return (
    <div className="bg-[#000000] text-[#f5f5f7] min-h-screen relative overflow-hidden font-sans">
      
      {/* Background Decorative Gradient (Slight, organic ambient light, extremely dark and controlled) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-40">
        <div className="absolute top-[-100px] left-[20%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute top-[-50px] right-[20%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 sm:py-32 relative z-10 space-y-36">
        
        {/* ==================== 1. HERO SECTION ==================== */}
        <section className="text-center space-y-8 max-w-4xl mx-auto pt-8">
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800/80 pl-2 pr-4 py-1 rounded-full">
            <span className="w-5 h-5 rounded-full bg-white p-0.5 flex items-center justify-center overflow-hidden">
              <img src="/brand/ximeng-logo.svg" alt="羲梦科技 Logo" className="w-full h-full object-contain" />
            </span>
            <span className="text-[10px] font-semibold text-neutral-400 tracking-wider uppercase">羲梦工场 · AI 数字员工技能包</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            雇用专业的 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
              AI 数字员工群
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal">
            覆盖出海视频、销售转化、短剧策划等核心场景。开箱即用，即刻启动您的全球化增长。
          </p>

          <div className="pt-4 flex justify-center">
            <a 
              href="#employee-squad"
              className="py-3 px-8 rounded-full font-semibold text-xs bg-white text-black hover:bg-neutral-100 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>浏览数字员工大厅</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Platform Snapshot Panel — replaces generic image */}
          <div className="pt-8 max-w-4xl mx-auto">
            <div className="relative rounded-2xl border border-neutral-800 bg-[#0a0a0a] overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
                  <span className="text-[11px] text-neutral-400 font-mono">platform.status = online</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-neutral-500 font-mono">v2.0</span>
                  <span className="text-[10px] text-neutral-600">|</span>
                  <span className="text-[10px] text-neutral-500 font-mono">cluster: 3 agents active</span>
                </div>
              </div>

              {/* Agent grid */}
              <div className="grid grid-cols-3 divide-x divide-neutral-800">
                {[
                  { name: '多语种视频助理', en: 'Video Officer', color: 'bg-indigo-500' },
                  { name: '销售转化助理', en: 'Sales Assistant', color: 'bg-teal-500' },
                  { name: '短剧策划助理', en: 'Drama Writer', color: 'bg-purple-500' },
                ].map((agent, i) => (
                  <div key={i} className="p-5 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${agent.color} shadow-[0_0_4px_currentColor]`} />
                      <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">{agent.en}</span>
                    </div>
                    <p className="text-sm font-semibold text-white">{agent.name}</p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      <span className="text-[10px] text-neutral-500 font-mono">已就绪</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ==================== 2. DIGITAL EMPLOYEE SQUAD ==================== */}
        <section id="employee-squad" className="space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-semibold text-white tracking-tight">精选数字员工一览</h2>
            <p className="text-sm text-neutral-500">将专属 Skill 技能卡挂载至日常工作流，随时调遣。</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {activeEmployees.map((emp) => (
              <div 
                key={emp.id}
                className={`bg-[#0a0a0c] border border-neutral-900/60 hover:border-neutral-800 rounded-2xl p-6 transition-all flex flex-col justify-between group ${emp.borderColor}`}
              >
                <div className="space-y-6">
                  {/* Card Premium Preview Image Banner */}
                  <div className="aspect-video w-full rounded-xl overflow-hidden border border-neutral-900 bg-neutral-950 relative">
                    <img 
                      src={emp.image} 
                      alt={emp.name} 
                      className="w-full h-full object-cover opacity-90 group-hover:scale-[1.02] group-hover:opacity-100 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-neutral-800/80">
                      <span className="text-[9px] font-bold text-neutral-300">
                        {emp.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="space-y-1.5 text-left">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white tracking-tight">{emp.name}</h3>
                      <Bot className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-[10px] text-neutral-500 font-semibold font-mono uppercase">{emp.enName}</p>
                    <p className="text-xs text-neutral-400 font-normal">{emp.tagline}</p>
                  </div>

                  {/* Skills Tag List */}
                  <div className="space-y-2 text-left">
                    <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-wider">配属技能 (Skills)</p>
                    <div className="flex flex-wrap gap-1.5">
                      {emp.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="text-[9px] text-neutral-400 bg-neutral-950 px-2.5 py-0.5 rounded border border-neutral-900/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Trigger Action */}
                <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-neutral-600">v2.0 · 智能体就绪</span>
                  <button 
                    onClick={() => onSelectEmployee(emp.id)}
                    className="text-xs font-semibold py-1.5 px-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 cursor-pointer flex items-center gap-1 hover:text-white hover:border-neutral-700 transition-all"
                  >
                    <span>进入工作台</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 3. PIPELINE SQUAD (Coming soon) ==================== */}
        <section className="bg-[#050505] border border-neutral-900/60 rounded-2xl p-8 sm:p-10 space-y-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-900">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-indigo-400 bg-indigo-950/20 px-2.5 py-0.5 rounded border border-indigo-900/40 uppercase">
                训练待命
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-white">即将列队的 AI 员工储备</h2>
            </div>
            <p className="text-xs text-neutral-500 max-w-xs">
              我们正根据出海商家的核心诉求调优以下高频数字员工，将在近期自动推送上线。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureEmployees.map((future, idx) => (
              <div key={idx} className="space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">{future.name}</h4>
                  <span className="text-[9px] font-mono text-neutral-400 px-1.5 py-0.2 bg-neutral-900 rounded border border-neutral-800">
                    {future.status}
                  </span>
                </div>
                <p className="text-[10px] text-neutral-500 font-mono uppercase">{future.enName}</p>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  {future.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 4. ARCHITECTURE BLUEPRINT ==================== */}
        <section className="space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              数字员工托管：未来交付的最佳形态
            </h2>
            <p className="text-sm text-neutral-500">
              摒弃传统 SaaS 繁冗复杂的面板。采用全新轻量化智能体协同。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                <Workflow className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-white">原生轻量嵌入</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                无需在繁杂控制台间复制粘贴。作为标准的 Skill 组件包完美挂载于 Trae、Cursor 或企业沟通工具旁，随手调用。
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                <Brain className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-white">上下文感知</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                数字员工可自动捕捉您本地的产品文档、聊天上下文或竞品视频字幕。无需多余填报，输出最精准、契合的成果。
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-white">自然语言口令</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                彻底告别机械呆板的表单设计。通过最自然的日常人类对话发出口令，自动生成高质视频、跟进信、或分镜脚本。
              </p>
            </div>
          </div>
        </section>

        {/* ==================== FOOTER CTA BANNER ==================== */}
        <section className="bg-[#050505] border border-neutral-900/60 rounded-2xl p-12 text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />
          
          <div className="space-y-2 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              即刻构建您的多语种 AI 团队
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
              支持 Dify、Coze、Trae / Cursor 插件无缝接入。开启高时效的出海增长链路。
            </p>
          </div>

          <div className="pt-2 flex justify-center relative z-10">
            <a 
              href="#employee-squad"
              className="py-2.5 px-8 rounded-full font-semibold text-xs bg-white text-black hover:bg-neutral-100 cursor-pointer flex items-center gap-1 transition-colors shadow-sm"
            >
              <span>立即调遣</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
