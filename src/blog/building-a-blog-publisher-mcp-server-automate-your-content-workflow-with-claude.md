---
title: Building a Blog Publisher MCP Server to Automate Your Content Workflow
  with Claude
author: Kunal Singh
description: Learn how to build a custom MCP server that lets Claude publish and
  manage blog posts directly to your GitHub repository. Complete with source
  code and step-by-step setup instructions.
tags:
  - MCP
  - Claude
  - Automation
  - TypeScript
  - GitHub
  - Blogging
  - Tutorial
  - AI Tools
date: 2025-08-07T14:12:00.175Z
image: /img/post/images.jpeg
imageAlt: MCP Server
readTime: 15 Minutes ⌚
---
# Building a Blog Publisher MCP Server: Automate Your Content Workflow with Claude

Have you ever wished you could publish blog posts directly from your conversations with Claude? Well, now you can! I recently built a custom MCP (Model Context Protocol) server that lets Claude publish, update, and manage blog posts in your GitHub repository automatically. Here's how it works and how you can set it up yourself.

## What is MCP and Why Should You Care?

MCP (Model Context Protocol) is Anthropic's open standard that allows AI assistants like Claude to connect with external tools and data sources. Think of it as a bridge that lets Claude interact with your applications, databases, and services directly.

Instead of copying and pasting content between Claude and your blog platform, MCP servers can automate the entire workflow. In this case, we're creating a direct pipeline from Claude conversations to your GitHub-hosted blog.

## What Our Blog Publisher MCP Can Do

The blog publisher MCP server I built provides three core functionalities:

**📝 Publish New Posts**: Ask Claude to publish a blog post, and it will create a properly formatted Markdown file with frontmatter in your GitHub repository.

**📋 List Existing Posts**: Get an overview of all your current blog posts with file sizes and dates.

**✏️ Update Posts**: Modify existing blog posts by referencing their filename.

## The Architecture

The MCP server is built with TypeScript and uses the GitHub API to interact with your repository. Here's how the flow works:

1. You ask Claude to publish or manage blog content
2. Claude calls the appropriate MCP tool
3. The MCP server processes the request and interacts with GitHub
4. Your blog repository is updated automatically
5. Claude confirms the action was completed

## Setting Up Your Own Blog Publisher MCP

### Prerequisites

Before we start, you'll need:
- Node.js 18 or higher
- A GitHub Personal Access Token
- A blog repository on GitHub
- Claude Desktop application

### Step 1: Project Setup

Create a new directory and initialize the project:

```bash
mkdir blog-publisher-mcp
cd blog-publisher-mcp
npm init -y
```

### Step 2: Install Dependencies

```bash
npm install @modelcontextprotocol/sdk dotenv
npm install -D typescript @types/node tsx
```

### Step 3: Configure TypeScript

Create a `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Step 4: Environment Configuration

Create a `.env` file with your GitHub credentials:

```bash
GITHUB_TOKEN=your_github_personal_access_token
REPO_OWNER=your_github_username
REPO_NAME=your_blog_repo_name
```

**Important**: Add `.env` to your `.gitignore` file to keep your token secure!

### Step 5: GitHub Token Setup

1. Go to GitHub.com → Settings → Developer settings → Personal access tokens
2. Generate a new token (classic) with these permissions:
   - `repo` (Full control of private repositories)
   - `public_repo` (Access public repositories)
3. Copy the token and add it to your `.env` file

### Step 6: The Main Server Code

Create `src/index.ts` with the complete MCP server implementation:

```typescript
#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { config } from 'dotenv';

// Load environment variables
config();

// GitHub API configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = process.env.REPO_OWNER;
const REPO_NAME = process.env.REPO_NAME;

if (!GITHUB_TOKEN || !REPO_OWNER || !REPO_NAME) {
  console.error('Missing required environment variables');
  process.exit(1);
}

const GITHUB_API_BASE = 'https://api.github.com';

// Utility functions
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function generateFilename(title: string): string {
  const slug = slugify(title);
  return `${slug}.md`;
}

