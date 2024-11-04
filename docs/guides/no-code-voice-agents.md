---
id: no-code-voice-agents
title: No-code Voice Agents with OpenAI Realtime API and Twilio Voice
description: Use Promptly's voice agents to build voice AI agents without writing any code.
---

import voiceAgentTemplateImage from '@site/static/img/ui/voice-agent-template.png';
import voiceAgentConfigurationImage from '@site/static/img/ui/voice-agent-configuration.png';
import voiceAgentToolsImage from '@site/static/img/ui/voice-agent-tools.png';
import voiceAgentTwilioIntegrationImage from '@site/static/img/ui/voice-agent-twilio-integration.png';

With the availability of multi-modal models, it is now possible to build agents that can not only understand and generate text, but also understand and generate speech. Promptly allows you to build voice agents on top of these models without writing any code. 

In this guide, we will build a voice agent that a user can call and have a conversation with. We will use OpenAI's newly released [Realtime API](https://openai.com/index/introducing-the-realtime-api/) as the backend for the voice agent, and Twilio's Voice API to connect the voice agent to the phone number. We will also provide this agent with a few tools to help it answer questions.

:::info
This guide assumes that you have the following:
- A Promptly account. If you don't have one, you can sign up for free at [https://www.trypromptly.com](https://www.trypromptly.com).
- An OpenAI API key that has access to the [Realtime API](https://platform.openai.com/docs/guides/realtime).
- A Twilio account with a phone number.
:::

Before we begin, make sure to add your OpenAI API key with Realtime API access to Promptly by creating a provider in [settings](https://trypromptly.com/settings).

## Create a new voice agent

Go to the apps section at [https://trypromptly.com/apps](https://trypromptly.com/apps), scroll down to the blank templates section and click on the **Voice Agent** template. Give a name, description and an optional icon to your agent.

Click on **Create App** to create your agent. You should be redirected to the agent's editor page.

<img src={voiceAgentTemplateImage} alt="Voice_agent_template" />

## Configuration

You can configure the agent's prompt and add tools in the app's configuration section. In the **System Message** field, you can add a prompt that describes how the agent should behave. This will be fed into the model as a part of the prompt. Choose **MultiModal** as the backend for the agent. You will find the fields to provide model configuration and other configuration here.

<img src={voiceAgentConfigurationImage} alt="Voice_agent_configuration" />

### Tools

We will add a few tools to help the agent answer questions. Select by first picking a provider and then selecting the tool from the list of available tools. Click on **+ Tool** to add the tool to the agent. For this demo, we will add three tools:

- **Datasource Search**: This allows the agent to search for information from a datasource. Specifically, we will use a datasource that contains information about Promptly platform.
- **Web Search**: This tool allows the agent to search the web for information.
- **Browser**: This tool allows the agent to open websites and navigate through them.

<img src={voiceAgentToolsImage} alt="Voice_agent_tools" />

Configure the tools by providing the necessary parameters. For example, the **Datasource Search** tool requires you to provide the datasources to search from. You can use the dropdown to select the datasource or click on **+** button to add a new datasource and upload the data.

## Save and publish

Once you are done with the configuration, click on **Save App** to save the agent. Then click on **Publish** at the top right to publish the agent.

## Test your agent

Go to the **Preview** tab from the left sidebar to test your agent. To test the agent, click on the play button at the bottom right. Agent should start talking. You can type in the input field to chat with the agent or you can click on the **Voice** button to talk to the agent. Once you are done, click on the **Stop** button to stop the agent and end the conversation.

## Connect to Twilio

To connect your agent to a phone number and call it, you need to configure the Twilio integration in the app's configuration section. Before you start, make sure to get the Twilio account SID and Auth Token from your [Twilio account dashboard](https://console.twilio.com/). Navigate to the Twilio integration settings on the left sidebar and provide the account SID and Auth Token along with the phone number you want to connect to your agent. Check the ** Auto-configure Twilio Voice Webhook** option to automatically configure the Twilio Voice webhook for your agent. Click on **Save App** to save the Twilio integration settings. Once you see the save successful message, you are ready to call your agent.

<img src={voiceAgentTwilioIntegrationImage} alt="Voice_agent_twilio_integration" />

## Next steps

With a combination of tools and the ability to connect to external services, you can build a lot of interesting voice agents. Here are a few ideas:

- **Customer Support**: Build a voice agent that can answer questions about your product and help customers with their queries.
- **Sales**: Build a voice agent that can help with sales by answering questions about your product and helping with the sales process.
- **Scheduling**: Build a voice agent that can help with scheduling meetings by answering questions about the schedule and helping with the scheduling process.

:::tip
You can build these voice agents locally on your machine by using [LLMStack](https://github.com/trypromptly/llmstack) and following the instructions in this guide. Learn more about LLMStack [here](/llmstack/introduction).
:::