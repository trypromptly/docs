/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docSidebar: [
    "introduction",
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/introduction",
        "getting-started/ui",
        "getting-started/first-app",
      ],
    },
    "providers",
    {
      type: "category",
      label: "Processors",
      link: { type: "doc", id: "processors/introduction" },
      items: [
        "processors/promptly",
        "processors/openai",
        "processors/azure",
        "processors/google",
        "processors/anthropic",
        "processors/cohere",
        "processors/stability",
        "processors/elevenlabs",
        "processors/localai",
        "processors/linkedin",
        "processors/juniper",
      ],
    },
    {
      type: "category",
      label: "Apps",
      link: { type: "doc", id: "apps/introduction" },
      items: [
        "apps/types",
        "apps/builder",
        "apps/yaml",
        "apps/variables",
        "apps/templates",
        "apps/sharing",
        {
          type: "category",
          label: "Integrations",
          items: [
            "apps/integrations/web",
            "apps/integrations/embed",
            "apps/integrations/api",
            "apps/integrations/discord",
            "apps/integrations/slack",
            "apps/integrations/twilio",
            "apps/integrations/whatsapp",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Datasources",
      link: { type: "doc", id: "datasources/introduction" },
      items: [],
    },
    {
      type: "category",
      label: "Connections",
      link: { type: "doc", id: "connections/introduction" },
      items: [],
    },
    {
      type: "category",
      label: "Jobs",
      link: { type: "doc", id: "jobs/introduction" },
      items: [],
    },
    {
      type: "category",
      label: "APIs",
      link: { type: "doc", id: "apis/introduction" },
      items: [],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/realtime-avatar-with-rag",
      ],
    },
    {
      type: "category",
      label: "LLMStack",
      items: [
        "llmstack/introduction",
        "llmstack/ui",
        "llmstack/config",
        "llmstack/administration",
        "llmstack/deployment",
        "llmstack/development",
        "llmstack/contributing",
        "llmstack/add-custom-processor",
        "llmstack/add-external-datasource",
      ],
    },
  ],
};

module.exports = sidebars;
