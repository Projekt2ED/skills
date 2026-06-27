import React from 'react';
import { 
  Zap, 
  ArrowRight, 
  Target, 
  Repeat, 
  Video, 
  Image as ImageIcon, 
  Languages, 
  Sparkles, 
  Clock, 
  Layers, 
  Cpu, 
  MessageSquareCode,
  Users,
  Heart,
  ArrowUpRight
} from 'lucide-react';
import ConsoleSimulatingGif from './ConsoleSimulatingGif';

interface IPVideoViewProps {
  onSelectEmployee: (employeeId: 'ip-video' | 'sales-assistant' | 'short-drama') => void;
}

export default function IPVideoView({ onSelectEmployee }: IPVideoViewProps) {
  const capabilities = [
    {
      icon: <Target className="w-4 h-4 text-indigo-400" />,
      title: "爆款拆解",
      desc: "一键逆向分析热卖视频，提炼黄金留存前 3 秒钩子、爆款文案框架与背景音乐节奏，看懂卖货底层逻辑。"
    },
    {
      icon: <Repeat className="w-4 h-4 text-sky-400" />,
      title: "参考复刻",
      desc: "贴入竞品视频，智能替换为您自有的商品参数与品牌关键词，重构地道英语本土表达，直接完成同款复刻。"
    },
    {
      icon: <Video className="w-4 h-4 text-violet-400" />,
      title: "视频生成",
      desc: "只需提供几张产品主图与卖点文档，即可借助多语种音视频模型自适应剪辑与光影渲染，一键产出高质带货短视频。"
    },
    {
      icon: <ImageIcon className="w-4 h-4 text-blue-400" />,
      title: "海报素材",
      desc: "支持将商品白底图智能融合至北美中产厨房、欧洲户外等真实高点击率场景中，自动批量套用高级感排版模版。"
    },
    {
      icon: <Languages className="w-4 h-4 text-emerald-400" />,
      title: "多语言翻译",
      desc: "将中文口播一键转换为英、日、韩、德等 20+ 语种。由本地母语级发音语调驱动，发音与重音宛若海外真人。"
    },
    {
      icon: <Sparkles className="w-4 h-4 text-pink-400" />,
      title: "智能口型同步",
      desc: "业内顶尖 AideoLipSync 模块，自适应重塑口型，翻译配音后嘴型与重组发音完美对齐，毫无违和痕迹。"
    }
  ];

  return (
    <div className="bg-[#000000] text-[#f5f5f7] min-h-screen relative overflow-hidden font-sans">
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-40">
        <div className="absolute top-[-50px] left-[15%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute top-[50px] right-[15%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10 space-y-32">
        
        {/* ==================== 1. HERO SECTION ==================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-800/80 px-4 py-1.5 rounded-full">
              <Zap className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase">IP Video Specialist · 跨境多语种营销助理</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              让 AI 帮您做 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
                多语种视频与海报
              </span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl font-normal">
              无需复杂下载和倒腾多款软件。直接在您日常的对话流中调遣。智能嘴型对齐、多语种本土复刻，省去高昂的外包成本。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onSelectEmployee('sales-assistant')}
                className="py-2.5 px-6 rounded-full font-semibold text-xs bg-white text-black hover:bg-neutral-100 transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>调遣销售转化助理</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => onSelectEmployee('short-drama')}
                className="py-2.5 px-6 rounded-full font-semibold text-xs bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>浏览短剧创作编导</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Integration info */}
            <div className="space-y-3 pt-2">
              <p className="text-[10px] text-neutral-500 font-bold tracking-wider uppercase">支持一键挂载至主流生产流：</p>
              <div className="flex flex-wrap gap-3">
                {['OpenClaw', 'Codex', 'Trae', 'Cursor Plugins'].map((platform, i) => (
                  <div key={i} className="flex items-center gap-2 bg-neutral-950 border border-neutral-900 rounded-lg px-3.5 py-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    <span className="text-[10px] font-mono font-bold text-neutral-400">{platform}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Image - Premium cinematic treatment */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500/30 to-blue-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-b from-white/5 to-transparent rounded-2xl"></div>
            <div className="relative bg-[#0a0a0c] border border-white/10 rounded-2xl p-1.5 shadow-[0_0_60px_rgba(99,102,241,0.12)] group-hover:shadow-[0_0_80px_rgba(99,102,241,0.2)] transition-shadow duration-700 overflow-hidden">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="/src/assets/images/marketing_video_creator_1782511641803.jpg" 
                  alt="Aideo Studio 跨境多媒体能力" 
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
            <h3 className="text-xl font-bold text-white tracking-tight">对话框中的瞬时生成</h3>
            <p className="text-xs text-neutral-500">模拟数字助手收到口令时的分析与渲染产出</p>
          </div>
          <div className="bg-[#050505] border border-neutral-900 rounded-2xl p-1.5 shadow-2xl relative max-w-4xl mx-auto">
            <ConsoleSimulatingGif limitToId="ip-video" />
          </div>
        </section>

        {/* ==================== 3. PAIN POINTS SECTION ==================== */}
        <section className="space-y-12 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              出海短视频，您是否也备受困扰？
            </h2>
            <p className="text-xs text-neutral-500">
              重度依赖外籍团队或翻译工具往往带来过长的周期与高企的预算。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0c] border border-neutral-900 p-6 rounded-xl space-y-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-indigo-400">
                <Languages className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-neutral-200">外籍配音费用昂贵</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                单次海外声线定制、校对动辄成百上千美元，小规模试错成本极高。
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-neutral-900 p-6 rounded-xl space-y-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-indigo-400">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-neutral-200">爆款时效转瞬即逝</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                手动翻译、拍样片到海外校对周期需要数天，等产出时爆款热度已过。
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-neutral-900 p-6 rounded-xl space-y-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-indigo-400">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-neutral-200">多语种繁复低效</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                针对不同国家和地区需要反复建新项目，在多款剪辑软件里机械来回倒腾。
              </p>
            </div>
          </div>
        </section>

        {/* ==================== 4. CORE CAPABILITIES (TYPOGRAPHIC GRID) ==================== */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold text-indigo-400 bg-indigo-950/20 border border-indigo-900/40 px-2.5 py-0.5 rounded uppercase">
              配属能力 (Capabilities)
            </span>
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              不是传统工具，而是随手调度的数字员工
            </h2>
            <p className="text-xs text-neutral-500 max-w-md mx-auto">
              作为 Skill 包一键载入，不仅输出最终视频，更具备出海营销常识。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <div 
                key={idx} 
                className="bg-[#0a0a0c] border border-neutral-900/60 p-6 rounded-xl flex flex-col justify-between text-left group hover:border-neutral-800 transition-all"
              >
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-850 flex items-center justify-center">
                    {cap.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">{cap.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 5. ENRICHING VISUAL CARDS (REPLACING CALCULATOR) ==================== */}
        <section className="bg-[#050505] border border-neutral-900/60 rounded-2xl p-8 sm:p-10 space-y-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-900">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-indigo-400 bg-indigo-950/20 px-2.5 py-0.5 rounded border border-indigo-900/40 uppercase">
                多模态视觉案例
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-white">影视级视频与智能宣发排版</h2>
            </div>
            <p className="text-xs text-neutral-500 max-w-xs">
              无缝衔接主流平台流量，由中文样片一键生成外文口型与高清宣发图。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black border border-white/10 rounded-xl p-5 space-y-4 text-left hover:border-white/20 transition-all group/card">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-500 block">CASE 01 / 多语种口播对齐</span>
                <span className="text-[10px] font-bold text-indigo-400">口播人声克隆模型</span>
              </div>
              <div className="aspect-video bg-neutral-950 rounded-lg border border-white/10 relative overflow-hidden group/img">
                <img 
                  src="/src/assets/images/ip_video_lip_sync_1782510490624.jpg"
                  alt="AI Lip Sync Visualizer"
                  className="w-full h-full object-cover brightness-105 contrast-105 saturate-110 group-hover/img:brightness-110 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white">1:1 北美本土化翻译与嘴型对齐</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  自适应克隆源视频人声厚度、语气与情感，重组发音结构并重建口型像素，杜绝翻译生硬和口型对不上的机动感。
                </p>
              </div>
            </div>

            <div className="bg-black border border-white/10 rounded-xl p-5 space-y-4 text-left hover:border-white/20 transition-all group/card">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-500 block">CASE 02 / 场景融合与自动排版</span>
                <span className="text-[10px] font-bold text-teal-400">实景合成与排版模型</span>
              </div>
              <div className="aspect-video bg-neutral-950 rounded-lg border border-white/10 relative overflow-hidden group/img">
                <img 
                  src="/src/assets/images/ip_video_kitchen_ad_1782510508354.jpg"
                  alt="AI scene integration ad mockup"
                  className="w-full h-full object-cover brightness-105 contrast-105 saturate-110 group-hover/img:brightness-110 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white">自适应高转化场景融合与英文宣发图</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  无需商业影棚。提供单张白底图，智能体能自动合成符合当地美学观念的实景图，并根据历史高点击率框架，智能套用广告排版。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 6. TARGET PERSONAS ==================== */}
        <section className="space-y-12 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold text-white tracking-tight">最适配的数字分身挂架</h2>
            <p className="text-xs text-neutral-500">他们率先摆脱了繁杂界面，用智能体完成了素材矩阵搭建</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-[#0a0a0c] border border-neutral-900 p-5 rounded-xl space-y-2">
              <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-850 mx-auto flex items-center justify-center text-indigo-400">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-neutral-200">中小跨境卖家</h4>
              <p className="text-[10px] text-neutral-500 leading-relaxed">
                没有预算招外籍。一人对话，即刻上线多语种宣发，快速测爆品。
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-neutral-900 p-5 rounded-xl space-y-2">
              <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-850 mx-auto flex items-center justify-center text-indigo-400">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-neutral-200">出海内容运营</h4>
              <p className="text-[10px] text-neutral-500 leading-relaxed">
                无需在剪辑群和外包群来回催促。直接用对话分发、翻译，提升周转效率。
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-neutral-900 p-5 rounded-xl space-y-2">
              <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-850 mx-auto flex items-center justify-center text-indigo-400">
                <Target className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-neutral-200">广告投放投手</h4>
              <p className="text-[10px] text-neutral-500 leading-relaxed">
                根据最新转化反馈，让助手批量合成各种实景海报，降低测图开销。
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-neutral-900 p-5 rounded-xl space-y-2">
              <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-850 mx-auto flex items-center justify-center text-indigo-400">
                <Heart className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-neutral-200">视频内容创作者</h4>
              <p className="text-[10px] text-neutral-500 leading-relaxed">
                用熟悉的母语录制，剩下的声线与高保真口型对齐全由助手无缝代理。
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
