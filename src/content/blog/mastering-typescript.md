---
title: "Mastering TypeScript"
date: "2024-02-20"
description: "Tips and tricks to level up your TypeScript skills — from utility types to discriminated unions and advanced type inference."
tags: ["TypeScript", "Programming"]
---

TypeScript has won. The question is no longer "should I use TypeScript" but "am I using TypeScript effectively?" After years of working in large TypeScript codebases, I've identified the patterns and features that separate developers who fight TypeScript from those who harness it.

## Stop Reaching for `any`

The fastest way to make TypeScript useless is to overuse `any`. It turns off type checking entirely for that variable, defeating the purpose.

The better alternatives:

```typescript
// For values of truly unknown type, use unknown
function parseJSON(raw: string): unknown {
  return JSON.parse(raw);
}

// Then narrow it before use
function getConfig(raw: string) {
  const data = parseJSON(raw);

  // Type guard to narrow unknown → specific type
  if (
    typeof data === 'object' &&
    data !== null &&
    'apiKey' in data &&
    typeof (data as any).apiKey === 'string'
  ) {
    return data as { apiKey: string };
  }

  throw new Error('Invalid config format');
}
```

`unknown` forces you to check the type before using it. `any` silently skips all checks. Prefer `unknown` for external data, use type guards to narrow it.

## Discriminated Unions Are Your Best Friend

The most powerful pattern in TypeScript for modeling state is the discriminated union. It makes invalid states unrepresentable:

```typescript
// Bad: all optional fields, any combination is valid
type FetchState = {
  loading?: boolean;
  data?: User[];
  error?: string;
};

// Good: only valid states are representable
type FetchState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: User[] }
  | { status: 'error'; error: string };

function renderState(state: FetchState) {
  switch (state.status) {
    case 'idle':
      return <EmptyState />;
    case 'loading':
      return <Spinner />;
    case 'success':
      // TypeScript knows `state.data` exists here
      return <UserList users={state.data} />;
    case 'error':
      // TypeScript knows `state.error` exists here
      return <ErrorMessage message={state.error} />;
  }
}
```

The `status` literal type is the **discriminant** — TypeScript uses it to narrow each branch. If you add a new state to the union and forget to handle it in the switch, TypeScript will warn you at compile time.

## Utility Types You Should Know

TypeScript's built-in utility types are underused. Here are the ones I reach for most:

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

// Partial: all fields optional
type UserUpdate = Partial<User>;

// Pick: only specified fields
type UserPreview = Pick<User, 'id' | 'name'>;

// Omit: all fields except specified
type CreateUser = Omit<User, 'id' | 'createdAt'>;

// Required: all fields mandatory (reverse of Partial)
type StrictUser = Required<User>;

// Readonly: prevents mutation
type FrozenUser = Readonly<User>;

// Record: key-value mapping with typed keys and values
type RolePermissions = Record<User['role'], string[]>;
// Equivalent to: { admin: string[]; user: string[] }
```

Composing these utility types lets you derive types from each other, keeping your code DRY:

```typescript
// API response wrapper reused across your app
type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };

type GetUserResponse = ApiResponse<User>;
type GetUsersResponse = ApiResponse<User[]>;
```

## Template Literal Types

TypeScript's template literal types let you create types from string patterns:

```typescript
type EventName = 'click' | 'focus' | 'blur';
type HandlerName = `on${Capitalize<EventName>}`;
// Result: 'onClick' | 'onFocus' | 'onBlur'

// Practical: typed CSS custom properties
type ColorToken = 'primary' | 'secondary' | 'accent';
type CssVar = `--color-${ColorToken}`;
// Result: '--color-primary' | '--color-secondary' | '--color-accent'

function setCssVar(property: CssVar, value: string) {
  document.documentElement.style.setProperty(property, value);
}

setCssVar('--color-primary', 'oklch(68% 0.185 149)'); // Valid
setCssVar('--color-invalid', 'red'); // TypeScript error!
```

## Type Inference in Practice

Let TypeScript infer as much as possible. Over-annotating creates maintenance burden:

```typescript
// Over-annotated — TypeScript already knows these types
const items: Array<string> = ['a', 'b', 'c'];
const doubled: Array<number> = [1, 2, 3].map((n: number): number => n * 2);

// Better — let inference work
const items = ['a', 'b', 'c']; // inferred: string[]
const doubled = [1, 2, 3].map(n => n * 2); // inferred: number[]
```

Do annotate function parameters and return types at public API boundaries:

```typescript
// Annotate function signatures explicitly
export async function createUser(
  input: CreateUser
): Promise<ApiResponse<User>> {
  // Implementation — TypeScript infers local variables
  const id = crypto.randomUUID(); // string
  const createdAt = new Date(); // Date
  const user = { id, createdAt, ...input }; // User
  return { success: true, data: user };
}
```

## The `satisfies` Operator

Introduced in TypeScript 4.9, `satisfies` lets you validate a value against a type while preserving the most specific inferred type:

```typescript
const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
} satisfies Record<string, string | number[]>;

// palette.red is inferred as number[] (not string | number[])
// palette.green is inferred as string (not string | number[])
// TypeScript validates the shape AND preserves specificity
const redComponent = palette.red[0]; // number ✓
const greenUpper = palette.green.toUpperCase(); // string ✓
```

Without `satisfies`, you'd either lose type precision (with an explicit annotation) or skip validation (with pure inference).

## Strict Mode Is Non-Negotiable

Always enable strict mode in `tsconfig.json`. It enables a collection of checks that catch real bugs:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true
  }
}
```

`noUncheckedIndexedAccess` is particularly valuable — it marks array/object access as potentially `undefined`, forcing you to handle the case where an index doesn't exist.

## Conclusion

TypeScript's type system is more powerful than most developers realize. Discriminated unions make invalid states impossible. Utility types let you derive types from your domain model. Template literal types bring type safety to string patterns. And strict mode catches entire categories of runtime errors at compile time.

The investment in learning these patterns pays compound interest: every function you write becomes self-documenting, every refactor becomes safer, and every runtime error you catch at compile time is a bug you never have to debug in production.
