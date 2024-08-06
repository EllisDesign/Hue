
import { createClient } from 'contentful'

export const getClient = () => createClient({
  space : process.env.CONTENTFUL_SPACE_ID,
  accessToken : process.env.CONTENTFUL_TOKEN,
})
