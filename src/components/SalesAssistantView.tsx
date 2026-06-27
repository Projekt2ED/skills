import React from 'react';
import { 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  MessageSquare, 
  Clock, 
  Target, 
  ShieldAlert, 
  Sparkles, 
  ArrowRight, 
  UserCheck, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import ConsoleSimulatingGif from './ConsoleSimulatingGif';

export default function SalesAssistantView() {
  return (
    <div className="bg-[#000000] text-[#f5f5f7] min-h-screen relative overflow-hidden font-sans">
      
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-40">
        <div className="absolute top-[-50px] left-[15%] w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[120px]" />
        <div className="absolute top-[50px] right-[15%] w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10 space-y-32">
        
        {/* ==================== 1. HERO SECTION ==================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-800/80 px-4 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
              <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase">Sales Conversion Copilot · 海外销售转化助理</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              让每个销售人员 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
                都配备成交助手
              </span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl font-normal">
              全天候自动整理客户线索，智能生成地道海外沟通邮件，快速处理棘手异议与拉锯降价。复制销冠话术，推进全盘业务线索。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="inline-flex items-center gap-2 bg-neutral-950 border border-neutral-900 px-4 py-2.5 rounded-full text-xs font-semibold text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>无缝挂接常用企业 IM 与沟通系统</span>
              </div>
            </div>
          </div>

          {/* Right Column - Premium cinematic treatment */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-teal-500/30 to-emerald-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-b from-white/5 to-transparent rounded-2xl"></div>
            <div className="relative bg-[#0a0a0c] border border-white/10 rounded-2xl p-1.5 shadow-[0_0_60px_rgba(20,184,166,0.12)] group-hover:shadow-[0_0_80px_rgba(20,184,166,0.2)] transition-shadow duration-700 overflow-hidden">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="/src/assets/images/sales_copilot_hero_1782511656996.jpg" 
                  alt="Sales Assistant Hero mockup" 
                  className="w-full h-auto object-cover brightness-110 contrast-105 saturate-110 group-hover:brightness-115 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 2. INTERACTIVE SIMULATION ==================== */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-white tracking-tight">对话上下文即刻感知</h3>
            <p className="text-xs text-neutral-500">模拟数字助手处理客户报价异议时的应对和话术推荐</p>
          </div>
          <div className="bg-[#050505] border border-neutral-900 rounded-2xl p-1.5 shadow-2xl relative max-w-4xl mx-auto">
            <ConsoleSimulatingGif limitToId="sales-assistant" />
          </div>
        </section>

        {/* ==================== 3. PAIN POINTS SECTION ==================== */}
        <section className="space-y-12 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              线索碎片化，跟进常断层？
            </h2>
            <p className="text-xs text-neutral-500">
              粗放式的人工记录与靠天吃饭的经验往往漏掉大量的黄金挽回期。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0c] border border-neutral-900 p-6 rounded-xl space-y-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-teal-400">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-neutral-200">咨询线索遗漏严重</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                客户往往在非工作时间咨询，缺乏提醒，关键意向线索白白流失至竞争对手手中。
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-neutral-900 p-6 rounded-xl space-y-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-teal-400">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-neutral-200">新人话术生硬单一</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                难以应对价格拉锯或深度商务异议。全靠自行组织语言，极难复现销冠水准。
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-neutral-900 p-6 rounded-xl space-y-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-teal-400">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-neutral-200">跟进进度黑盒管理</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                聊天记录、回访意向零散分布在各种客户端内，管理者难以洞悉真实的谈单断层。
              </p>
            </div>
          </div>
        </section>

        {/* ==================== 4. CORE CAPABILITIES ==================== */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold text-teal-400 bg-teal-950/20 border border-teal-900/40 px-2.5 py-0.5 rounded uppercase">
              配属技能 (Skills)
            </span>
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              全业务周期智能辅助
            </h2>
            <p className="text-xs text-neutral-500 max-w-md mx-auto">
              作为日常工作智能挂架，为销售提供全天候的智力决策支撑。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0a0a0c] border border-neutral-900 p-6 rounded-xl space-y-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-850 flex items-center justify-center text-teal-400">
                <UserCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">整理客户档案</h3>
              <p className="text-xs text-neutral-500 font-normal leading-relaxed">
                自动提取聊天背景与痛点需求，沉淀成极简结构化客户卡，摆脱表格杂乱。
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-neutral-900 p-6 rounded-xl space-y-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-850 flex items-center justify-center text-teal-400">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">回访自动提醒</h3>
              <p className="text-xs text-neutral-500 font-normal leading-relaxed">
                智能推演黄金挽回时间。针对未决决策自动记录跟进日程，确保关键时刻必有回复。
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-neutral-900 p-6 rounded-xl space-y-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-850 flex items-center justify-center text-teal-400">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">推荐销冠话术</h3>
              <p className="text-xs text-neutral-500 font-normal leading-relaxed">
                输入客户反馈即可一键匹配高转化异议反弹方案，提供得体又不卑不亢的回信。
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-neutral-900 p-6 rounded-xl space-y-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-850 flex items-center justify-center text-teal-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">推进状态看板</h3>
              <p className="text-xs text-neutral-500 font-normal leading-relaxed">
                自动对线索成单概率、流失风险进行智能感知评测，管理者可全局查阅、快速介入。
              </p>
            </div>
          </div>
        </section>

        {/* ==================== 5. ENRICHING SCENARIO BENTO (REPLACING CALCULATOR) ==================== */}
        <section className="bg-[#050505] border border-neutral-900/60 rounded-2xl p-8 sm:p-10 space-y-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-900">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-teal-400 bg-teal-950/20 px-2.5 py-0.5 rounded border border-teal-900/40 uppercase">
                高转化话术对比
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-white">用极致专业回应价格拉锯</h2>
            </div>
            <p className="text-xs text-neutral-500 max-w-xs">
              不一味降价而降低自身身价，用精确的成本折算打动海外客户。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black border border-neutral-900 rounded-xl p-5 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 text-xs font-bold font-mono">
                  Q
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-300">海外客户原话 (B2B 采购)</h4>
                  <p className="text-[10px] text-neutral-500">“你们的方案感觉有些超预算，还能再优惠 20% 吗？”</p>
                </div>
              </div>
              <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-900 space-y-2">
                <p className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider">普通新手销售回复 (易导致利润受损)</p>
                <p className="text-xs text-neutral-400 italic">“好的，我去跟领导申请一下折扣。如果可以的话，您能不能今天付款？”</p>
              </div>
            </div>

            <div className="bg-black border border-neutral-900 rounded-xl p-5 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">
                  A
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">智能助手自动生成方案 (销冠模式)</h4>
                  <p className="text-[10px] text-teal-400">突出单价极低边际成本 · 强化增值回报</p>
                </div>
              </div>
              <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-900 space-y-2">
                <p className="text-[10px] text-teal-400 uppercase font-bold tracking-wider">Aideo Copilot 生成话术</p>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  “李总，非常理解初创期预算紧张。如果按常规外包方案，由于多方沟通，单件测试需要耗费数千。但若我们以整体运行效能计，综合成本只需以往的几十分之一。只需一个海外订单转化，您就能完全覆盖我们的配置成本...”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Sales Conversion Analytics Banner */}
        <section className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-white tracking-tight">多维度状态感知，线索即刻转化</h3>
            <p className="text-xs text-neutral-500">集成可视化跟进看板，实时把握海外高净值意向客户</p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/25 to-emerald-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-b from-white/5 to-transparent rounded-2xl"></div>
            <div className="relative bg-[#0a0a0c] border border-white/10 rounded-2xl p-1.5 overflow-hidden shadow-[0_0_60px_rgba(20,184,166,0.12)] group-hover:shadow-[0_0_80px_rgba(20,184,166,0.2)] transition-shadow duration-700">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="/src/assets/images/sales_growth_metric_1782510552988.jpg" 
                  alt="Sales Conversion Metrics & Analytics" 
                  className="w-full h-auto object-cover brightness-110 contrast-105 saturate-110 group-hover:brightness-115 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 6. CORE REVENUE ==================== */}
        <section className="bg-[#050505] border border-neutral-900/60 rounded-2xl p-8 sm:p-12 text-center space-y-10 relative max-w-4xl mx-auto">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/20 px-3 py-1 rounded-full">核心收益</span>
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              告别低效，让销售专注于最终成交
            </h2>
            <p className="text-xs text-neutral-500">
              不谈虚妄的业绩翻倍，用实在的数字链路规避因人带来的效率流失。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="space-y-2 border-l border-neutral-900 pl-6 first:border-0">
              <h3 className="text-sm font-bold text-neutral-200">零客户遗漏</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                所有未决线索全周期跟踪，无论消息多杂均能被数字助手理清并提醒跟进。
              </p>
            </div>
            <div className="space-y-2 border-l border-neutral-900 pl-6 first:border-0">
              <h3 className="text-sm font-bold text-neutral-200">缩短决策时长</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                客户反馈异议的第一时间，系统立即弹出高质专业的回应建议，打消对方顾虑。
              </p>
            </div>
            <div className="space-y-2 border-l border-neutral-900 pl-6 first:border-0">
              <h3 className="text-sm font-bold text-neutral-200">金牌标准可复刻</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                新销售入职一键挂载，立即继承团队历史积累的顶级抗辩与挽回话术。
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
