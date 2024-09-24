import { treaty } from '@elysiajs/eden'
import type { App } from '@turbobun/backend'

// @ts-expect-error
export const api = treaty<App>('localhost:3000')
