import { UseChatHelpers } from 'ai/react'
import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to Finnotech StockBot!
        </h1>
        <p className="leading-normal text-sm">
          Open source AI chatbot that uses function calling to render relevant
          TradingView stock market widgets.{' '}
          <span className="font-muted-foreground">
            Built with{' '}
            <ExternalLink href="https://sdk.vercel.ai">
              Vercel AI SDK{' '}
            </ExternalLink>
            and{' '}
            <ExternalLink href="https://tradingview.com">
              TradingView Widgets
            </ExternalLink>
            .
          </span>
        </p>
      </div>
    </div>
  )
}