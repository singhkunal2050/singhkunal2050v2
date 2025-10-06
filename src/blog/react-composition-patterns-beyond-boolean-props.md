---
title: React Composition Patterns: Beyond Boolean Props
description: Learn how React compound components and composition patterns can help you escape prop hell and build maintainable, scalable component APIs.
tags:
  - React
  - JavaScript
  - Web Development
  - Component Design
  - Software Architecture
  - post
date: 2025-10-06T15:26:12.203Z
---
# React Composition Patterns: Beyond Boolean Props

I recently watched Michael Paulson's excellent talk on React composition patterns, and it crystallized something I've struggled with for years: the gradual descent into prop hell that seems inevitable as React codebases scale.

## The Familiar Pattern

You build a form component for creating users. It works perfectly. Then requirements change.

You need a form for updating users. So you add an `isUpdate` boolean prop. The update flow has some differences—it should populate initial state from existing user data and skip the welcome message. So you add `hideWelcome`. Then `hideTermsAndConditions`. Then the mutation shouldn't redirect to onboarding, so you add custom success handlers.

Before long, your component looks like this:

```jsx
<UserForm 
  isUpdate
  isThread
  isDM
  hideDropzone
  hideWelcome
  hideTerms
  onlyEditName
  isSlugRequired={false}
  onCancel={handleCancel}
  onSuccess={handleSuccess}
  renderSubmit={customSubmit}
/>
```

The component itself becomes a labyrinth of conditional logic. Each boolean prop creates branching paths through the code. The implementation is now 500+ lines of nested ternaries, and nobody wants to touch it.

## A Real-World Example

Michael uses Slack's message composer as the perfect case study. This single UI component appears in multiple contexts:

- **Channels**: Global state synced across all devices
- **Channel threads**: Includes "also send to channel" checkbox
- **DM threads**: Shows "also send as direct message" option
- **Editing messages**: No attachment support, shows cancel/save buttons
- **Forwarding messages**: Ephemeral local state, submit button rendered outside the composer box

Each variant has subtle UI differences and fundamentally different state management approaches. Some maintain global state that syncs across your phone and computer. Others are completely ephemeral and discarded when dismissed.

Building this as a single component with boolean props would be a maintenance nightmare.

## The Alternative: Compound Components

Instead of configuring a monolithic component with props, we can use composition to build flexible, maintainable component APIs.

Here's the traditional approach:

```jsx
// The prop hell approach
<Composer 
  isEditing
  hideDropzone
  onCancel={handleCancel}
  renderSubmit={customSubmitButton}
/>
```

And here's the compound component approach:

```jsx
// Using composition
<ComposerProvider>
  <Composer.Frame>
    <Composer.Header />
    <Composer.Input />
    <Composer.Footer>
      <Composer.TextFormat />
      <Composer.Emoji />
      <CustomCancelButton />
      <CustomSaveButton />
    </Composer.Footer>
  </Composer.Frame>
</ComposerProvider>
```

## Why This Works

### 1. Context Over Props

The Provider component shares state and actions through React Context. Child components access exactly what they need without prop drilling. There's no need to thread props through multiple levels of components.

```jsx
function ComposerInput() {
  const { value, update } = useComposerContext();
  
  return (
    <input 
      value={value} 
      onChange={(e) => update(e.target.value)} 
    />
  );
}
```

### 2. JSX Over Conditionals

Want to disable attachment support? Simply don't render `<Composer.DropZone />`. There's no need for `{!hideDropzone && <DropZone />}` scattered throughout your component.

Each variant becomes its own distinct component tree:

```jsx
// Channel composer
<ComposerProvider>
  <Composer.DropZone />
  <Composer.Frame>
    <Composer.Header />
    <Composer.Input />
    <Composer.Footer>
      <Composer.CommonActions />
    </Composer.Footer>
  </Composer.Frame>
</ComposerProvider>

// Edit message composer (no drop zone, different actions)
<ComposerProvider>
  <Composer.Frame>
    <Composer.Header />
    <Composer.Input />
    <Composer.Footer>
      <Composer.TextFormat />
      <Composer.Emoji />
      <CancelButton />
      <SaveButton />
    </Composer.Footer>
  </Composer.Frame>
</ComposerProvider>
```

### 3. Lift State When You Need Flexibility

