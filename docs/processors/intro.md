---
id: introduction
title: Processors
---

A processor is the smallest building block in Promptly. It is a function that takes some input, does something with it, and returns some output. Each processor defines its own input, configuration, and output schemas. You can quickly test processors in the Processor Playground at [http://localhost:3000/playground](http://localhost:3000/playground).

## Providers

Processors are grouped into providers. They act as namespaces for processors. For example, the `OpenAI` provider hosts all processors that interact with the models provided by `Open AI` like `ChatGPT`, `Text completions`, `image generation`, etc.

Let's take a look at the providers and their processors that are available in the default installation of Promptly.

| Provider                                  | Processors                                                                                                                                       |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Anthropic](/processors/anthropic)   | Completions                                                                                                                                      |
| [Azure](/processors/azure)           | ChatGPT                                                                                                                                          |
| [Cohere](/processors/cohere)         | Generate                                                                                                                                         |
| [ElevenLabs](/processors/elevenlabs) | Text to Speech                                                                                                                                   |
| [Google](/processors/google)         | Gemini, Text to Speech                                                                                                                           |
| [HeyGen](/processors/heygen)         | Realtime Avatar                                                                                                                                  |
| [LinkedIn](/processors/linkedin)     | Profile Extractor                                                                                                                                |
| [LocalAI](/processors/localai)       | Audio Transcription, Audio Translation, ChatGPT, ChatGPT with Vision, Completions, Image generation, Image variation, Image edit, Text to Speech |
| [OpenAI](/processors/openai)         | Audio Transcription, Audio Translation, ChatGPT, ChatGPT with Vision, Completions, Image generation, Image variation, Image edit, Text to Speech |
| [Promptly](/processors/promptly)     | File Extractor, Datasource Search, HTTP API, URL Extractor, Web Browser, Static Web Browser, Text-Chat, Web Search                               |
| [Stability](/processors/stability)   | Image2Image, Text2Image                                                                                                                          |
