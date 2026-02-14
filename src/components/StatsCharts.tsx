'use client'

type QuestionStat = {
  questionId: string
  questionText: string
  type: 'text' | 'single' | 'multiple'
  options?: Array<{ label: string; value: string }>
  distribution: Record<string, number>
  textAnswers?: string[]
}

type QuizStat = {
  quizId: string
  quizTitle: string
  totalResponses: number
  questions: QuestionStat[]
}

function BarChart({ question }: { question: QuestionStat }) {
  const entries = Object.entries(question.distribution)
  const maxCount = Math.max(...entries.map(([, count]) => count), 1)

  // Map values to labels
  const labelMap = new Map(question.options?.map((o) => [o.value, o.label]) ?? [])

  return (
    <div className="space-y-3">
      {entries.map(([value, count]) => (
        <div key={value}>
          <div className="mb-1 flex items-baseline justify-between">
            <span className="font-heading text-[13px] text-text">
              {labelMap.get(value) || value}
            </span>
            <span className="font-mono text-[12px] text-gray">{count}</span>
          </div>
          <div className="h-[6px] w-full bg-bg-muted">
            <div
              className="h-full bg-black transition-all duration-700 ease-out"
              style={{ width: `${(count / maxCount) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function TextAnswersList({ answers }: { answers: string[] }) {
  return (
    <div className="space-y-2">
      {answers.map((answer, i) => (
        <p
          key={i}
          className="border-l-2 border-border-light/40 pl-4 text-[13px] text-text-muted"
        >
          &ldquo;{answer}&rdquo;
        </p>
      ))}
    </div>
  )
}

export function StatsCharts({ stats }: { stats: QuizStat[] }) {
  return (
    <div className="space-y-16">
      {stats.map((quiz) => (
        <section key={quiz.quizId}>
          <h2 className="mb-2">{quiz.quizTitle}</h2>
          <p className="mb-8 font-mono text-[12px] uppercase tracking-[3.6px] text-gray">
            {quiz.totalResponses} responses
          </p>

          <div className="space-y-10">
            {quiz.questions.map((question) => (
              <div key={question.questionId}>
                <h5 className="mb-4">{question.questionText}</h5>
                {question.type === 'text' && question.textAnswers && question.textAnswers.length > 0 ? (
                  <TextAnswersList answers={question.textAnswers} />
                ) : (question.type === 'single' || question.type === 'multiple') &&
                  Object.keys(question.distribution).length > 0 ? (
                  <BarChart question={question} />
                ) : (
                  <p className="text-[13px] text-gray">No answers yet.</p>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
