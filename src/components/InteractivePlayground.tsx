import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Play, 
  Languages, 
  RotateCcw, 
  CheckCircle, 
  ArrowRight, 
  Copy, 
  Check, 
  Flame, 
  FileText, 
  Compass, 
  ChevronRight,
  TrendingUp,
  Sliders,
  Cpu
} from 'lucide-react';
import { SampleProduct } from '../types';

export default function InteractivePlayground() {
  const [activeMode, setActiveMode] = useState<'translate' | 'recreate' | 'images'>('translate');
  const [selectedProductId, setSelectedProductId] = useState<string>('juicer');
  const [targetLang, setTargetLang] = useState<string>('en');
  const [editedScript, setEditedScript] = useState<string>('');
  const [isSynthesizing, setIsSynthesizing] = useState<boolean>(false);
  const [synthesisProgress, setSynthesisProgress] = useState<number>(0);
  const [synthesisStep, setSynthesisStep] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Sample Product DB
  const products: SampleProduct[] = [
    {
      id: 'juicer',
      name: '智能便携榨汁机 (Smart Juicer)',
      originalScript: '大家好！今天给大家推荐我们这款无线便携智能榨汁机。采用钛合金双叶刀片，24000转高速电机。不管是上班通勤还是户外野营，只需30秒，鲜果汁即刻完成。快点击下方链接购买吧！',
      suggestedScripts: {
        en: 'Hey guys! Today I am super excited to show you this wireless portable smart juicer. It features double-layered titanium blades and a 24,000 RPM high-speed motor. Whether you are commuting to work or camping outdoors, you get fresh juice in just 30 seconds. Click the link below to get yours!',
        ja: '皆さん、こんにちは！本日はこの持ち運び可能なスマートジューサーをご紹介します。チタン合金製のダブルブレードと24,000回転の高速モーターを搭載。通勤でもアウトドアでも、わずか30秒で新鮮な果汁が完成します。下のリンクからぜひご購入ください！',
        es: '¡Hola a todos! Hoy os presento este exprimidor portátil inteligente. Cuenta con cuchillas dobles de aleación de titanio y un motor de 24,000 RPM. Ya sea para ir al trabajo o de acampada, tendrás zumo fresco en solo 30 segundos. ¡Haz clic en el enlace de abajo!',
        ko: '안녕하세요 여러분! 오늘 소개해드릴 상품은 무선 휴대용 스마트 믹서기입니다. 티타늄 합금 듀얼 블레이드와 24,000RPM 초고속 모터가 탑재되어 출근길이나 야외 캠핑 중에도 단 30초 만에 신선한 생과일 주스를 즐기실 수 있습니다. 지금 아래 링크에서 구매하세요!'
      }
    },
    {
      id: 'thermos',
      name: '极简北欧不锈钢保温杯 (Thermos)',
      originalScript: '这款保温杯采用食品级316医用不锈钢，24小时长效控温。无论是冰水还是热茶，随时随地保持最佳口感。磨砂杯身，极简北欧风，出海首选爆款！',
      suggestedScripts: {
        en: 'This vacuum-insulated flask is crafted from food-grade 316 medical stainless steel, keeping your drinks cold or hot for 24 hours. Enjoy the perfect sip anytime, anywhere. Minimalist Nordic matte design, a global top-seller!',
        ja: 'この真空断熱マグは、医療用の食品グレード316ステンレススチールを採用し、24時間抜群の保温保冷力を維持。どこでも完璧な温度で楽しめます。極シンプルな北欧デザインで、今世界中で大ヒット中！',
        es: 'Esta botella térmica al vacío está fabricada con acero inoxidable médico 316 de grado alimenticio, que conserva tus bebidas frías o calientes durante 24 horas. Disfruta de un sorbo perfecto en cualquier momento y lugar. Con un diseño mate minimalista nórdico, ¡es un éxito de ventas mundial!',
        ko: '본 보온병은 식품 등급 316 의료용 스테인리스 스틸로 제작되어 24시간 동안 강력한 보온 및 보냉을 제공합니다. 언제 어디서나 음료 본연의 맛을 지켜줍니다. 매트한 질감의 미니멀 북유럽 디자인으로 글로벌 대세 아이템!'
      }
    },
    {
      id: 'massage',
      name: '专业级智能静音筋膜枪 (Massage Gun)',
      originalScript: '运动完肌肉酸痛？试试这款超轻便静音筋膜枪。无刷电机深度按摩，5档智能力度调节，静音低噪不打扰。告别疲劳，随时随地开启专属私教理疗！',
      suggestedScripts: {
        en: 'Sore muscles after workouts? Try this ultra-lightweight, whisper-quiet massage gun. Brushless motor for deep muscle relief, 5 smart intensity levels, and zero noise. Say goodbye to fatigue and start your personal recovery therapy!',
        ja: '筋トレ後の筋肉痛でお悩みですか？この超軽量・極静音のマッサージガンをお試しください。ブラシレスモーターが深層筋肉をほぐし、5段階の強さ調整が可能。疲れを吹き飛ばし、いつでも極上のリフレッシュを！',
        es: '¿Dolor muscular después de entrenar? Prueba esta pistola de masaje ultra ligera y súper silenciosa. Cuenta con un motor sin escobillas para un alivio muscular profundo, 5 niveles de intensidad inteligentes y cero ruidos. ¡Dile adiós a la fatiga!',
        ko: '운동 후 근육이 뻐근하신가요? 초경량 저소음 미니 진동 마사지건을 만나보세요. 브러시리스 모터가 탑재되어 깊은 곳까지 뭉친 근육을 완화하며, 5단계 스마트 강도 조절과 초저소음 기술로 편리함을 극대화했습니다!'
      }
    },
    {
      id: 'headphones',
      name: '主动降噪无线蓝牙耳机 (ANC Headphones)',
      originalScript: '世界太吵？一键开启主动降噪！这款无线蓝牙降噪耳机搭载双馈主动降噪芯片，深度屏蔽35分贝环境噪音。HIFI级震撼音质，40小时持久续航，让您沉浸在纯净的音乐海洋。',
      suggestedScripts: {
        en: 'Too noisy? Block out the world with one click! These wireless ANC headphones feature hybrid active noise cancellation up to 35dB. Immerse yourself in premium HIFI sound with 40 hours of long battery life.',
        ja: '周囲の雑音が気になりますか？ワンタップで静寂を！このワイヤレスANCヘッドホンは最大35dBのハイブリッドノイズキャンセリング。高音質のHi-Fiサウンドと40時間持続バッテリーで、純粋な音楽に没頭できます。',
        es: '¿Mundo ruidoso? ¡Bloquea el ruido con un solo clic! Estos auriculares inalámbricos ANC cuentan con una cancelación activa de ruido de hasta 35dB. Sumérgete en su sonido de alta fidelidad HIFI con 40 horas de autonomía batería.',
        ko: '세상이 너무 시끄러울 때, 원클릭으로 소음을 차단하세요! 이 무선 ANC 헤드폰은 최대 35dB의 하이브리드 액티브 노이즈 캔슬링을 제공합니다. Hi-Fi 사운드의 풍부한 음질과 40시간 초장수 배터리로 온전히 음악에만 몰입해보세요.'
      }
    }
  ];

  const currentProduct = products.find(p => p.id === selectedProductId) || products[0];

  // Initialize scripts
  useEffect(() => {
    if (activeMode === 'translate') {
      setEditedScript(currentProduct.suggestedScripts[targetLang] || '');
    } else if (activeMode === 'recreate') {
      // Recreate mode blends pain point hook
      setEditedScript(`[HOOK: Hook target audience in 3s] ${currentProduct.suggestedScripts[targetLang].substring(0, 80)}... \n[SOLUTION] This is the ultimate ${currentProduct.name} crafted for your lifestyle! \n[CTA] Tap below to grab a 30% discount today!`);
    } else {
      // Images mode
      setEditedScript(`白底图抠图 ➜ 融合北美生活风场景 [INS高质感渲染] ➜ 叠加文字: "Premium Heat Retention" & "316 Medical Grade" ➜ 转换成 15秒卡点视频`);
    }
    setIsCompleted(false);
  }, [selectedProductId, targetLang, activeMode]);

  // Handle Synthesis Progress Simulation
  const handleStartSynthesis = () => {
    if (isSynthesizing) return;
    setIsSynthesizing(true);
    setSynthesisProgress(0);
    setIsCompleted(false);

    const steps = activeMode === 'images' ? [
      { p: 15, s: '正在剔除背景，智能边缘平滑分割 (Smart Matting)...' },
      { p: 40, s: '根据目标市场 (北美) 检索匹配 AI 实景影棚光影，融合温馨色调...' },
      { p: 70, s: '自动编排排版，添加高转化英文文案框与本土质感修饰...' },
      { p: 90, s: '火山智能流拼接渲染，匹配短视频动感卡点切片节奏...' },
      { p: 100, s: '渲染合成完毕，成功推送至火山云 VOD 服务托管空间！' }
    ] : [
      { p: 15, s: '正在进行多音轨智能分离，过滤背景噪音 (AideoVocalIsolation)...' },
      { p: 35, s: '正在使用 LLM 进行地道语言意译与拍点长度计算，防穿帮...' },
      { p: 60, s: '正在智能提取原声音色特征，克隆并对齐原版情绪起伏 (AideoCloner)...' },
      { p: 85, s: '启动 AideoLipSync 神经网络，进行嘴部肌肉逐帧变形对齐...' },
      { p: 100, s: '音视频唇形零卡顿合并，火山空间托管链接分发就绪！' }
    ];

    let currentStepIdx = 0;
    const interval = setInterval(() => {
      setSynthesisProgress(prev => {
        const next = prev + 4;
        
        // Update steps based on percentage
        const currentStep = steps.find((s, idx) => next >= (idx === 0 ? 0 : steps[idx-1].p) && next <= s.p);
        if (currentStep) {
          setSynthesisStep(currentStep.s);
        }

        if (next >= 100) {
          clearInterval(interval);
          setIsSynthesizing(false);
          setIsCompleted(true);
          return 100;
        }
        return next;
      });
    }, 150);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(editedScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLanguageLabel = (code: string) => {
    const mapping: Record<string, string> = { en: '美式英语 EN-US', ja: '地道日语 JA-JP', es: '西班牙语 ES-ES', ko: '纯正韩语 KO-KR' };
    return mapping[code] || code;
  };

  // Localized Marketing Insights
  const getMarketingInsights = (): { region: string; hook: string } => {
    if (targetLang === 'en') {
      return { region: '北美 / 欧洲', hook: '前3秒必须高频抛出痛点对比，减少客套话，排版追求简约、生活质感。' };
    } else if (targetLang === 'ja') {
      return { region: '日本地区', hook: '偏好温柔谦逊语调，详尽展示不锈钢或工艺细节，避免夸张的广告词。' };
    } else if (targetLang === 'es') {
      return { region: '拉美 / 西班牙', hook: '情绪起伏要强，多展示家庭使用、多场景便利，音乐背景节奏感要饱满。' };
    } else {
      return { region: '韩国地区', hook: '快节奏，视觉需要高亮度，突出快消特色或精致感，前2秒要放大折扣标识。' };
    }
  };

  return (
    <div className="space-y-12">
      {/* Sub-tab Selection */}
      <div className="flex flex-col sm:flex-row justify-center border-b border-slate-900 max-w-2xl mx-auto gap-2">
        <button 
          onClick={() => { if (!isSynthesizing) setActiveMode('translate'); }}
          className={`flex-1 pb-3 text-xs sm:text-sm font-bold transition-all relative cursor-pointer flex items-center justify-center gap-2 ${
            activeMode === 'translate' ? 'text-indigo-400 font-bold' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <Languages className="w-4 h-4" />
          <span>多语言高保真口译</span>
          {activeMode === 'translate' && (
            <motion.div layoutId="modeUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500" />
          )}
        </button>
        <button 
          onClick={() => { if (!isSynthesizing) setActiveMode('recreate'); }}
          className={`flex-1 pb-3 text-xs sm:text-sm font-bold transition-all relative cursor-pointer flex items-center justify-center gap-2 ${
            activeMode === 'recreate' ? 'text-indigo-400 font-bold' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>黄金复刻爆款生成</span>
          {activeMode === 'recreate' && (
            <motion.div layoutId="modeUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500" />
          )}
        </button>
        <button 
          onClick={() => { if (!isSynthesizing) setActiveMode('images'); }}
          className={`flex-1 pb-3 text-xs sm:text-sm font-bold transition-all relative cursor-pointer flex items-center justify-center gap-2 ${
            activeMode === 'images' ? 'text-indigo-400 font-bold' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>静图出海素材生成</span>
          {activeMode === 'images' && (
            <motion.div layoutId="modeUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500" />
          )}
        </button>
      </div>

      {/* Main Sandbox Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-stretch">
        
        {/* Left Interactive Control Board */}
        <div className="lg:col-span-7 bg-slate-900/20 border border-slate-900 rounded-3xl p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            {/* Stage Indicator */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">参数调节台</span>
              <span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded font-mono">
                GPU Core Ready
              </span>
            </div>

            {/* 1. Product Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300">选择出海商品模版：</label>
              <div className="grid grid-cols-2 gap-2">
                {products.map(p => (
                  <button
                    key={p.id}
                    disabled={isSynthesizing}
                    onClick={() => setSelectedProductId(p.id)}
                    className={`p-3 rounded-xl border text-xs font-medium text-left transition-all ${
                      selectedProductId === p.id 
                        ? 'bg-indigo-500/10 border-indigo-500/60 text-slate-100' 
                        : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Target language if applicable */}
            {activeMode !== 'images' && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">目标出海语种与市场：</label>
                <div className="grid grid-cols-4 gap-2">
                  {['en', 'ja', 'es', 'ko'].map(lang => (
                    <button
                      key={lang}
                      disabled={isSynthesizing}
                      onClick={() => setTargetLang(lang)}
                      className={`py-2 px-1.5 rounded-lg border text-xs text-center font-medium transition-all uppercase ${
                        targetLang === lang 
                          ? 'bg-sky-500/10 border-sky-500/50 text-sky-400' 
                          : 'bg-slate-950 border-slate-900 text-slate-500 hover:border-slate-800'
                      }`}
                    >
                      {lang === 'en' && '🇺🇸 美语'}
                      {lang === 'ja' && '🇯🇵 日语'}
                      {lang === 'es' && '🇪🇸 西语'}
                      {lang === 'ko' && '🇰🇷 韩语'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Script Editor Card */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-300">
                  {activeMode === 'images' ? '创意排版拼接逻辑指令' : '大模型翻译 / 生成的本地脚本 (可编辑)'}
                </label>
                <button 
                  onClick={copyToClipboard}
                  className="text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1 text-[10px]"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? '已复制' : '复制脚本'}</span>
                </button>
              </div>
              <textarea
                value={editedScript}
                disabled={isSynthesizing}
                onChange={(e) => setEditedScript(e.target.value)}
                rows={4}
                className="w-full bg-slate-950 border border-slate-900 rounded-xl p-4 text-xs font-mono text-slate-300 leading-relaxed focus:outline-none focus:border-indigo-500/50 resize-none"
              />
            </div>
          </div>

          {/* Trigger Button */}
          <div className="pt-2">
            <button
              onClick={handleStartSynthesis}
              disabled={isSynthesizing}
              className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all ${
                isSynthesizing 
                  ? 'bg-indigo-900/30 border border-indigo-500/20 text-indigo-400 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/10 hover:shadow-indigo-500/20'
              }`}
            >
              <Cpu className={`w-4 h-4 ${isSynthesizing ? 'animate-spin' : ''}`} />
              <span>{isSynthesizing ? `正在智能加速合成中 (${synthesisProgress}%)` : '⚡ 开始 AI 智能体一键合成'}</span>
            </button>
          </div>
        </div>

        {/* Right Sandbox Visualization Output Area */}
        <div className="lg:col-span-5 bg-slate-950 border border-slate-900 rounded-3xl p-6 flex flex-col justify-between items-stretch">
          
          <AnimatePresence mode="wait">
            {/* State A: Not started */}
            {!isSynthesizing && !isCompleted && (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-slate-900 border border-dashed border-slate-800 flex items-center justify-center text-slate-600">
                  <Play className="w-6 h-6 animate-pulse" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold text-slate-300">等待智能合成触发</h4>
                  <p className="text-[11px] text-slate-500 max-w-xs leading-normal">
                    请在左侧调整您的出海产品模版和目标语种，点击下方合成按钮，看 Aideo Studio 如何一键为您合成高精带货素材。
                  </p>
                </div>
              </motion.div>
            )}

            {/* State B: Synthesizing Loader */}
            {isSynthesizing && (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center p-6 space-y-6 text-center"
              >
                <div className="relative flex items-center justify-center">
                  {/* Concentric spinning rings */}
                  <div className="w-24 h-24 rounded-full border-4 border-slate-900 border-t-indigo-500 animate-spin" />
                  <div className="w-16 h-16 rounded-full border-4 border-slate-900 border-b-sky-400 animate-spin absolute" style={{ animationDirection: 'reverse' }} />
                  <span className="absolute font-mono font-bold text-sm text-slate-200">{synthesisProgress}%</span>
                </div>
                
                <div className="space-y-2 max-w-xs">
                  <p className="text-xs font-bold text-slate-300 animate-pulse">
                    正在执行 Aideo 创意链路...
                  </p>
                  <p className="text-[10.5px] text-slate-500 font-mono leading-relaxed bg-slate-900/50 p-3 rounded-lg border border-slate-900">
                    {synthesisStep}
                  </p>
                </div>
              </motion.div>
            )}

            {/* State C: Rendering Finished */}
            {isCompleted && (
              <motion.div 
                key="completed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-5 h-full flex flex-col justify-between"
              >
                {/* Header Output details */}
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4" />
                      素材高保真渲染完成！
                    </span>
                    <span className="text-[10px] text-slate-500 bg-slate-900 px-2 py-0.5 rounded font-mono">渲染完成</span>
                  </div>

                  {activeMode === 'images' ? (
                    /* Image preview mode */
                    <div className="relative rounded-2xl overflow-hidden border border-slate-800 aspect-video bg-slate-900 flex items-center justify-center">
                      <img 
                        src="/src/assets/images/ad_creative_mockup_1782454442522.jpg" 
                        alt="AI 创意海报" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4 text-left">
                        <span className="text-[10px] bg-sky-500 text-slate-950 font-bold px-2 py-0.5 rounded self-start mb-1.5 uppercase tracking-wider font-mono">INS / TIKTOK Native AD</span>
                        <p className="text-xs font-bold text-white">{currentProduct.name} - 北美高转化主图</p>
                        <p className="text-[9px] text-slate-400 mt-0.5">3D智能光影交融，适配北美本土美学</p>
                      </div>
                    </div>
                  ) : (
                    /* Video preview simulation */
                    <div className="relative rounded-2xl overflow-hidden border border-slate-850 aspect-video bg-slate-900 flex flex-col items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 via-transparent to-sky-900/20 pointer-events-none" />
                      <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20">
                        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono mt-3">AideoLipSync_Rendered_Output.mp4</span>
                      <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur border border-slate-800/50 p-2 rounded-lg flex justify-between items-center">
                        <p className="text-[10px] text-slate-300 font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          已对齐 {getLanguageLabel(targetLang)}
                        </p>
                        <span className="text-[9px] text-slate-500">15.0s 时长匹配</span>
                      </div>
                    </div>
                  )}

                  {/* Tech specs */}
                  <div className="bg-slate-900/50 rounded-xl p-3 border border-slate-900 space-y-2">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">神经网络生成参数：</p>
                    <div className="grid grid-cols-1 gap-2 text-[10.5px]">
                      <div className="flex justify-between border-b border-slate-950 pb-1 col-span-2">
                        <span className="text-slate-500">火山CDN分发地址:</span>
                        <span className="font-mono text-indigo-400 truncate max-w-[150px]">volc-vod://aideo/output_f0012e4.mp4</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regional marketing insight tips */}
                <div className="bg-sky-950/20 border border-sky-500/10 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{getMarketingInsights().region} 市场投放建议：</span>
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    {getMarketingInsights().hook}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Actions when completed */}
          {isCompleted && (
            <div className="flex gap-2 pt-4 border-t border-slate-900 mt-4">
              <button 
                onClick={() => { setIsCompleted(false); setIsSynthesizing(false); }}
                className="flex-1 py-2 rounded-lg border border-slate-800 hover:bg-slate-900 text-xs text-slate-400 font-semibold cursor-pointer transition-colors flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>重新配置</span>
              </button>
              <button 
                onClick={() => alert('已成功为您生成临时火山 VOD 下载地址！(模拟下载：AideoLipSync_Rendered_Output.mp4)')}
                className="flex-1 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs text-white font-semibold cursor-pointer transition-colors flex items-center justify-center gap-1"
              >
                <span>立即下载素材 ➜</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
