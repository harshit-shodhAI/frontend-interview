# Frontend Interview Project

Welcome to the Frontend Interview Project! This is a Next.js application designed to showcase your ability to build dynamic visualizations using JSON data. The project demonstrates how to create interactive data visualizations, handle real-time updates, and manage complex data transformations in a modern React-based environment. You'll work with JSON data sources to render beautiful, responsive charts and graphs while maintaining clean code practices and optimal performance.

## Features

- **Dynamic Data Visualization**: Render charts and graphs using JSON data sources.
- **Real-time Updates**: Handle real-time data updates and reflect changes in the UI.
- **Clean Code Practices**: Follow best practices for code organization, readability, and maintainability.

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Basic knowledge of React and Next.js

## Setup Instructions

1. **Clone the repository**:

```bash
  git clone https://github.com/shodh-ai/frontend-interview.git
  cd frontend-interview
```

2. **Install dependencies**:

```bash
  npm install
```

3. **Run the development server**:

```bash
  npm run dev
```

## Understanding the JSON

The JSON data structure used in this project follows a specific format designed to represent dynamic, animated content with layouts and elements. Let's break down its key components:

The root JSON object contains two main sections:

- `layout`: Defines the spatial arrangement of elements
- `elements`: Contains the actual content elements (text and equations)

### Layout Structure

The layout uses a nested array format like `[1, [2, 3], 4]` where:

- Single numbers represent standalone elements
- Nested arrays (e.g., `[2, 3]`) represent elements that should appear side-by-side
- The numbers correspond to element IDs in the elements array

### Elements Structure

Each element in the `elements` array has:

- `id`: Unique identifier matching layout references
- `type`: Either "text", "equation" or "graph"
- `frames`: Array of content frames that control timing and content

The frames contain:

- `text`, `equation` or `graphs`: The actual content (varies by type)
- `start_order`: When the frame should appear (0-based index)
- `end_order`: When the frame should disappear (null means stay visible)

For equation elements, LaTeX syntax is used for mathematical expressions. All elements support multiple frames for progressive animations or content changes.

## Task

Here’s what we’d like you to work on:

1. **Rendering the elements**: Create a React component that can render the elements based on the layout structure. You can use libraries like and `recharts` for graphs or any library of your choice. For latex we have given a package `react-latex-next` to render latex equations. You can use any other package of your choice. The elemnts must chnage with index and should have animations when fading in and out.

2. **Getting user input**: In the question you also have answer template that defines `--INSERT--` in text. You need to make a render that takes in the string and replaces the `--INSERT--` with a text input. The text input should be editable and the value should be passed to the parent component. It should also be checked for right or wrong answer given with the template itself.

We’re excited to see your creativity and problem-solving skills in action. Good luck, and have fun building!
