import React, { useRef, useState } from 'react';
import { 
  Plus, 
  Video, 
  Loader2, 
  Tv, 
  Film, 
  FolderOpen,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { UploadedVideo } from '../types';

interface AssetSidebarProps {
  uploadedVideos: UploadedVideo[];
  selectedVid: string;
  setSelectedVid: (vid: string) => void;
  agentVid: string;
  setAgentVid: (vid: string) => void;
  uploading: boolean;
  uploadProgress: number;
  onUploadFile: (file: File) => void;
  activeTab: 'home' | 'translate' | 'agent';
  config?: {
    hasKeys: boolean;
    hasSpace: boolean;
    spaceName: string;
  } | null;
}

export default function AssetSidebar({
  uploadedVideos,
  selectedVid,
  setSelectedVid,
  agentVid,
  setAgentVid,
  uploading,
  uploadProgress,
  onUploadFile,
  activeTab,
  config
}: AssetSidebarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedLocalFile, setSelectedLocalFile] = useState<File | null>(null);
  const [localObjectUrl, setLocalObjectUrl] = useState<string | null>(null);

  const handleFileSelected = (file: File) => {
    setSelectedLocalFile(file);
    if (localObjectUrl) {
      URL.revokeObjectURL(localObjectUrl);
    }
    setLocalObjectUrl(URL.createObjectURL(file));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelected(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelected(e.dataTransfer.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Decide active highlighting according to target workspace
  const isSelected = (vid: string) => {
    if (activeTab === 'agent') {
      return agentVid === vid;
    }
    return selectedVid === vid;
  };

  const handleSelectVideo = (vid: string) => {
    if (activeTab === 'agent') {
      setAgentVid(vid);
    } else {
      setSelectedVid(vid);
    }
  };

  if (activeTab === 'home') {
    return null; // Don't show sidebar in landing page component to allow full-width elegance
  }

  return (
    <div className="w-full lg:w-72 border-b lg:border-b-0 lg:border-r border-slate-900 bg-slate-950 flex flex-col shrink-0">
      
      {/* Header title */}
      <div className="p-4.5 border-b border-slate-900/60 flex items-center justify-between">
        <span className="text-xs font-bold text-slate-300 tracking-wider flex items-center gap-1.5 uppercase">
          <FolderOpen className="w-4 h-4 text-blue-500" />
          工作空间素材库
        </span>
        <span className="text-[10px] bg-slate-905 text-slate-500 px-2 py-0.5 rounded-full font-mono font-bold">
          {uploadedVideos.length} 个项目
        </span>
      </div>

      {/* Upload Zone & Pre-upload Previewer */}
      <div className="p-4 border-b border-slate-900/40">
        {selectedLocalFile && localObjectUrl ? (
          <div className="border border-blue-500/30 rounded-xl p-3 bg-blue-950/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] bg-blue-500/20 text-blue-300 font-bold p-0.5 px-2 rounded-full uppercase tracking-wider">
                待上传预检
              </span>
              <button 
                onClick={() => {
                  setSelectedLocalFile(null);
                  if (localObjectUrl) URL.revokeObjectURL(localObjectUrl);
                  setLocalObjectUrl(null);
                }}
                className="text-[10px] text-slate-500 hover:text-slate-350 cursor-pointer font-bold transition-colors"
                title="放弃文件"
              >
                取消
              </button>
            </div>
            
            <div className="aspect-video bg-black rounded-lg overflow-hidden border border-slate-800 relative shadow-inner">
              <video 
                src={localObjectUrl}
                controls
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="space-y-1">
              <p className="text-[11px] font-bold text-slate-200 truncate">{selectedLocalFile.name}</p>
              <p className="text-[9px] font-mono text-slate-500 flex justify-between">
                <span>大小: {(selectedLocalFile.size / 1024 / 1024).toFixed(2)} MB</span>
                <span>类型: {selectedLocalFile?.type?.split('/')[1]?.toUpperCase() || 'VIDEO'}</span>
              </p>
            </div>
            
            <button
              onClick={() => {
                onUploadFile(selectedLocalFile);
                setSelectedLocalFile(null);
                if (localObjectUrl) URL.revokeObjectURL(localObjectUrl);
                setLocalObjectUrl(null);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 py-1.5 rounded-lg text-[11px] font-bold text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-blue-600/10"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>注册并安全上传</span>
            </button>
          </div>
        ) : (
          <div
            onClick={triggerFileInput}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border border-dashed rounded-xl p-4 text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[110px] select-none ${
              isDragOver 
                ? 'border-blue-500 bg-blue-500/5' 
                : uploading 
                  ? 'border-slate-850 bg-slate-900/10' 
                  : 'border-slate-800 hover:border-slate-700 bg-slate-900/10'
            }`}
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="video/*" 
              className="hidden" 
            />

            {uploading ? (
              <div className="space-y-2.5 w-full">
                <Loader2 className="w-6 h-6 text-blue-500 animate-spin mx-auto" />
                <div className="space-y-1">
                  <p className="text-[11px] font-bold text-slate-300">正在安全转贴音视轨...</p>
                  <div className="h-1 bg-slate-950 rounded-full overflow-hidden w-4/5 mx-auto">
                    <div 
                      className="bg-blue-500 h-full transition-all duration-300" 
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                  <p className="text-[9px] font-mono text-slate-505">{uploadProgress}% 已就位</p>
                </div>
              </div>
            ) : (
              <div className="space-y-1">
                <Plus className="w-5 h-5 text-slate-500 mx-auto" />
                <p className="text-xs font-bold text-slate-300">添加本地视频素材</p>
                <p className="text-[10px] text-slate-500 max-w-[190px] mx-auto leading-relaxed">
                  拖拽至此或点击目录浏览 <br />
                  支持 MP4、WebM、MOV
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Configuration check warning/guide card */}
      {config && (!config.hasKeys || !config.hasSpace) && (
        <div className="mx-4 mb-2 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl space-y-2">
          <div className="flex items-start gap-1.5 text-amber-400">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <p className="text-[11px] font-bold">火山引擎密匙配置缺失</p>
              <p className="text-[10px] text-slate-400 leading-normal">
                未检测到火山引擎 API/点播权限。这会导致您在上传视频或使用翻译时请求受阻失败。
              </p>
            </div>
          </div>
          <div className="text-[9px] bg-slate-900/60 p-2 rounded-lg border border-slate-850 space-y-1 text-slate-400 font-mono">
            <div className="flex justify-between">
              <span>VOLC_ACCESS_KEY_ID:</span>
              <span className={config.hasKeys ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>
                {config.hasKeys ? "● 已配置" : "○ 未检测到"}
              </span>
            </div>
            <div className="flex justify-between">
              <span>VOLC_SECRET_ACCESS_KEY:</span>
              <span className={config.hasKeys ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>
                {config.hasKeys ? "● 已配置" : "○ 未检测到"}
              </span>
            </div>
            <div className="flex justify-between">
              <span>VOD_SPACE_NAME:</span>
              <span className={config.hasSpace ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>
                {config.hasSpace ? "● 已配置" : "○ 未检测到"}
              </span>
            </div>
          </div>
          <p className="text-[9px] text-slate-400 leading-normal">
            💡 <strong>如何配置：</strong>请在项目根目录下手动创建 <code className="text-slate-200">.env</code> 配置文件，或使用 AI Studio 页面“Settings - Secrets”面板（左侧齿轮图标）添加上述三项变量，配置后<strong>必须重置开发服务（按钮在右上角或指示我重启）</strong>方能生效。
          </p>
        </div>
      )}

      {/* Videos List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
        {uploadedVideos.length === 0 ? (
          <div className="text-center py-10 select-none">
            <Film className="w-8 h-8 text-slate-800 mx-auto mb-2" />
            <p className="text-xs text-slate-500">资产库空空如也</p>
            <p className="text-[10px] text-slate-600 mt-1 max-w-[180px] mx-auto leading-relaxed">
              尚未导入任何拍摄成果。请点击上方上传按钮装载测试视频片。
            </p>
          </div>
        ) : (
          uploadedVideos.map((video) => {
            const active = isSelected(video.vid);
            return (
              <button
                key={video.id}
                onClick={() => handleSelectVideo(video.vid)}
                className={`w-full text-left p-3 rounded-xl border transition-all relative flex gap-3 ${
                  active 
                    ? 'border-blue-505/50 bg-blue-600/5 text-blue-400' 
                    : 'border-slate-900 bg-slate-900/10 hover:bg-slate-900/20 text-slate-300'
                }`}
              >
                {/* Thumb icon mock preview */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${
                  active ? 'bg-blue-600/10 border-blue-500/20 text-blue-400' : 'bg-slate-950 border-slate-900 text-slate-500'
                }`}>
                  <Video className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <p className="text-xs font-bold truncate pr-3">{video.name}</p>
                  
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
                    <span>{video.sizeStr}</span>
                    <span>•</span>
                    <span className="truncate max-w-[90px]">{video.vid.substring(0, 12)}</span>
                  </div>
                </div>

                {/* indicator dot */}
                {active && (
                  <div className="absolute right-3 top-3 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
                )}
              </button>
            );
          })
        )}
      </div>

      {/* Workspaces storage safeguard footer */}
      <div className="p-4 border-t border-slate-900 bg-slate-950/40 select-none flex items-start gap-1.5 text-[10px] text-slate-600 leading-normal">
        <AlertCircle className="w-3.5 h-3.5 shrink-0 text-slate-700" />
        <span>私有空间受高级策略加密保护，所有流媒体传输不向外界暴露。</span>
      </div>

    </div>
  );
}
