import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  XCircle, 
  FileText, 
  Loader2, 
  Play, 
  Download, 
  AlertCircle, 
  Send,
  UserCheck,
  Cpu,
  Activity,
  CheckCircle,
  Video,
  Terminal,
  Eye,
  Database
} from 'lucide-react';
import { UploadedVideo, Message } from '../types';

interface AgentWorkspaceProps {
  uploadedVideos: UploadedVideo[];
  agentVid: string;
  setAgentVid: (vid: string) => void;
  chatHistory: Message[];
  setChatHistory: React.Dispatch<React.SetStateAction<Message[]>>;
  chatBoxInput: string;
  setChatBoxInput: (input: string) => void;
  selectedPresetSkill: string;
  setSelectedPresetSkill: (skill: string) => void;
  executeShortcut: (command: string, skillType: string, customParams?: string) => void;
  submitAgentTask: () => void;
}

export default function AgentWorkspace({
  uploadedVideos,
  agentVid,
  setAgentVid,
  chatHistory,
  setChatHistory,
  chatBoxInput,
  setChatBoxInput,
  selectedPresetSkill,
  setSelectedPresetSkill,
  executeShortcut,
  submitAgentTask
}: AgentWorkspaceProps) {
  const [activeStageTab, setActiveStageTab] = useState<'input' | 'output'>('input');

  const currentVideoObj = uploadedVideos.find(v => v.vid === agentVid);

  // Find the latest assistant message that has processor action metadata
  const lastAiMessage = [...chatHistory].reverse().find(m => 
    m.role === 'assistant' && 
    (m.type === 'loading' || m.type === 'video' || m.status === 'Failed' || m.status === 'Completed' || m.taskId)
  );

  // Auto transition to Output monitor when task goes active
  useEffect(() => {
    if (lastAiMessage && (lastAiMessage.type === 'loading' || lastAiMessage.type === 'video' || lastAiMessage.status === 'Failed')) {
      setActiveStageTab('output');
    }
  }, [lastAiMessage?.id, lastAiMessage?.type, lastAiMessage?.status]);

  return (
    <div className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-0 bg-slate-950">
      
      {/* LEFT COLUMN: Dialogue Feed & Tool Box */}
      <div className="flex-1 flex flex-col min-h-0 border-b lg:border-b-0 lg:border-r border-slate-900">
        
        {/* Target Asset Match Header */}
        <div className="bg-slate-900/30 border-b border-slate-900 px-6 py-3 flex items-center justify-between flex-wrap gap-4 text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="font-semibold text-slate-350">关联对话的智剪视频：</span>
            <select 
              value={agentVid} 
              onChange={(e) => {
                setAgentVid(e.target.value);
                setChatHistory(prev => [
                  ...prev,
                  {
                    id: 'sys-node-' + Date.now(),
                    role: 'assistant',
                    type: 'system',
                    content: `🎯 交互对象已重定向：正对影片「${uploadedVideos.find(v => v.vid === e.target.value)?.name || '未选名'}」（ID: ${e.target.value}）建立深度语义连接。`
                  }
                ]);
              }}
              className="bg-slate-950 border border-slate-800 rounded-lg p-1.5 px-3 text-slate-200 focus:ring-1 focus:ring-blue-500/20 focus:outline-none"
            >
              <option value="" disabled>请选择一个工作台视频资产...</option>
              {uploadedVideos.map((video) => (
                <option key={video.id} value={video.vid}>
                  {video.name} ({video.vid.substring(0, 8)})
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500 bg-slate-950 p-1 px-3 rounded-md">
            <span>算法核心: 智慧多媒体云编组</span>
          </div>
        </div>

        {/* Chat Conversation Thread */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {chatHistory.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 select-none max-w-md mx-auto">
              <Cpu className="w-12 h-12 text-slate-800 mb-3" />
              <p className="text-sm font-semibold text-slate-300">开启您的视频语义创智对话</p>
              <p className="text-xs text-slate-505 mt-2 leading-relaxed">
                您可以使用最直白日常的描述指令要求助手重排、裁剪、抹除或分析所选视频。请务必优先在顶栏选择一个需要处理的视频载体。
              </p>
            </div>
          ) : (
            chatHistory.map((message) => {
              const isUser = message.role === 'user';
              const isSystem = message.type === 'system';

              if (isSystem) {
                return (
                  <div key={message.id} className="flex justify-center my-3">
                    <div className="bg-blue-950/20 text-[11px] text-blue-300 border border-blue-900/40 p-2.5 rounded-xl max-w-xl text-center leading-relaxed font-semibold">
                      {message.content}
                    </div>
                  </div>
                );
              }

              return (
                <div 
                  key={message.id}
                  className={`flex gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {/* Assistant Intelligent Avatar */}
                  {!isUser && (
                    <div className="w-9 h-9 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 font-bold text-sm select-none shadow-md">
                      👑
                    </div>
                  )}

                  {/* Bubble Container */}
                  <div className={`max-w-xl rounded-2xl p-4 border text-xs leading-relaxed space-y-3.5 ${
                    isUser 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-500 text-white shadow-lg shadow-blue-600/5' 
                      : 'bg-slate-900/60 border-slate-850 text-slate-100 animate-fade-in'
                  }`}>
                    
                    <div>
                      <p className={`whitespace-pre-wrap ${isUser ? 'text-blue-50 font-medium' : 'text-slate-200'}`}>
                        {message.content}
                      </p>
                    </div>

                    {/* Inline Loader Status */}
                    {message.type === 'loading' && (
                      <div className="flex items-center gap-2 p-2 bg-slate-950/50 rounded-lg border border-slate-855 text-left">
                        <Loader2 className="w-3.5 h-3.5 text-blue-500 animate-spin" />
                        <span className="text-[10px] font-mono text-slate-500">
                          {message.taskId ? `工作空间正在云端解码分析 Task: ${message.taskId}` : '任务资源准备中...'}
                        </span>
                      </div>
                    )}

                    {/* Inline Theater Player */}
                    {message.type === 'video' && message.playUrl && (
                      <div className="mt-3 bg-black rounded-xl overflow-hidden border border-slate-850 p-2 space-y-2 text-left">
                        <p className="text-[10px] text-blue-400 font-bold flex items-center gap-1 select-none">
                          <Play className="w-3.5 h-3.5 animate-pulse" />
                          音形画面合成就绪：
                        </p>
                        <video 
                          src={message.playUrl}
                          controls
                          className="w-full max-h-64 object-contain rounded-lg"
                        />
                        <div className="flex justify-between items-center text-[9px] text-slate-500 px-1 pt-1 font-mono">
                          <span>生成资产 ID: {message.vid}</span>
                          <a 
                            href={message.playUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-blue-400 hover:underline inline-flex items-center gap-0.5"
                          >
                            <Download className="w-3 h-3" /> 点击导出
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Text Analyzer Reports */}
                    {message.type === 'text' && message.skillType === 'Vision' && (
                      <div className="mt-3 bg-slate-950 p-3.5 rounded-xl border border-slate-850 space-y-2 text-left">
                        <p className="text-[10px] text-emerald-400 font-bold flex items-center gap-1 select-none">
                          <FileText className="w-3.5 h-3.5" strokeWidth={2.5} />
                          场景识别与剧作逻辑审视：
                        </p>
                        <p className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed font-sans select-text">
                          {message.content}
                        </p>
                      </div>
                    )}

                    {/* Local Asset restricted alert */}
                    {message.vid && !message.playUrl && message.errorMsg && (
                      <div className="mt-3 bg-amber-500/10 border border-amber-500/15 p-3 rounded-lg text-[11px] text-amber-300 text-left">
                        <p className="font-bold flex items-center gap-1 select-none">
                          <AlertCircle className="w-3.5 h-3.5" />
                          处理库导出提示
                        </p>
                        <p className="text-[10.5px] mt-1 leading-relaxed">
                          {message.errorMsg}
                        </p>
                      </div>
                    )}
                    
                    {/* Failure info */}
                    {message.status === 'Failed' && (
                      <div className="p-2 bg-rose-500/10 border border-rose-500/15 rounded-lg text-[10.5px] text-rose-400 flex items-start gap-1.5 mt-2 text-left">
                        <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>{message.errorMsg || '后台音频画面重排引擎中断。请检查输入内容无误后重试。'}</span>
                      </div>
                    )}
                  </div>

                  {/* User Avatar */}
                  {isUser && (
                    <div className="w-9 h-9 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 font-bold text-sm select-none shadow-md">
                      👤
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Preset Action Buttons & Dialog Input */}
        <div className="bg-slate-900/20 border-t border-slate-900 p-5 space-y-4 shrink-0">
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2.5 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              调动机器人专属智剪技能:
            </p>
            <div className="flex flex-wrap gap-2 text-left">
              <button
                onClick={() => executeShortcut(
                  '请提取这个视频中的精彩高光剪辑',
                  'Highlight',
                  JSON.stringify({ MinDuration: 5, MaxDuration: 30, NeedOpeningHook: true }, null, 2)
                )}
                className="bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 p-2.5 px-4 rounded-xl text-xs text-slate-300 transition-all flex items-center gap-2 hover:text-blue-400 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>智能精彩高光剪切 (Highlight)</span>
              </button>

              <button
                onClick={() => executeShortcut(
                  '请帮我自动擦除视频底部的中英字幕。',
                  'Erase'
                )}
                className="bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 p-2.5 px-4 rounded-xl text-xs text-slate-300 transition-all flex items-center gap-2 hover:text-blue-400 cursor-pointer"
              >
                <XCircle className="w-3.5 h-3.5" />
                <span>多语底边字幕擦除 (Erase)</span>
              </button>

              <button
                onClick={() => executeShortcut(
                  '请分析视频内容，写一份视频场景理解报告。',
                  'Vision',
                  '{}'
                )}
                className="bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 p-2.5 px-4 rounded-xl text-xs text-slate-300 transition-all flex items-center gap-2 hover:text-blue-400 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>镜头画面深度理解 (Vision)</span>
              </button>
            </div>
          </div>

          {/* Messaging Box */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={chatBoxInput}
                onChange={(e) => setChatBoxInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    submitAgentTask();
                  }
                }}
                placeholder={agentVid ? "指示助手：“帮我提取 15 秒的最佳视觉镜头”" : "← 请首先在资产栏或者选择框中指定需要施加魔法的视频"}
                disabled={!agentVid}
                className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 pr-12 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-500/10 focus:outline-none disabled:bg-slate-950/40 disabled:text-slate-600 disabled:border-slate-900"
              />
              
              {selectedPresetSkill && (
                <div className="absolute right-14 top-3 bg-blue-600/10 border border-blue-500/20 text-blue-400 font-mono text-[9px] p-0.5 px-2 rounded-lg flex items-center gap-1 select-none">
                  <span>激活技能: {selectedPresetSkill}</span>
                  <XCircle className="w-3 h-3 cursor-pointer text-slate-500 hover:text-rose-400" onClick={() => setSelectedPresetSkill('')} />
                </div>
              )}
            </div>

            <button
              onClick={() => submitAgentTask()}
              disabled={!agentVid || !chatBoxInput.trim()}
              className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:bg-slate-900 disabled:text-slate-600 p-4 rounded-2xl transition-all shadow-md shadow-blue-600/10 flex items-center justify-center cursor-pointer"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: Studio Cinema Screen & API Debugging Monitor */}
      <div className="w-full lg:w-[420px] bg-slate-900/10 flex flex-col p-5 overflow-y-auto shrink-0 border-t lg:border-t-0 border-slate-900 space-y-4">
        
        {/* Cinema Monitor Banner */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-905">
          <span className="text-xs font-bold text-slate-300 tracking-wider flex items-center gap-1.5 uppercase font-mono select-none">
            <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
            VEO.FLOW STUDIO MONITOR
          </span>
          <span className="text-[9px] bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded font-bold font-mono">
             SORA CHANNELS
          </span>
        </div>

        {/* Studio Screen Tabs */}
        <div className="grid grid-cols-2 gap-1 bg-slate-900 p-1 rounded-xl border border-slate-850 select-none">
          <button
            onClick={() => setActiveStageTab('input')}
            className={`py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeStageTab === 'input'
                ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            📽️ 参考原视轨 (Input Stream)
          </button>
          
          <button
            onClick={() => setActiveStageTab('output')}
            className={`py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer relative ${
              activeStageTab === 'output'
                ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {lastAiMessage?.type === 'loading' && (
              <span className="absolute top-2.5 right-2 text-blue-400 font-mono text-[8px] tracking-wide animate-pulse inline-flex items-center gap-0.5">
                ● LIVE
              </span>
            )}
            ✨ 智能合成监视 (Output Target)
          </button>
        </div>

        {/* Tab A Content: Selected local/VOD original clip */}
        {activeStageTab === 'input' && (
          <div className="space-y-4 animate-fade-in text-left">
            {currentVideoObj ? (
              <>
                <div className="bg-black/40 rounded-2xl p-4 border border-slate-900 space-y-3">
                  <div className="aspect-video bg-black rounded-xl overflow-hidden border border-slate-800 relative shadow-2xl">
                    <video 
                      src={currentVideoObj.localPlayUrl}
                      controls
                      className="w-full h-full object-contain"
                      key={currentVideoObj.localPlayUrl}
                    />
                  </div>
                  <div className="space-y-1.5 mt-2">
                    <p className="text-xs font-bold text-slate-200 truncate">{currentVideoObj.name}</p>
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-500 bg-slate-950 p-2.5 rounded-lg border border-slate-850 select-none">
                      <div>大小: <span className="text-slate-350">{currentVideoObj.sizeStr}</span></div>
                      <div>时长: <span className="text-slate-350">{currentVideoObj.duration?.toFixed(1) || 'N/A'}s</span></div>
                      {currentVideoObj.width && (
                        <div className="col-span-2">分辨率: <span className="text-slate-350">{currentVideoObj.width} × {currentVideoObj.height}</span></div>
                      )}
                      <div className="col-span-2 truncate">资源 VID: <span className="text-blue-400 select-all font-bold">{currentVideoObj.vid}</span></div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900/20 border border-slate-850 p-3.5 rounded-xl text-[10.5px] text-slate-400 leading-relaxed space-y-1">
                  <p className="font-bold text-purple-400">💡 创意协同指引：</p>
                  <p>左侧选择的视频资产已被挂载。不管是进行 “高光提取”、“字幕抹除” 或是 “场景剧作分析”，机器人都会以这个参考文件来进行云矩阵排班。您可以在最上方更换要处理的视频。</p>
                </div>
              </>
            ) : (
              <div className="border border-dashed border-slate-900 rounded-2xl p-8 text-center text-slate-500 space-y-2 select-none">
                <Video className="w-10 h-10 mx-auto opacity-35" />
                <p className="text-xs font-semibold text-slate-455">尚未关联视频资源</p>
                <p className="text-[10px] text-slate-505">请首先在左栏或左侧资产库里，上传或直接点击关联一则视频资产作为电影级创作的宿主。</p>
              </div>
            )}
          </div>
        )}

        {/* Tab B Content: AI process Monitor or Diagnostic Terminal */}
        {activeStageTab === 'output' && (
          <div className="space-y-4 animate-fade-in text-left">
            {!lastAiMessage ? (
              <div className="border border-dashed border-slate-900 bg-slate-900/10 rounded-2xl p-8 text-center text-slate-500 space-y-2 select-none">
                <Cpu className="w-10 h-10 mx-auto opacity-35 animate-spin duration-3000" />
                <p className="text-xs font-semibold text-slate-300">等待触发云智剪交互</p>
                <p className="text-[10.5px] text-slate-505 max-w-[280px] mx-auto leading-relaxed">
                  请使用左下角的快捷产品技能（如 “精彩高光切割”）或者在输入框内键入您的自然口语指令。云合成引擎激活后，此通道将拉通展示高能粒子对齐监视。
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                
                {/* Visual state loader / progress tracker (Processing) */}
                {lastAiMessage.type === 'loading' && (
                  <div className="bg-slate-900/30 border border-blue-500/25 rounded-2xl p-4.5 space-y-4 shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="text-[10.5px] text-blue-400 font-bold flex items-center gap-1.5 select-none">
                        <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                        音视频物理帧合融中...
                      </span>
                      <span className="text-[9.5px] text-slate-500 font-mono font-bold uppercase tracking-wider animate-pulse select-none">
                         RUNNING
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="h-1 bg-slate-950 rounded-full overflow-hidden relative">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full animate-pulse rounded-full w-[80%] transition-all"></div>
                      </div>
                      <div className="flex justify-between text-[10px] font-mono text-slate-500">
                        <span>Task ID: <strong className="text-slate-350 select-all">{lastAiMessage.taskId || '排号中...'}</strong></span>
                        <span className="text-blue-400 animate-pulse font-bold select-none">接口监听中 (Polling)</span>
                      </div>
                    </div>

                    {/* Logging Ticker */}
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 text-[10px] font-mono text-slate-400 space-y-1 max-h-[140px] overflow-y-auto select-text leading-relaxed">
                      <p className="text-blue-500">🚀 [XM-VOD-Host] Connecting to Volcano AI rendering pool...</p>
                      <p className="text-slate-500">→ Submitted via Volcano OpenSDK (Skill: {lastAiMessage.skillType || 'Prompt-to-Video'})</p>
                      <p className="text-slate-400 animate-pulse">⚡ 目前状态：[PROCESSING] 后台正在进行字幕擦除/高光比对、画面重采样与音轨嘴型对齐。计算预估耗时 20s ~ 2min。请保持连线状态。</p>
                    </div>
                  </div>
                )}

                {/* Failure / Error diagnosis terminal */}
                {lastAiMessage.status === 'Failed' && (
                  <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-4.5 space-y-3">
                    <div className="flex items-center gap-1.5 font-bold text-rose-450 text-xs">
                      <AlertCircle className="w-4 h-4" />
                      <span>Volcano SDK 智能体任务受阻</span>
                    </div>
                    <p className="text-xs text-rose-300 leading-normal">
                      <strong>通信阻断提示：</strong> {lastAiMessage.errorMsg || '视频智能解算处理失败，部分参数越界。'}
                    </p>

                    {/* Developer JSON Dump */}
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-bold text-slate-500 font-mono">接口原生报文 Dump (Raw Callback Payload):</p>
                      <pre className="p-3 bg-slate-950 rounded-xl border border-slate-900 text-[10px] font-mono text-slate-400 max-h-[160px] overflow-y-auto whitespace-pre-wrap select-all leading-normal">
                        {JSON.stringify(lastAiMessage.raw || { error: 'UnknownSDKError', msg: 'No trace headers returned.' }, null, 2)}
                      </pre>
                    </div>

                    <p className="text-[10px] text-slate-500 leading-relaxed font-semibold">
                      建议核对您的火山 VOD 密钥对、服务开通状况或当前的配置。
                    </p>
                  </div>
                )}

                {/* Successful playback monitor */}
                {(lastAiMessage.type === 'video' || lastAiMessage.status === 'Completed') && (
                  <div className="space-y-4">
                    {lastAiMessage.playUrl ? (
                      <div className="bg-slate-900/40 border border-slate-850 rounded-2xl p-4 space-y-3">
                        <div className="flex items-center justify-between text-xs text-slate-400 font-semibold select-none">
                          <span className="text-emerald-400 flex items-center gap-1 font-bold">
                            <CheckCircle className="w-4 h-4 text-emerald-400 animate-pulse" />
                            智能合成处理完毕！
                          </span>
                          <span className="text-[9.5px] bg-emerald-500/10 text-emerald-300 px-2 rounded-full font-mono font-bold">
                             COMPLETED
                          </span>
                        </div>
                        
                        <div className="aspect-video bg-black rounded-xl overflow-hidden border border-slate-800 shadow-xl relative">
                          <video 
                            src={lastAiMessage.playUrl}
                            controls
                            className="w-full h-full object-contain"
                            key={lastAiMessage.playUrl}
                          />
                        </div>

                        <div className="space-y-1.5 pt-1 text-[11px]">
                          <p className="font-bold text-slate-200">生成视轨已被安全回传注册</p>
                          <div className="flex justify-between items-center text-[10px] text-slate-500 pt-1 font-mono">
                            <span>已支持在 iframe 同步内敛拉流播放</span>
                            <a 
                              href={lastAiMessage.playUrl} 
                              target="_blank" 
                              rel="noreferrer"
                              className="text-blue-400 hover:underline inline-flex items-center gap-0.5 font-semibold"
                            >
                              <Download className="w-3.5 h-3.5" /> 导出文件
                            </a>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Playback address missing due to domain settings (The playInfoError / Empty playInfo domain setting exception) */
                      <div className="bg-slate-900/40 border border-slate-855 rounded-2xl p-4.5 space-y-4 shadow-xl">
                        <div className="flex items-start gap-2.5 text-amber-400">
                          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <p className="text-xs font-bold leading-tight">完成云端智剪 (Task Completed)!</p>
                            <p className="text-[10.5px] text-slate-400 leading-normal">
                               处理任务状态返回 Completed，产出 Output VID，但由于当前的 Volcano 点播空间尚未配置或激活有效的公网加速播放分发域名，导致播放器无法拉取 SSL 媒体流链接 (PlayInfoEmpty)。
                            </p>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 space-y-1.5">
                          <p className="text-[10.5px] font-mono font-bold text-slate-500">目标渲染 Output VID:</p>
                          <div className="bg-slate-900 p-2 text-xs text-slate-200 font-mono text-center rounded border border-slate-850 font-bold select-all">
                             {lastAiMessage.vid || lastAiMessage.taskId}
                          </div>
                          <p className="text-[10px] text-slate-500 leading-relaxed text-center font-semibold text-rose-350">
                            火山极速点播包鉴权已存盘安全。您可以随时在火山控制台上依 VID 取回资产！
                          </p>
                        </div>

                        {/* Diagnostics Trace JSON */}
                        <div className="space-y-1.5 text-left">
                          <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 font-mono">排查联调诊断 Payload (REST Trace):</p>
                          <pre className="p-3 bg-slate-950 rounded-xl border border-slate-900 text-[10px] font-mono text-slate-400 max-h-[160px] overflow-y-auto whitespace-pre-wrap select-all leading-normal">
                            {JSON.stringify(lastAiMessage.raw || { status: 'Completed', details: 'VOD registration done, playInfoEmpty due to private space boundary.' }, null, 2)}
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
}
