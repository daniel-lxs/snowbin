import type { FC } from 'hono/jsx'
import { Layout } from './Layout'
import { Button } from './Button'
import { Input } from './Input'
import { Textarea } from './Textarea'

export const Admin: FC = () => {
  return (
    <Layout>
      <script defer={true} src="/static/create.js" />
      <h2>snowbin</h2>
      <p>Delightfully crafted pastebin with {'<3'}.</p>
      <div class="w-full max-w-2xl space-y-4 p-4">
        <Textarea />
        <div class="grid grid-cols-2 gap-4">
          <Input name="Admin Key" id="key" />
          <Input name="Custom URL" id="url" />
        </div>
        <Button id="submit" text="Submit" />
        <hr />
        <div class="grid grid-cols-2 gap-4">
          <Input name="ID (/xyz)" id="id" />
          <Button name="Fetch" id="get" />
        </div>
      </div>
    </Layout>
  )
}
