---
id: slack
title: Slack
---

To call your Promptly app from Slack through app mentions in channels or by direct messaging the app, you need to first create a Slack app in your Slack workspace and use that configuration in your app's `Integration -> Slack` configuration. Follow the steps below to set up a Slack app to call your Promptly app.

![Slack Integration](/img/ui/slack.png)

## Create a Slack App

To create a Slack app, visit [https://api.slack.com/apps](https://api.slack.com/apps) and click the `Create New App` button. Pick `From scratch`, you’ll be prompted to give your app a name and select a workspace to install it in. Once you’ve done that, you’ll be taken to the app configuration page.

Click on `OAuth & Permissions` under `Features` section in the sidebar and add the following scopes under `Scopes` section:

**Bot Token Scopes:** `app_mentions:read`, `channels:history`, `channels:read`, `chat:write`, `chat:write.customize`, `chat:write.public`, `commands`, `groups:history`, `im:history`, `im:read`, `im:write`, `incoming-webhook`, `mpim:history`, `mpim:read`, `mpim:write`, `users:read`, `users:read.email`

**User Token Scopes:** `channels.read`, `chat.write`, `users.profile:read`, `users:read`

Once added, click on `Install to Workspace` button under `OAuth Tokens for the workspace` section. You’ll be prompted to authorize the app to be installed in your workspace. Click `Allow` to install the app in your workspace. Once done, you’ll be taken back to the app configuration page where you can see `Bot User OAuth Token`.

## Connect the Slack App to Promptly App

:::tip
Your Promptly app needs to be publicly reachable for Slack to be able to call it. If you are running Promptly locally, you can use a tool like [ngrok](https://ngrok.com/) to make your app publicly reachable. Or you can use [Promptly](https://trypromptly.com), which is a hosted version of Promptly.
:::

Go to `Integrations -> Slack` in the Promptly App and fill in the information in the form from the Slack app configuration page. Click `Save` to save the Promptly app configuration.

Now go to your Slack app’s configuration page and click on `Event Subscriptions` under `Features` section in the sidebar. Turn on `Enable Events` and paste the URL from the Promptly app’s Slack configuration page. Click `Save Changes` to save the configuration.

After this, you’ll need to subscribe to the following bot events under `Subscribe to Bot Events` section:

`app_mention`, `message.channels`, `message.groups`, `message.im`, `message.mpim`.

Click `Save Changes` to save the configuration. You’ll be prompted to reinstall the app in your workspace. Click `Reinstall App` to reinstall the app in your workspace. 

To facilitate direct messaging with the app, access `App Home` under the `Features` section and activate the `Messages Tab` in the `Show Tabs` section.

With these settings configured, you can now add the app to your Slack channels and interact with it. This interaction will activate the LLM app and return the output.
