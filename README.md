# moose-next-framework-v2-supabase

The v2.0 of the New Moose Next Framework w/ Tailwind, Shadcn, Zustand &amp; Supabase

## Coverd in v2

- Connecting to Supabase
- Email/Password based login/logout/registration
- Route Guarding (w/ Middleware)
- Signup Confirmation Email Template
- Backend Error Message Display
- Display Current User Info on Navbar
- Blog based CRUD (basic)
- More Shadcn components

## Covered in v1

- Dashboard
- Posts Admin page
- Post Edit page w/ form and zod validation
- Login/Register page w/ form and zod validation
- Dark mode implemented

### JSON Server for testing

```
npm install json-server -g

json-server --watch --port 3002 ./data/db.json

```

### db.json

```
{
  "posts": [
    {
      "id": "1",
      "title": "Exploring OpenAI's GPT-4",
      "body": "OpenAI's GPT-4 has revolutionized the AI industry with its advanced language understanding and generation capabilities. It can generate human-like text, understand context, and even perform creative tasks. The model's applications span various domains, from customer service to content creation.",
      "author": "Ari Gold",
      "date": "2024-09-17",
      "comments": [
        {
          "id": "1",
          "text": "Great insights on GPT-4!",
          "username": "Vince Chase"
        },
        {
          "id": "2",
          "text": "Looking forward to seeing how this evolves.",
          "username": "Johnny Drama"
        }
      ]
    },
    {
      "id": "2",
      "title": "Claude: A New Player in AI",
      "body": "Claude is making waves in the AI community with its unique approach to language processing. Unlike traditional models, Claude blends rule-based methods with deep learning techniques, providing a nuanced understanding of language. It's particularly effective in specialized fields like legal and medical advice.",
      "author": "Walter White",
      "date": "2024-06-06",
      "comments": [
        {
          "id": "1",
          "text": "Claude seems promising!",
          "username": "Jesse Pinkman"
        }
      ]
    },
    {
      "id": "3",
      "title": "Gemini: Bridging AI and Humans",
      "body": "Gemini aims to bridge the gap between AI and human interaction, making it more intuitive. By leveraging advanced algorithms, Gemini can predict user needs effectively. This opens new avenues for human-computer interaction, enhancing user experience.",
      "author": "Sheldon Cooper",
      "date": "2024-08-05",
      "comments": [
        {
          "id": "1",
          "text": "This could change the way we interact with AI.",
          "username": "Leonard Hofstadter"
        },
        {
          "id": "2",
          "text": "Can't wait to try it out.",
          "username": "Penny"
        }
      ]
    },
    {
      "id": "4",
      "title": "Understanding Grock: The AI with a Twist",
      "body": "Grock introduces a new twist to AI with its innovative processing techniques. It uses a layered approach to break down complex problems, making it efficient in solving intricate issues. Grock's adaptability makes it suitable for various industries.",
      "author": "Harvey Specter",
      "date": "2024-06-24",
      "comments": [
        {
          "id": "1",
          "text": "Grock is very interesting!",
          "username": "Mike Ross"
        }
      ]
    },
    {
      "id": "5",
      "title": "Llama 2: Advancements in AI",
      "body": "Llama 2 offers significant advancements in AI, particularly in natural language understanding. It introduces features that enhance performance and accuracy, making it ideal for businesses integrating AI into operations. The model also boasts improved efficiency.",
      "author": "Richard Hendricks",
      "date": "2024-03-03",
      "comments": [
        {
          "id": "1",
          "text": "Llama 2 is a game changer!",
          "username": "Erlich Bachman"
        },
        {
          "id": "2",
          "text": "Impressive technology.",
          "username": "Dinesh Chugtai"
        }
      ]
    },
    {
      "id": "6",
      "title": "Langchain: Connecting AI Components",
      "body": "Langchain provides a framework to connect various AI components seamlessly. It simplifies the development process and enhances performance. Langchain's modular design allows developers to mix and match components based on specific needs.",
      "author": "Ross Geller",
      "date": "2024-01-02",
      "comments": [
        {
          "id": "1",
          "text": "Langchain is a useful tool for developers.",
          "username": "Rachel Green"
        }
      ]
    },
    {
      "id": "7",
      "title": "Langsmith: Crafting AI Solutions",
      "body": "Langsmith focuses on crafting tailored AI solutions for different industries. It develops customized models that deliver optimal results, ensuring businesses can leverage AI technology effectively. Langsmith's expertise spans various domains.",
      "author": "Monica Geller",
      "date": "2024-04-01",
      "comments": [
        {
          "id": "1",
          "text": "Langsmith has great potential.",
          "username": "Chandler Bing"
        },
        {
          "id": "2",
          "text": "This is very informative.",
          "username": "Joey Tribbiani"
        }
      ]
    },
    {
      "id": "8",
      "title": "Langserve: Deploying AI at Scale",
      "body": "Langserve is designed to deploy AI models at scale, ensuring efficiency and reliability. The platform provides a robust infrastructure for complex AI systems. Langserve's architecture is optimized for performance and real-time monitoring.",
      "author": "Rachel Zane",
      "date": "2024-05-01",
      "comments": [
        {
          "id": "1",
          "text": "Langserve solves a major problem.",
          "username": "Louis Litt"
        }
      ]
    },
    {
      "id": "9",
      "title": "FastAPI: The Future of AI APIs",
      "body": "FastAPI offers a modern framework for building AI-powered APIs quickly and efficiently. Its asynchronous capabilities handle multiple requests concurrently, making it ideal for high-traffic applications. FastAPI supports automatic interactive API documentation.",
      "author": "Mike Ross",
      "date": "2024-05-30",
      "comments": [
        {
          "id": "1",
          "text": "FastAPI is fast and easy to use.",
          "username": "Harvey Specter"
        },
        {
          "id": "2",
          "text": "It has improved my workflow significantly.",
          "username": "Donna Paulsen"
        },
        {
          "id": "3",
          "text": "Highly recommend FastAPI!",
          "username": "Rachel Zane"
        }
      ]
    },
    {
      "id": "10",
      "title": "Combining Langchain and FastAPI",
      "body": "Learn how to combine Langchain with FastAPI to create powerful and scalable AI applications. This combination enhances the capabilities of both frameworks, providing a comprehensive solution for AI development. The synergy between Langchain and FastAPI ensures robust and efficient AI systems.",
      "author": "Linda White",
      "date": "2024-05-29",
      "comments": [
        {
          "id": "1",
          "text": "This combination is very powerful.",
          "username": "Full-Stack Dev"
        }
      ]
    }
  ]
}

```

![Project Image](https://res.cloudinary.com/dyb0qa58h/image/upload/v1718362733/moose-framework-v2_ju94z2.png)

## Features

## Only Ui/Ux in this part w/ Shadcn and Tailwind

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
