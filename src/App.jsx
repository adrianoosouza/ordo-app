import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, DollarSign, Users, Utensils, Dumbbell, BookOpen, 
  Calendar as CalendarIcon, Smile, User, Settings, Menu, X, 
  CheckCircle, Plus, Clock, Zap, Cloud, ChevronRight, ArrowUpRight, 
  ArrowDownRight, MoreHorizontal, Heart, Flame, Droplet, 
  MapPin, Phone, Mail, Award, TrendingUp, Play, CheckSquare, 
  Coffee, Lock, Eye, EyeOff, LogOut, ArrowRight, Trash2, Edit2, 
  Save, Camera, Share2, MessageSquare, Brain, Target, Sparkles,
  Calendar, Layers, Moon, Apple, Pizza, Carrot, Pause, Square, 
  Battery, BatteryCharging, PenTool, Medal, Crown, Shield,
  Bell, Volume2, Smartphone, Globe, HelpCircle, Info, ChevronLeft, CalendarDays
} from 'lucide-react';

// --- Global Styles ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #0f172a; color: #f8fafc; margin: 0; padding: 0; }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    .mobile-screen { background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); }
    @media (min-width: 768px) {
      .mobile-screen { box-shadow: 0 0 0 8px #1e293b, 0 0 0 10px #334155, 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
    }
    .glass-panel { background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
    .glass-card { background: linear-gradient(145deg, rgba(51, 65, 85, 0.4) 0%, rgba(30, 41, 59, 0.4) 100%); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.05); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
    .glass-card:active { transform: scale(0.98); }
    .glass-input { background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.1); color: white; transition: all 0.3s ease; }
    .glass-input:focus { border-color: #10b981; background: rgba(15, 23, 42, 0.8); box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1); outline: none; }
    .nav-item { position: relative; transition: all 0.2s ease; }
    .nav-item::before { content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%); height: 0%; width: 3px; background: #10b981; border-radius: 0 4px 4px 0; transition: height 0.2s ease; }
    .nav-item.active { background: rgba(16, 185, 129, 0.1); color: #10b981; }
    .nav-item.active::before { height: 70%; }
    .animate-enter { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
    @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
    .animate-float { animation: float 4s ease-in-out infinite; }
    .animate-menu-item { animation: menuSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    @keyframes menuSlideIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
    .shimmer { position: relative; overflow: hidden; }
    .shimmer::after { content: ''; position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%); transform: skewX(-20deg) translateX(-150%); animation: shimmer 3s infinite; }
    @keyframes shimmer { 100% { transform: skewX(-20deg) translateX(150%); } }
    @keyframes drawPath { 0% { stroke-dasharray: 100; stroke-dashoffset: 100; } 100% { stroke-dasharray: 100; stroke-dashoffset: 0; } }
    @keyframes scalePulse { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.1); opacity: 1; } }
    @keyframes rotateSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    .animate-draw { animation: drawPath 2s ease-out forwards; }
    .animate-pulse-slow { animation: scalePulse 3s infinite ease-in-out; }
    .animate-spin-slow { animation: rotateSlow 10s linear infinite; }
    /* Custom Range Slider */
    input[type=range] { -webkit-appearance: none; width: 100%; background: transparent; }
    input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; height: 20px; width: 20px; border-radius: 50%; background: #ffffff; cursor: pointer; margin-top: -8px; box-shadow: 0 0 10px rgba(0,0,0,0.3); }
    input[type=range]::-webkit-slider-runnable-track { width: 100%; height: 4px; cursor: pointer; background: rgba(255,255,255,0.1); border-radius: 2px; }
  `}</style>
);

// --- Shared Components ---
const AppContainer = ({ children }) => (
  <div className="min-h-screen w-full flex items-center justify-center p-0 md:p-4 bg-slate-900 font-sans selection:bg-emerald-500/30">
    <GlobalStyles />
    <main className="mobile-screen w-full h-[100dvh] md:h-[850px] md:max-w-[400px] md:rounded-[2.5rem] md:border-8 border-slate-800 flex flex-col relative overflow-hidden transition-all duration-300 ease-in-out shadow-2xl">
      {children}
    </main>
  </div>
);

const IconButton = ({ icon: Icon, onClick, className = "", badge }) => (
  <button onClick={onClick} className={`relative p-2 rounded-full hover:bg-white/10 transition-colors active:scale-95 ${className}`}>
    <Icon className="w-6 h-6 text-slate-300" />
    {badge && <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-[#0f172a]"></span>}
  </button>
);

const SectionHeader = ({ title, subtitle, action }) => (
  <div className="flex items-end justify-between mb-6 px-1">
    <div>
      <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-sm text-slate-400 font-medium mt-0.5">{subtitle}</p>}
    </div>
    {action}
  </div>
);

const Card = ({ children, className = "", onClick }) => (
  <div onClick={onClick} className={`glass-card rounded-2xl p-5 ${className} ${onClick ? 'cursor-pointer hover:border-emerald-500/30' : ''}`}>
    {children}
  </div>
);

const ProgressBar = ({ progress, colorClass = "bg-emerald-500", trackClass = "bg-slate-700/50" }) => (
  <div className={`h-2 w-full ${trackClass} rounded-full overflow-hidden`}>
    <div className={`h-full rounded-full ${colorClass} transition-all duration-1000 ease-out`} style={{ width: `${progress}%` }}></div>
  </div>
);

const InputField = ({ icon: Icon, type, placeholder, value, onChange, showPasswordToggle, delayClass }) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPasswordToggle ? (showPassword ? 'text' : 'password') : type;
  return (
    <div className={`relative mb-4 animate-enter ${delayClass}`}>
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-slate-500" />
      </div>
      <input
        type={inputType}
        className="glass-input w-full pl-11 pr-4 py-3.5 rounded-xl text-sm placeholder-slate-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {showPasswordToggle && (
        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center">
          {showPassword ? <EyeOff className="h-5 w-5 text-slate-500 hover:text-slate-300" /> : <Eye className="h-5 w-5 text-slate-500 hover:text-slate-300" />}
        </button>
      )}
    </div>
  );
};

const SimpleModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="absolute inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-enter">
      <div className="w-full bg-[#1e293b] border border-slate-700 rounded-2xl p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto no-scrollbar">
        <div className="flex justify-between items-center mb-4 sticky top-0 bg-[#1e293b] z-10 pb-2 border-b border-slate-700/50">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button onClick={onClose} className="p-2 bg-slate-800 rounded-full hover:bg-slate-700">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

// --- Animations ---
const AnimationOrganize = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="50" className="fill-emerald-500/10 animate-pulse-slow" />
    <rect x="35" y="35" width="50" height="50" rx="8" className="stroke-emerald-400 stroke-2 fill-emerald-900/40" />
    <path d="M45 50L50 55L65 40" className="stroke-emerald-400 stroke-2 animate-draw" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 65L50 70L65 55" className="stroke-emerald-400 stroke-2 animate-draw" style={{ animationDelay: '0.5s' }} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 80L50 85L65 70" className="stroke-emerald-400 stroke-2 animate-draw" style={{ animationDelay: '1s' }} strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="90" cy="30" r="8" className="fill-emerald-300 animate-float" style={{ animationDuration: '3s' }} />
    <circle cx="20" cy="90" r="5" className="fill-teal-300 animate-float" style={{ animationDuration: '4s' }} />
  </svg>
);

const AnimationBalance = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="50" className="fill-rose-500/10 animate-pulse-slow" />
    <path d="M60 45C55 40 45 40 40 45C35 50 35 60 60 80C85 60 85 50 80 45C75 40 65 40 60 45Z" className="fill-rose-500 animate-pulse" />
    <g className="animate-spin-slow" style={{ transformOrigin: '60px 60px' }}>
      <circle cx="60" cy="15" r="6" className="fill-purple-400" />
      <circle cx="60" cy="105" r="6" className="fill-blue-400" />
      <circle cx="15" cy="60" r="6" className="fill-orange-400" />
      <circle cx="105" cy="60" r="6" className="fill-emerald-400" />
      <circle cx="60" cy="60" r="45" className="stroke-white/20 stroke-1" strokeDasharray="4 4" />
    </g>
  </svg>
);

const AnimationGrowth = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="50" className="fill-blue-500/10 animate-pulse-slow" />
    <rect x="30" y="70" width="10" height="0" rx="2" className="fill-blue-400"><animate attributeName="height" from="0" to="20" dur="1s" fill="freeze" /><animate attributeName="y" from="90" to="70" dur="1s" fill="freeze" /></rect>
    <rect x="45" y="50" width="10" height="0" rx="2" className="fill-blue-500"><animate attributeName="height" from="0" to="40" dur="1s" begin="0.2s" fill="freeze" /><animate attributeName="y" from="90" to="50" dur="1s" begin="0.2s" fill="freeze" /></rect>
    <rect x="60" y="30" width="10" height="0" rx="2" className="fill-indigo-400"><animate attributeName="height" from="0" to="60" dur="1s" begin="0.4s" fill="freeze" /><animate attributeName="y" from="90" to="30" dur="1s" begin="0.4s" fill="freeze" /></rect>
    <rect x="75" y="40" width="10" height="0" rx="2" className="fill-indigo-500"><animate attributeName="height" from="0" to="50" dur="1s" begin="0.6s" fill="freeze" /><animate attributeName="y" from="90" to="40" dur="1s" begin="0.6s" fill="freeze" /></rect>
    <rect x="90" y="20" width="10" height="0" rx="2" className="fill-violet-400"><animate attributeName="height" from="0" to="70" dur="1s" begin="0.8s" fill="freeze" /><animate attributeName="y" from="90" to="20" dur="1s" begin="0.8s" fill="freeze" /></rect>
    <path d="M25 80 L105 20" className="stroke-white/30 stroke-2" strokeDasharray="4 4" />
  </svg>
);

// --- Auth & Welcome Screens ---

const WelcomeScreen = ({ onComplete }) => {
  const [slide, setSlide] = useState(0);
  const slides = [
    { Component: AnimationOrganize, title: "Organize sua Vida", desc: "Domine sua rotina diária com um sistema integrado de tarefas, agenda e hábitos.", color: "text-emerald-400", bg: "bg-emerald-500/10", glow: "bg-emerald-500/20" },
    { Component: AnimationBalance, title: "Equilíbrio Total", desc: "Cuide do seu corpo, mente e espírito. Monitore saúde, humor e tempo com Deus.", color: "text-rose-400", bg: "bg-rose-500/10", glow: "bg-rose-500/20" },
    { Component: AnimationGrowth, title: "Alcance Metas", desc: "Acompanhe seu progresso financeiro, estudos e objetivos com estatísticas detalhadas.", color: "text-blue-400", bg: "bg-blue-500/10", glow: "bg-blue-500/20" }
  ];

  const handleNext = () => { if (slide < slides.length - 1) setSlide(s => s + 1); else onComplete(); };
  const CurrentAnimation = slides[slide].Component;

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className={`absolute top-[-20%] right-[-20%] w-96 h-96 rounded-full blur-[100px] transition-colors duration-1000 ${slides[slide].glow} opacity-30`}></div>
      <div className={`absolute bottom-[-10%] left-[-10%] w-72 h-72 rounded-full blur-[80px] transition-colors duration-1000 ${slides[slide].glow} opacity-20`}></div>
      <div className="absolute top-6 right-6 z-20"><button onClick={onComplete} className="text-slate-400 text-sm font-medium hover:text-white transition-colors">Pular</button></div>
      <div className="flex-1 flex flex-col items-center justify-center px-8 z-10">
        <div key={slide} className="animate-enter"><div className="w-48 h-48 flex items-center justify-center mb-6"><CurrentAnimation /></div></div>
        <div key={`text-${slide}`} className="text-center animate-enter delay-100">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">{slides[slide].title}</h2>
          <p className="text-slate-400 text-base leading-relaxed">{slides[slide].desc}</p>
        </div>
      </div>
      <div className="p-8 z-10">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {slides.map((_, i) => (<div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === slide ? `w-8 ${slides[slide].color.replace('text-', 'bg-')}` : 'w-2 bg-slate-700'}`}></div>))}
          </div>
          <button onClick={handleNext} className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 active:scale-95 shadow-lg ${slides[slide].bg.replace('/10', '')} hover:brightness-110`}>
            <ArrowRight className={`w-6 h-6 ${slides[slide].color.replace('text-', 'text-white')}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

