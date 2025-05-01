'use client';

import { useState } from 'react';
import styles from '../styles/Home.module.css';

const questions = [
  `Your customer is Christy (she/her), a project manager for the marketing department of a wearable tech company – in charge of making sure the marketing pages meet their core web vitals, SEO best practices, and conversion rate goals.`,
  `Your Enterprise customer is Trevor (they/them), a full-stack senior developer at a music streaming service using Next.js App Router. They have a milestone on their roadmap to add generative AI to their service so that users can create playlists suited to their tastes.`,
  `Your customer is an SMB with yearly revenue about $5.5 million, 20
employees total with one developer. They have a $22K ARR Vercel
subscription. The executive sponsor is the VP of marketing and
Vercel hosts their marketing pages. They have a reverse proxy in
front of Vercel (Cloudflare) and history shows some errors in their
builds. The manager’s name is Alex (she/her), Engineering Manager.
The champion, Tanner – the lead on the project – it is found out, has
left the company`,
  "What is your favorite thing to do outside of work?"
];

const answers = [
  `<p>
Hi Christy,<br><br>

Thank you for reaching out with your question — it's a great one, especially given your focus on performance, SEO, and conversion rates.<br><br>

<strong>React</strong> is a powerful JavaScript library for building user interfaces, especially dynamic ones. It’s flexible, component-based, and has a huge ecosystem, which makes it a great choice for building modern web apps. However, React on its own is just the UI layer — it doesn’t include features like routing, server-side rendering, or performance optimization out of the box.<br><br>

<strong>Next.js</strong>, on the other hand, is a <strong>framework built on top of React</strong>. It includes all the strengths of React but adds enterprise-grade tools and optimizations that are particularly valuable for teams like yours. Here's how it aligns with your goals:<br><br>

<strong>Core Web Vitals</strong><br>
Next.js focuses heavily on performance. It includes automatic code splitting, so only the code needed for a specific page is loaded; image optimization with the image component for responsive, lazy-loaded images, which makes images only load when needed which improves performance, and built-in performance metrics to monitor and improve load times and interaction speed — directly tied to Core Web Vitals.<br><br>

<strong>SEO Best Practices</strong><br>
Unlike plain React apps (which are client-rendered), Next.js supports <strong>server-side rendering (SSR)</strong> and <strong>static site generation (SSG)</strong> out of the box. This means pages can be pre-rendered for fast loads and better indexing; meta tags and structured data are easier to manage; and Google can crawl your content more effectively.<br><br>
On top of that, Next.js also makes it easier for your team to A/B test, which is crucial for conversion rate optimization.<br><br>

<strong>Conversion Rate Goals</strong><br>
Fast-loading pages and SEO-friendly content directly improve engagement and reduce bounce rates — both of which contribute to higher conversions. Next.js also supports A/B testing tools, analytics integrations, and <strong>Incremental Static Regeneration</strong> so you can update landing pages without full redeploys — ideal for marketing needs.<br><br>

<strong>Out of a nutshell</strong><br>
If React is the engine, Next.js is the whole car — built for performance, scalability, and ease of use. For your marketing site, where speed, SEO, and conversions matter most, Next.js is a strategic choice that reduces development friction while aligning tightly with your business KPIs.<br><br>

Let me know if you'd like a technical deep-dive or even a live demo.<br><br>

Best regards,<br>
Ricardo
</p>`,
  `<p>
Hi Trevor,<br><br>

Great question — and yes, fluid compute is shaping up to be the next major evolution in the way we think about deploying and scaling modern apps, especially for teams like yours working with Next.js and exploring generative AI.<br><br>

<strong>What is Fluid Compute?</strong><br>
Fluid compute is a shift in how compute resources are provisioned and scaled. While serverless introduced the idea of scaling functions on demand, it still often required developers to predefine which parts of the app run serverless (e.g., API routes, edge functions). Fluid compute removes this friction by making compute context-aware, dynamic, and location-flexible — in other words, compute adapts to the needs of the request and scales up or down transparently based on latency, load, and proximity to the user.<br><br>

You don’t have to think in rigid terms like “edge vs. server” anymore — the platform makes that decision in real time, based on the shape of your app.<br><br>

<strong>How It Evolved from Serverless</strong><br>
Serverless was the first step in breaking away from monolithic infrastructure. But as app complexity grew (especially with dynamic rendering, AI APIs, and real-time features), teams ran into trade-offs:<br>
- Performance vs. flexibility<br>
- Edge speed vs. centralized compute power<br>
- Manual routing decisions<br><br>

Fluid compute solves this by introducing compute orchestration — smart routing of requests across the edge, regional servers, and persistent infrastructure — depending on where and how the function should run best. With Vercel’s infrastructure, that orchestration happens behind the scenes, giving you the speed of the edge with the power of serverful compute when needed.<br><br>

<strong>Why This Matters to You</strong><br>
You mentioned a roadmap milestone around integrating generative AI for playlists. That’s a perfect example of where fluid compute shines:<br>
- AI inference functions can run closer to your users at the edge when latency is key.<br>
- Heavier model interactions or third-party API calls can run in a regional or persistent environment with more memory and runtime control.<br><br>

All of this happens under one unified deployment — without requiring you to manage servers or switch hosting strategies.<br><br>

Best regards,<br>
Ricardo
</p>`,
  `<p>
Hi Alex,<br><br>

I hope you're doing well. I wanted to check in after noticing that your team’s usage on Vercel has decreased significantly this past quarter — with a drop in builds and activity of about 50% quarter over quarter.<br><br>

We also noticed some errors in recent build attempts, and we understand there’s a reverse proxy (Cloudflare) in front of Vercel that may be involved. It looks like Tanner, who had been leading the project on your side, is no longer with the team — so I wanted to reach out directly to you.<br><br>

We value our partnership and want to ensure your team continues getting the most from your Vercel subscription, especially with your marketing site being such a important resource to your company. I’d love to learn more about how things have been going lately, whether there are new priorities or blockers, and how we can support you moving forward.<br><br>

If you’re open to it, I’d be happy to set up a quick call or just exchange notes async — whatever’s easiest for you — to see how we can help you and your team continue building with confidence.<br><br>

Looking forward to hearing from you.<br><br>

Best regards,<br>
Ricardo
</p>
`,
  `Last Answer`
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const isHtml = answers[current].startsWith('<');

  return (
    <div className={styles.container}>
      <h2 className={styles.questionTitle}>Question {current + 1}</h2>
      <p className={styles.questionText}>{questions[current]}</p>

      {isHtml ? (
        <div
          className={styles.answerText}
          dangerouslySetInnerHTML={{ __html: answers[current] }}
        />
      ) : (
        <p className={styles.answerText}>{answers[current]}</p>
      )}

      <div className={styles.buttonGroup}>
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`${styles.navButton} ${current === index ? styles.active : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