function createFrontmatter(data: {
  title: string;
  description?: string;
  tags?: string[];
  author?: string;
  image?: string;
  imageAlt?: string;
  readTime?: string;
}): string {
  const frontmatter = ['---'];
  frontmatter.push(`title: "${data.title}"`);
  frontmatter.push(`date: "${new Date().toISOString()}"`);
  
  if (data.description) {
    frontmatter.push(`description: "${data.description}"`);
  }
  
  if (data.author) {
    frontmatter.push(`author: "${data.author}"`);
  }
  
  if (data.image) {
    frontmatter.push(`image: "${data.image}"`);
  }
  
  if (data.imageAlt) {
    frontmatter.push(`imageAlt: "${data.imageAlt}"`);
  }
  
  if (data.readTime) {
    frontmatter.push(`readTime: "${data.readTime}"`);
  }
  
  if (data.tags && data.tags.length > 0) {
    frontmatter.push('tags:');
    data.tags.forEach(tag => {
      frontmatter.push(`  - "${tag}"`);
    });
  }
  
  frontmatter.push('---');
  return frontmatter.join('\n');
}

async function githubApiRequest(endpoint: string, method = 'GET', data?: any) {
  const url = `${GITHUB_API_BASE}${endpoint}`;
  const headers = {
    'Authorization': `token ${GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

async function getFileContent(path: string): Promise<{ content: string; sha: string } | null> {
  try {
    const response = await githubApiRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`);
    return {
      content: Buffer.from(response.content, 'base64').toString('utf-8'),
      sha: response.sha
    };
  } catch (error) {
    if (error instanceof Error && error.message.includes('404')) {
      return null;
    }
    throw error;
  }
}

async function createOrUpdateFile(path: string, content: string, message: string, sha?: string) {
  const data: any = {
    message,
    content: Buffer.from(content).toString('base64'),
  };
  
  if (sha) {
    data.sha = sha;
  }

  return await githubApiRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`, 'PUT', data);
}

async function listBlogPosts(): Promise<any[]> {
  try {
    const response = await githubApiRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/contents/blogs`);
    return Array.isArray(response) ? response.filter((file: any) => file.name.endsWith('.md')) : [];
  } catch (error) {
    if (error instanceof Error && error.message.includes('404')) {
      return [];
    }
    throw error;
  }
}

