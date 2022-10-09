import translate from 'google-translate-api-x';

export async function translateArray(input: string[]): Promise<string[]> {
  let translated = []
  const data = await translate(input, { to: 'en' })
  for (const i of data as any) {
    translated.push(i.text)
  }
  return translated
}