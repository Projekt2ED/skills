import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Check, 
  Play, 
  Calendar,
  Bot
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Scenario {
  id: string;
  tabLabel: string;
  userQuery: string;
  steps: string[];
  resultTitle: string;
  resultDesc: string;
}

interface ConsoleProps {
  limitToId?: 'ip-video' | 'sales-assistant' | 'short-drama';
}

export default function ConsoleSimulatingGif({ limitToId }: ConsoleProps) {
  const scenarios: Scenario[] = [
    {
      id: 'ip-video',
      tabLabel: '外贸视频翻译',
      userQuery: '翻译榨汁机视频为英文并对齐嘴型，生成一张北美厨房海报。',
      steps: [
        '分离音频并生成英文翻译',
        '克隆人声声线 (1:1 还原)',
        '嘴型自适应重塑对齐',
        '智能生成高清宣发海报'
      ],
      resultTitle: '翻译视频与海报已生成',
      resultDesc: '声线高保真克隆，嘴型对齐自然无痕，配套海报已同步渲染完成。'
    },
    {
      id: 'sales-assistant',
      tabLabel: '销售抗辩与跟进',
      userQuery: '客户反馈预算超支，帮我写一段挽回话术并安排本周五回访。',
      steps: [
        '分析异议：[预算敏感 / 决策者]',
        '匹配销冠话术库与折算策略',
        '生成高情商挽回方案',
        '创建本周五跟进日程'
      ],
      resultTitle: '攻坚话术与回访日程已就绪',
      resultDesc: '已合理捍卫溢价体系并降低决策门槛，跟进待办已录入系统。'
    },
    {
      id: 'short-drama',
      tabLabel: '短剧剧本策划',
      userQuery: '生成《逆袭豪门》百集短剧大纲，重点设计第1集泼酒分镜。',
      steps: [
        '检索短剧爽点，确立付费断点',
        '规划 1-100 集剧情吸睛钩子',
        '设计第1集分镜与台词脚本',
        '拟定全平台宣发文案'
      ],
      resultTitle: '剧本大纲与分镜脚本已生成',
      resultDesc: '第3集黄金付费点已卡齐，电影级镜头对白可直接用于拍摄。'
    }
  ];

  // Map limitToId to activeTab index
  const initialIndex = limitToId ? scenarios.findIndex(s => s.id === limitToId) : 0;
  const [activeTab, setActiveTab] = useState<number>(initialIndex !== -1 ? initialIndex : 0);
  const [phase, setPhase] = useState<'user-typing' | 'ai-thinking' | 'ai-running' | 'done'>('user-typing');
  const [typedUserQuery, setTypedUserQuery] = useState('');
  const [runningStepIdx, setRunningStepIdx] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);
  const typingTimer = useRef<NodeJS.Timeout | null>(null);

  const scenario = scenarios[activeTab];

  // Sync activeTab if limitToId prop changes
  useEffect(() => {
    if (limitToId) {
      const idx = scenarios.findIndex(s => s.id === limitToId);
      if (idx !== -1 && idx !== activeTab) {
        setActiveTab(idx);
        setPhase('user-typing');
      }
    }
  }, [limitToId, activeTab]);

  // Typing effect simulation
  useEffect(() => {
    if (phase !== 'user-typing') return;

    setTypedUserQuery('');
    setRunningStepIdx(0);
    setCompletedSteps([]);

    if (typingTimer.current) clearInterval(typingTimer.current);

    let charIdx = 0;
    const fullText = scenario.userQuery;
    
    typingTimer.current = setInterval(() => {
      setTypedUserQuery(fullText.substring(0, charIdx + 1));
      charIdx++;
      
      if (charIdx >= fullText.length) {
        clearInterval(typingTimer.current!);
        // Transition to thinking
        setTimeout(() => {
          setPhase('ai-thinking');
        }, 500);
      }
    }, 25); // Faster typing speed for sleek loop feel

    return () => {
      if (typingTimer.current) clearInterval(typingTimer.current);
    };
  }, [activeTab, phase]);

  // AI thinking transition
  useEffect(() => {
    if (phase !== 'ai-thinking') return;
    const timer = setTimeout(() => {
      setPhase('ai-running');
    }, 600);
    return () => clearTimeout(timer);
  }, [phase]);

  // AI Running processes steps sequence
  useEffect(() => {
    if (phase !== 'ai-running') return;

    if (runningStepIdx < scenario.steps.length) {
      const stepTimer = setTimeout(() => {
        setCompletedSteps(prev => [...prev, scenario.steps[runningStepIdx]]);
        setRunningStepIdx(prev => prev + 1);
      }, 700); // Snappy progress lines transition (Apple-like efficiency)
      return () => clearTimeout(stepTimer);
    } else {
      // All steps completed, transition to Done
      const doneTimer = setTimeout(() => {
        setPhase('done');
      }, 400);
      return () => clearTimeout(doneTimer);
    }
  }, [phase, runningStepIdx, activeTab]);

  // Automatic cycle looping
  useEffect(() => {
    if (phase !== 'done') return;

    const timer = setTimeout(() => {
      if (limitToId) {
        // Restart simulation for the same scenario in infinite loop
        setPhase('user-typing');
      } else {
        setActiveTab(prev => (prev + 1) % scenarios.length);
        setPhase('user-typing');
      }
    }, 5000); // 5s static view before smooth restart

    return () => clearTimeout(timer);
  }, [phase, limitToId]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setPhase('user-typing');
  };

  return (
    <div className="bg-[#0D0E12] rounded-2xl border border-white/[0.06] p-5 sm:p-7 pt-12 relative overflow-hidden select-none" id="console-animated-sim">
      
      {/* Apple-style window controls (macOS style window header) */}
      <div className="absolute top-4 left-5 flex items-center gap-1.5 pointer-events-none">
        <span className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-90" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-90" />
        <span className="w-3 h-3 rounded-full bg-[#27C93F] opacity-90" />
        <span className="text-[11px] text-slate-500 ml-2.5 font-mono font-medium tracking-wide">羲梦 Agent Live Simulator</span>
      </div>

      {/* Scenario Indicator tabs inside console header */}
      {!limitToId && (
        <div className="absolute top-3.5 right-5 flex items-center gap-1.5 z-20">
          <div className="flex bg-[#16171E] border border-white/[0.04] rounded-lg p-0.5">
            {scenarios.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => handleTabClick(idx)}
                className={`text-[10px] font-medium px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  activeTab === idx
                    ? 'bg-indigo-600/95 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {s.tabLabel}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Terminal Stream */}
      <div className="space-y-5 min-h-[360px] flex flex-col justify-between pt-3">
        
        {/* User query block */}
        <div className="flex gap-3.5 items-start max-w-2xl text-left">
          <div className="w-7 h-7 rounded-full bg-[#1A1C24] border border-white/[0.06] flex items-center justify-center shrink-0">
            <span className="text-[10px] font-bold text-slate-400">User</span>
          </div>
          <div className="bg-[#13141C] border border-white/[0.05] rounded-xl rounded-tl-none p-3.5 text-xs sm:text-[13px] text-slate-200 leading-relaxed font-sans relative flex-1">
            <span>{typedUserQuery}</span>
            {phase === 'user-typing' && (
              <span className="inline-block w-1.5 h-3.5 bg-indigo-500 ml-0.5 animate-pulse" />
            )}
          </div>
        </div>

        {/* AI response block */}
        <div className="flex gap-3.5 items-start max-w-3xl ml-auto justify-end w-full">
          <div className="bg-[#12131A] border border-white/[0.06] rounded-xl rounded-tr-none p-4.5 text-xs sm:text-[13px] text-slate-300 leading-relaxed space-y-4 text-left w-full shadow-lg">
            
            <div className="flex items-center gap-1.5 text-indigo-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span className="text-[11px] font-semibold tracking-wider uppercase">羲梦 Skill Agent</span>
            </div>

            {/* AI is thinking/loading state */}
            {phase === 'user-typing' && (
              <div className="flex items-center gap-2 text-slate-500 py-1">
                <span className="text-[11px] font-mono italic">等候指令输入...</span>
              </div>
            )}

            {phase === 'ai-thinking' && (
              <div className="flex items-center gap-2 text-indigo-400/80 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
                <span className="text-[11px] font-mono">匹配最合适技能包中...</span>
              </div>
            )}

            {/* AI is execution background process loops */}
            {(phase === 'ai-running' || phase === 'done') && (
              <div className="space-y-3 pt-0.5">
                <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase border-b border-white/[0.04] pb-1">
                  正在挂载并调度 羲梦 Skill 插件流:
                </p>
                
                {/* Steps logs */}
                <div className="space-y-1.5 font-mono text-[11px] sm:text-xs">
                  {completedSteps.map((step, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}

                  {phase === 'ai-running' && runningStepIdx < scenario.steps.length && (
                    <div className="flex items-center gap-2 text-indigo-400 animate-pulse">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                      </span>
                      <span>{scenario.steps[runningStepIdx]}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Final Render Output card when done */}
            <AnimatePresence>
              {phase === 'done' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3 pt-1.5"
                >
                  
                  {/* Outer visual result display */}
                  <div className="border border-indigo-500/15 bg-indigo-500/[0.02] rounded-xl p-3.5 space-y-2.5">
                    <p className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {scenario.resultTitle}
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans">
                      {scenario.resultDesc}
                    </p>

                    {/* Scenario specific beautiful graphics */}
                    {scenario.id === 'ip-video' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5 text-xs">
                        {/* Video preview mock */}
                        <div className="aspect-video bg-[#0B0C10] rounded-lg flex flex-col items-center justify-center relative overflow-hidden border border-white/[0.04]">
                          <Play className="w-7 h-7 text-sky-400 opacity-95 drop-shadow-md animate-pulse" />
                          <span className="text-[9px] font-mono text-slate-500 absolute bottom-1.5">榨汁机_英文对齐.mp4</span>
                        </div>
                        {/* Poster preview mock */}
                        <div className="aspect-video bg-[#0B0C10] rounded-lg flex flex-col items-center justify-center relative overflow-hidden border border-white/[0.04] p-1.5">
                          <div className="border border-dashed border-white/[0.05] rounded-md w-full h-full flex flex-col items-center justify-center space-y-1 bg-[#12131A]/40">
                            <span className="text-[9px] text-teal-400 font-bold bg-teal-950/50 px-1.5 py-0.5 rounded">羲梦 Art AI</span>
                            <span className="text-[8px] text-slate-500 font-mono">北美温馨厨房海报.png</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {scenario.id === 'sales-assistant' && (
                      <div className="bg-[#0B0C10] rounded-lg p-3 border border-white/[0.04] space-y-2 text-left">
                        <div className="text-[10px] text-teal-400 font-mono bg-teal-500/5 px-2 py-0.5 rounded inline-block font-semibold">生成话术预览</div>
                        <p className="text-[11px] text-slate-300 italic leading-relaxed">
                          “李总理解您的顾虑。对初创团队来说，均摊每天不到一杯咖啡钱，就能让新员工即刻装备销冠话术，省下几万元的新人摸索成本，一单回本。要不我们帮您开通个试用看效果？”
                        </p>
                        <div className="flex items-center gap-1 text-[9px] text-slate-500 border-t border-white/[0.03] pt-1.5 font-mono">
                          <Calendar className="w-3 h-3 text-indigo-400" />
                          <span>已为您建立日程：【周五回访：跟进价格抗辩反馈】</span>
                        </div>
                      </div>
                    )}

                    {scenario.id === 'short-drama' && (
                      <div className="bg-[#0B0C10] rounded-lg p-3 border border-white/[0.04] space-y-2 text-left">
                        <div className="text-[10px] text-purple-400 font-mono bg-purple-500/5 px-2 py-0.5 rounded inline-block font-semibold">第一集 冲突分镜设计</div>
                        <p className="text-[10.5px] text-slate-400 leading-normal font-sans space-y-1">
                          <strong>【镜头 1 - 远景】</strong> 奢华寿宴高朋满座，主角孤身入场，形成强烈反差。<br />
                          <strong>【镜头 2 - 特写】</strong> 反派戏谑冷笑，红酒精准浇在主角旧皮鞋上。全场静音。
                        </p>
                        <div className="flex justify-between items-center text-[8px] text-slate-500 pt-1.5 border-t border-white/[0.03] font-mono">
                          <span>剧情节点规划已保存</span>
                          <span className="text-purple-400">一键导出 PDF 剧本</span>
                        </div>
                      </div>
                    )}

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
          <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/10">
            <Bot className="w-3.5 h-3.5 text-white" />
          </div>
        </div>

      </div>
    </div>
  );
}
