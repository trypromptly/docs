---
id: introduction
title: Sheets
---

import ReactPlayer from "react-player";

You can use sheets to run a large amount of input against LLMs to automate your workflows in a familiar excel-like interface. With sheets, you can import your data, process it, call agents, apps or LLMs directly on this data and export the results back into a csv.

Sheets in Promptly support various data formats and column types, allowing you to create powerful workflows:

- Supports data formats like `text`, `number`, `uri`, `boolean`, `category` and more
- Populate columns with data by running LLMs or apps directly on your data with formulas like `processor_run`, `app_run` and `data_transformer`
- Use formula cells to perform complex operations on your data
- Ability to spread output across multiple cells

Below is a quick demo of what you can do with sheets. Here we are generating searching Apollo for a list of contacts with a certain title, extracting the first name, last name and their linkedin profile url into a sheet. Then we are visiting the linkedin profile url and extracting the persons profile information into the sheet. We then pass this data to GPT-4o to generate a intro message for the person into the sheet. As you can see, we can easily generate a large amount of data and use it for a variety of use cases.

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