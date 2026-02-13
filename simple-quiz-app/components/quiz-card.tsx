"use client"

import { useState } from "react"
import { QuizOption } from "@/components/quiz-option"

export function QuizCard({ children }: { children: React.ReactNode }) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const isCorrect = selectedAnswer === "A"

  return (
    <div className="w-full max-w-xl">
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Question 1 of 1
        </div>

        {children}

        <div className="mt-6 flex flex-col gap-3">
          <QuizOption label="A" value="A" isCorrect={true} selectedAnswer={selectedAnswer} onSelect={setSelectedAnswer}>
            Chrome
          </QuizOption>
          <QuizOption label="B" value="B" isCorrect={false} selectedAnswer={selectedAnswer} onSelect={setSelectedAnswer}>
            Firefox
          </QuizOption>
          <QuizOption label="C" value="C" isCorrect={false} selectedAnswer={selectedAnswer} onSelect={setSelectedAnswer}>
            Safari
          </QuizOption>
          <QuizOption label="D" value="D" isCorrect={false} selectedAnswer={selectedAnswer} onSelect={setSelectedAnswer}>
            Opera
          </QuizOption>
          <QuizOption label="E" value="E" isCorrect={false} selectedAnswer={selectedAnswer} onSelect={setSelectedAnswer}>
            Edge
          </QuizOption>
        </div>

        {selectedAnswer && (
          <div
            className={`mt-6 rounded-xl px-5 py-4 text-sm font-medium ${
              isCorrect
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {isCorrect
              ? "Correct! Google Chrome is developed by Google."
              : "Incorrect. The correct answer is Chrome — it is developed by Google."}
          </div>
        )}

        {selectedAnswer && (
          <button
            onClick={() => setSelectedAnswer(null)}
            className="mt-5 w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  )
}
