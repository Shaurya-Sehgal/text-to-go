
# Text-To-Go

Tools for your text and check your typing speed

## Text Analysis & Modification

View statistics on your writing and change however you like. For example, you can see the reading time, word count, characters with and without spaces, the number of sentances, and the number of lines there are. You can also make your writing all uppercase/lowercase, add commas for spaces, repeat text, etc. See how much times people have clicked on certain buttons.

## Typing Speed Test

Take a WPM test and see your WPM with accuracy. See past attemps as well as the highest WPM score made.
## Contributing

Contributions are always welcome!


## API Reference

#### Get top speed

```http
  GET https://apex.oracle.com/pls/apex/shaurya_sehgal/typing/speed
```

#### Update top speed

```http
  GET https://apex.oracle.com/pls/apex/shaurya_sehgal/new/top
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`| `string` | **Required**. Username            |
| `speed`   | `string` | **Required**. Top Speed           |

## Mentor

- [@visheshpandey](https://github.com/Vishesh-Pandey)