Consider the forward message composer. The submit button appears outside the composer box, in a modal footer. How do you give it access to the composer's state?

The traditional approach might involve lifting state to the parent and passing it back down, or using refs and imperative handlers. Both are awkward.

With compound components, you simply lift the Provider higher:

```jsx
<ForwardMessageProvider>
  <Modal>
    <Modal.Body>
      <MessagePreview />
      <Composer.Frame>
        <Composer.Input />
        <Composer.Footer>
          <Composer.CommonActions />
        </Composer.Footer>
      </Composer.Frame>
    </Modal.Body>
    
    <Modal.Footer>
      <CancelButton />
      <ForwardButton /> {/* Has access to composer state */}
    </Modal.Footer>
  </Modal>
</ForwardMessageProvider>
```

The forward button, despite being outside the composer frame, can access all the composer's state and actions because it's within the Provider's tree.

### 4. Decouple State Implementation from Interface

Different variants can use completely different state management approaches while maintaining the same interface:

```jsx
// Channel composer - global state synced across devices
function ChannelComposerProvider({ children }) {
  const { value, update, submit } = useGlobalChannelState();
  
  return (
    <ComposerContext.Provider value={{ value, update, submit }}>
      {children}
    </ComposerContext.Provider>
  );
}

// Forward composer - local ephemeral state
function ForwardComposerProvider({ children }) {
  const [value, setValue] = useState('');
  const submit = useForwardMessage();
  
  return (
    <ComposerContext.Provider value={{ 
      value, 
      update: setValue, 
      submit 
    }}>
      {children}
    </ComposerContext.Provider>
  );
}
```

To switch state management for an entire composer, you only need to change the Provider. All children remain unchanged.

## The Key Insight

Michael distills this into a simple heuristic:

> "If you have a boolean prop that determines which component tree gets rendered from the parent, you've found a good use case for composition."

When you find yourself writing code like this:

```jsx
{isEditing ? (
  <EditFooter />
) : isForwarding ? (
  <ForwardFooter />
) : (
  <DefaultFooter />
)}
```

That's a signal to reach for composition instead.

## Performance Considerations

You might worry about React Context causing unnecessary re-renders. The React Compiler handles this elegantly. When you use the compiler (which is fantastic and deserves its own article), it automatically memoizes components based on which context values they actually access.

Michael demonstrated this in the React Compiler playground—even though the context object contains multiple values, components only re-render when the specific values they use change.

## When to Use Compound Components

This pattern excels when:

- Multiple related components need to work together
- Components share state or behavior
- You need different UI variants of similar functionality
- You're building a design system or component library
- You notice yourself adding the fifth boolean prop

## When Not to Use Compound Components

Don't reach for this pattern when:

- You have simple components with only 1-2 levels
- There's no shared state to manage
- The added structure doesn't provide clear benefits
- You'd be over-engineering a straightforward UI

## Implications for AI-Assisted Development

Michael raised an interesting point about AI code generation. He's been building with tools like V0 and Cursor using these composition patterns and found that AI produces significantly fewer bugs.

The patterns we choose don't just affect human developers—they affect how well AI can help us build. Well-structured composition appears to give AI clearer constraints and better examples to work from.

This suggests that as AI becomes more integrated into our development workflow, the importance of clean architecture may actually increase rather than diminish.

## The Pattern in Practice

Here's the general approach:

1. **Create a Provider** that manages state and actions
2. **Build primitive compound components** (Frame, Input, Footer, etc.)
3. **Compose them differently** for each use case
4. **Create reusable abstractions** (like CommonActions) only when truly needed
5. **Lift Providers higher** when you need more flexibility

The beauty of this approach is that it scales. Adding a new variant doesn't require modifying a monolithic component—you simply compose the primitives in a new way.

## Conclusion

As Michael puts it: "The next time you're 15 booleans deep into your component props, just remember: composition is all you need."

The compound component pattern isn't just about avoiding prop hell. It's about building UIs that remain maintainable as they grow, that give developers clear patterns to follow, and that work well with both human intuition and AI assistance.

If you haven't watched the full talk, I highly recommend it. Michael's examples are illuminating, and the Slack composer case study really drives home how powerful this pattern can be.

---

**Watch the full talk**: [React Composition Patterns with Compound Components](https://www.youtube.com/watch?v=4KvbVq3Eg5w) by Michael Paulson