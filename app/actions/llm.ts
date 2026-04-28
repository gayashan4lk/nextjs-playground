'use server'

import { createAgent, tool } from 'langchain'
import * as z from 'zod'

export default async function execute() {
	console.log('clicked')

	const getWeather = tool((input) => `It's always sunny in ${input.city}!`, {
		name: 'get_weather',
		description: 'Get the weather for a given city',
		schema: z.object({
			city: z.string().describe('The city to get the weather for'),
		}),
	})

	const agent = createAgent({
		model: 'google-genai:gemini-2.5-flash-lite',
		tools: [getWeather],
	})

	console.log(
		await agent.invoke({
			messages: [
				{ role: 'user', content: "What's the weather in San Francisco?" },
			],
		}),
	)
}
