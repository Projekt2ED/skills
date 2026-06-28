import React from 'react';
import { 
  Languages, 
  Video, 
  Play, 
  Sparkles, 
  CheckCircle, 
  XCircle, 
  Loader2, 
  AlertCircle, 
  Tv,
  HelpCircle
} from 'lucide-react';
import { UploadedVideo } from '../types';

const LANGUAGES = [
  { code: 'zh', name: '中文简体 (Mandarin)', flag: '🇨🇳' },
  { code: 'yue', name: '粤语 (Cantonese)', flag: '🇨🇳' },
  { code: 'en', name: '英语 (English)', flag: '🇺🇸' },
  { code: 'ja', name: '日语 (Japanese)', flag: '🇯🇵' },
  { code: 'ko', name: '韩语 (Korean)', flag: '🇰🇷' },
  { code: 'fr', name: '法语 (French)', flag: '🇫🇷' },
  { code: 'es', name: '西班牙语 (Spanish)', flag: '🇪🇸' },
  { code: 'de', name: '德语 (German)', flag: '🇩🇪' },
  { code: 'ru', name: '俄语 (Russian)', flag: '🇷🇺' },
  { code: 'pt', name: '葡萄牙语 (Portuguese)', flag: '🇵🇹' },
  { code: 'it', name: '意大利语 (Italian)', flag: '🇮🇹' },
  { code: 'ar', name: '阿拉伯语 (Arabic)', flag: '🇦🇪' },
  { code: 'hi', name: '印地语 (Hindi)', flag: '🇮🇳' },
  { code: 'vi', name: '越南语 (Vietnamese)', flag: '🇻🇳' },
  { code: 'th', name: '泰语 (Thai)', flag: '🇹🇭' },
  { code: 'id', name: '印尼语 (Indonesian)', flag: '🇮🇩' },
];

interface TranslationTask {
  taskId: string;
  sourceVid: string;
  outputVid?: string;
  status: 'Processing' | 'Completed' | 'Failed' | 'Suspended';
  playUrl?: string;
  errorMsg?: string;
  elapsed: number;
  raw?: any;
}

interface TranslationWorkspaceProps {
  uploadedVideos: UploadedVideo[];
  selectedVid: string;
  setSelectedVid: (vid: string) => void;
  transSourceLang: string;
  setTransSourceLang: (lang: string) => void;
  transTargetLang: string;
  setTransTargetLang: (lang: string) => void;
  transType: string;
  setTransType: (type: string) => void;
  submitTranslation: () => void;
  translationTask: TranslationTask | null;
}

