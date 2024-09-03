---
id: introduction
title: Sheets
---

import ReactPlayer from "react-player";

You can use sheets to run a large amount of input against LLMs to automate your workflows in a familiar excel-like interface. With sheets, you can import your data, process it, call agents, apps or LLMs directly on this data and export the results back into a csv.

Sheets in Promptly support various data formats and column types, allowing you to create powerful workflows:

- Supports static formats like `text`, `number`, `uri`
- `processor_run`, `app_run`, and `data_transformer` column types to run agents, apps or LLMs on the data
- Formula cells for complex operations
- Ability to spread output across multiple cells

Below is a quick demo of what you can do with sheets. Here we are generating a list of words using `gpt-4o-mini`, expanding them into the column and using those values to generate a short story about them with another call to `gpt-4o-mini` in the second column.

<ReactPlayer
  playing
  controls
  url="/videos/sheets-demo.mp4"
  width="900px"
  height="500px"  
  loop
/>

<br />

In the following sections, we'll explore the various features and capabilities of Sheets in Promptly.