---
title: This One HTML Attribute Could Save Your Web App from a Security Nightmare
author: Kunal Singh
description: Web security is a critical concern for developers, yet some of the
  most effective protective measures are often overlooked. This post explores
  how a single HTML attribute - the 'integrity' attribute - can significantly
  enhance your web app's security, safeguarding against compromised CDNs and
  malicious code injection.
tags:
  - post
  - web-security
  - cdn
  - web
date: 2024-06-29T03:05:36.570Z
image: /img/post/cover-redesign-websecurityvulnerabilities-luke_newsletter.png
imageAlt: Web Security with script Integrity
readTime: 3 Minutes ⌚
---
In the ever-evolving landscape of web development, security remains a paramount concern. Recently, a startling incident involving the polyfill.io domain served as a stark reminder of the vulnerabilities inherent in relying on external resources. This widely-used service was compromised, resulting in the distribution of malicious code to over 100,000 websites. Such events underscore the critical need for robust security measures in our web applications.

![](/img/post/integrity-example.jfif)



Fortunately, there's a powerful yet often overlooked tool at our disposal: the `integrity` attribute for `<script>` tags. This simple addition to your HTML can provide a significant layer of protection against compromised CDNs and malicious code injection. Let's dive into how it works and why you should be using it.

## Understanding the 'integrity' Attribute

The `integrity` attribute allows you to specify a cryptographic hash for an external resource. When a browser encounters a script tag with this attribute, it follows these steps:

1. Fetch the script from the specified URL
2. Compute the hash of the downloaded content
3. Compare the computed hash with the provided `integrity` value
4. Execute the script only if the hashes match

Here's what it looks like in practice:

```html
<script 
  src="https://example-cdn.com/library.js" 
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxviVZoGmoIdhtV5Hx7W72h2HE6x88z" 
  crossorigin="anonymous">
</script>
```

## Why It Matters

The beauty of the `integrity` attribute lies in its simplicity and effectiveness. If even a single character in the external script is altered – whether due to a compromised CDN, a man-in-the-middle attack, or any other form of tampering – the computed hash will not match the provided value. As a result, the browser will refuse to execute the script, protecting your application and users from potentially malicious code.

## Best Practices for Using the 'integrity' Attribute

1. Use it for all external scripts: Apply the `integrity` attribute to any script loaded from a CDN or external source.
2. Generate accurate hashes: Use tools like shasum (on macOS/Linux) or online services to generate the correct hash for your scripts.
3. Keep hashes updated: Remember to update the integrity value whenever you update the external library.
4. Combine with Subresource Integrity (SRI): Many CDNs now provide SRI hashes for their resources. Use these when available.
5. Don't forget the `crossorigin` attribute: When using `integrity`, you should also include the `crossorigin` attribute to ensure proper CORS (Cross-Origin Resource Sharing) behavior.

## Going Beyond Scripts

While we've focused on `<script>` tags, the `integrity` attribute can also be used with `<link>` tags for stylesheets. This extends the same protection to your CSS files:

```html
<link 
  rel="stylesheet" 
  href="https://example-cdn.com/styles.css" 
  integrity="sha384-1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef" 
  crossorigin="anonymous">
```

## Conclusion

In an age where web applications increasingly rely on external resources and CDNs, the `integrity` attribute stands as a simple yet powerful line of defense. By implementing this attribute across your external resources, you significantly enhance your application's resilience against compromised CDNs, man-in-the-middle attacks, and other forms of code injection.

While it's not a silver bullet for all security concerns, the `integrity` attribute is an essential tool in the modern web developer's security toolkit. As we continue to build and maintain web applications, let's make a commitment to implement this small but crucial security measure. Your users – and your future self – will thank you for it.

Remember, in the world of web development, security isn't just a feature – it's a responsibility. Stay vigilant, stay informed, and keep coding securely!

\#WebSecurity #CDNSecurity #JavaScript #WebDevelopment #SubresourceIntegrity