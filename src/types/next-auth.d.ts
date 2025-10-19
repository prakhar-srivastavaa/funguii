import NextAuth from 'next-auth';\n\ndeclare module 'next-auth' {\n  interface User {\n    id: string;\n    role: string;\n  }\n\n  interface Session {\n    user: User;\n  }\n}
