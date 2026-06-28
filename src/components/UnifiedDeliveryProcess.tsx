import React from 'react';
import { 
  Cpu, 
  Layers, 
  Workflow, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Bot, 
  Code
} from 'lucide-react';

export default function UnifiedDeliveryProcess() {
  const steps = [
    {
      phase: "Step 01",
      title: "获取 Skill 技能包",
      desc: "提供标准智能体协议与精调提示词卡片，无缝适配 Trae、Cursor 等主流工具规范。"
    },
    {
      phase: "Step 02",
      title: "一键载入智能体",
      desc: "直接将 羲梦 技能加载至侧边栏或企业 IM 群内，实现零门槛直接对话调用。"
    },
    {
      phase: "Step 03",
      title: "环境上下文自适应",
      desc: "自动识别本地文档、聊天语境或客户报价情况，免去机械繁复的二次录入。"
    },
    {
      phase: "Step 04",
      title: "自然口令即刻生成",
      desc: "通过日常自然语言交流，由数字助手在数秒内输出视频、海报或冲突分镜。"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12" id="unified-delivery">
      <div className="bg-[#050505] border border-neutral-900/60 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
        
        {/* Decorative subtle ambient light */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/5 rounded-full blur-[90px] pointer-events-none" />

        {/* Section Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-800/80 px-3 py-1 rounded-full">
            <Bot className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-[9px] font-bold text-neutral-400 tracking-wider uppercase">AGENT INFRASTRUCTURE · 智能体接入规范</span>
          </div>
          <h2 className="text-2xl font-semibold text-white tracking-tight">
            极简挂载：像安装插件一样简单
          </h2>
          <p className="text-xs text-neutral-500 leading-relaxed font-normal">
            羲梦工场 彻底摒弃了传统 SaaS 繁冗复杂的面板。我们以 <strong className="text-indigo-400 font-semibold">智能体技能 (Skills)</strong> 的轻量形态，直接无缝融入您的日常工具和沟通流程中。
          </p>
        </div>

        {/* Comparison Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
          
          <div className="bg-black border border-neutral-900 rounded-xl p-6 space-y-4 hover:border-neutral-800 transition-all">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-rose-500">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">传统 SaaS 软件模式</h4>
                <p className="text-xs font-bold text-neutral-300">固定面板与高门槛操作</p>
              </div>
            </div>
            <ul className="space-y-2 text-[11px] text-neutral-500 font-normal">
              <li className="flex items-start gap-1.5">
                <span className="text-rose-500 font-semibold">✕</span>
                <span>繁多控制台：需频繁注册各种独立后台，机械来回跨屏倒腾素材。</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-rose-500 font-semibold">✕</span>
                <span>学习门槛高：充满死板生硬的表单与参数，缺乏常识，必须专门查阅教程。</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-rose-500 font-semibold">✕</span>
                <span>语境无法共通：无法感知你本地的产品资料，每次生成都要重复填写。</span>
              </li>
            </ul>
          </div>

          <div className="bg-black border border-indigo-950 rounded-xl p-6 space-y-4 hover:border-indigo-900 transition-all">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-indigo-950/40 border border-indigo-900/30 flex items-center justify-center text-indigo-400">
                <Workflow className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">羲梦 Agent 技能模式</h4>
                <p className="text-xs font-bold text-indigo-300">随身伴随与自然语言驱动</p>
              </div>
            </div>
            <ul className="space-y-2 text-[11px] text-neutral-300 font-normal">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span><strong>原生内嵌：</strong>无缝挂载于开发工具、Cursor 或企业 IM 对话框旁。</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span><strong>零学成本：</strong>最自然的普通对话即是口令，打字或发语音当即产出成果。</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span><strong>上下文感知：</strong>自动捕获当前选品文档、客户异议邮件，精准输出。</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-black border border-neutral-900 hover:border-neutral-800 rounded-xl p-5 relative space-y-2 group transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold text-neutral-400 font-mono tracking-wider bg-neutral-900 border border-neutral-800 px-2.5 py-0.5 rounded-full">
                  {step.phase}
                </span>
                <span className="text-[10px] font-bold text-neutral-800 group-hover:text-neutral-700 font-mono">0{idx + 1}</span>
              </div>
              <h3 className="text-xs font-bold text-white group-hover:text-indigo-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-[11px] text-neutral-500 leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Metadata Info */}
        <div className="pt-6 border-t border-neutral-900 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div className="flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5 text-indigo-400" />
            <span>完全开放支持 OpenAPI / Swagger 规范以及 JSON Schema 技能描述一键导出</span>
          </div>
          <span className="text-neutral-400 font-bold hover:text-white cursor-pointer transition-colors flex items-center gap-1">
            <span>浏览插件技能定义规范</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

      </div>
    </section>
  );
}
