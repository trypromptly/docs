---
id: advanced-usage
title: Advanced Usage
---

Promptly Sheets offer powerful capabilities for advanced users. Here are some tips and techniques to take your sheet workflows to the next level.

## Chaining Operations

You can create complex workflows by chaining operations across multiple columns. For example:

1. Column A: Input text
2. Column B: Processor_run formula to summarize the text
3. Column C: App_run formula to analyze sentiment of the summary
4. Column D: Data_transformer formula to create a final report

This chain allows you to process data through multiple steps automatically.

## Using Formulas in Cells

You can use formulas in cells to run processors, apps, or data transformers within a single cell. This feature is ideal for complex operations that require multiple steps or data from various sources.

When the "Spread output to cells" option is checked in a formula cell, the output will fill other cells if it's a list or a list of lists. This is particularly useful for generating multiple related pieces of content at once or populating a table with calculated values.

Example use case: Generate a list of product ideas and their descriptions, spreading the output across multiple cells in the sheet.
