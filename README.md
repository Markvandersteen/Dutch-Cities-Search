# Dutch Cities Formatter

## Build status

[![Build and Test](https://github.com/markvandersteen/Dutch-Cities-Search/workflows/Build%20and%20Test/badge.svg)](https://github.com/markvandersteen/Dutch-Cities-Search/actions)

## Description

The `dutch-cities-formatter` is a lightweight JavaScript package that provides two essential functions for handling Dutch city names: `search` and `searchOne`. These functions allow you to search for Dutch city names, correct capitalization, expand abbreviations, and handle common misspellings.

This package is particularly useful when dealing with user-generated data where city names may come in various formats with different capitalization, abbreviations, or misspellings.

## Features

- Corrects capitalization for city names.
- Expands abbreviations to full city names.
- Handles common misspellings and variations.
- Provides search capabilities for Dutch city names.
- Returns city objects with keys and titles.

## Installation

To use the `dutch-cities-formatter` package in your project, follow these steps:

1. **Install the Package**:

   You can install the package using npm or yarn:

   ```bash
   npm install dutch-cities-formatter
   ```

   or

   ```bash
   yarn add dutch-cities-formatter
   ```

2. **Import and Use**:

   Import the package into your JavaScript or TypeScript file:

   ```javascript
   // CommonJS
   const { search, searchOne } = require("dutch-cities-formatter");

   // ES modules (for modern JavaScript)
   import { search, searchOne } from "dutch-cities-formatter";
   ```

## Usage

### `search(cityName: string): City[]`

The `search` function allows you to search for Dutch city names that match the input `cityName`. It returns an array of city objects, each containing a `key`, `title`, and `categoryGroupId`.

```javascript
const matchingCities = search("amst"); // Example search for cities starting with 'amst'
console.log(matchingCities);
/* Output:
[
  { key: 'amsterdam', title: 'Amsterdam', categoryGroupId: 1 },
  { key: 'amstelveen', title: 'Amstelveen', categoryGroupId: 2 },
  // ...
]
*/
```

### `searchOne(cityName: string): City | null`

The `searchOne` function searches for a Dutch city name that most closely matches the input `cityName`. It returns a single city object that is the best match or `null` if no match is found.

```javascript
const bestMatch = searchOne("rottrdam"); // Example search for a closely matching city
console.log(bestMatch);
/* Output:
{
  key: 'rotterdam',
  title: 'Rotterdam',
  categoryGroupId: 1
}
*/
```

These functions return city objects with `key`, `title`, and `categoryGroupId`, ensuring that your Dutch city names are consistently formatted and corrected, making them suitable for various applications.

## License

This package is open-source and available under the MIT License. Feel free to use it in your projects and contribute to its development on [GitHub](https://github.com/yourusername/dutch-cities-formatter).

For more details and usage examples, please refer to the [documentation](https://github.com/yourusername/dutch-cities-formatter).

---
