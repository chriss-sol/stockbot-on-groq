import * as React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { PromptForm } from '@/components/prompt-form'
import { ButtonScrollToBottom } from '@/components/button-scroll-to-bottom'
import { IconShare } from '@/components/ui/icons'
import { FooterText } from '@/components/footer'
import { useAIState, useActions, useUIState } from 'ai/rsc'
import type { AI } from '@/lib/chat/actions'
import { nanoid } from 'nanoid'
import { UserMessage } from './stocks/message'

export interface ChatPanelProps {
  id?: string
  title?: string
  input: string
  setInput: (value: string) => void
  isAtBottom: boolean
  scrollToBottom: () => void
}

export function ChatPanel({
  id,
  title,
  input,
  setInput,
  isAtBottom,
  scrollToBottom
}: ChatPanelProps) {
  const [aiState] = useAIState()
  const [messages, setMessages] = useUIState<typeof AI>()
  const { submitUserMessage } = useActions()

  const exampleMessages = [
    {
      heading: 'What is the price',
      subheading: 'of tesla.?',
      message: 'What is the price of tesla stock?'
    },
    {
      heading: 'Show me a stock chart',
      subheading: 'for $GOOGL',
      message: 'Show me a stock chart for $GOOGL'
    },
    {
      heading: 'What are some recent',
      subheading: 'events about Amazon?',
      message: 'What are some recent events about Amazon?'
    },
    {
      heading: "What are Microsoft's",
      subheading: 'latest financials?',
      message: "What are Microsoft's latest financials?"
    },
    {
      heading: 'How is the stock market',
      subheading: 'performing today by sector?',
      message: 'How is the stock market performing today by sector?'
    },
    {
      heading: 'Show me a screener',
      subheading: 'to find new stocks',
      message: 'Show me a screener to find new stocks'
    }
  ]

  const [randExamples, setRandExamples] = useState<ExampleMessage[]>([])

  interface ExampleMessage {
    heading: string
    subheading: string
    message: string
  }

  useEffect(() => {
    const shuffledExamples = [...exampleMessages].sort(() => 0.5 - Math.random())
    setRandExamples(shuffledExamples)
  }, [])

  return (
    <div className="w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% duration-300 ease-in-out animate-in dark:from-background/10 dark:from-10% dark:to-background/80">
      <ButtonScrollToBottom
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />

      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <div className="mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0">
          {messages.length === 0 &&
            randExamples.map((example, index) => (
              <div
                key={example.heading}
                className={`cursor-pointer border bg-zinc-800/40 p-4 hover:bg-zinc-800/60 ${
                  index >= 4 ? 'hidden md:block' : ''
                } ${index >= 2 ? 'hidden 2xl:block' : ''}`}
                onClick={async () => {
                  setMessages(currentMessages => [
                    ...currentMessages,
                    {
                      id: nanoid(),
                      display: <UserMessage>{example.message}</UserMessage>
                    }
                  ])

                  const responseMessage = await submitUserMessage(example.message)
                  setMessages(currentMessages => [
                    ...currentMessages,
                    responseMessage
                  ])
                }}
              >
                <div className="text-sm font-semibold text-zinc-100">
                  {example.heading}
                </div>
                <div className="text-sm text-zinc-400">
                  {example.subheading}
                </div>
              </div>
            ))}
        </div>

        <div className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:border md:py-4">
          <PromptForm input={input} setInput={setInput} />
          <div className="text-center text-xs text-muted-foreground">
            StockBot may provide inaccurate information and does not provide investment advice.
          </div>
        </div>
      </div>
    </div>
  )
}