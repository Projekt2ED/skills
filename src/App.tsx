import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Languages, 
  Cpu, 
  Target, 
  Users, 
  ArrowRight, 
  Video, 
  Clock, 
  Zap, 
  Compass, 
  Repeat, 
  Heart, 
  MessageSquareCode,
  Sliders
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Modular Sub-components
import IPVideoView from './components/IPVideoView';
import SalesAssistantView from './components/SalesAssistantView';
import ShortDramaView from './components/ShortDramaView';
import UnifiedDeliveryProcess from './components/UnifiedDeliveryProcess';
import HomeView from './components/HomeView';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'ip-video' | 'sales-assistant' | 'short-drama'>('home');

  return (
    <div className="min-h-screen bg-[#000000] text-[#f5f5f7] font-sans tracking-wide overflow-x-hidden antialiased">
      
      {/* Top Header Grid/Logo Line */}
      <header className="border-b border-neutral-900 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => setActiveView('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-teal-400 p-[1px] flex items-center justify-center shadow-lg shadow-indigo-500/5 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-black rounded-[11px] flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-white tracking-tight">羲梦工场</span>
              <span className="text-[9px] text-neutral-500 font-medium">AI 数字员工技能包 v2.0</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button 
              onClick={() => setActiveView('home')}
              className={`text-xs font-semibold cursor-pointer pb-1 transition-all ${
                activeView === 'home' 
                  ? 'text-indigo-400 border-b-2 border-indigo-400' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              平台大厅
            </button>
            <button 
              onClick={() => setActiveView('ip-video')}
              className={`text-xs font-semibold cursor-pointer pb-1 transition-all ${
                activeView === 'ip-video' 
                  ? 'text-indigo-400 border-b-2 border-indigo-400' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              外贸视频助理
            </button>
            <button 
              onClick={() => setActiveView('sales-assistant')}
              className={`text-xs font-semibold cursor-pointer pb-1 transition-all ${
                activeView === 'sales-assistant' 
                  ? 'text-indigo-400 border-b-2 border-indigo-400' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              销售转化助理
            </button>
            <button 
              onClick={() => setActiveView('short-drama')}
              className={`text-xs font-semibold cursor-pointer pb-1 transition-all ${
                activeView === 'short-drama' 
                  ? 'text-indigo-400 border-b-2 border-indigo-400' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              短剧编导专家
            </button>
            
            <span className="text-[9px] font-bold text-indigo-400 bg-indigo-950/20 border border-indigo-900/40 rounded-full px-2.5 py-0.5 hidden lg:inline-flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              AI 智能体集群已就绪
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pb-16">
        <AnimatePresence mode="wait">
          
          {/* ==================== VIEW 0: AI 数字员工平台大厅 ==================== */}
          {activeView === 'home' && (
            <motion.div
              key="platform-home"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <HomeView onSelectEmployee={(empId) => setActiveView(empId)} />
            </motion.div>
          )}

          {/* ==================== VIEW 1: 外贸老板 IP 视频 ==================== */}
          {activeView === 'ip-video' && (
            <motion.div
              key="ip-video"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <IPVideoView onSelectEmployee={(empId) => setActiveView(empId)} />
              <UnifiedDeliveryProcess />
            </motion.div>
          )}

          {/* ==================== VIEW 2: 销售辅助数字员工 ==================== */}
          {activeView === 'sales-assistant' && (
            <motion.div
              key="sales-assistant"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <SalesAssistantView />
              <UnifiedDeliveryProcess />
            </motion.div>
          )}

          {/* ==================== VIEW 3: AI 短剧数字员工 / 平台 ==================== */}
          {activeView === 'short-drama' && (
            <motion.div
              key="short-drama"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <ShortDramaView />
              <UnifiedDeliveryProcess />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 bg-black py-10 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-xs font-bold text-neutral-300">羲梦科技 — AI 数字员工场景建设平台</p>
            <p className="text-[11px] text-neutral-500 font-normal leading-normal">
              羲梦工场提供 AI 数字员工技能包全家桶，覆盖出海视频、销售转化、短剧策划等核心场景。
            </p>
          </div>
          <div className="text-[10px] text-neutral-600 font-mono">
            © {new Date().getFullYear()} 羲梦科技. 跨境出海，一个工场就够了。
          </div>
        </div>
      </footer>

    </div>
  );
}
