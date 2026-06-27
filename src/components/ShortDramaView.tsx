import React from 'react';
import { 
  Film, 
  Sparkles, 
  PlayCircle, 
  Layers, 
  Users, 
  Compass, 
  ArrowRight, 
  Flame, 
  BookOpen, 
  Grid, 
  Image as ImageIcon, 
  Clock,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import ConsoleSimulatingGif from './ConsoleSimulatingGif';

export default function ShortDramaView() {
  return (
    <div className="bg-[#000000] text-[#f5f5f7] min-h-screen relative overflow-hidden font-sans">
      
      {/* Background Decorative Gradients - cinematic themed */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-40">
        <div className="absolute top-[-50px] left-[15%] w-[550px] h-[550px] rounded-full bg-purple-500/5 blur-[130px]" />
        <div className="absolute top-[50px] right-[15%] w-[450px] h-[450px] rounded-full bg-rose-500/5 blur-[110px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10 space-y-32">
        
        {/* ==================== 1. HERO SECTION ==================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-800/80 px-4 py-1.5 rounded-full">
              <Film className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase">Outbound Drama Director · AI 出海爽剧创作编导</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              让想法极速变成 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
                出海短剧剧本分镜
              </span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl font-normal">
              一键辅助选题脑暴、极速细化主角人设与隐藏底牌、卡点拆解断章集数并全自动生成分镜。摒弃繁琐拉锯，重构敏捷的内容生产模式。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="inline-flex items-center gap-2 bg-neutral-950 border border-neutral-900 px-4 py-2.5 rounded-full text-xs font-semibold text-neutral-300">
                <PlayCircle className="w-4 h-4 text-purple-400" />
                <span>一键卡定 3s / 10s 黄金冲突与逆袭断章标准</span>
              </div>
            </div>
          </div>

          {/* Right Column - Premium cinematic treatment */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/30 to-rose-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-b from-white/5 to-transparent rounded-2xl"></div>
            <div className="relative bg-[#0a0a0c] border border-white/10 rounded-2xl p-1.5 shadow-[0_0_60px_rgba(168,85,247,0.12)] group-hover:shadow-[0_0_80px_rgba(168,85,247,0.2)] transition-shadow duration-700 overflow-hidden">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="/src/assets/images/short_drama_cinema_1782511673522.jpg" 
                  alt="AI Short Drama platform mockup" 
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
            <h3 className="text-xl font-bold text-white tracking-tight">对话式创意细化</h3>
            <p className="text-xs text-neutral-500">模拟数字编导根据简单想法自动细化黄金断点和泼酒冲突设计</p>
          </div>
          <div className="bg-[#050505] border border-neutral-900 rounded-2xl p-1.5 shadow-2xl relative max-w-4xl mx-auto">
            <ConsoleSimulatingGif limitToId="short-drama" />
          </div>
        </section>

        {/* ==================== 3. PAIN POINTS SECTION ==================== */}
        <section className="space-y-12 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              短剧立项前期脑暴，空转耗时多？
            </h2>
            <p className="text-xs text-neutral-500">
              海外市场爽点差异巨大，缺乏常识的大纲极易导致首三集付费卡点崩盘。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0c] border border-neutral-900 p-6 rounded-xl space-y-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-purple-400">
                <Flame className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-neutral-200">海外本土人设冲突不温不火</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                难以把握目标受众爽点，往往空有立意却抓不住开头，海外冷启动卡点效果平平。
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-neutral-900 p-6 rounded-xl space-y-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-purple-400">
                <Grid className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-neutral-200">高点击爽卡断点耗尽心血</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                写好大纲却拆不准集数断点，难以勾起海外用户付费欲望，高流存拉新极难维持。
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-neutral-900 p-6 rounded-xl space-y-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-purple-400">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-neutral-200">剧本向拍摄镜头拆解费时</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                文字分镜耗时长。在导演、摄影与制作中间沟通极多，极易拖延黄金拍摄档期。
              </p>
            </div>
          </div>
        </section>

        {/* ==================== 4. CORE CAPABILITIES ==================== */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold text-purple-400 bg-purple-950/20 border border-purple-900/40 px-2.5 py-0.5 rounded uppercase">
              配属技能 (Skills)
            </span>
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              全链条工业化标准产出
            </h2>
            <p className="text-xs text-neutral-500 max-w-md mx-auto">
              作为智能体 Skill 挂载，彻底击穿剧本生产瓶颈，让想法立等可见。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0a0a0c] border border-neutral-900 p-6 rounded-xl space-y-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-850 flex items-center justify-center text-purple-400">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">题材科学定位</h3>
              <p className="text-xs text-neutral-500 font-normal leading-relaxed">
                自适应匹配海外热门网文流派，迅速提供具备高自然裂变因子的蓝海大纲选题。
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-neutral-900 p-6 rounded-xl space-y-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-850 flex items-center justify-center text-purple-400">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">人设高倍冲突</h3>
              <p className="text-xs text-neutral-500 font-normal leading-relaxed">
                设计主角逆袭背景、强烈对比的反派张力及关系链，牢牢锁住前 3s 视线。
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-neutral-900 p-6 rounded-xl space-y-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-850 flex items-center justify-center text-purple-400">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">黄金集数卡扣</h3>
              <p className="text-xs text-neutral-500 font-normal leading-relaxed">
                规划 100+ 集断章，自动推荐爽度拉升卡点，精细控制剧情留存指标。
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-neutral-900 p-6 rounded-xl space-y-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-850 flex items-center justify-center text-purple-400">
                <ImageIcon className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">宣发素材一键备</h3>
              <p className="text-xs text-neutral-500 font-normal leading-relaxed">
                自动提取高潮情节，极速套用极富点击感召力的高清海报排版，辅助买量冷启动。
              </p>
            </div>
          </div>
        </section>

        {/* ==================== 5. HORIZONTAL STEP FLOW ==================== */}
        <section className="bg-[#050505] border border-neutral-900/60 rounded-2xl p-8 sm:p-10 space-y-8 max-w-4xl mx-auto">
          <div className="space-y-2 text-left">
            <span className="text-[10px] font-bold text-purple-400 tracking-widest bg-purple-950/20 px-2.5 py-1 rounded-full">流程体系</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              短剧精细化卡点设计
            </h2>
            <p className="text-xs text-neutral-500">
              全链条工业化标准产出，让琐碎想法瞬间落地：
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-left">
            {[
              { step: '01', title: '选题大数据定位', desc: '逆向分析当地热门流派题材。' },
              { step: '02', title: '主角反派强冲突', desc: '设计高对比度复仇/反差爽点。' },
              { step: '03', title: '科学断章付费钩', desc: '精确把控集数，拉升订阅留存。' },
              { step: '04', title: '电影级镜头自动拆', desc: '文字脚本自动转分景别与运镜。' },
              { step: '05', title: '宣发素材即产出', desc: '高清点击力海报及文案一键到位。' }
            ].map((st, i) => (
              <div key={i} className="bg-black border border-neutral-900 rounded-xl p-4 space-y-2">
                <div className="text-xs font-black text-purple-400">{st.step}</div>
                <p className="text-xs font-bold text-neutral-200">{st.title}</p>
                <p className="text-[11px] text-neutral-500 leading-normal font-normal">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Premium Drama Storyboard Showcase */}
        <section className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-white tracking-tight">AI 分镜与情绪卡点感知</h3>
            <p className="text-xs text-neutral-500">自动解析镜头景别、情绪爆发点，并渲染精细参考分镜图</p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/25 to-rose-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-b from-white/5 to-transparent rounded-2xl"></div>
            <div className="relative bg-[#0a0a0c] border border-white/10 rounded-2xl p-1.5 overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.12)] group-hover:shadow-[0_0_80px_rgba(168,85,247,0.2)] transition-shadow duration-700">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="/src/assets/images/short_drama_storyboard_1782510592407.jpg" 
                  alt="AI Cinematic Storyboard Production" 
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
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-950/20 px-3 py-1 rounded-full">核心收益</span>
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              把繁重脑暴交给我们，让团队专心搞现场拍摄
            </h2>
            <p className="text-xs text-neutral-500">
              不讲天花乱坠的噱头，只谈能立等可落地的实效辅助。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="space-y-2 border-l border-neutral-900 pl-6 first:border-0">
              <h3 className="text-sm font-bold text-neutral-200">极速成稿</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                从一个粗浅念头到符合爽点、断章严密的百集大纲与前十集剧本，数小时即完备。
              </p>
            </div>
            <div className="space-y-2 border-l border-neutral-900 pl-6 first:border-0">
              <h3 className="text-sm font-bold text-neutral-200">导演/摄像一看就懂</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                自动分析分镜台词景别，附带运镜示意，沟通彻底无阻，大幅缩短排期等待。
              </p>
            </div>
            <div className="space-y-2 border-l border-neutral-900 pl-6 first:border-0">
              <h3 className="text-sm font-bold text-neutral-200">宣发冷启即备</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                精细提取冲突爽点海报与文案变体，为首发冷启动买量测图备足充裕素材。
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
