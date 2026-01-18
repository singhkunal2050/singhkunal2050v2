---
title: Building a Practical Backend Error Mapper for Frontend Applications
description: Learn how to build a clean, extensible error mapping system that transforms backend error codes into user-friendly messages with minimal overhead.
tags:
  - React
  - TypeScript
  - Error Handling
  - Frontend Development
  - Best Practices
  - post
date: 2026-01-18T19:05:02.632Z
readTime: 8 Minutes ⌚
---
# Building a Practical Backend Error Mapper for Frontend Applications

Error handling in frontend applications often becomes a mess of scattered try-catch blocks and inconsistent user messages. After dealing with this problem across multiple projects, I built a simple, reusable error mapping system that transforms backend error codes into user-friendly messages with minimal overhead.

Here's the straightforward approach that actually works in production.

## The Problem

Your backend returns error codes like `AUTH_001`, `PAYMENT_FAILED`, or `VALIDATION_ERROR`. Different parts of your app need different messages for the same error:

- Login form: "Invalid credentials" for `AUTH_001`
- Profile page: "Session expired, please log in" for `AUTH_001`
- Checkout: "Payment failed. Please try another card" for `PAYMENT_FAILED`

Without a system, you end up with duplicated logic, inconsistent messages, and maintenance headaches.

## The Solution: Config + Component

The solution is dead simple: one config file that maps errors, one component that renders them. No state management, no hooks drama, no over-engineering.

### Step 1: Define Your Types

```typescript
// types/error.types.ts
export type ErrorType = 'error' | 'warning' | 'info';

export type ErrorContext = 
  | 'auth' 
  | 'payment' 
  | 'form' 
  | 'api' 
  | 'network';

export interface ErrorConfig {
  title: string;
  message: string;
  type: ErrorType;
}

export interface BackendError {
  code: string;
  message?: string;
  field?: string;
}
```

### Step 2: Create the Error Config

This is your single source of truth for all error mappings:

```typescript
// config/errorConfig.ts
import { ErrorConfig, ErrorContext } from '@/types/error.types';

type ErrorMapping = {
  codes: Record<string, ErrorConfig>;
  default: ErrorConfig;
};

type ErrorConfigMap = Record<ErrorContext, ErrorMapping> & {
  default: ErrorConfig;
};

export const ERROR_CONFIG: ErrorConfigMap = {
  auth: {
    codes: {
      AUTH_001: {
        title: 'Authentication Failed',
        message: 'Invalid email or password. Please try again.',
        type: 'error',
      },
      AUTH_002: {
        title: 'Session Expired',
        message: 'Your session has expired. Please log in again.',
        type: 'warning',
      },
      // ... more auth errors
    },
    default: {
      title: 'Authentication Error',
      message: 'Unable to authenticate. Please try again.',
      type: 'error',
    },
  },

  payment: {
    codes: {
      PAYMENT_FAILED: {
        title: 'Payment Failed',
        message: 'We couldn\'t process your payment. Please check your card details.',
        type: 'error',
      },
      INSUFFICIENT_FUNDS: {
        title: 'Insufficient Funds',
        message: 'Your card was declined due to insufficient funds.',
        type: 'error',
      },
      // ... more payment errors
    },
    default: {
      title: 'Payment Error',
      message: 'Unable to process payment. Please try again.',
      type: 'error',
    },
  },

  // ... other contexts (form, api, network)

  default: {
    title: 'Unexpected Error',
    message: 'Something went wrong. Please try again.',
    type: 'error',
  },
};

// Helper function with fallback logic
export const getErrorConfig = (
  code: string,
  source?: ErrorContext
): ErrorConfig => {
  if (!source) return ERROR_CONFIG.default;
  
  const contextMapping = ERROR_CONFIG[source];
  if (!contextMapping) return ERROR_CONFIG.default;
  
  return contextMapping.codes[code] || contextMapping.default;
};
```

### Step 3: Build the ErrorState Component

A simple, stateless component with two usage patterns:

