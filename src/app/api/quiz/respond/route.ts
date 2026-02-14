import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(request: Request) {
  const body = await request.json()
  const { quizId, answers, locale } = body

  if (!quizId || !answers || !Array.isArray(answers)) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const payload = await getPayload({ config })

  // Verify quiz exists
  const quiz = await payload.findByID({
    collection: 'quizzes',
    id: quizId,
  }).catch(() => null)

  if (!quiz) {
    return NextResponse.json({ error: 'Quiz not found' }, { status: 404 })
  }

  // Store response
  const response = await payload.create({
    collection: 'quiz-responses',
    data: {
      quiz: quizId,
      answers,
      locale: locale || 'cs',
    },
  })

  return NextResponse.json({ success: true, id: response.id })
}
