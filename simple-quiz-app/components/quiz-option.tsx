"use client"

import { cn } from "@/lib/utils"

interface QuizOptionProps {
  label: string
  value: string
  isCorrect: boolean
  selectedAnswer: string | null
  onSelect: (value: string) => void
  children: React.ReactNode
}

export function QuizOption({
  value,
  isCorrect,
  selectedAnswer,
  onSelect,
  children,
}: QuizOptionProps) {
  const isSelected = selectedAnswer === value
  const hasAnswered = selectedAnswer !== null
  const showCorrect = hasAnswered && isCorrect
  const showIncorrect = isSelected && !isCorrect

  return (
    <button
      onClick={() => !hasAnswered && onSelect(value)}
      disabled={hasAnswered}
      className={cn(
        "w-full rounded-xl border-2 px-5 py-4 text-left text-base font-medium transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        !hasAnswered &&
          "border-border bg-card text-card-foreground hover:border-primary hover:bg-primary/5 cursor-pointer",
        showCorrect && "border-emerald-500 bg-emerald-50 text-emerald-800",
        showIncorrect && "border-red-500 bg-red-50 text-red-800",
        hasAnswered && !showCorrect && !showIncorrect && "border-border bg-muted/40 text-muted-foreground opacity-60"
      )}
      aria-label={`Option: ${children}`}
    >
      <span className="flex items-center gap-3">
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-colors",
            !hasAnswered && "border-muted-foreground/30 text-muted-foreground",
            showCorrect && "border-emerald-500 bg-emerald-500 text-white",
            showIncorrect && "border-red-500 bg-red-500 text-white",
            hasAnswered && !showCorrect && !showIncorrect && "border-muted-foreground/20 text-muted-foreground/60"
          )}
        >
          {showCorrect ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
          ) : showIncorrect ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          ) : (
            value
          )}
        </span>
        <span>{children}</span>
      </span>
    </button>
  )
}
