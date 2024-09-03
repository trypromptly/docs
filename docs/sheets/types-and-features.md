---
id: types-and-features
title: Types and Features
---

Promptly Sheets offer a variety of column types and features to help you create powerful workflows. Let's explore the different options available:

## Column Data Formats

Sheets support these static data formats for columns:

1. **Text**: For storing and manipulating text data.
2. **Number**: For numerical data and calculations.
3. **URI**: For storing and working with web addresses and other URIs.

Along with the static data formats, you can also use these dynamic column types:

### 1. Processor Run

This column type allows you to use data from other columns in the same row to call processors like OpenAI Chat Completions, image generations, and more. The output of the processor will fill the cell in that column. Using the output template, you can specify how the output will be structured.

Example use case: Generate a summary of a longer text stored in another column.

<img src="/img/ui/sheet-processor-run-column-type.png" alt="Processor_run" width="300px" />

### 2. App Run

With this column type, you can call apps or LLM agents that are already built into Promptly and fill the cell with their output. This is useful for more complex operations that require multiple steps or specific app functionality.

Example use case: Use a custom app to analyze sentiment of customer feedback stored in another column.

<img src="/img/ui/sheet-app-run-column-type.png" alt="App_run" width="300px" />

### 3. Data Transformer

This type enables you to take output from other cells and apply LiquidJS templates to generate new data. It's perfect for formatting, combining, or transforming data from multiple sources.

Example use case: Combine a customer's name and purchase history into a personalized email template.

<img src="/img/ui/sheet-data-transformer-column-type.png" alt="Data_transformer" width="300px" />

## Formula Cells

Along with the dynamic column types, you can also use formula cells to run processors, apps, or data transformers within a single cell. This feature is ideal for complex operations that require multiple steps or data from various sources.

When the "Spread output to cells" option is checked in a formula cell, the output will fill other cells if it's a list or a list of lists. This is particularly useful for generating multiple related pieces of content at once or populating a table with calculated values.

<img src="/img/ui/sheet-cell-formula-options.png" alt="Formula_cell" width="300px" />

Example use case: Generate a list of product ideas and their descriptions, spreading the output across multiple cells in the sheet.

In the next section, we'll explore how to work with these different column types and features in practice.