const LoginScreen = ({ onLogin, onRegisterClick }) => (
  <div className="flex flex-col h-full p-6 justify-center relative overflow-hidden">
    <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-full h-64 bg-emerald-500/20 blur-[100px] rounded-full"></div>
    <div className="flex flex-col items-center mb-8 animate-enter">
      <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl flex items-center justify-center shadow-2xl shadow-emerald-900/50 mb-6 rotate-3 animate-float"><Zap className="w-10 h-10 text-white" /></div>
      <h1 className="text-3xl font-bold text-white mb-2">Bem-vindo</h1>
      <p className="text-slate-400 text-center">Entre para organizar sua vida com propósito.</p>
    </div>
    <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="w-full space-y-4 relative z-10">
      <InputField icon={Mail} type="email" placeholder="Seu email" delayClass="delay-100" />
      <InputField icon={Lock} type="password" placeholder="Sua senha" showPasswordToggle delayClass="delay-200" />
      <div className="flex justify-end mb-4 animate-enter delay-300"><button type="button" className="text-xs text-emerald-400 font-medium hover:text-emerald-300">Esqueceu a senha?</button></div>
      <div className="animate-enter delay-400">
        <button type="submit" className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl text-white font-bold text-base transition-all shadow-lg shadow-emerald-900/30 active:scale-[0.98]">Entrar</button>
      </div>
    </form>
    <div className="mt-8 text-center animate-enter delay-500">
      <p className="text-slate-500 text-sm">Não tem uma conta? <button onClick={onRegisterClick} className="text-white font-bold hover:text-emerald-400 transition-colors">Crie agora</button></p>
    </div>
    <div className="mt-8 pt-8 border-t border-slate-800 animate-enter delay-500">
      <p className="text-center text-xs text-slate-600 mb-4 font-medium uppercase tracking-wider">Ou continue com</p>
      <div className="flex gap-4">
        <button onClick={onLogin} className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors flex items-center justify-center group"><span className="text-slate-300 group-hover:text-white font-medium text-sm transition-colors">Google</span></button>
        <button onClick={onLogin} className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors flex items-center justify-center group"><span className="text-slate-300 group-hover:text-white font-medium text-sm transition-colors">Apple</span></button>
      </div>
    </div>
  </div>
);

const RegisterScreen = ({ onRegister, onLoginClick }) => (
  <div className="flex flex-col h-full p-6 justify-center relative overflow-hidden">
    <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full"></div>
    <div className="flex flex-col items-center mb-8 animate-enter">
      <h1 className="text-3xl font-bold text-white mb-2">Crie sua conta</h1>
      <p className="text-slate-400 text-center">Comece sua jornada de produtividade hoje.</p>
    </div>
    <form onSubmit={(e) => { e.preventDefault(); onRegister(); }} className="w-full space-y-4 relative z-10">
      <InputField icon={User} type="text" placeholder="Nome completo" delayClass="delay-100" />
      <InputField icon={Mail} type="email" placeholder="Seu email" delayClass="delay-200" />
      <InputField icon={Lock} type="password" placeholder="Senha" showPasswordToggle delayClass="delay-300" />
      <InputField icon={Lock} type="password" placeholder="Confirmar senha" delayClass="delay-400" />
      <div className="animate-enter delay-500">
        <button type="submit" className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-white font-bold text-base transition-all shadow-lg shadow-emerald-900/30 active:scale-[0.98] mt-4">Criar Conta</button>
      </div>
    </form>
    <div className="mt-8 text-center animate-enter delay-500">
      <p className="text-slate-500 text-sm">Já tem uma conta? <button onClick={onLoginClick} className="text-white font-bold hover:text-emerald-400 transition-colors">Entrar</button></p>
    </div>
  </div>
);

// --- Sections with CRUD Support ---