export default function TranslationWorkspace({
  uploadedVideos,
  selectedVid,
  transSourceLang,
  setTransSourceLang,
  transTargetLang,
  setTransTargetLang,
  transType,
  setTransType,
  submitTranslation,
  translationTask,
}: TranslationWorkspaceProps) {
  const currentVideo = uploadedVideos.find(v => v.vid === selectedVid);
  const currentVideoName = currentVideo?.name || '请先在左侧上传或选中您的视频';

  return (
    <div className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-0 bg-slate-950">
      
      {/* Parameters Panel - Left Column */}
      <div className="w-full md:w-[380px] border-b md:border-b-0 md:border-r border-slate-900 p-6 flex flex-col gap-5 overflow-y-auto shrink-0 bg-slate-900/10">
        <div>
          <h2 className="text-sm font-bold text-slate-200 flex items-center gap-2">
            <Languages className="w-4 h-4 text-blue-500" />
            配置翻译参数
          </h2>
          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
            设置翻译的原始语言与目标合成语言，一键生成极速对齐翻译配音成果。
          </p>
        </div>

        {/* Selected target video info */}
        <div className="p-3 bg-slate-900/60 border border-slate-850 rounded-xl space-y-1">
          <label className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">选中的原始视频</label>
          <p className="text-xs font-bold text-slate-200 truncate">{currentVideoName}</p>
          {selectedVid && (
            <p className="text-[10px] font-mono text-slate-500 truncate">VOD VID: {selectedVid}</p>
          )}
        </div>

        {/* Source Language select */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-400">视频源声音语言 (Source)</label>
          <select 
            value={transSourceLang} 
            onChange={(e) => setTransSourceLang(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs focus:border-blue-500 focus:outline-none text-slate-200"
          >
            {LANGUAGES.map(lang => (
              <option key={`src-${lang.code}`} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Target Language select */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-400">翻译目标语种 (Target)</label>
          <select 
            value={transTargetLang} 
            onChange={(e) => setTransTargetLang(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs focus:border-blue-500 focus:outline-none text-slate-200"
          >
            {LANGUAGES.map(lang => (
              <option key={`tgt-${lang.code}`} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Modes definition */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-400 block">智能翻译合成机制</label>
          
          <div className="space-y-2">
            <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
              transType === 'subtitle' 
                ? 'border-blue-550 bg-blue-500/5' 
                : 'border-slate-800 bg-slate-900/30'
            }`}>
              <input 
                type="radio" 
                name="transType" 
                value="subtitle" 
                checked={transType === 'subtitle'} 
                onChange={() => setTransType('subtitle')} 
                className="mt-1 accent-blue-600"
              />
              <div>
                <p className="text-xs font-bold text-slate-200">字幕贴片模式 (Subtitle Only)</p>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-normal">
                  保留视频原始配乐跟发音。对语音内容生成极精细的多端对齐翻译字幕。
                </p>
              </div>
            </label>

            <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
              transType === 'voiceover' 
                ? 'border-blue-550 bg-blue-500/5' 
                : 'border-slate-800 bg-slate-900/30'
            }`}>
              <input 
                type="radio" 
                name="transType" 
                value="voiceover" 
                checked={transType === 'voiceover'} 
                onChange={() => setTransType('voiceover')} 
                className="mt-1 accent-blue-600"
              />
              <div>
                <p className="text-xs font-bold text-slate-200">云语音克隆模式 (Voice Cloning)</p>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-normal">
                  利用 AI 神经网络高逼真重构原声音色，平滑翻译多语言配音，适合解说和分享类影片。
                </p>
              </div>
            </label>

            <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
              transType === 'dubbing' 
                ? 'border-blue-550 bg-blue-500/5' 
                : 'border-slate-800 bg-slate-900/30'
            }`}>
              <input 
                type="radio" 
                name="transType" 
                value="dubbing" 
                checked={transType === 'dubbing'} 
                onChange={() => setTransType('dubbing')} 
                className="mt-1 accent-blue-600"
              />
              <div>
                <p className="text-xs font-bold text-slate-200">影院级唇形复刻模式 (Lip-Sync)</p>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-normal">
                  高逼真音色配音的同时，智能口齿对齐，重整面部唇音对齐，呈现自然音画视听。
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-slate-900 mt-auto">
          <button
            onClick={submitTranslation}
            disabled={!selectedVid || (translationTask?.status === 'Processing')}
            className="w-full bg-blue-605 hover:bg-blue-500 active:bg-blue-700 disabled:bg-slate-900/60 disabled:text-slate-500 py-3 rounded-xl text-xs font-bold text-white transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
          >
            {translationTask?.status === 'Processing' ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>极速对齐重新配音中...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>一键执行多语合成</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Display Area */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-between">
        {!translationTask ? (
          <div className="flex-1 flex flex-col gap-6">
            {selectedVid && currentVideo ? (
              <div className="bg-slate-900/30 border border-slate-850 rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-910">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-blue-500 animate-pulse" />
                    <span className="text-sm font-bold text-slate-200">原始参考视频预览</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded">
                    VID: {selectedVid}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                  {/* Video player for preview */}
                  <div className="xl:col-span-3">
                    {currentVideo.localPlayUrl ? (
                      <div className="aspect-video bg-black rounded-xl overflow-hidden border border-slate-850 shadow-2xl relative">
                        <video 
                          key={currentVideo.localPlayUrl}
                          src={currentVideo.localPlayUrl} 
                          controls 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-slate-950 rounded-xl flex flex-col items-center justify-center p-6 border border-dashed border-slate-900 text-slate-500 text-xs">
                        <Tv className="w-8 h-8 opacity-40 mb-2" />
                        <span>无法直接加载本地临时视频。请在下方或左侧一键执行翻译对齐。</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Metadata cards */}
                  <div className="xl:col-span-2 flex flex-col justify-between p-4 bg-slate-900/40 rounded-xl border border-slate-850/60 text-left">
                    <div className="space-y-3">
                      <p className="text-xs font-bold text-slate-300 truncate">{currentVideo.name}</p>
                      <div className="space-y-1.5 text-[11px] text-slate-500">
                        <p>物理大小: <span className="text-slate-400">{currentVideo.sizeStr}</span></p>
                        {currentVideo.duration && <p>解析时长: <span className="text-slate-400">{currentVideo.duration.toFixed(1)} 秒</span></p>}
                        {currentVideo.width && <p>视频分辨率: <span className="text-slate-400">{currentVideo.width} × {currentVideo.height}</span></p>}
                        <p>上传时间: <span className="text-slate-400">{currentVideo.uploadedAt}</span></p>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-slate-900 text-[11px] text-slate-505 leading-relaxed space-y-2">
                      <p className="font-semibold text-blue-400 flex items-center gap-1">
                        <HelpCircle className="w-3.5 h-3.5 shrink-0 text-blue-400" />
                        音视频智译向导:
                      </p>
                      <p>选好待翻译语言类别，轻点左下方 <strong className="text-slate-300">「一键执行多语合成」</strong>。系统将自动生成云端对齐任务，处理完成后，此处将直接呈现最终的配音与字幕效果视频。</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 border border-slate-900 border-dashed rounded-2xl flex flex-col items-center justify-center text-center p-8 bg-slate-900/10 select-none my-auto">
                <Languages className="w-12 h-12 text-slate-700 mb-3" />
                <p className="text-sm font-semibold text-slate-300">尚未选择待翻译的视频</p>
                <p className="text-xs text-slate-500 max-w-sm mt-1 leading-relaxed">
                  请先在左侧资源管理器中上传新视频资产，或在已有视频卡片上点击作为当前操作主体。
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Realtime workflow processing card */}
            <div className="bg-slate-900/60 rounded-2xl p-5 border border-slate-850 space-y-4 text-left">
              <div className="flex items-center justify-between animate-fade-in">
                <div className="flex items-center gap-2">
                  {translationTask.status === 'Processing' && <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />}
                  {translationTask.status === 'Completed' && <CheckCircle className="w-5 h-5 text-emerald-400" />}
                  {translationTask.status === 'Failed' && <XCircle className="w-5 h-5 text-rose-500" />}
                  <span className="text-xs font-bold text-slate-300">火山多媒体极速云计算状态</span>
                </div>
                
                <span className={`text-[10px] p-1 px-2.5 rounded-full font-bold ${
                  translationTask.status === 'Processing' ? 'bg-blue-500/10 text-blue-400 animate-pulse' :
                  translationTask.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-450' : 'bg-rose-500/10 text-rose-450'
                }`}>
                  {translationTask.status === 'Processing' ? '正在执行智译翻译 (Processing)' :
                   translationTask.status === 'Completed' ? '视频智译完全对齐完成 (Completed)' : '对齐对配失败 (Failed)'}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-[11px] font-mono text-slate-500 bg-slate-950 p-2.5 rounded-xl border border-slate-900">
                  <span>追踪 羲梦 Task ID: <strong className="text-slate-300 select-all font-bold">{translationTask.taskId || '正在建立通讯通道...'}</strong></span>
                  <span>已耗时: <strong className="text-blue-400">{translationTask.elapsed} 秒</strong></span>
                </div>
                
                {translationTask.status === 'Processing' && (
                  <div className="space-y-1.5">
                    <div className="h-1.5 bg-slate-950 rounded-full overflow-hidden relative">
                      <div className="bg-blue-500 h-full animate-pulse rounded-full" style={{ width: '80%', transition: 'width 2s' }}></div>
                    </div>
                    <p className="text-[10px] text-slate-500 flex justify-between">
                      <span>正在调用火山 羲梦 API。后台实时处理切音、大模型翻译以及声画重配对齐中，请稍候...</span>
                      <span>预估剩余耗时 15 ~ 45s</span>
                    </p>
                  </div>
                )}
              </div>

              {/* Normal guide notice under processing */}
              {translationTask.status === 'Processing' && (
                <div className="bg-blue-500/5 p-3 rounded-xl border border-blue-500/10 text-[11px] text-slate-400 leading-relaxed">
                  <p className="font-bold text-blue-400 mb-0.5">🌱 任务已在火山后台创建。并开始排队运算。</p>
                  <p>
                    我们正在使用最通用的火山 <code>SubmitXmTaskAsync</code> OpenAPI 驱动。
                    通常视频在 30 秒至 2 分钟内即由云渲染完成，该系统每 5 秒自动回传。请保持页面开通，生成播放直链后，此处将对新生成的视频提供高保真播放对比。
                  </p>
                </div>
              )}

              {/* Failed box info */}
              {translationTask.errorMsg && (
                <div className="bg-rose-550/10 p-4 rounded-xl border border-rose-500/20 text-[11.5px] text-rose-300 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-rose-450">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>火山智能体执行终止通知</span>
                  </div>
                  <p>
                    <strong>失败诊断详情：</strong>{translationTask.errorMsg}
                  </p>
                  <div className="p-2.5 bg-slate-950/80 rounded border border-slate-910 text-[10px] font-mono text-slate-500 leading-normal">
                    请排查您的火山密钥对、以及您填写的 <code>VOD_SPACE_NAME</code> 空间是否在火山点播开通了此项 羲梦 (AI智译/翻译) 相关的对应套餐与 API 服务。
                  </div>
                </div>
              )}
            </div>

            {/* Screens Comparison on completed successful task */}
            {translationTask.status === 'Completed' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left animate-fade-in flex-1">
                
                {/* Screen A - Original */}
                <div className="bg-slate-900/30 border border-slate-850 rounded-2xl overflow-hidden p-4 flex flex-col gap-2">
                  <p className="text-xs font-bold text-slate-405 pb-2 border-b border-slate-900 flex items-center gap-1.5">
                    <Play className="w-3.5 h-3.5 text-blue-500" />
                    原始参考视频
                  </p>
                  {currentVideo?.localPlayUrl ? (
                    <div className="aspect-video bg-black rounded-xl overflow-hidden border border-slate-900 shadow-lg mt-2">
                      <video 
                        src={currentVideo.localPlayUrl} 
                        controls 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-black/50 border border-slate-900 rounded-xl flex flex-col items-center justify-center p-6 text-center text-xs text-slate-500 mt-2">
                      <Tv className="w-6 h-6 text-slate-700 mb-2" />
                      <span>原始视频 VID: {translationTask.sourceVid}</span>
                    </div>
                  )}
                </div>

                {/* Screen B - Completed Translated Output */}
                <div className="bg-slate-900/30 border border-slate-850/85 rounded-2xl overflow-hidden p-4 flex flex-col gap-2">
                  <p className="text-xs font-bold text-blue-400 pb-2 border-b border-slate-900 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse animate-duration-1000" />
                      翻译合成视频成品展示
                    </span>
                  </p>

                  <div className="mt-2 flex-1 flex flex-col justify-between">
                    {translationTask.playUrl ? (
                      <div className="aspect-video bg-black rounded-xl overflow-hidden border border-slate-800 shadow-xl">
                        <video 
                          key={translationTask.playUrl}
                          src={translationTask.playUrl} 
                          controls 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-slate-950 rounded-xl flex flex-col items-center justify-center text-center p-4 text-xs text-slate-500 border border-dashed border-slate-900 mt-2">
                        <Tv className="w-8 h-8 text-slate-700 mb-2" />
                        <p className="font-bold text-slate-300">多语声画极速对齐完成！</p>
                        <p className="text-[10px] text-slate-550 mt-1 max-w-[280px] leading-relaxed">
                          目标输出资产已在云端转存完毕。
                        </p>
                        <p className="text-[10.5px] text-slate-500 mt-2 max-w-[320px]">
                          <strong>注：</strong>若当前暂无视频播放，是因为您的点播空间暂未绑定公网合法的加速 CDN 域名（导致 <code>GetPlayInfo</code> 回传播放流仅限内网授权）。您可以根据导出的 Vid 登录控制台预览或存盘。
                        </p>
                      </div>
                    )}
                    
                    <div className="bg-slate-900 p-2.5 border border-slate-850/60 rounded-xl text-[10.5px] mt-3 font-mono text-slate-400 select-all overflow-x-auto text-center font-bold">
                      输出 VID: {translationTask.outputVid}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
