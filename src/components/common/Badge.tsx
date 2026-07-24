import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'cyan' | 'purple' | 'emerald' | 'warning' | 'neutral';
  pulse?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  pulse = false,
  className = '',
  icon
}) => {
  const variantStyles = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    neutral: 'bg-slate-800 text-slate-300 border-slate-700'
  };

  const dotColors = {
    blue: 'bg-blue-400',
    cyan: 'bg-cyan-400',
    purple: 'bg-purple-400',
    emerald: 'bg-emerald-400',
    warning: 'bg-amber-400',
    neutral: 'bg-slate-400'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border tracking-wide uppercase ${variantStyles[variant]} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant]}`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColors[variant]}`}></span>
        </span>
      )}
      {icon}
      <span>{children}</span>
    </span>
  );
};
