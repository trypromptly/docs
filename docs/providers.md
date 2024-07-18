---
id: providers
title: Providers
sidebar_label: Providers
sidebar_position: 2
---

import addProviderConfigImage from '@site/static/img/ui/add-provider-config.png';
import openAIProviderConfigModalImage from '@site/static/img/ui/openai-provider-config-modal.png';


Providers act as namespaces in Promptly. For example, the `OpenAI` provider hosts all processors that interact with the models provided by `Open AI` like `ChatGPT`, `Text completions`, `image generation`, etc.

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
| [OpenAI](/processors/openai)         | Audio Transcription, Audio Translation, ChatGPT, ChatGPT with Vision, Completions, Image generation, Image variation, Image edit, Text to Speech |
| [Promptly](/processors/promptly)     | File Extractor, Datasource Search, HTTP API, URL Extractor, Web Browser, Static Web Browser, Text-Chat, Web Search                               |
| [Stability](/processors/stability)   | Image2Image, Text2Image                                                                                                                          |



## Provider Configuration

To provide the necessary credentials for the processors, you need to configure the providers in settings. For example, to use the `OpenAI` provider, you need to provide the API key in the settings. In order to do that, go to the settings page and click on the `Add Provider` tab. You can then add the API key for the `OpenAI` provider.

<img src={addProviderConfigImage} alt="Add Provider Configuration" style={{ maxWidth: "600px", margin: "0 auto", display: "flex", paddingTop: "20px" }} />
<p>&nbsp;</p>
Depending on the provider you are adding configuration for, you will need to provide different information. For example, for the `OpenAI` provider, you will need to provide the API key and other configuration details. Along with the provider specific configuration, you can also provide information about which `processor` or a `model` this configuration is for.

For example, with `OpenAI` as the provider, you can configure `chatgpt` processor to connect to ollama and use `llama3:latest` running via [Ollama](https://github.com/ollama/ollama) by setting `model slug` as `llama3:latest` and `Base URL` to that of Ollama instance. And you can add another `OpenAI` provider config with `*` for both `processor` and `model slug` to be used as a default configuration for all processors and models.

<img src={openAIProviderConfigModalImage} alt="OpenAI Provider Configuration Modal" style={{ maxWidth: "600px", margin: "0 auto", display: "flex", paddingTop: "20px" }} />