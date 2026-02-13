import { QuizCard } from "@/components/quiz-card"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Quick Quiz
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Test your knowledge with this trivia question
        </p>
      </header>

      <QuizCard>
        <h2 className="mt-3 text-xl font-semibold leading-relaxed text-foreground">
          Which web browser is made by Google?
        </h2>
      </QuizCard>
    </main>
  )
}
