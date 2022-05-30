import type {
  ChatInputApplicationCommandData,
  Client,
  BaseCommandInteraction,
  ApplicationCommandChoicesData,
  Message,
  MessageOptions
} from 'discord.js'
import { DateTime, StringUnitLength } from 'luxon'

export interface Command extends ChatInputApplicationCommandData {
  ephemeral?: boolean
  run: (
    client: Client,
    interaction: BaseCommandInteraction | Message
  ) => Promise<Omit<MessageOptions, 'reply' | 'stickers' | 'flags'>>
}

export function processTime(date: Date) {
  const diff = DateTime.now().diff(DateTime.fromISO(date.toISOString()), [
    'seconds',
    'milliseconds'
  ])

  if (diff.seconds >= 1) return `${diff.seconds}.${diff.milliseconds} s`
  return `${diff.milliseconds} ms`
}

export const campusOptions: ApplicationCommandChoicesData = {
  name: 'campus',
  description: 'from which campus do you need data ?',
  type: 'STRING',
  choices: [
    {
      name: 'Bordeaux',
      value: 'FR/BDX'
    },
    {
      name: 'Lille',
      value: 'FR/LIL'
    },
    {
      name: 'Lyon',
      value: 'FR/LYN'
    },
    {
      name: 'Marseille',
      value: 'FR/MAR'
    },
    {
      name: 'Mulhouse',
      value: 'FR/MLH'
    },
    // {
    //   name: 'Moulin',
    //   value: 'FR/MLN'
    // },
    {
      name: 'Montpellier',
      value: 'FR/MPL'
    },
    {
      name: 'Nantes',
      value: 'FR/NAN'
    },
    {
      name: 'Nice',
      value: 'FR/NCE'
    },
    {
      name: 'Nancy',
      value: 'FR/NCY'
    },
    {
      name: 'Paris',
      value: 'FR/PAR'
    },
    {
      name: 'Rennes',
      value: 'FR/REN'
    },
    {
      name: 'La Réunion',
      value: 'FR/RUN'
    },
    {
      name: 'Strasbourg',
      value: 'FR/STG'
    },
    {
      name: 'Toulouse',
      value: 'FR/TLS'
    },
    {
      name: 'Cotonou',
      value: 'BJ/COT'
    }
  ]
}

interface detail {
  id: string
  name: string
  count: number
}
export interface Profile {
  id: string
  aliases: string[]
  name: string
  picture: string
  course: detail
  promo: detail
  city: detail
  groups: ({
    path: string
    depth: number
  } & detail)[]
  semester: detail
  out: boolean
}