// Create the MCP server
const server = new Server(
  {
    name: 'blog-publisher',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'publish_blog_post',
        description: 'Publish a new blog post to the GitHub repository',
        inputSchema: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              description: 'The title of the blog post',
            },
            content: {
              type: 'string',
              description: 'The full content of the blog post in Markdown format',
            },
            description: {
              type: 'string',
              description: 'Optional description/excerpt for the blog post',
            },
            tags: {
              type: 'array',
              items: { type: 'string' },
              description: 'Optional array of tags for the blog post',
            },
            author: {
              type: 'string',
              description: 'Optional author name for the blog post',
            },
            image: {
              type: 'string',
              description: 'Optional image path for the blog post',
            },
            imageAlt: {
              type: 'string',
              description: 'Optional alt text for the image',
            },
            readTime: {
              type: 'string',
              description: 'Optional read time for the blog post (e.g., "5 Minutes ⌚")',
            },
            filename: {
              type: 'string',
              description: 'The filename for the blog post (without extension). If not provided, will be generated from title',
            },
          },
          required: ['title', 'content'],
        },
      },
      {
        name: 'list_blog_posts',
        description: 'List existing blog posts in the repository',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'update_blog_post',
        description: 'Update an existing blog post',
        inputSchema: {
          type: 'object',
          properties: {
            filename: {
              type: 'string',
              description: 'The filename of the blog post to update (with .md extension)',
            },
            title: {
              type: 'string',
              description: 'The updated title of the blog post',
            },
            content: {
              type: 'string',
              description: 'The updated content of the blog post in Markdown format',
            },
            description: {
              type: 'string',
              description: 'Updated description/excerpt for the blog post',
            },
            tags: {
              type: 'array',
              items: { type: 'string' },
              description: 'Updated array of tags for the blog post',
            },
            author: {
              type: 'string',
              description: 'Updated author name for the blog post',
            },
            image: {
              type: 'string',
              description: 'Updated image path for the blog post',
            },
            imageAlt: {
              type: 'string',
              description: 'Updated alt text for the image',
            },
            readTime: {
              type: 'string',
              description: 'Updated read time for the blog post',
            },
          },
          required: ['filename'],
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case 'publish_blog_post': {
      const { title, content, description, tags, author, image, imageAlt, readTime, filename } = args as any;
      
      // Generate filename if not provided
      const blogFilename = filename ? `${filename}.md` : generateFilename(title);
      const path = `blogs/${blogFilename}`;
      
      // Check if file already exists
      const existingFile = await getFileContent(path);
      if (existingFile) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: A blog post with filename "${blogFilename}" already exists. Use update_blog_post to modify it or choose a different filename.`,
            },
          ],
        };
      }
      
      // Create the blog post content
      const frontmatter = createFrontmatter({
        title,
        description,
        tags,
        author,
        image,
        imageAlt,
        readTime,
      });
      
      const fullContent = `${frontmatter}\n\n${content}`;
      const commitMessage = `Add blog post: ${title}`;
      
      try {
        await createOrUpdateFile(path, fullContent, commitMessage);
        return {
          content: [
            {
              type: 'text',
              text: `Successfully published blog post "${title}" as ${blogFilename}`,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error publishing blog post: ${error instanceof Error ? error.message : 'Unknown error'}`,
            },
          ],
        };
      }
    }

    case 'list_blog_posts': {
      try {
        const posts = await listBlogPosts();
        
        if (posts.length === 0) {
          return {
            content: [
              {
                type: 'text',
                text: 'No blog posts found in the repository.',
              },
            ],
          };
        }
        
        const postList = posts.map(post => `- ${post.name} (${post.size} bytes)`).join('\n');
        return {
          content: [
            {
              type: 'text',
              text: `Found ${posts.length} blog posts:\n\n${postList}`,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error listing blog posts: ${error instanceof Error ? error.message : 'Unknown error'}`,
            },
          ],
        };
      }
    }

    case 'update_blog_post': {
      const { filename, title, content, description, tags, author, image, imageAlt, readTime } = args as any;
      const path = `blogs/${filename}`;
      
      try {
        // Get the existing file
        const existingFile = await getFileContent(path);
        if (!existingFile) {
          return {
            content: [
              {
                type: 'text',
                text: `Error: Blog post "${filename}" not found.`,
              },
            ],
          ];
        }
        
        // Parse existing frontmatter if needed (basic implementation)
        let updatedTitle = title;
        let updatedContent = content;
        
        // If only content is provided, keep existing frontmatter structure
        if (content && !title && !description && !tags && !author && !image && !imageAlt && !readTime) {
          const parts = existingFile.content.split('---\n');
          if (parts.length >= 3) {
            // Keep existing frontmatter, update content
            const existingFrontmatter = parts[1];
            updatedContent = `---\n${existingFrontmatter}---\n\n${content}`;
          } else {
            updatedContent = content;
          }
        } else {
          // Create new frontmatter with provided data
          const frontmatterData: any = {};
          
          // Extract title from existing frontmatter if not provided
          if (!title) {
            const titleMatch = existingFile.content.match(/^title: "(.+)"$/m);
            frontmatterData.title = titleMatch ? titleMatch[1] : 'Untitled';
          } else {
            frontmatterData.title = title;
            updatedTitle = title;
          }
          
          if (description) frontmatterData.description = description;
          if (tags) frontmatterData.tags = tags;
          if (author) frontmatterData.author = author;
          if (image) frontmatterData.image = image;
          if (imageAlt) frontmatterData.imageAlt = imageAlt;
          if (readTime) frontmatterData.readTime = readTime;
          
          const frontmatter = createFrontmatter(frontmatterData);
          updatedContent = `${frontmatter}\n\n${content || ''}`;
        }
        
        const commitMessage = `Update blog post: ${updatedTitle || filename}`;
        
        await createOrUpdateFile(path, updatedContent, commitMessage, existingFile.sha);
        
        return {
          content: [
            {
              type: 'text',
              text: `Successfully updated blog post "${filename}"`,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error updating blog post: ${error instanceof Error ? error.message : 'Unknown error'}`,
            },
          ],
        };
      }
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Blog Publisher MCP Server running on stdio');
}

