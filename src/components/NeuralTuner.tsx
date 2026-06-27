import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Settings, 
  Sliders, 
  HelpCircle, 
  Check, 
  AlertTriangle, 
  Activity, 
  Terminal, 
  Play, 
  RefreshCw,
  Clock,
  ThumbsUp,
  SlidersHorizontal
} from 'lucide-react';

export default function NeuralTuner() {
  // Sliders states
  const [mouthAperture, setMouthAperture] = useState<number>(1.0); // 0.5 to 1.5
  const [headPose, setHeadPose] = useState<number>(0); // -15 to +15 (tilt shift)
  const [voiceCloning, setVoiceCloning] = useState<number>(92); // 70 to 100
  const [latencyOffset, setLatencyOffset] = useState<number>(120); // 0 to 400

  // Script Auditor state
  const [scriptText, setScriptText] = useState<string>('Welcome to our brand new smart portable juicer! It is wireless, lightweight, and comes with high-speed titanium blades so you can enjoy fresh delicious juice in just 30 seconds flat! Tap below to get an exclusive 40% discount during our global summer promotion!');
  const [videoLimit, setVideoLimit] = useState<number>(15); // 15s or 30s or 60s
  const [auditPassed, setAuditPassed] = useState<boolean>(false);
  const [estimatedDuration, setEstimatedDuration] = useState<number>(0);
  const [suggestedCompactText, setSuggestedCompactText] = useState<string>('Meet our new smart portable juicer! Wireless, lightweight, with high-speed blades for fresh juice in 30 seconds! Tap below for 40% off our summer promo!');

  // Terminal state
  const [logs, setLogs] = useState<string[]>([]);
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Auto-audit on text or limit change
  useEffect(() => {
    // English words speak average at ~2.5 to 3 words per second. Let's calculate words count.
    const words = scriptText.trim().split(/\s+/).filter(Boolean).length;
    const duration = Math.round(words / 2.6); // 2.6 words per second
    setEstimatedDuration(duration);
    setAuditPassed(duration <= videoLimit);
  }, [scriptText, videoLimit]);

  const handleApplySuggestion = () => {
    setScriptText(suggestedCompactText);
  };

  const startRenderSimulation = () => {
    if (isRendering) return;
    setIsRendering(true);
    setLogs([]);

    const logSteps = [
      '⚡ [SYSTEM] 初始化 AideoLipSync-v2 神经网络引擎...',
      '📡 [NETWORK] 正在验证火山云空间 VOD 证书及 CDN 加密握手... [OK]',
      '🔧 [GPU-CUDA] 成功在火山引擎分配 NVIDIA A100 Tensor Core 显存资源...',
      '📷 [FACE-GRID] 载入人脸三维骨骼追踪模型，检测到 68 个面部特征锚点...',
      `📊 [CONFIG] 应用微调参数: 唇部开合强度=${mouthAperture}x, 3D姿态倾斜=${headPose}px, 声线拟合=${voiceCloning}%`,
      '🎙️ [CLONE-TTS] 提取声音特征并运行差分克隆算法，合成目标语种无损配音轨...',
      '👄 [LIP-SYNC] 嘴形神经像素形变合并进程已启动 (对口型)...',
      '📈 [RENDER] 正在逐帧渲染视频序列 (Frame 1-450, 30fps)...',
      '💎 [SUCCESS] GPU 实时渲染极速完成。唇形与发音对齐渲染已完成。',
      '🔗 [STORAGE] 导出视频文件并成功更新火山 CDN 托管。'
    ];

    let currentLogIdx = 0;
    const interval = setInterval(() => {
      if (currentLogIdx < logSteps.length) {
        setLogs(prev => [...prev, logSteps[currentLogIdx]]);
        currentLogIdx++;
        // Auto-scroll terminal
        setTimeout(() => {
          terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        clearInterval(interval);
        setIsRendering(false);
      }
    }, 600);
  };

  return (
    <div className="space-y-12 text-left">
      
      {/* Intro info box */}
      <div className="bg-indigo-950/20 border border-indigo-500/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-xl">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
            <Activity className="w-4 h-4 animate-pulse" />
            AideoLipSync & AideoScriptAuditor
          </p>
          <h3 className="text-lg font-bold text-slate-100">高阶神经网络口型微调引擎</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            极度挑剔的海外消费者对 “口型不对、配音机械” 的视频容忍度极低。
            我们直接向您开放底层神经网络微调面板，您能像调音师一样，对视频口形和发音做出微秒级的精准控制。
          </p>
        </div>
        <div className="shrink-0 bg-indigo-500/10 border border-indigo-500/20 rounded-xl px-4 py-3 flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-indigo-400 animate-spin" style={{ animationDuration: '6s' }} />
          <div>
            <p className="text-xs font-bold text-slate-200">自适应纠偏激活</p>
            <p className="text-[10px] text-slate-500">免手动对准，自适应纠正唇肌</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Parameters Sliders */}
        <div className="lg:col-span-6 bg-slate-900/20 border border-slate-900 rounded-3xl p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <div className="flex justify-between items-center border-b border-slate-900 pb-3">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-indigo-400" />
                神经网络底层参数精调
              </span>
              <span className="text-[10px] text-slate-500">联动人脸特征网格</span>
            </div>

            {/* Slider 1: Mouth aperture */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">嘴部闭合与动作幅度 (Mouth Aperture)</span>
                <span className="font-mono text-indigo-400 font-bold bg-indigo-500/10 px-1.5 py-0.5 rounded">
                  {mouthAperture}x
                </span>
              </div>
              <input 
                type="range" 
                min="0.5" 
                max="1.5" 
                step="0.1"
                value={mouthAperture}
                onChange={(e) => setMouthAperture(parseFloat(e.target.value))}
                className="w-full accent-indigo-500 h-1 bg-slate-950 rounded-lg cursor-pointer"
              />
              <p className="text-[10px] text-slate-500">调整开口幅度的上下极值，防止大张口或紧抿。建议默认保持 1.0x。</p>
            </div>

            {/* Slider 2: Head pose translation */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">3D 头部倾斜与骨骼偏置 (3D Head Pose Yaw)</span>
                <span className="font-mono text-sky-400 font-bold bg-sky-500/10 px-1.5 py-0.5 rounded">
                  {headPose} px
                </span>
              </div>
              <input 
                type="range" 
                min="-15" 
                max="15" 
                step="1"
                value={headPose}
                onChange={(e) => setHeadPose(parseInt(e.target.value))}
                className="w-full accent-sky-500 h-1 bg-slate-950 rounded-lg cursor-pointer"
              />
              <p className="text-[10px] text-slate-500">三维头部旋转时口形随角度的畸变补偿偏置，防止侧脸口型歪斜。</p>
            </div>

            {/* Slider 3: Voice cloning */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">声线情绪起伏拟合 (Voice Fidelity)</span>
                <span className="font-mono text-violet-400 font-bold bg-violet-500/10 px-1.5 py-0.5 rounded">
                  {voiceCloning}%
                </span>
              </div>
              <input 
                type="range" 
                min="70" 
                max="100" 
                step="1"
                value={voiceCloning}
                onChange={(e) => setVoiceCloning(parseInt(e.target.value))}
                className="w-full accent-violet-500 h-1 bg-slate-950 rounded-lg cursor-pointer"
              />
              <p className="text-[10px] text-slate-500">数值越高代表声线越贴合本色，数值适度降低可提升外语发音流利度。</p>
            </div>

            {/* Slider 4: Latency offset */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">音频与嘴型微秒级对齐校正 (Latency Correction)</span>
                <span className="font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  +{latencyOffset} ms
                </span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="400" 
                step="10"
                value={latencyOffset}
                onChange={(e) => setLatencyOffset(parseInt(e.target.value))}
                className="w-full accent-emerald-500 h-1 bg-slate-950 rounded-lg cursor-pointer"
              />
              <p className="text-[10px] text-slate-500">微调声音与动画的时间戳，补偿某些模特在爆破音发音时的动作延迟。</p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-900 flex justify-between items-center text-[11px] text-slate-500">
            <span>引擎版本: AideoNeural v2.4-A100</span>
            <span>自适应防溢出纠正: <b>已开启</b></span>
          </div>
        </div>

        {/* Right Side: Futuristic Face Mesh Wireframe */}
        <div className="lg:col-span-6 bg-slate-950 border border-slate-900 rounded-3xl p-6 flex flex-col justify-between items-center relative overflow-hidden">
          {/* Futuristic grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
          
          <div className="w-full flex justify-between items-center relative z-10">
            <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1.5 font-mono">
              <Activity className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              NEURAL MESH COMPENSATOR
            </span>
            <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold font-mono">
              REALTIME SCALER
            </span>
          </div>

          {/* Dynamic SVG Wireframe Face */}
          <div className="w-full h-64 flex items-center justify-center my-4 relative z-10">
            <svg viewBox="0 0 200 200" className="w-full h-full max-w-[240px]">
              {/* Outer Head Contour */}
              <path 
                d={`M 50 60 C 50 30, 150 30, 150 60 C 150 110, 140 160, 100 175 C 60 160, 50 110, 50 60 Z`} 
                fill="none" 
                stroke="#1e293b" 
                strokeWidth="1.5" 
                strokeDasharray="4 2" 
              />
              
              {/* Eye Keypoints */}
              {/* Left Eye */}
              <circle cx={75 + headPose * 0.4} cy="75" r="3" fill="#6366f1" className="animate-pulse" />
              <line x1={65 + headPose * 0.4} y1="75" x2={85 + headPose * 0.4} y2="75" stroke="#312e81" strokeWidth="1" />
              
              {/* Right Eye */}
              <circle cx={125 + headPose * 0.4} cy="75" r="3" fill="#6366f1" className="animate-pulse" />
              <line x1={115 + headPose * 0.4} y1="75" x2={135 + headPose * 0.4} y2="75" stroke="#312e81" strokeWidth="1" />

              {/* Nose Bridge */}
              <line x1={100 + headPose * 0.5} y1="70" x2={100 + headPose * 0.5} y2="110" stroke="#334155" strokeWidth="1.5" />
              <circle cx={100 + headPose * 0.5} cy="110" r="2.5" fill="#475569" />

              {/* Dynamic Lip Contour (Changes according to mouthAperture and headPose) */}
              {/* Left Corner */}
              <circle cx={70 + headPose * 0.4} cy="135" r="2.5" fill="#38bdf8" />
              {/* Right Corner */}
              <circle cx={130 + headPose * 0.4} cy="135" r="2.5" fill="#38bdf8" />

              {/* Upper Lip center point - moving up based on aperture */}
              <circle cx={100 + headPose * 0.45} cy={135 - mouthAperture * 6} r="3" fill="#ec4899" />
              
              {/* Lower Lip center point - moving down based on aperture */}
              <circle cx={100 + headPose * 0.45} cy={135 + mouthAperture * 10} r="3" fill="#ec4899" />

              {/* Mouth connections */}
              <path 
                d={`M ${70 + headPose * 0.4} 135 Q ${100 + headPose * 0.45} ${135 - mouthAperture * 6} ${130 + headPose * 0.4} 135`} 
                fill="none" 
                stroke="#ec4899" 
                strokeWidth="2" 
              />
              <path 
                d={`M ${70 + headPose * 0.4} 135 Q ${100 + headPose * 0.45} ${135 + mouthAperture * 10} ${130 + headPose * 0.4} 135`} 
                fill="none" 
                stroke="#ec4899" 
                strokeWidth="2" 
              />

              {/* Background circular soundwave animation reflecting Voice Cloning state */}
              <circle 
                cx="100" 
                cy="100" 
                r={60 + (voiceCloning - 70) * 0.3} 
                fill="none" 
                stroke="#6366f1" 
                strokeWidth="1" 
                strokeOpacity="0.1" 
                className="animate-ping" 
                style={{ animationDuration: '3s' }} 
              />
            </svg>
          </div>

          {/* Interactive sliders visual readout */}
          <div className="w-full bg-slate-900/50 p-4 border border-slate-900 rounded-2xl grid grid-cols-2 gap-3 text-[10px] text-slate-500 font-mono text-left">
            <div>
              <span className="text-slate-400">口形最大高度 (M-Height):</span>
              <span className="text-slate-200 ml-1">{(135 + mouthAperture * 10) - (135 - mouthAperture * 6)} px</span>
            </div>
            <div>
              <span className="text-slate-400">姿态偏心对齐 (yaw-offset):</span>
              <span className="text-slate-200 ml-1">{(headPose * 0.45).toFixed(1)} px</span>
            </div>
            <div>
              <span className="text-slate-400">音频抖动控制 (Sync-Delay):</span>
              <span className="text-slate-200 ml-1">+{latencyOffset} ms</span>
            </div>
            <div>
              <span className="text-slate-400">声学特征点 (Spectral):</span>
              <span className="text-slate-200 ml-1">2048-dim embedding</span>
            </div>
          </div>
        </div>

      </div>

      {/* SECTION 2: Interactive Script Auditor & Time Optimizer */}
      <div className="bg-slate-900/20 border border-slate-900 rounded-3xl p-6 sm:p-8 space-y-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 bg-sky-500/10 border border-sky-500/25 px-3 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-[10px] font-bold text-sky-300 tracking-wider">AideoScriptAuditor 脚本时长预检</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-slate-100">口播字数超负荷预检调优</h4>
            <p className="text-xs text-slate-400">
              物理时长限制是视频生成失败、音画严重错位的最核心原因。在这里输入文案并设置限制，系统将为你保驾护航。
            </p>
          </div>

          {/* Time Target Selectors */}
          <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-900">
            {[15, 30, 60].map(seconds => (
              <button
                key={seconds}
                onClick={() => setVideoLimit(seconds)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  videoLimit === seconds 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {seconds}s 视频限制
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Input panel */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300">待检测外文口播文案 (支持手打体验)：</label>
              <textarea
                value={scriptText}
                onChange={(e) => setScriptText(e.target.value)}
                rows={4}
                className="w-full bg-slate-950 border border-slate-900 rounded-xl p-4 text-xs font-mono text-slate-300 leading-relaxed focus:outline-none focus:border-indigo-500/50 resize-none"
              />
            </div>

            {/* Audit Status Panel */}
            <AnimatePresence mode="wait">
              {auditPassed ? (
                <motion.div 
                  key="pass"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-emerald-950/10 border border-emerald-500/15 p-4 rounded-xl flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div className="space-y-0.5 text-left">
                    <p className="text-xs font-bold text-emerald-400">✓ 智能预检审核通过 (Syllable Match Successful)</p>
                    <p className="text-[10.5px] text-slate-400">
                      当前字数预计需要约 <b className="text-emerald-400">{estimatedDuration}秒</b> 正常语速念完，完全低于或契合您的 <b>{videoLimit}秒</b> 视频时长限制。生成口型将极其自如流畅。
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="fail"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-rose-950/15 border border-rose-500/20 p-4 rounded-xl space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 shrink-0 mt-0.5 animate-bounce">
                      <AlertTriangle className="w-3.5 h-3.5" />
                    </div>
                    <div className="space-y-0.5 text-left flex-1">
                      <p className="text-xs font-bold text-rose-400">⚡ 警告：文案过长，口型崩坏穿帮几率极高！</p>
                      <p className="text-[10.5px] text-slate-400">
                        当前字数预计需要长达 <b className="text-rose-400">{estimatedDuration}秒</b> 才能念完，而视频限制仅为 <b>{videoLimit}秒</b>。
                        强行渲染会导致AI模特开启疯狂倍速发音，嘴唇抽搐闪烁，流失率飙升。
                      </p>
                    </div>
                  </div>

                  {/* One click compress button */}
                  <div className="bg-slate-950/80 border border-slate-900 rounded-lg p-3 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <div className="text-left space-y-0.5">
                      <p className="text-[10px] text-indigo-400 font-bold">Aideo AI 独家纠偏推荐 (无损压缩)：</p>
                      <p className="text-[9.5px] text-slate-500 italic truncate max-w-[280px]">"{suggestedCompactText}"</p>
                    </div>
                    <button
                      onClick={handleApplySuggestion}
                      className="text-[10px] font-bold bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 px-3 py-1.5 rounded-lg hover:bg-indigo-600 hover:text-white cursor-pointer transition-colors whitespace-nowrap shrink-0"
                    >
                      一键纠偏替换文案
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Action Terminal log panel */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-900 rounded-2xl p-5 flex flex-col justify-between items-stretch">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-900 pb-2.5">
                <span className="text-[10.5px] font-bold text-slate-400 flex items-center gap-1.5 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  GPU LIVE RENDERING LOGS
                </span>
                <span className="text-[9px] text-slate-600 font-mono">volc-accelerator-v2</span>
              </div>

              {/* Logs display terminal */}
              <div className="h-44 bg-slate-900/80 rounded-xl border border-slate-950 p-3 overflow-y-auto font-mono text-[9.5px] text-indigo-300 space-y-1 text-left select-none">
                {logs.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-600 text-[10px]">
                    <p>等待提交合并任务...</p>
                    <p className="text-[9px] text-slate-700 mt-1">设置参数与文案后点击下方按钮</p>
                  </div>
                ) : (
                  <>
                    {logs.map((log, idx) => (
                      <div key={idx} className="leading-relaxed border-l-2 border-indigo-500/30 pl-2">
                        {log}
                      </div>
                    ))}
                    <div ref={terminalBottomRef} />
                  </>
                )}
              </div>
            </div>

            {/* Render trigger button */}
            <div className="pt-4 border-t border-slate-900/60 mt-4">
              <button
                onClick={startRenderSimulation}
                disabled={isRendering}
                className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                  isRendering 
                    ? 'bg-indigo-900/10 border border-indigo-500/10 text-indigo-500 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                }`}
              >
                {isRendering ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>正在火山加速集群渲染...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>开始微调参数一键合成 ➜</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