```typescript
// components/ErrorState.tsx
import React from 'react';
import { AlertCircle, AlertTriangle, Info, X } from 'lucide-react';
import { ErrorType, ErrorContext, BackendError } from '@/types/error.types';
import { getErrorConfig } from '@/config/errorConfig';

// Two usage patterns supported
type ErrorStateProps = 
  | {
      // Pattern 1: From backend error
      error: BackendError;
      source?: ErrorContext;
      onDismiss?: () => void;
      className?: string;
    }
  | {
      // Pattern 2: Direct/hardcoded usage
      title: string;
      message: string;
      type?: ErrorType;
      onDismiss?: () => void;
      className?: string;
    };

const ErrorState: React.FC<ErrorStateProps> = (props) => {
  const { onDismiss, className = '' } = props;

  // Determine which pattern is being used and get config
  let title: string;
  let message: string;
  let type: ErrorType;

  if ('error' in props) {
    // Pattern 1: Map from backend error
    const config = getErrorConfig(props.error.code, props.source);
    title = config.title;
    message = config.message;
    type = config.type;
  } else {
    // Pattern 2: Direct props
    title = props.title;
    message = props.message;
    type = props.type || 'error';
  }

  const getIcon = () => {
    switch (type) {
      case 'error':
        return <AlertCircle className="w-5 h-5" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5" />;
      case 'info':
        return <Info className="w-5 h-5" />;
    }
  };

  const getColorClasses = () => {
    switch (type) {
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  return (
    <div 
      className={`rounded-lg border p-4 ${getColorClasses()} ${className}`}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          {getIcon()}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm mb-1">
            {title}
          </h3>
          <p className="text-sm opacity-90">
            {message}
          </p>
        </div>

        {onDismiss && (
          <button
            onClick={onDismiss}
            className="flex-shrink-0 hover:opacity-70 transition-opacity"
            aria-label="Dismiss error"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorState;
```

## Usage Examples

### Example 1: Login Form

```typescript
const LoginForm = () => {
  const [error, setError] = useState<BackendError | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/auth/login', { /* ... */ });
      if (!response.ok) {
        setError(await response.json());
        return;
      }
      // Success
    } catch {
      setError({ code: 'NETWORK_ERROR' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <ErrorState 
          error={error}
          source="auth"
          onDismiss={() => setError(null)}
        />
      )}
      {/* Form inputs */}
    </form>
  );
};
```

### Example 2: Direct/Hardcoded Usage

```typescript
<ErrorState
  title="Feature Unavailable"
  message="This feature is only available to premium users."
  type="warning"
  onDismiss={() => setShowError(false)}
/>
```

### Example 3: Reusable API Hook

```typescript
export const useApi = <T,>(source: ErrorContext = 'api') => {
  const [error, setError] = useState<BackendError | null>(null);

  const execute = async (url: string, config?: RequestInit) => {
    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        setError(await response.json());
        return null;
      }
      return await response.json();
    } catch {
      setError({ code: 'NETWORK_ERROR' });
      return null;
    }
  };

  return { error, execute, source };
};

// Usage
const UserProfile = () => {
  const { error, execute, source } = useApi('api');

  useEffect(() => { execute('/api/user/profile'); }, []);

  return (
    <div>
      {error && <ErrorState error={error} source={source} />}
      {/* Render profile */}
    </div>
  );
};
```

## Extending the Config

Adding new errors is simple - just update the config:

```typescript
// Add to existing context
auth: {
  codes: {
    // ... existing codes
    AUTH_005: {
      title: 'Two-Factor Required',
      message: 'Please complete two-factor authentication.',
      type: 'info',
    },
  },
  default: { ... }
}

// Or add new context
subscription: {
  codes: {
    SUB_EXPIRED: {
      title: 'Subscription Expired',
      message: 'Please renew to continue.',
      type: 'warning',
    },
  },
  default: {
    title: 'Subscription Error',
    message: 'Issue with your subscription.',
    type: 'error',
  },
}
```

## Why This Works

**Simple Fallback Chain:**
1. Look for `error.code` in `source` context
2. Fall back to context default
3. Fall back to top-level default

**Stateless Component:**
- Props in, UI out
- No unnecessary hooks or state management
- Easy to test and debug

**Flexible API:**
- Use with backend errors: `<ErrorState error={err} source="auth" />`
- Use with hardcoded values: `<ErrorState title="..." message="..." />`

**Single Source of Truth:**
- All error mappings in one file
- Easy to maintain and extend
- TypeScript catches typos in error codes and sources

## Best Practices

1. **Coordinate with Backend**: Establish clear error code conventions with your backend team (e.g., `AUTH_xxx`, `PAYMENT_xxx`)

2. **Write User-Friendly Messages**: Avoid technical jargon. "Session expired, please log in" beats "JWT token validation failed"

3. **Use Appropriate Types**: `error` for critical issues, `warning` for recoverable problems, `info` for notifications

4. **Keep Context Specific**: Don't reuse generic codes across contexts. `AUTH_001` should mean one thing in auth context

5. **Log Original Errors**: Always log the full backend error for debugging, even when showing friendly messages

6. **Test Fallbacks**: Verify that unknown error codes gracefully fall back to context/default messages

## Conclusion

This approach gives you robust error handling without the complexity. One config file, one component, clean fallbacks. No state management libraries, no over-engineering, just a practical solution that works.

The next time your backend returns `ERR_UNKNOWN_XYZ`, your users will see a friendly message while you debug the actual error in the console.
