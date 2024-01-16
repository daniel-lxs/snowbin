import type { FC } from 'hono/jsx'
import { Layout } from './Layout'

export const What: FC = () => {
  return (
    <Layout>
      <h2>snowbin</h2>
      <p>
        Snowbin is a delightfully crafted pastebin with markdown support. Pastes
        are saved upto 7 days before being deleted.
      </p>
    </Layout>
  )
}
