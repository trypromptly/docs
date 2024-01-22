---
id: introduction
title: Concepts
---

### Processors

Processors are the basic building blocks in Promptly. These provide the functionality to process the input from user or from a previous processor in a chain, take some action and optionally generate a response. Promptly comes with a few built-in processors like OpenAI's ChatGPT, Image Generation, Stability's Image Generation etc.

#### Tools

Tools are processors that can be used to perform some action when used in the context of [agents](#agents). For example, you can use `ChatGPT` processor with a prompt to generate essays as a tool in an Agent app and the agent will use the tool whenever it needs to generate an essay.

### Providers

Providers are the entities that provide the functionality to the processors. For example, OpenAI's ChatGPT processor uses OpenAI's API to generate text. Promptly comes with a few built-in providers like OpenAI, Cohere, Stability etc. Providers act as namespaces for the processors.

### Apps

Apps are the final product of Promptly. Apps are created by chaining multiple processors together. Promptly provides a visual editor to create apps. Apps can be shared with other users on Promptly. Apps can be invoked using APIs, from the UI or triggered from Slack, Discord etc.

#### Agents

Agents are the autonomous apps that can perform tasks on your behalf. Agents use the provided processors as tools to perform tasks. For example, you can create an agent to act as an SDR (Sales Development Representative) and use it to send emails to your leads, using the processors provided by Promptly as tools.

### Datasources

Datasources are used to provide context to LLMs to build applications that can perform tasks on your data. Promptly allows you to import data from various sources like CSV, PDF, URLs, Youtube etc., and use them in your apps. You can even connect to external datastores and use them as datasources in Promptly. When a datasource is created, Promptly chunks the data based on the type, creates embeddings and saves them in a vector database included in the installation. Datasources can also be shared with other users of Promptly installation in the context of an organization.

### Connections

Connections are used to store encrypted credentials for your external services like databases, APIs etc. Connections can be used in processors to connect to external services or in datasources to import data from external datastores.

### Variables

Variables are used in Promptly apps to provide dynamic values to the processors. For example, you can use variables to provide the name of the user to the processors. Variables are provided in the form `{{name}}` where `name` is the variable name. In App editor, data from previous processors/steps is available as variables and can be used in subsequent processors/steps.

:::tip
If you have questions, suggestions or need help, feel free to join our [Discord server](https://discord.gg/3JsEzSXspJ) or start a discussion on our [Github Discussions](https://github.com/trypromptly/LLMStack/discussions) page.
:::