const DashboardSection = ({ greeting, setActiveTab, tasks, transactions, courses, meals }) => {
  // Calculated stats for Dashboard
  const tasksDone = tasks.filter(t => t.completed).length;
  const totalBalance = transactions.reduce((acc, t) => t.type === 'in' ? acc + t.val : acc - t.val, 0);
  const totalStudied = courses.reduce((acc, c) => acc + c.studiedHours, 0);
  const totalCalories = meals.reduce((acc, m) => acc + Number(m.cal), 0);

  return (
    <div className="space-y-8 animate-enter pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-800 p-6 shadow-2xl shadow-emerald-900/40 shimmer">
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-emerald-100 text-sm font-medium mb-1">{new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
              <h1 className="text-3xl font-bold text-white leading-tight">{greeting}</h1>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl"><Cloud className="w-6 h-6 text-white" /></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-black/20 backdrop-blur-sm rounded-2xl p-3 flex items-center gap-3">
              <div className="bg-emerald-400/20 p-2 rounded-lg"><CheckCircle className="w-5 h-5 text-emerald-400" /></div>
              <div>
                <p className="text-xs text-emerald-100/70">Tarefas</p>
                <p className="text-white font-bold">{tasksDone}/{tasks.length}</p>
              </div>
            </div>
            <div className="flex-1 bg-black/20 backdrop-blur-sm rounded-2xl p-3 flex items-center gap-3">
               <div className="bg-orange-400/20 p-2 rounded-lg"><Zap className="w-5 h-5 text-orange-400" /></div>
               <div>
                <p className="text-xs text-emerald-100/70">Estudo</p>
                <p className="text-white font-bold">{Math.round(totalStudied)}h</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl"></div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-lg font-bold text-white">Áreas da Vida</h3>
          <button className="text-emerald-400 text-xs font-bold hover:text-emerald-300">Ver todas</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div onClick={() => setActiveTab('deus')} className={`p-4 rounded-2xl border border-purple-500/20 bg-purple-500/10 backdrop-blur-sm hover:scale-[1.02] transition-transform cursor-pointer`}>
            <div className="flex justify-between items-start mb-3">
              <Heart className={`w-6 h-6 text-purple-400`} />
              <ArrowUpRight className={`w-4 h-4 text-purple-400 opacity-50`} />
            </div>
            <p className="text-slate-200 font-semibold text-sm">Espiritual</p>
            <p className={`text-xs text-purple-400 mt-1 font-medium`}>Em dia</p>
          </div>
          <div onClick={() => setActiveTab('financas')} className={`p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-sm hover:scale-[1.02] transition-transform cursor-pointer`}>
            <div className="flex justify-between items-start mb-3">
              <DollarSign className={`w-6 h-6 text-emerald-400`} />
              <ArrowUpRight className={`w-4 h-4 text-emerald-400 opacity-50`} />
            </div>
            <p className="text-slate-200 font-semibold text-sm">Finanças</p>
            <p className={`text-xs text-emerald-400 mt-1 font-medium`}>R$ {totalBalance}</p>
          </div>
          <div onClick={() => setActiveTab('alimentacao')} className={`p-4 rounded-2xl border border-rose-500/20 bg-rose-500/10 backdrop-blur-sm hover:scale-[1.02] transition-transform cursor-pointer`}>
            <div className="flex justify-between items-start mb-3">
              <Utensils className={`w-6 h-6 text-rose-400`} />
              <ArrowUpRight className={`w-4 h-4 text-rose-400 opacity-50`} />
            </div>
            <p className="text-slate-200 font-semibold text-sm">Nutrição</p>
            <p className={`text-xs text-rose-400 mt-1 font-medium`}>{totalCalories} kcal</p>
          </div>
          <div onClick={() => setActiveTab('estudos')} className={`p-4 rounded-2xl border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm hover:scale-[1.02] transition-transform cursor-pointer`}>
            <div className="flex justify-between items-start mb-3">
              <BookOpen className={`w-6 h-6 text-blue-400`} />
              <ArrowUpRight className={`w-4 h-4 text-blue-400 opacity-50`} />
            </div>
            <p className="text-slate-200 font-semibold text-sm">Estudos</p>
            <p className={`text-xs text-blue-400 mt-1 font-medium`}>{courses.length} Cursos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Updated Agenda Section with Full Calendar Navigation (FIXED SECURITY ERROR & HORIZONTAL SCROLL) ---

const AgendaSection = ({ tasks, setTasks }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', category: 'Trabalho', time: '09:00' });
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const scrollContainerRef = useRef(null);

  // Scroll listener for horizontal scroll
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      };
      // Use { passive: false } to allow preventDefault which blocks vertical scroll
      el.addEventListener('wheel', onWheel, { passive: false });
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => {
      const d = new Date(year, month, i + 1);
      return {
        day: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'][d.getDay()],
        date: d.getDate().toString().padStart(2, '0'),
        fullDate: d.toISOString().split('T')[0] // YYYY-MM-DD
      };
    });
  };

  const days = getDaysInMonth(currentDate);
  const selectedDateStr = currentDate.toISOString().split('T')[0];

  const handleDateChange = (e) => {
    if(e.target.value) {
      const [y, m, d] = e.target.value.split('-').map(Number);
      setCurrentDate(new Date(y, m - 1, d, 12, 0, 0));
    }
  };

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  const filteredTasks = tasks.filter(t => t.date === selectedDateStr);

  const toggleTask = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));
  
  const handleAddTask = () => {
    if(!newTask.title) return;
    setTasks([...tasks, { 
      id: Date.now(), 
      ...newTask, 
      date: selectedDateStr, // Uses currently selected full date
      completed: false, 
      color: 'text-slate-200' 
    }]);
    setModalOpen(false);
    setNewTask({ title: '', category: 'Trabalho', time: '09:00' });
  };

  return (
    <div className="animate-enter pb-24">
      <div className="flex items-center justify-between mb-6 px-1">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            Agenda 
            <div className="relative">
                <button className="p-1 bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors pointer-events-none">
                  <CalendarDays className="w-4 h-4" />
                </button>
                <input 
                    type="date" 
                    onChange={handleDateChange} 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
            </div>
          </h2>
          <p className="text-sm text-emerald-400 font-medium mt-0.5">
            {currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }).replace(/^\w/, c => c.toUpperCase())}
          </p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => changeMonth(-1)} className="p-2 bg-slate-800 rounded-xl hover:bg-slate-700 text-white transition-colors"><ChevronLeft className="w-5 h-5" /></button>
          <button onClick={() => changeMonth(1)} className="p-2 bg-slate-800 rounded-xl hover:bg-slate-700 text-white transition-colors"><ChevronRight className="w-5 h-5" /></button>
          <button onClick={() => setModalOpen(true)} className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-xl transition-colors shadow-lg shadow-emerald-900/50"><Plus className="w-5 h-5" /></button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex gap-2 mb-8 overflow-x-auto no-scrollbar pb-2 px-1 snap-x touch-pan-x"
      >
        {days.map((d, i) => {
          const isActive = d.fullDate === selectedDateStr;
          return (
            <button 
              key={i} 
              id={isActive ? 'active-day' : ''}
              onClick={() => setCurrentDate(new Date(d.fullDate + 'T12:00:00'))} // Fix timezone issue by setting noon
              className={`flex-shrink-0 flex flex-col items-center justify-center min-w-[3.5rem] h-16 rounded-2xl transition-all border snap-center ${isActive ? 'bg-emerald-600 border-emerald-500 shadow-lg shadow-emerald-900/50 translate-y-[-2px]' : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800'}`}
            >
              <span className={`text-[10px] font-bold tracking-wider mb-0.5 ${isActive ? 'text-emerald-100' : ''}`}>{d.day}</span>
              <span className={`text-lg font-bold ${isActive ? 'text-white' : ''}`}>{d.date}</span>
            </button>
          );
        })}
      </div>

      <div className="relative pl-4 space-y-6 min-h-[300px]">
        <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-500/50 via-slate-700 to-transparent"></div>
        
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div key={task.id} className="relative flex items-center gap-4 group animate-enter">
              <button onClick={() => toggleTask(task.id)} className={`relative z-10 w-6 h-6 rounded-full border-2 flex items-center justify-center bg-[#0f172a] transition-colors ${task.completed ? 'border-emerald-500 bg-emerald-500' : 'border-slate-600 group-hover:border-emerald-400'}`}>
                {task.completed && <CheckCircle className="w-3.5 h-3.5 text-white" />}
              </button>
              <div className="flex-1 glass-card p-4 rounded-xl border-l-4 border-l-transparent group-hover:border-l-emerald-500 transition-all flex justify-between items-start">
                 <div>
                   <h4 className={`font-semibold text-base ${task.completed ? 'text-slate-400 line-through' : 'text-slate-100'}`}>{task.title}</h4>
                   <p className={`text-xs font-medium mt-1 ${task.color || 'text-slate-400'}`}>{task.category}</p>
                 </div>
                 <div className="flex flex-col items-end gap-2">
                   <span className="text-xs font-bold text-slate-500 bg-slate-800/80 px-2 py-1 rounded-md">{task.time}</span>
                   <button onClick={() => deleteTask(task.id)} className="text-slate-600 hover:text-rose-400"><Trash2 className="w-4 h-4" /></button>
                 </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center animate-enter">
            <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 border border-dashed border-slate-700">
               <Calendar className="w-6 h-6 text-slate-500" />
            </div>
            <p className="text-slate-400 text-sm font-medium">Nenhum compromisso para este dia.</p>
            <button onClick={() => setModalOpen(true)} className="mt-2 text-emerald-400 text-xs font-bold hover:text-emerald-300">Adicionar agora</button>
          </div>
        )}
      </div>

      <SimpleModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={`Novo em ${currentDate.getDate()}/${currentDate.getMonth()+1}`}>
        <div className="space-y-4">
          <div>
            <label className="text-xs text-slate-400 mb-1 block">Título</label>
            <input type="text" className="glass-input w-full p-3 rounded-xl" placeholder="Ex: Dentista" value={newTask.title} onChange={e => setNewTask({...newTask, title: e.target.value})} />
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-xs text-slate-400 mb-1 block">Categoria</label>
              <select className="glass-input w-full p-3 rounded-xl bg-[#1e293b]" value={newTask.category} onChange={e => setNewTask({...newTask, category: e.target.value})}>
                <option>Trabalho</option><option>Estudo</option><option>Saúde</option><option>Espiritual</option><option>Social</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="text-xs text-slate-400 mb-1 block">Horário</label>
              <input type="time" className="glass-input w-full p-3 rounded-xl" value={newTask.time} onChange={e => setNewTask({...newTask, time: e.target.value})} />
            </div>
          </div>
          <button onClick={handleAddTask} className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-white font-bold mt-2">Agendar</button>
        </div>
      </SimpleModal>
    </div>
  );
};