main().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
```

### Step 7: Build Scripts

Update your `package.json` with build scripts:

```json
{
  "scripts": {
    "build": "tsc",
    "dev": "tsx src/index.ts",
    "start": "node dist/index.js"
  }
}
```

### Step 8: Configure Claude Desktop

This is where the magic happens. Add your MCP server to Claude Desktop's configuration:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "blog-publisher": {
      "command": "node",
      "args": ["/path/to/your/blog-publisher-mcp/dist/index.js"],
      "env": {
        "GITHUB_TOKEN": "your_github_personal_access_token",
        "REPO_OWNER": "your_github_username", 
        "REPO_NAME": "your_blog_repo_name"
      }
    }
  }
}
```

## How It Works in Practice

Once everything is set up, using the blog publisher is incredibly intuitive. Here are some example conversations you can have with Claude:

**Publishing a new post**:
> "Can you publish a blog post titled 'Getting Started with MCP' with content about building MCP servers?"

**Listing existing posts**:
> "Show me all my current blog posts"

**Updating a post**:
> "Update my post 'getting-started-with-mcp.md' to include a section about troubleshooting"

## Behind the Scenes: The Technical Details

The MCP server handles several important aspects automatically:

**Frontmatter Generation**: Every blog post gets properly formatted frontmatter with title, date, description, and tags.

**File Naming**: Titles are automatically converted to URL-friendly filenames with duplicate protection.

**Git Operations**: Each publish or update creates a meaningful commit message in your repository.

**Error Handling**: The server gracefully handles API limits, network issues, and file conflicts.

## Repository Structure

Your blog repository should have a `blogs/` folder where posts will be stored:

```
your-blog-repo/
├── blogs/
│   ├── getting-started-with-mcp.md
│   ├── building-blog-publisher.md
│   └── ...
├── src/
├── public/
└── package.json
```

## Real-World Benefits

After using this MCP server for a few weeks, I've noticed several improvements to my blogging workflow:

**Faster Publishing**: No more switching between applications or dealing with CMS interfaces.

**Consistent Formatting**: Every post has properly structured frontmatter and follows the same conventions.

**Version Control**: All changes are tracked in Git with meaningful commit messages.

**Seamless Editing**: I can ask Claude to update posts based on feedback or new information.

## Extending the Server

The current version includes core functionality, but there are many ways to extend it:

- **Image Upload Support**: Handle image uploads and optimize them for web
- **Draft Management**: Create and manage draft posts before publishing
- **Template System**: Use predefined templates for different post types
- **Category Organization**: Organize posts into folders by category
- **Bulk Operations**: Perform operations on multiple posts at once

## Troubleshooting Common Issues

**MCP Server Not Loading**: Ensure the path in your Claude Desktop config is correct and the server is built.

**GitHub API Errors**: Verify your token has the correct permissions and hasn't expired.

**File Not Found**: Check that your repository has a `blogs/` folder in the root directory.

**Build Failures**: Make sure you're using Node.js 18+ and all dependencies are installed.

## The Future of Content Creation

This blog publisher MCP represents something bigger than just a blogging tool. It's a glimpse into how AI assistants will integrate more deeply with our development workflows. Instead of being isolated chat interfaces, they're becoming active participants in our creative and technical processes.

As MCP adoption grows, we'll likely see similar integrations for:
- Social media management
- Documentation generation
- Code deployment
- Data analysis pipelines
- Content optimization

## Getting Started Today

The complete source code and detailed setup instructions are available, and the entire setup process takes about 15 minutes. If you're a blogger, developer, or content creator who uses Claude regularly, this MCP server can significantly streamline your publishing workflow.

The beauty of MCP is that it's completely open-source and customizable. You can modify the server to work with different platforms, add new features, or integrate with your existing tools.

Ready to automate your blogging workflow? Give it a try and let me know how it works for you!

## Resources

- [MCP Documentation](https://docs.anthropic.com/claude/docs/mcp)
- [GitHub API Documentation](https://docs.github.com/en/rest)
- [Claude Desktop Setup Guide](https://docs.anthropic.com/claude/docs/claude-desktop)

---

*This blog post was published using the very MCP server described in the article! Meta, right?*
