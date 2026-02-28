export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface Chat {
  id: string;
  title: string;
  group: string;
  messages: Message[];
}

const mockChats: Chat[] = [
  {
    id: "project-architecture",
    title: "Project Architecture Review",
    group: "Today",
    messages: [
      {
        role: "user",
        content:
          "Can you review the architecture of my React project and suggest improvements?",
      },
      {
        role: "assistant",
        content:
          "Your project follows a standard React structure. I'd recommend grouping components by feature rather than type, creating a dedicated API layer, and extracting reusable logic into custom hooks. For state management, React Context with useReducer should be sufficient at your current scale.",
      },
      {
        role: "user",
        content: "Should I use TypeScript for better type safety?",
      },
      {
        role: "assistant",
        content:
          "Yes, I'd recommend migrating to TypeScript. You'll catch bugs at compile time, get better IDE support, and the code becomes self-documenting. You can adopt it incrementally — rename files from .jsx to .tsx one at a time, starting with your data models and shared components.",
      },
    ],
  },
  {
    id: "resume-help",
    title: "Resume Work Experience",
    group: "Today",
    messages: [
      {
        role: "user",
        content:
          "Help me rewrite my work experience section for a frontend developer resume.",
      },
      {
        role: "assistant",
        content:
          "Lead with impact, not tasks. Use metrics when possible. For example, instead of 'Worked on the company website using React', try 'Built and maintained a customer-facing dashboard using React and TypeScript, serving 15,000+ monthly active users'. Use strong action verbs like built, optimized, reduced, migrated.",
      },
    ],
  },
  {
    id: "code-review",
    title: "Code Review Best Practices",
    group: "Last Week",
    messages: [
      {
        role: "user",
        content:
          "What are the best practices for conducting code reviews on a small team?",
      },
      {
        role: "assistant",
        content:
          "Review within 24 hours, start with the big picture before nitpicking style, and ask questions instead of making demands. For authors: keep PRs small (under 400 lines), write good descriptions, and self-review first. Automate what you can — linting and formatting should be in CI, not in reviews.",
      },
      {
        role: "user",
        content: "How do you handle disagreements during a review?",
      },
      {
        role: "assistant",
        content:
          "First clarify the concern — often disagreements are just miscommunication. Consider whether it affects correctness, maintainability, or is just preference. If you can't agree in 2-3 exchanges, take it to a quick call. Text is terrible for nuanced technical discussions.",
      },
    ],
  },
  {
    id: "api-integration",
    title: "API Integration Help",
    group: "January",
    messages: [
      {
        role: "user",
        content:
          "How should I structure API calls in a React app? I'm fetching directly in useEffect.",
      },
      {
        role: "assistant",
        content:
          "Create a service layer for your API calls and custom hooks to consume them. The service handles fetch logic, the hook handles state (loading, error, data) and cleanup. This separates concerns, makes things reusable, and handles race conditions with a cancelled flag in the cleanup function.",
      },
    ],
  },
  {
    id: "git-workflow",
    title: "Git Workflow Questions",
    group: "January",
    messages: [
      {
        role: "user",
        content:
          "What's the best Git branching strategy for a team of 4 developers?",
      },
      {
        role: "assistant",
        content:
          "GitHub Flow — it's simple and effective. Main is always deployable, create a feature branch for every piece of work, open a PR when ready, merge after approval and CI passes. Skip Git Flow — the develop/release/hotfix branches add overhead a small team doesn't need.",
      },
    ],
  },
  {
    id: "testing-strategy",
    title: "Testing Strategy Discussion",
    group: "January",
    messages: [
      {
        role: "user",
        content: "How should I approach testing in a React application?",
      },
      {
        role: "assistant",
        content:
          "Follow the testing trophy: static analysis (TypeScript + ESLint) catches the most bugs, then focus on integration tests with React Testing Library, unit tests for pure logic, and a few E2E tests for critical flows. Test user interactions, conditional rendering, and error states. Don't test implementation details.",
      },
    ],
  },
  {
    id: "docker-setup",
    title: "Docker Container Setup",
    group: "2025",
    messages: [
      {
        role: "user",
        content:
          "Help me create a Dockerfile for my Node.js Express app.",
      },
      {
        role: "assistant",
        content:
          "Use a multi-stage build with Alpine base for the smallest image. First stage installs production deps, second stage builds, third stage copies only what's needed. Use npm ci for deterministic installs, run as a non-root user, and don't forget a .dockerignore file.",
      },
    ],
  },
  {
    id: "performance-tips",
    title: "Performance Profiling Tips",
    group: "2025",
    messages: [
      {
        role: "user",
        content: "My React app feels sluggish. How do I find what's slow?",
      },
      {
        role: "assistant",
        content:
          "Use the React DevTools Profiler to find unnecessary re-renders — that's the most common issue. Use React.memo for expensive children, useMemo for expensive calculations, and useCallback for function props. For long lists, virtualize with react-window. Check the browser Performance tab for long tasks over 50ms.",
      },
    ],
  },
];

export default mockChats;