const FinancasSection = ({ transactions, setTransactions }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newTrans, setNewTrans] = useState({ title: '', val: '', type: 'out' });

  const handleAdd = () => {
    if(!newTrans.title || !newTrans.val) return;
    setTransactions([{ id: Date.now(), ...newTrans, val: parseFloat(newTrans.val), date: 'Hoje', cat: 'Geral' }, ...transactions]);
    setModalOpen(false);
    setNewTrans({ title: '', val: '', type: 'out' });
  }

  const handleDelete = (id) => setTransactions(transactions.filter(t => t.id !== id));

  const total = transactions.reduce((acc, t) => t.type === 'in' ? acc + t.val : acc - t.val, 0);
  const income = transactions.filter(t => t.type === 'in').reduce((acc, t) => acc + t.val, 0);
  const expense = transactions.filter(t => t.type === 'out').reduce((acc, t) => acc + t.val, 0);

  return (
    <div className="animate-enter pb-24">
      <SectionHeader title="Finanças" subtitle="Gestão inteligente" />
      <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] border border-slate-800 p-6 mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 opacity-50"></div>
        <div className="relative z-10 text-center">
          <p className="text-slate-400 text-sm font-medium mb-1">Saldo Total</p>
          <h2 className="text-4xl font-bold text-white mb-2">R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Card className="!bg-emerald-900/10 !border-emerald-500/20 text-center">
          <p className="text-slate-400 text-xs uppercase">Entradas</p>
          <p className="text-xl font-bold text-emerald-400 mt-1">R$ {income.toLocaleString('pt-BR')}</p>
        </Card>
        <Card className="!bg-rose-900/10 !border-rose-500/20 text-center">
          <p className="text-slate-400 text-xs uppercase">Saídas</p>
          <p className="text-xl font-bold text-rose-400 mt-1">R$ {expense.toLocaleString('pt-BR')}</p>
        </Card>
      </div>
      <div>
        <div className="flex justify-between items-center mb-4 px-1">
          <h3 className="text-lg font-bold text-white">Transações</h3>
          <button onClick={() => setModalOpen(true)} className="text-emerald-400 text-xs font-bold hover:text-emerald-300">+ Adicionar</button>
        </div>
        <div className="space-y-3">
          {transactions.map((t) => (
            <div key={t.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 group">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${t.type === 'in' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                  {t.type === 'in' ? <DollarSign className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                </div>
                <div>
                  <p className="text-slate-200 font-semibold text-sm">{t.title}</p>
                  <p className="text-slate-500 text-xs">{t.cat} • {t.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-sm font-bold ${t.type === 'in' ? 'text-emerald-400' : 'text-slate-200'}`}>
                  {t.type === 'in' ? '+' : '-'} R$ {t.val.toLocaleString('pt-BR')}
                </span>
                <button onClick={() => handleDelete(t.id)} className="text-slate-600 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SimpleModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Nova Transação">
        <div className="space-y-4">
          <input type="text" className="glass-input w-full p-3 rounded-xl" placeholder="Descrição" value={newTrans.title} onChange={e => setNewTrans({...newTrans, title: e.target.value})} />
          <input type="number" className="glass-input w-full p-3 rounded-xl" placeholder="Valor" value={newTrans.val} onChange={e => setNewTrans({...newTrans, val: e.target.value})} />
          <div className="flex gap-2">
            <button onClick={() => setNewTrans({...newTrans, type: 'in'})} className={`flex-1 py-3 rounded-xl font-bold ${newTrans.type === 'in' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}>Entrada</button>
            <button onClick={() => setNewTrans({...newTrans, type: 'out'})} className={`flex-1 py-3 rounded-xl font-bold ${newTrans.type === 'out' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'}`}>Saída</button>
          </div>
          <button onClick={handleAdd} className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-bold">Salvar</button>
        </div>
      </SimpleModal>
    </div>
  );
};

const DeusSection = ({ prayers, setPrayers }) => {
  const [newPrayer, setNewPrayer] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const toggle = (id) => setPrayers(prayers.map(p => p.id === id ? { ...p, checked: !p.checked } : p));
  const remove = (id) => setPrayers(prayers.filter(p => p.id !== id));
  const add = () => {
    if(!newPrayer) return;
    setPrayers([...prayers, { id: Date.now(), title: newPrayer, date: 'Hoje', checked: false }]);
    setModalOpen(false);
    setNewPrayer('');
  };

  return (
    <div className="animate-enter pb-24 space-y-6">
      <SectionHeader title="Tempo com Deus" subtitle="Fortaleça sua fé" />
      <Card className="!bg-purple-900/20 !border-purple-500/20">
        <div className="flex justify-between items-center mb-4"><h3 className="text-white font-semibold">Sequência</h3><Flame className="w-6 h-6 text-purple-400" /></div>
        <ProgressBar progress={70} colorClass="bg-purple-500" trackClass="bg-purple-900/40" />
        <p className="text-xs text-center mt-2 text-purple-300">7 Dias seguidos</p>
      </Card>
      <Card>
        <div className="flex items-center gap-3 mb-4"><div className="p-2 bg-purple-500/20 rounded-lg"><BookOpen className="w-5 h-5 text-purple-400" /></div><h3 className="font-bold text-white">Devocional de Hoje</h3></div>
        <div className="bg-slate-800/50 rounded-xl p-4 mb-4 border border-purple-500/10"><p className="text-purple-400 font-bold text-sm mb-2">📖 Salmos 23:1-6</p><p className="text-slate-300 text-sm italic leading-relaxed">"O Senhor é o meu pastor; nada me faltará..."</p></div>
        <button className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl text-white font-semibold text-sm transition-colors shadow-lg">Ler Devocional</button>
      </Card>
      <div>
        <div className="flex justify-between items-center mb-4 px-1">
          <h3 className="text-lg font-bold text-white">Pedidos de Oração</h3>
          <button onClick={() => setModalOpen(true)} className="text-purple-400 text-xs font-bold hover:text-purple-300">+ Adicionar</button>
        </div>
        <div className="space-y-3">
          {prayers.map((item) => (
            <div key={item.id} className={`flex items-center gap-3 p-4 rounded-xl border group ${item.checked ? 'bg-emerald-900/10 border-emerald-500/30' : 'bg-slate-800/50 border-slate-700/50'}`}>
              <button onClick={() => toggle(item.id)} className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${item.checked ? 'border-emerald-500 bg-emerald-500' : 'border-slate-500'}`}>
                {item.checked && <CheckSquare className="w-3 h-3 text-white" />}
              </button>
              <div className="flex-1">
                <p className={`text-sm font-medium ${item.checked ? 'text-slate-400 line-through' : 'text-white'}`}>{item.title}</p>
                <p className="text-xs text-slate-500">{item.date}</p>
              </div>
              <button onClick={() => remove(item.id)} className="text-slate-600 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="w-4 h-4" /></button>
            </div>
          ))}
        </div>
      </div>
      <SimpleModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Novo Pedido">
        <input type="text" className="glass-input w-full p-3 rounded-xl mb-4" placeholder="Escreva seu pedido..." value={newPrayer} onChange={e => setNewPrayer(e.target.value)} />
        <button onClick={add} className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl text-white font-bold">Salvar</button>
      </SimpleModal>
    </div>
  );
};

const FamiliaSection = ({ members, setMembers }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newMember, setNewMember] = useState({ name: '', role: '' });

  const add = () => {
    if(!newMember.name) return;
    setMembers([...members, { id: Date.now(), ...newMember, icon: "👤", color: "text-emerald-400" }]);
    setModalOpen(false);
    setNewMember({ name: '', role: '' });
  };

  return (
    <div className="animate-enter pb-24 space-y-6">
      <SectionHeader title="Família" subtitle="Laços familiares" />
      <Card>
        <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-white">Membros</h3><button onClick={() => setModalOpen(true)} className="text-rose-400 text-xs font-bold">+ Novo</button></div>
        <div className="grid grid-cols-2 gap-3">
          {members.map((m) => (
            <div key={m.id} className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50 relative group">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-2 text-2xl shadow-inner">{m.icon}</div>
              <p className="text-white font-semibold text-sm">{m.name}</p>
              <p className={`text-xs ${m.color}`}>{m.role}</p>
              <button onClick={() => setMembers(members.filter(x => x.id !== m.id))} className="absolute top-2 right-2 text-slate-600 hover:text-rose-400 opacity-0 group-hover:opacity-100"><X className="w-3 h-3" /></button>
            </div>
          ))}
        </div>
      </Card>
      <div className="space-y-3">
        {[
          { icon: Utensils, title: "Jantar em Família", time: "Hoje, 19:00", badge: "Em 7h", color: "text-rose-400", bg: "bg-rose-500/20" },
          { icon: Play, title: "Cinema", time: "Sexta, 20:00", badge: "Em 3 dias", color: "text-blue-400", bg: "bg-blue-500/20" },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.bg}`}><item.icon className={`w-5 h-5 ${item.color}`} /></div>
              <div><p className="text-slate-200 font-semibold text-sm">{item.title}</p><p className="text-slate-500 text-xs">{item.time}</p></div>
            </div>
            <span className={`text-xs font-bold ${item.color}`}>{item.badge}</span>
          </div>
        ))}
      </div>
      <SimpleModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Adicionar Membro">
        <input type="text" className="glass-input w-full p-3 rounded-xl mb-4" placeholder="Nome" value={newMember.name} onChange={e => setNewMember({...newMember, name: e.target.value})} />
        <input type="text" className="glass-input w-full p-3 rounded-xl mb-4" placeholder="Parentesco (ex: Tio)" value={newMember.role} onChange={e => setNewMember({...newMember, role: e.target.value})} />
        <button onClick={add} className="w-full py-3 bg-rose-600 hover:bg-rose-500 rounded-xl text-white font-bold">Salvar</button>
      </SimpleModal>
    </div>
  );
};

// ... existing AcademiaSection ...
const AcademiaSection = () => {
  const [view, setView] = useState('overview'); 
  const [activePlan, setActivePlan] = useState('A'); 
  const [timeLeft, setTimeLeft] = useState(0);
  const [showRestModal, setShowRestModal] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [expandedCycleId, setExpandedCycleId] = useState(null);

  const [cycleData, setCycleData] = useState([
    { id: 1, title: 'Adaptação', status: 'completed', desc: 'Foco técnica', color: 'border-slate-600 text-slate-400', bg: 'bg-slate-800/50' },
    { id: 2, title: 'Força Base', status: 'current', desc: 'Carga progressiva', color: 'border-emerald-500 text-white', bg: 'bg-emerald-900/20' },
    { id: 3, title: 'Hipertrofia', status: 'locked', desc: 'Volume alto', color: 'border-slate-700 text-slate-500', bg: 'bg-slate-900/50' },
    { id: 4, title: 'Deload', status: 'locked', desc: 'Recuperação', color: 'border-slate-700 text-slate-500', bg: 'bg-slate-900/50' },
  ]);

  const [genStep, setGenStep] = useState(0);
  const genSteps = ["Analisando histórico...", "Calculando volume...", "Estruturando periodização...", "Selecionando exercícios...", "Otimizando descanso..."];
  const [aiChat, setAiChat] = useState([{ type: 'bot', text: "Olá! Sou o Max, seu coach de alta performance. Como posso ajudar no seu treino hoje?" }]);
  const [aiInput, setAiInput] = useState('');

  const [workoutPlan, setWorkoutPlan] = useState({
    'A': { 
      name: 'Peito e Tríceps (Foco Hipertrofia)', 
      exercises: [
        { id: 1, name: 'Supino Reto', rest: 90, expanded: true, sets: [{ id: 1, weight: 30, reps: 12, completed: false, type: 'warmup' }, { id: 2, weight: 40, reps: 10, completed: false, type: 'normal' }] },
        { id: 2, name: 'Crucifixo Inclinado', rest: 60, expanded: false, sets: [{ id: 1, weight: 14, reps: 12, completed: false, type: 'normal' }] }
      ]
    },
    'B': { name: 'Costas e Bíceps', exercises: [] },
    'C': { name: 'Pernas e Ombros', exercises: [] }
  });

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timeLeft]);

  const toggleExerciseExpand = (exerciseId) => {
    setWorkoutPlan(prev => ({
      ...prev,
      [activePlan]: {
        ...prev[activePlan],
        exercises: prev[activePlan].exercises.map(ex => ex.id === exerciseId ? { ...ex, expanded: !ex.expanded } : ex)
      }
    }));
  };

  const handleGeneratePlan = () => {
    setView('generating');
    setGenStep(0);
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < genSteps.length) setGenStep(currentStep);
      else {
        clearInterval(interval);
        finishGeneration();
      }
    }, 1500);
  };

  const finishGeneration = () => {
    setView('periodization');
  };

  const sendAiMessage = () => {
    if (!aiInput) return;
    setAiChat([...aiChat, { type: 'user', text: aiInput }]);
    setTimeout(() => {
      setAiChat(prev => [...prev, { type: 'bot', text: "Entendi! Para substituir o Supino Reto, recomendo o Supino com Halteres ou Flexões. Mantenha a carga controlada." }]);
    }, 1000);
    setAiInput('');
  };

  if (view === 'generating') {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center animate-enter relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900/10"></div>
        <div className="relative z-10 w-full max-w-xs">
          <div className="w-24 h-24 mx-auto mb-8 relative">
            <div className="absolute inset-0 border-t-4 border-emerald-500 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-r-4 border-emerald-500/50 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-0 flex items-center justify-center"><Brain className="w-10 h-10 text-emerald-400 animate-pulse" /></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Criando Plano IA</h2>
          <p className="text-emerald-400 font-medium text-sm h-12 flex items-center justify-center transition-all duration-300">{genSteps[genStep]}</p>
          <div className="mt-8 bg-slate-800/50 rounded-full h-2 w-full overflow-hidden border border-slate-700">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-500 ease-out" style={{ width: `${((genStep + 1) / genSteps.length) * 100}%` }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'periodization') {
    return (
      <div className="animate-enter pb-24 h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setView('overview')} className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors group"><ChevronRight className="w-5 h-5 rotate-180 text-slate-400 group-hover:text-white" /></button>
          <div className="text-center"><h3 className="text-sm font-bold text-white">Ciclo Atual</h3><p className="text-[10px] text-emerald-400 font-medium">Macro: Força e Hipertrofia</p></div><div className="w-9"></div>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar space-y-6 relative">
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-800"></div>
          {cycleData.map((week) => (
            <div key={week.id} className="relative pl-12">
               <div className={`absolute left-[21px] top-6 w-3 h-3 rounded-full border-2 ${week.status === 'current' ? 'bg-emerald-500 border-emerald-500' : 'bg-slate-700 border-slate-700'} z-10`}></div>
               <div onClick={() => week.status === 'current' ? setView('overview') : setExpandedCycleId(expandedCycleId === week.id ? null : week.id)} className={`p-5 rounded-2xl border ${week.color} ${week.bg} backdrop-blur-sm transition-all cursor-pointer`}>
                 <div className="flex justify-between items-start mb-2"><h4 className="font-bold text-base">Semana {week.id}: {week.title}</h4></div>
                 <p className="text-sm opacity-80 mb-3">{week.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (view === 'coach') {
    return (
      <div className="h-full flex flex-col animate-enter pb-20">
        <div className="flex items-center justify-between mb-4 p-2 bg-slate-900/50 backdrop-blur-md sticky top-0 z-10 border-b border-slate-800">
          <button onClick={() => setView('active')} className="flex items-center gap-1 py-2 px-3 bg-slate-800 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"><ChevronRight className="w-4 h-4 rotate-180" /><span className="text-xs font-bold">Voltar</span></button>
          <h3 className="font-bold text-white flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-400" /> Coach Max</h3><div className="w-16"></div>
        </div>
        <div className="flex-1 overflow-y-auto space-y-4 p-4 no-scrollbar">
          {aiChat.map((msg, i) => (<div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[85%] p-4 rounded-2xl text-sm ${msg.type === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-200'}`}>{msg.text}</div></div>))}
        </div>
        <div className="mt-4 p-4 bg-slate-900 border-t border-slate-800"><div className="flex gap-2"><input value={aiInput} onChange={(e) => setAiInput(e.target.value)} placeholder="Pergunte ao Max..." className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:border-purple-500 focus:outline-none" /><button onClick={sendAiMessage} className="p-3 bg-purple-600 hover:bg-purple-500 rounded-xl text-white"><ArrowUpRight className="w-5 h-5" /></button></div></div>
      </div>
    );
  }
  
  if (view === 'active') {
    return (
      <div className="animate-enter pb-24">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setView('overview')} className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors group"><ChevronRight className="w-5 h-5 rotate-180 text-slate-400 group-hover:text-white" /></button>
            <div className="text-center"><h3 className="text-sm font-bold text-white">Treino {activePlan}</h3><p className="text-[10px] text-emerald-400 font-medium">Em andamento</p></div>
            <button onClick={() => setView('coach')} className="flex items-center gap-2 px-3 py-2 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/50 hover:bg-purple-500/30 transition-all"><MessageSquare className="w-4 h-4" /> <span className="text-xs font-bold">Max</span></button>
          </div>
          <div className="space-y-4">
            {workoutPlan[activePlan].exercises.map((ex) => (
              <div key={ex.id} className={`rounded-xl border transition-all duration-300 overflow-hidden ${ex.expanded ? 'bg-slate-800/40 border-emerald-500/30' : 'bg-slate-800/20 border-slate-700'}`}>
                <div onClick={() => toggleExerciseExpand(ex.id)} className="flex justify-between items-center p-4 cursor-pointer hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-3"><div className={`p-2 rounded-lg bg-slate-700 text-slate-400`}><Dumbbell className="w-5 h-5" /></div><div><h4 className="font-bold text-white text-sm">{ex.name}</h4><p className="text-xs text-slate-400">{ex.sets.length} séries</p></div></div>
                  <ChevronRight className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${ex.expanded ? 'rotate-90' : ''}`} />
                </div>
              </div>
            ))}
          </div>
      </div>
    );
  }

  return (
    <div className="animate-enter pb-24 space-y-6">
      <SectionHeader title="Academia" subtitle="Alta Performance" />
      <div className="grid grid-cols-2 gap-3 mb-4">
        <button onClick={handleGeneratePlan} className="p-4 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:scale-[1.02] transition-transform"><Brain className="w-8 h-8 text-white mb-2" /><span className="text-xs font-bold text-white text-center">Gerar Plano IA</span></button>
        <button onClick={() => setView('active')} className="p-4 bg-slate-800/50 border border-slate-700 rounded-2xl flex flex-col items-center justify-center hover:bg-slate-800 transition-all"><Play className="w-8 h-8 text-white mb-2 fill-current" /><span className="text-xs font-bold text-white">Iniciar Treino A</span></button>
      </div>
      <div className="flex bg-slate-800/50 p-1 rounded-xl mb-4">
        {['A', 'B', 'C'].map(plan => (<button key={plan} onClick={() => setActivePlan(plan)} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${activePlan === plan ? 'bg-slate-700 text-white shadow' : 'text-slate-500 hover:text-slate-300'}`}>Treino {plan}</button>))}
      </div>
      <Card>
        <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-white">{workoutPlan[activePlan].name}</h3><span className="text-xs text-slate-400">{workoutPlan[activePlan].exercises.length} exercícios</span></div>
        <div className="space-y-3">{workoutPlan[activePlan].exercises.map((ex) => (<div key={ex.id} className="flex justify-between items-center py-2 border-b border-slate-700/50 last:border-0"><span className="text-sm text-slate-200">{ex.name}</span><span className="text-xs text-slate-500 font-mono">{ex.sets.length} séries</span></div>))}</div>
      </Card>
    </div>
  );
};

const AlimentacaoSection = ({ meals, setMeals, water, setWater }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newMeal, setNewMeal] = useState({ name: '', time: '', cal: '', prot: '', carb: '', fat: '' });

  const totalCal = meals.reduce((acc, m) => acc + Number(m.cal), 0);
  const goals = { cal: 2450, prot: 160, carb: 220, fat: 70 };

  const addWater = (amount) => setWater(prev => Math.min(prev + amount, 3500));
  const removeMeal = (id) => setMeals(meals.filter(m => m.id !== id));
  
  const handleAddMeal = () => {
    if (!newMeal.name || !newMeal.cal) return;
    setMeals([...meals, { id: Date.now(), ...newMeal, cal: Number(newMeal.cal), icon: Utensils, color: "text-blue-400", bg: "bg-blue-500/20" }]);
    setModalOpen(false);
    setNewMeal({ name: '', time: '', cal: '', prot: '', carb: '', fat: '' });
  };

  return (
    <div className="animate-enter pb-24 space-y-6">
      <SectionHeader title="Alimentação" subtitle="Nutra seu corpo com sabedoria" />
      <Card className="!bg-emerald-900/10 !border-emerald-500/20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 opacity-20"><Apple className="w-16 h-16 text-emerald-400" /></div>
        <h3 className="text-emerald-400 font-semibold mb-4 text-sm uppercase tracking-wider">Meta Diária</h3>
        <div className="relative w-40 h-40 mx-auto mb-6 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
             <circle cx="80" cy="80" r="70" stroke="#1e293b" strokeWidth="8" fill="none" />
             <circle cx="80" cy="80" r="70" stroke="#10b981" strokeWidth="8" fill="none" strokeDasharray="440" strokeDashoffset={440 - (440 * Math.min(totalCal / goals.cal, 1))} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
          </svg>
          <div className="text-center"><p className="text-3xl font-bold text-white">{totalCal}</p><p className="text-xs text-emerald-400/80">de {goals.cal} kcal</p></div>
        </div>
      </Card>

      <div>
        <div className="flex justify-between items-center mb-4 px-1"><h3 className="text-lg font-bold text-white">Refeições</h3><button onClick={() => setModalOpen(true)} className="text-emerald-400 text-xs font-bold hover:text-emerald-300 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 flex items-center gap-1 transition-colors"><Plus className="w-3 h-3" /> Adicionar</button></div>
        <div className="space-y-3">
            {meals.map((meal) => (
              <div key={meal.id} className="flex items-center justify-between p-4 rounded-xl border bg-slate-800/50 border-slate-700/50 group hover:bg-slate-800 transition-colors">
                <div className="flex items-center gap-4"><div className={`w-10 h-10 rounded-xl flex items-center justify-center ${meal.bg}`}><meal.icon className={`w-5 h-5 ${meal.color}`} /></div><div><p className="text-slate-200 font-semibold text-sm">{meal.name}</p></div></div>
                <div className="flex items-center gap-3"><span className={`text-xs font-bold ${meal.color}`}>{meal.cal} kcal</span><button onClick={() => removeMeal(meal.id)} className="p-1.5 text-slate-500 hover:text-rose-400"><Trash2 className="w-4 h-4" /></button></div>
              </div>
            ))}
        </div>
      </div>

      <Card>
        <div className="flex justify-between items-center mb-4"><div className="flex items-center gap-2"><div className="p-1.5 bg-blue-500/20 rounded-lg"><Droplet className="w-4 h-4 text-blue-400 fill-current" /></div><h3 className="font-bold text-white">Hidratação</h3></div><span className="text-blue-400 font-bold text-lg">{water}ml <span className="text-slate-500 font-normal text-xs">/ 3000ml</span></span></div>
        <div className="relative h-4 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700 mb-6"><div className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-700 ease-out" style={{ width: `${Math.min((water / 3000) * 100, 100)}%` }}></div></div>
        <div className="grid grid-cols-4 gap-2">{[250, 350, 500].map(amount => (<button key={amount} onClick={() => addWater(amount)} className="bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 rounded-xl p-2 flex flex-col items-center"><span className="text-lg">💧</span><span className="text-[10px] text-blue-300 font-bold">+{amount}ml</span></button>))}</div>
      </Card>

      <SimpleModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Adicionar Refeição">
        <div className="space-y-4">
          <input type="text" className="glass-input w-full p-3 rounded-xl border-slate-700" placeholder="Ex: Café da Manhã" value={newMeal.name} onChange={e => setNewMeal({...newMeal, name: e.target.value})} />
          <input type="number" className="glass-input w-full p-3 rounded-xl" placeholder="Calorias" value={newMeal.cal} onChange={e => setNewMeal({...newMeal, cal: e.target.value})} />
          <button onClick={handleAddMeal} className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-white font-bold mt-2">Salvar Refeição</button>
        </div>
      </SimpleModal>
    </div>
  );
};

const EstudosSection = ({ courses, setCourses }) => {
  const [session, setSession] = useState({ active: false, paused: false, courseId: null, elapsedSeconds: 0 });
  const [modalOpen, setModalOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({ title: '', platform: '', totalHours: '', color: 'bg-blue-500', icon: '📚' });

  useEffect(() => {
    let interval = null;
    if (session.active && !session.paused) {
      interval = setInterval(() => { setSession(prev => ({ ...prev, elapsedSeconds: prev.elapsedSeconds + 1 })); }, 1000);
    } else { clearInterval(interval); }
    return () => clearInterval(interval);
  }, [session.active, session.paused]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs > 0 ? `${hrs}:` : ''}${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startSession = (courseId) => { setSession({ active: true, paused: false, courseId: courseId, elapsedSeconds: 0 }); };
  const togglePause = () => { setSession(prev => ({ ...prev, paused: !prev.paused })); };
  const finishSession = () => {
    if (!session.courseId) return;
    const hoursAdded = session.elapsedSeconds / 3600;
    setCourses(courses.map(c => c.id === session.courseId ? { ...c, studiedHours: c.studiedHours + hoursAdded } : c));
    setSession({ active: false, paused: false, courseId: null, elapsedSeconds: 0 });
  };

  const addCourse = () => {
    if (!newCourse.title || !newCourse.totalHours) return;
    setCourses([...courses, { id: Date.now(), ...newCourse, totalHours: parseFloat(newCourse.totalHours), studiedHours: 0 }]);
    setModalOpen(false);
  };

  const activeCourse = courses.find(c => c.id === session.courseId);

  return (
    <div className="animate-enter pb-24 space-y-6">
      <SectionHeader title="Estudos" subtitle="Cronometre seu aprendizado" />
      {session.active ? (
        <Card className="!bg-blue-900/20 !border-blue-500/30 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/20"><div className="h-full bg-blue-500 animate-[shimmer_2s_infinite]" style={{ width: '100%' }}></div></div>
          <div className="flex justify-between items-start mb-6">
            <div className="text-left"><h3 className="font-bold text-white text-sm">{activeCourse?.title}</h3></div>
            <span className={`px-2 py-1 rounded-full text-[10px] font-bold border flex items-center gap-1 ${session.paused ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30' : 'bg-green-500/10 text-green-400 border-green-500/30'}`}>{session.paused ? 'Pausado' : 'Focando'}</span>
          </div>
          <div className="relative mb-8"><span className="text-6xl font-bold text-white font-mono tracking-tighter tabular-nums text-shadow-lg">{formatTime(session.elapsedSeconds)}</span></div>
          <div className="grid grid-cols-2 gap-3"><button onClick={togglePause} className="py-4 rounded-xl font-bold text-sm border">{session.paused ? "Retomar" : "Pausar"}</button><button onClick={finishSession} className="py-4 bg-slate-800 border border-slate-700 text-white rounded-xl font-bold text-sm">Finalizar</button></div>
        </Card>
      ) : (
        <Card className="text-center py-8 border-dashed border-slate-700 bg-slate-800/30"><div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-700"><Play className="w-6 h-6 text-slate-400 ml-1" /></div><h3 className="text-white font-bold mb-1">Pronto para estudar?</h3></Card>
      )}
      <div>
        <div className="flex justify-between items-center mb-4 px-1"><h3 className="text-lg font-bold text-white">Meus Cursos</h3><button onClick={() => setModalOpen(true)} className="text-blue-400 text-xs font-bold hover:text-blue-300 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20 flex items-center gap-1 transition-colors"><Plus className="w-3 h-3" /> Novo Curso</button></div>
        <div className="space-y-3">
          {courses.map((course) => (
            <div key={course.id} className="group relative overflow-hidden glass-card !p-0 rounded-2xl transition-all hover:bg-slate-800/80">
              <div className="p-4 relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-3"><div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-lg border border-white/5 shadow-inner">{course.icon}</div><div><h4 className="text-white font-semibold text-sm">{course.title}</h4></div></div>
                  <div className="flex flex-col items-end gap-1"><span className="text-sm font-bold text-white">{Math.min(Math.round((course.studiedHours / course.totalHours) * 100), 100)}%</span>{!session.active && (<button onClick={() => startSession(course.id)} className="bg-blue-600 hover:bg-blue-500 text-white p-1.5 rounded-lg transition-colors"><Play className="w-3 h-3 fill-current" /></button>)}</div>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5"><div className={`h-full rounded-full ${course.color}`} style={{ width: `${Math.min((course.studiedHours / course.totalHours) * 100, 100)}%` }}></div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SimpleModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Novo Curso">
        <div className="space-y-4">
          <input type="text" className="glass-input w-full p-3 rounded-xl border-slate-700" placeholder="Nome do Curso" value={newCourse.title} onChange={e => setNewCourse({...newCourse, title: e.target.value})} />
          <input type="number" className="glass-input w-full p-3 rounded-xl" placeholder="Carga Horária (h)" value={newCourse.totalHours} onChange={e => setNewCourse({...newCourse, totalHours: e.target.value})} />
          <button onClick={addCourse} className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-bold mt-2">Adicionar Curso</button>
        </div>
      </SimpleModal>
    </div>
  );
};

const HumorSection = ({ todayMood, setTodayMood, energy, setEnergy, note, setNote }) => {
  const [isSaved, setIsSaved] = useState(false);
  const moodOptions = [{ id: 'sad', emoji: '😔', label: 'Baixo' }, { id: 'tired', emoji: '😫', label: 'Cansado' }, { id: 'neutral', emoji: '😐', label: 'Neutro' }, { id: 'happy', emoji: '🙂', label: 'Bem' }, { id: 'excited', emoji: '🤩', label: 'Ótimo' }];

  const handleSave = () => { setIsSaved(true); setTimeout(() => setIsSaved(false), 2000); };

  return (
    <div className="animate-enter pb-24 space-y-6">
      <SectionHeader title="Check-in Diário" subtitle="Acompanhe seu bem-estar" />
      <Card className="text-center !pb-8">
        <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Como você está se sentindo?</h3>
        <div className="flex justify-center gap-3 md:gap-4">
          {moodOptions.map((mood) => (
            <button key={mood.id} onClick={() => setTodayMood(mood.id)} className={`flex flex-col items-center gap-2 group transition-all duration-300 ${todayMood === mood.id ? 'scale-110 -translate-y-1' : 'opacity-60 hover:opacity-100 hover:scale-105'}`}>
              <div className={`w-14 h-14 rounded-2xl text-3xl flex items-center justify-center transition-all shadow-lg ${todayMood === mood.id ? `bg-emerald-500 text-white` : 'bg-slate-800 border border-slate-700'}`}>{mood.emoji}</div>
              <span className="text-[10px] font-bold text-slate-500">{mood.label}</span>
            </button>
          ))}
        </div>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-6"><div className="p-2 bg-yellow-500/10 rounded-lg"><Zap className="w-5 h-5 text-yellow-400" /></div><h3 className="text-white font-bold">Níveis de Energia</h3></div>
        <div className="space-y-6">
          {[{ key: 'physical', label: "Física", color: "bg-emerald-500" }, { key: 'mental', label: "Mental", color: "bg-blue-500" }, { key: 'emotional', label: "Emocional", color: "bg-purple-500" }].map((item) => (
            <div key={item.key}>
              <div className="flex justify-between items-end mb-3"><span className="text-slate-300 font-medium text-sm">{item.label}</span><span className="text-xs font-bold text-white">{energy[item.key]}%</span></div>
              <div className="relative h-2 bg-slate-800 rounded-full">
                 <div className={`absolute top-0 left-0 h-full rounded-full ${item.color}`} style={{ width: `${energy[item.key]}%` }}></div>
                 <input type="range" min="0" max="100" value={energy[item.key]} onChange={(e) => setEnergy({...energy, [item.key]: parseInt(e.target.value)})} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
              </div>
            </div>
          ))}
        </div>
      </Card>
      <div className="glass-card rounded-2xl p-1 relative group focus-within:ring-1 focus-within:ring-blue-500/50 transition-all"><div className="absolute top-4 left-4"><PenTool className="w-4 h-4 text-slate-500" /></div><textarea className="w-full bg-transparent text-sm text-slate-200 p-4 pl-10 h-24 resize-none focus:outline-none placeholder-slate-600" placeholder="Alguma nota sobre o dia de hoje?..." value={note} onChange={(e) => setNote(e.target.value)}></textarea></div>
      <button onClick={handleSave} disabled={isSaved} className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${isSaved ? 'bg-emerald-600 scale-95' : 'bg-blue-600 hover:bg-blue-500 active:scale-95'}`}>{isSaved ? <><CheckCircle className="w-5 h-5" /> Registado!</> : <><Save className="w-5 h-5" /> Salvar Registo</>}</button>
    </div>
  );
};

const PerfilSection = ({ onLogout, profile, setProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleSave = () => setIsEditing(false);

  return (
    <div className="animate-enter pb-24 space-y-6">
      <SectionHeader title="Perfil" subtitle="Identidade & Conquistas" action={<button onClick={onLogout} className="p-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-xl transition-colors"><LogOut className="w-5 h-5" /></button>} />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent rounded-3xl -z-10 h-32"></div>
        <div className="flex flex-col items-center mb-6 pt-4">
          <div className="relative group">
            <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-500 shadow-xl shadow-emerald-900/40 cursor-pointer">
              <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center overflow-hidden relative"><User className="w-12 h-12 text-slate-400" /></div>
            </div>
          </div>
          <div className="mt-4 text-center w-full max-w-xs">
            {isEditing ? (
              <div className="space-y-2 animate-enter">
                <input value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})} className="bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-1.5 text-center text-white font-bold w-full focus:border-emerald-500 outline-none" />
                <input value={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value})} className="bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-1.5 text-center text-slate-400 text-xs w-full focus:border-emerald-500 outline-none" />
              </div>
            ) : (<><h2 className="text-2xl font-bold text-white tracking-tight">{profile.name}</h2><p className="text-slate-400 text-sm">{profile.email}</p></>)}
          </div>
        </div>
      </div>
      <Card>
        <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-white">Detalhes Pessoais</h3><button onClick={() => isEditing ? handleSave() : setIsEditing(true)} className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${isEditing ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'}`}>{isEditing ? 'Salvar' : 'Editar'}</button></div>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2 border-b border-slate-700/50"><div className="flex items-center gap-3"><div className="p-2 bg-slate-800 rounded-lg"><Phone className="w-4 h-4 text-slate-400" /></div><span className="text-sm text-slate-300">Telefone</span></div>{isEditing ? (<input value={profile.phone} onChange={(e) => setProfile({...profile, phone: e.target.value})} className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-white text-right w-32 focus:border-emerald-500 outline-none" />) : (<span className="text-sm text-white font-medium">{profile.phone}</span>)}</div>
          <div className="flex items-center justify-between py-2 border-b border-slate-700/50"><div className="flex items-center gap-3"><div className="p-2 bg-slate-800 rounded-lg"><MapPin className="w-4 h-4 text-slate-400" /></div><span className="text-sm text-slate-300">Local</span></div>{isEditing ? (<input value={profile.location} onChange={(e) => setProfile({...profile, location: e.target.value})} className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-white text-right w-32 focus:border-emerald-500 outline-none" />) : (<span className="text-sm text-white font-medium">{profile.location}</span>)}</div>
        </div>
      </Card>
    </div>
  );
};

const ConfigSection = ({ settings, setSettings }) => {
  const toggle = (key) => setSettings(p => ({...p, [key]: !p[key]}));

  const SettingGroup = ({ title, children }) => (
    <div className="mb-6"><h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 ml-3">{title}</h3><div className="glass-card rounded-2xl p-1 overflow-hidden border border-slate-700/30">{children}</div></div>
  );

  const ToggleRow = ({ icon: Icon, label, value, onClick, color="text-slate-400", last }) => (
    <div className={`flex items-center justify-between p-3.5 hover:bg-white/5 transition-colors cursor-pointer ${!last ? 'border-b border-slate-700/30' : ''}`} onClick={onClick}>
      <div className="flex items-center gap-3"><div className="p-2 bg-slate-800/80 rounded-lg"><Icon className={`w-4 h-4 ${color}`} /></div><span className="text-sm font-medium text-white">{label}</span></div>
      <div className={`w-10 h-6 rounded-full relative transition-colors duration-300 ${value ? 'bg-emerald-500' : 'bg-slate-700'}`}><div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow-sm transition-transform duration-300 ${value ? 'translate-x-4' : ''}`} /></div>
    </div>
  );

  const ArrowRow = ({ icon: Icon, label, value, color="text-slate-400", last }) => (
    <button className={`w-full flex items-center justify-between p-3.5 hover:bg-white/5 transition-colors text-left group ${!last ? 'border-b border-slate-700/30' : ''}`}>
      <div className="flex items-center gap-3"><div className="p-2 bg-slate-800/80 rounded-lg"><Icon className={`w-4 h-4 ${color}`} /></div><span className="text-sm font-medium text-white">{label}</span></div>
      <div className="flex items-center gap-2">{value && <span className="text-xs text-slate-500 font-medium">{value}</span>}<ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" /></div>
    </button>
  );

  return (
    <div className="animate-enter pb-24 space-y-6">
      <SectionHeader title="Configurações" />
      <SettingGroup title="Geral">
        <ToggleRow icon={Moon} label="Modo Escuro" value={settings.darkMode} onClick={() => toggle('darkMode')} color="text-purple-400" />
        <ArrowRow icon={Globe} label="Idioma" value={settings.language} color="text-blue-400" last />
      </SettingGroup>
      <SettingGroup title="Notificações & Sons">
        <ToggleRow icon={Bell} label="Notificações Push" value={settings.notifications} onClick={() => toggle('notifications')} color="text-rose-400" />
        <ToggleRow icon={Mail} label="Alertas por Email" value={settings.emailAlerts} onClick={() => toggle('emailAlerts')} color="text-orange-400" />
        <ToggleRow icon={Volume2} label="Sons do App" value={settings.sound} onClick={() => toggle('sound')} color="text-emerald-400" />
        <ToggleRow icon={Smartphone} label="Vibração (Haptics)" value={settings.haptics} onClick={() => toggle('haptics')} color="text-slate-400" last />
      </SettingGroup>
      <SettingGroup title="Suporte">
        <ArrowRow icon={HelpCircle} label="Central de Ajuda" color="text-blue-400" />
        <ArrowRow icon={MessageSquare} label="Fale Conosco" color="text-pink-400" />
        <ArrowRow icon={Info} label="Sobre o Ordo" value="v2.1.0" color="text-slate-400" last />
      </SettingGroup>
      <button className="w-full py-4 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-2xl text-rose-400 font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 mb-4"><LogOut className="w-4 h-4" /> Sair da Conta</button>
    </div>
  );
};

// --- Main App Shell ---

export default function OrdoApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [greeting, setGreeting] = useState('Bom dia');
  const [authView, setAuthView] = useState('welcome');
  const [currentTime, setCurrentTime] = useState(new Date());

  // --- LIFTED STATE (Single Source of Truth) ---
  const [tasks, setTasks] = useState([
    { id: 1, time: '07:00', title: 'Oração & Leitura', category: 'Espiritual', completed: true, color: 'text-purple-400', date: new Date().toISOString().split('T')[0] }, 
    { id: 2, time: '08:00', title: 'Café da Manhã', category: 'Saúde', completed: true, color: 'text-rose-400', date: new Date().toISOString().split('T')[0] },
    { id: 3, time: '09:00', title: 'Code Review', category: 'Trabalho', completed: false, color: 'text-blue-400', date: new Date().toISOString().split('T')[0] },
  ]);
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Salário Mensal", cat: "Trabalho", date: "Hoje", val: 5200, type: "in" },
    { id: 2, title: "Restaurante", cat: "Alimentação", date: "Ontem", val: 128.50, type: "out" },
    { id: 3, title: "Conta de Luz", cat: "Casa", date: "05 Out", val: 240.00, type: "out" },
  ]);
  const [prayers, setPrayers] = useState([
    { id: 1, title: "Saúde da família", date: "3 dias atrás", checked: false },
    { id: 2, title: "Sabedoria no trabalho", date: "1 semana atrás", checked: false },
  ]);
  const [members, setMembers] = useState([
    { id: 1, name: "Maria", role: "Esposa", icon: "👩", color: "text-rose-400" },
    { id: 2, name: "Pedro", role: "Filho", icon: "👦", color: "text-blue-400" },
  ]);
  const [meals, setMeals] = useState([
    { id: 1, name: "Café da Manhã", time: "07:30", cal: 520, prot: 25, carb: 60, fat: 15, icon: Coffee, color: "text-orange-400", bg: "bg-orange-500/20" },
    { id: 2, name: "Almoço", time: "12:30", cal: 680, prot: 45, carb: 80, fat: 20, icon: Utensils, color: "text-red-400", bg: "bg-red-500/20" }
  ]);
  const [water, setWater] = useState(2100);
  const [courses, setCourses] = useState([
    { id: 1, title: "React Completo", platform: "Udemy", totalHours: 40, studiedHours: 24.5, color: "bg-blue-500", icon: "⚛️" },
    { id: 2, title: "Python Data Science", platform: "Coursera", totalHours: 60, studiedHours: 12, color: "bg-green-500", icon: "🐍" },
    { id: 3, title: "UI/UX Design", platform: "Alura", totalHours: 30, studiedHours: 28, color: "bg-purple-500", icon: "🎨" }
  ]);
  const [todayMood, setTodayMood] = useState('happy');
  const [energy, setEnergy] = useState({ physical: 80, mental: 65, emotional: 90 });
  const [note, setNote] = useState('');
  const [profile, setProfile] = useState({
    name: "Adriano Silva",
    email: "adriano.silva@email.com",
    phone: "(11) 98765-4321",
    location: "São Paulo, SP",
    level: 5,
    xp: 2350,
    nextLevelXp: 3000,
    plan: "Pro"
  });
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: false,
    darkMode: true,
    sound: true,
    haptics: true,
    language: 'Português (BR)'
  });

  useEffect(() => {
    const hr = new Date().getHours();
    if (hr >= 5 && hr < 12) setGreeting("Bom dia, Adriano");
    else if (hr >= 12 && hr < 18) setGreeting("Boa tarde, Adriano");
    else setGreeting("Boa noite, Adriano");

    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogin = () => setAuthView('app');
  const handleLogout = () => { setAuthView('login'); setActiveTab('dashboard'); };

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <DashboardSection greeting={greeting} setActiveTab={setActiveTab} tasks={tasks} transactions={transactions} courses={courses} meals={meals} />;
      case 'agenda': return <AgendaSection tasks={tasks} setTasks={setTasks} />;
      case 'financas': return <FinancasSection transactions={transactions} setTransactions={setTransactions} />;
      case 'deus': return <DeusSection prayers={prayers} setPrayers={setPrayers} />;
      case 'familia': return <FamiliaSection members={members} setMembers={setMembers} />;
      case 'alimentacao': return <AlimentacaoSection meals={meals} setMeals={setMeals} water={water} setWater={setWater} />;
      case 'academia': return <AcademiaSection />;
      case 'estudos': return <EstudosSection courses={courses} setCourses={setCourses} />;
      case 'humor': return <HumorSection todayMood={todayMood} setTodayMood={setTodayMood} energy={energy} setEnergy={setEnergy} note={note} setNote={setNote} />;
      case 'perfil': return <PerfilSection onLogout={handleLogout} profile={profile} setProfile={setProfile} />;
      case 'config': return <ConfigSection settings={settings} setSettings={setSettings} />;
      default: return null;
    }
  };

  if (authView === 'welcome') return <AppContainer><WelcomeScreen onComplete={() => setAuthView('login')} /></AppContainer>;
  if (authView === 'login') return <AppContainer><LoginScreen onLogin={handleLogin} onRegisterClick={() => setAuthView('register')} /></AppContainer>;
  if (authView === 'register') return <AppContainer><RegisterScreen onRegister={handleLogin} onLoginClick={() => setAuthView('login')} /></AppContainer>;

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-0 md:p-4 bg-slate-900 font-sans selection:bg-emerald-500/30">
      <GlobalStyles />
      <main className="mobile-screen w-full h-[100dvh] md:h-[850px] md:max-w-[400px] md:rounded-[2.5rem] md:border-8 border-slate-800 flex flex-col relative overflow-hidden transition-all duration-300 ease-in-out shadow-2xl">
        <div className="h-6 w-full hidden md:flex justify-between items-center px-6 pt-4 text-[10px] font-bold text-slate-400 z-50">
          <span>{currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span><div className="flex gap-1.5"><div className="w-3 h-3 bg-slate-700 rounded-full"></div><div className="w-3 h-3 bg-slate-700 rounded-full"></div><div className="w-4 h-3 bg-slate-600 rounded-[2px]"></div></div>
        </div>
        <div className={`absolute inset-0 bg-slate-900/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setSidebarOpen(false)} />
        <nav className={`absolute left-0 top-0 bottom-0 w-64 bg-[#0f172a] z-50 p-6 border-r border-slate-800 transition-transform duration-300 ease-out shadow-2xl ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center gap-3 mb-10 pt-safe"><div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/50"><Zap className="w-5 h-5 text-white" /></div><h2 className="text-xl font-bold text-white tracking-tight">Ordo <span className="text-emerald-500">Pro</span></h2></div>
          <div className="space-y-1 overflow-y-auto max-h-[600px] no-scrollbar">
            {[{ id: 'dashboard', icon: Home, label: 'Dashboard' }, { id: 'deus', icon: Heart, label: 'Tempo com Deus' }, { id: 'financas', icon: DollarSign, label: 'Finanças' }, { id: 'familia', icon: Users, label: 'Família' }, { id: 'alimentacao', icon: Utensils, label: 'Alimentação' }, { id: 'academia', icon: Dumbbell, label: 'Academia' }, { id: 'estudos', icon: BookOpen, label: 'Estudos' }, { id: 'agenda', icon: CalendarIcon, label: 'Agenda' }, { id: 'humor', icon: Smile, label: 'Humor & Energia' }, { id: 'perfil', icon: User, label: 'Perfil' }, { id: 'config', icon: Settings, label: 'Configurações' }].map((item, index) => (
              <button key={item.id} onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }} className={`nav-item w-full flex items-center space-x-3 p-3.5 rounded-xl font-medium text-sm text-left ${activeTab === item.id ? 'active' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'}`}><item.icon className="w-5 h-5" /><span>{item.label}</span></button>
            ))}
            <div className="pt-4 mt-4 border-t border-slate-800"><button onClick={() => { handleLogout(); setSidebarOpen(false); }} className="nav-item w-full flex items-center space-x-3 p-3.5 rounded-xl font-medium text-sm text-left text-rose-400 hover:bg-rose-500/10"><LogOut className="w-5 h-5" /><span>Sair</span></button></div>
          </div>
        </nav>
        <header className="flex items-center justify-between p-6 z-30 pt-safe-top">
          <IconButton icon={Menu} onClick={() => setSidebarOpen(true)} />
          <div className="flex items-center gap-3"><div className="text-right"><p className="text-xs text-slate-400 font-medium">Bem vindo,</p><p className="text-sm text-white font-bold leading-none">Adriano</p></div><div onClick={() => setActiveTab('perfil')} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-600 overflow-hidden cursor-pointer hover:border-emerald-500 transition-colors"><User className="w-full h-full p-2 text-slate-400" /></div></div>
        </header>
        <div className="flex-1 overflow-y-auto px-6 no-scrollbar relative z-10 mask-gradient-b">{renderContent()}</div>
        <div className="absolute bottom-6 left-6 right-6 z-30 pb-safe-bottom">
           <div className="glass-panel rounded-2xl p-2 flex justify-between items-center px-6 shadow-2xl shadow-black/50">
              <button onClick={() => setActiveTab('dashboard')} className={`p-3 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'text-slate-400 hover:text-white'}`}><Home className="w-5 h-5" /></button>
              <button onClick={() => setActiveTab('agenda')} className={`p-3 rounded-xl transition-all ${activeTab === 'agenda' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'text-slate-400 hover:text-white'}`}><CalendarIcon className="w-5 h-5" /></button>
              <div className="w-[1px] h-8 bg-slate-700 mx-1"></div>
              <button className="bg-white text-slate-900 p-3 rounded-xl hover:bg-slate-200 transition-colors shadow-lg"><Plus className="w-5 h-5" /></button>
           </div>
        </div>
      </main>
    </div>
  );
}