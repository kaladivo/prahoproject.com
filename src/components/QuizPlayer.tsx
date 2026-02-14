'use client'

import { useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { Button } from '@/components/ui'

type QuizOption = {
  label: string
  value: string
  id: string
}

type QuizQuestion = {
  id: string
  questionText: string
  type: 'text' | 'single' | 'multiple'
  options?: QuizOption[]
  required: boolean
}

type QuizData = {
  id: string
  title: string
  description?: string
  questions: QuizQuestion[]
  thankYouMessage?: string
}

type Answer = {
  questionId: string
  value: string | string[]
}

export function QuizPlayer({ quiz }: { quiz: QuizData }) {
  const t = useTranslations('quiz')
  const locale = useLocale()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [currentAnswer, setCurrentAnswer] = useState<string | string[]>('')
  const [status, setStatus] = useState<'playing' | 'submitting' | 'done' | 'error'>('playing')

  const question = quiz.questions[currentStep]
  const totalSteps = quiz.questions.length
  const progress = ((currentStep) / totalSteps) * 100

  const canProceed = useCallback(() => {
    if (!question?.required) return true
    if (Array.isArray(currentAnswer)) return currentAnswer.length > 0
    return currentAnswer.trim().length > 0
  }, [currentAnswer, question?.required])

  function handleTextChange(value: string) {
    setCurrentAnswer(value)
  }

  function handleSingleSelect(value: string) {
    setCurrentAnswer(value)
  }

  function handleMultipleToggle(value: string) {
    setCurrentAnswer((prev) => {
      const arr = Array.isArray(prev) ? prev : []
      return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]
    })
  }

  function saveAndAdvance() {
    const newAnswers = [
      ...answers.filter((a) => a.questionId !== question.id),
      { questionId: question.id, value: currentAnswer },
    ]
    setAnswers(newAnswers)

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
      const nextQuestion = quiz.questions[currentStep + 1]
      const existingAnswer = newAnswers.find((a) => a.questionId === nextQuestion.id)
      setCurrentAnswer(existingAnswer?.value ?? (nextQuestion.type === 'multiple' ? [] : ''))
    } else {
      submitResponses(newAnswers)
    }
  }

  function goBack() {
    if (currentStep === 0) return
    // Save current answer before going back
    const newAnswers = [
      ...answers.filter((a) => a.questionId !== question.id),
      { questionId: question.id, value: currentAnswer },
    ]
    setAnswers(newAnswers)

    const prevStep = currentStep - 1
    setCurrentStep(prevStep)
    const prevQuestion = quiz.questions[prevStep]
    const existingAnswer = newAnswers.find((a) => a.questionId === prevQuestion.id)
    setCurrentAnswer(existingAnswer?.value ?? (prevQuestion.type === 'multiple' ? [] : ''))
  }

  async function submitResponses(finalAnswers: Answer[]) {
    setStatus('submitting')
    try {
      const res = await fetch('/api/quiz/respond', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quizId: quiz.id,
          answers: finalAnswers,
          locale,
        }),
      })
      if (res.ok) {
        setStatus('done')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
        <h2 className="mb-4">{t('thankYou')}</h2>
        <p className="max-w-md text-text-muted">
          {quiz.thankYouMessage || t('defaultThankYou')}
        </p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
        <p className="mb-4 text-red-600">{t('errorMessage')}</p>
        <Button onClick={() => setStatus('playing')}>{t('tryAgain')}</Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress bar */}
      <div className="mb-12">
        <div className="mb-2 flex justify-between font-mono text-[12px] uppercase tracking-[3.6px] text-gray">
          <span>{t('question', { current: currentStep + 1, total: totalSteps })}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-[2px] w-full bg-border-light/30">
          <div
            className="h-full bg-black transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div
        key={question.id}
        className="animate-fade-in"
      >
        <h3 className="mb-8 text-[24px] font-normal leading-[1.4]">
          {question.questionText}
        </h3>

        {/* Text input */}
        {question.type === 'text' && (
          <textarea
            value={currentAnswer as string}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder={t('typeAnswer')}
            rows={4}
            className="w-full border-0 border-b border-b-black bg-transparent px-0 py-3 font-heading text-[14px] text-text outline-none placeholder:text-placeholder focus:border-b-primary"
            disabled={status === 'submitting'}
          />
        )}

        {/* Single choice */}
        {question.type === 'single' && question.options && (
          <div className="space-y-3">
            {question.options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleSingleSelect(opt.value)}
                disabled={status === 'submitting'}
                className={`block w-full border px-6 py-4 text-left font-heading text-[14px] transition-all ${
                  currentAnswer === opt.value
                    ? 'border-black bg-black text-white'
                    : 'border-border-light/40 bg-transparent text-text hover:border-black'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {/* Multiple choice */}
        {question.type === 'multiple' && question.options && (
          <div className="space-y-3">
            {question.options.map((opt) => {
              const selected = Array.isArray(currentAnswer) && currentAnswer.includes(opt.value)
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleMultipleToggle(opt.value)}
                  disabled={status === 'submitting'}
                  className={`flex w-full items-center gap-4 border px-6 py-4 text-left font-heading text-[14px] transition-all ${
                    selected
                      ? 'border-black bg-black text-white'
                      : 'border-border-light/40 bg-transparent text-text hover:border-black'
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center border ${
                      selected ? 'border-white' : 'border-black'
                    }`}
                  >
                    {selected && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    )}
                  </span>
                  {opt.label}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between">
        <button
          type="button"
          onClick={goBack}
          disabled={currentStep === 0 || status === 'submitting'}
          className="font-mono text-[12px] uppercase tracking-[3.6px] text-text transition-colors hover:text-primary disabled:opacity-30"
        >
          {t('back')}
        </button>

        <Button
          onClick={saveAndAdvance}
          disabled={!canProceed() || status === 'submitting'}
        >
          {status === 'submitting'
            ? t('submitting')
            : currentStep === totalSteps - 1
              ? t('submit')
              : t('next')}
        </Button>
      </div>
    </div>
  )
}
