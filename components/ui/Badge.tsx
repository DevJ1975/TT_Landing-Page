import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  variant?: 'blue' | 'gold' | 'neutral';
  className?: string;
};

export default function Badge({ children, variant = 'blue', className = '' }: Props) {
  const styles =
    variant === 'gold'
      ? 'bg-gold/10 text-gold border-gold/30'
      : variant === 'neutral'
        ? 'bg-white/5 text-slate-300 border-white/10'
        : 'bg-accent/10 text-accent border-accent/30';

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono uppercase tracking-[0.2em] ${styles} ${className}`}
    >
      {children}
    </span>
  );
}
