
import { AIModel, UseCase } from './types';

export const NAV_LINKS = [
    { href: '#overview', label: 'Overview' },
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#ai', label: 'Workers AI' },
    { href: '#use-cases', label: 'Use Cases' },
    { href: '#implementation', label: 'Implementation' },
];

export const AI_MODELS_DATA: AIModel[] = [
    { name: "@cf/meta/llama-2-7b-chat-fp16", type: "Text Generation", description: "Llama-2-7b-chat-fp16 is a 7 billion parameter language model from Meta, fine-tuned for chat." },
    { name: "@cf/mistral/mistral-7b-instruct-v0.1", type: "Text Generation", description: "A 7.3B parameter model from Mistral AI, fine-tuned for instruction-following." },
    { name: "@cf/meta/m2m100-1.2b", type: "Translation", description: "A multilingual model that can translate between 100 different languages." },
    { name: "@cf/baai/bge-large-en-v1.5", type: "Embeddings", description: "Generates vector embeddings for text, useful for semantic search and classification." },
    { name: "@cf/microsoft/resnet-50", type: "Image Classification", description: "A 50-layer deep residual network for image classification, trained on ImageNet." },
    { name: "@cf/google/gemini-pro", type: "Text Generation", description: "Google's powerful and scalable large language model, supporting a wide range of tasks."},
    { name: "@cf/openai/whisper", type: "Speech-to-Text", description: "Robust speech recognition model from OpenAI that transcribes audio into text." },
    { name: "@cf/baai/bge-small-en-v1.5", type: "Embeddings", description: "A smaller, efficient version of the BGE model for generating text embeddings." },
    { name: "@cf/deepseek-ai/deepseek-math-7b-instruct", type: "Text Generation", description: "A specialized model fine-tuned for mathematical reasoning and problem solving."},
    { name: "@cf/microsoft/distilbert-base-uncased", type: "Text Classification", description: "A lighter and faster version of BERT, suitable for text classification tasks."},
];

export const USE_CASES_DATA: UseCase[] = [
    {
        title: "AI-Powered SaaS Features",
        description: "A SaaS company offering a content creation tool can use Workers AI to add features like 'summarize text', 'generate blog post ideas', or 'translate content' directly within their application. The logic runs at the edge, providing a fast user experience without needing to manage a separate AI infrastructure.",
        tags: ["Workers AI", "Text Generation", "SaaS"]
    },
    {
        title: "Dynamic Paywalls & A/B Testing",
        description: "A media publisher uses Workers to inspect incoming requests. Based on user subscription status (checked via an API call to a central database), the Worker either serves the full content or a paywall. It can also route a percentage of traffic to a different version of the site for A/B testing, all managed from the edge.",
        tags: ["Workers", "Dynamic Content", "A/B Testing"]
    },
    {
        title: "Per-Tenant Custom Logic",
        description: "An e-commerce platform allows its enterprise customers to upload custom logic as a Worker script. When a request comes for that customer's domain, the platform loads and executes their specific Worker to handle custom pricing, shipping rules, or promotions, offering deep customization.",
        tags: ["Workers", "Multi-Tenancy", "Customization"]
    },
    {
        title: "Personalized Content Delivery",
        description: "An online learning platform uses Workers to determine a user's location and language from request headers. It then dynamically fetches and injects the correct localized content and course recommendations from a headless CMS, ensuring a personalized experience for every user.",
        tags: ["Workers", "Personalization", "Geolocation"]
    },
    {
        title: "Secure API Gateway",
        description: "A company exposes multiple backend services through a single API endpoint. A Worker acts as a gateway, validating JWT authentication tokens on every request. It then routes valid requests to the appropriate microservice, rejecting unauthorized traffic at the edge before it can reach the origin.",
        tags: ["Workers", "Security", "API Gateway"]
    },
    {
        title: "Real-time Image Resizing",
        description: "A photo-sharing application uses a Worker to intercept image requests. Based on query parameters in the URL (e.g., ?width=300), the Worker fetches the original image from R2 storage, resizes it on the fly, and serves the optimized version to the user, caching it at the edge for subsequent requests.",
        tags: ["Workers", "R2 Storage", "Image Optimization"]
    }
];

export const CAPABILITIES_DATA = [
    {
        id: 'workers',
        title: 'Serverless Compute',
        tabContent: {
            heading: 'Cloudflare Workers',
            description: 'Run JavaScript/WASM code on the edge without managing servers. Workers intercept HTTP requests, allowing you to modify them, make subrequests, and construct responses from the edge. This is the core logic engine for your platform.',
            features: [
                'Low-latency execution (near-zero cold starts)',
                'Automatic scaling across the globe',
                'Secure isolation between executions',
                'Supports modern JS, Rust, C, C++ via WASM'
            ]
        }
    },
    {
        id: 'domains',
        title: 'Custom Domains',
        tabContent: {
            heading: 'SSL for SaaS',
            description: "Easily onboard customer domains onto your platform. Cloudflare handles the entire lifecycle of SSL certificate issuance, validation, and renewal for your customers' vanity domains, providing a secure, branded experience.",
            features: [
                'API-driven domain management',
                'Wildcard certificate support',
                'Automatic certificate renewals',
                'Fully white-labeled; no Cloudflare branding'
            ]
        }
    },
    {
        id: 'routing',
        title: 'Dynamic Routing',
        tabContent: {
            heading: 'Dynamic Routing & Authentication',
            description: 'Use Workers to implement custom routing logic. You can identify tenants by hostname or path, validate session tokens, and route requests to different origins or generate responses directly from the edge. This enables per-customer logic and access control.',
            features: [
                'Route based on hostname, path, headers, etc.',
                'Integrate with identity providers (JWT validation)',
                'Perform A/B tests and canary deployments',
                'Serve different content based on user location'
            ]
        }
    },
    {
        id: 'storage',
        title: 'Edge Storage',
        tabContent: {
            heading: 'Storage at the Edge',
            description: 'Store data where your code runs. Cloudflare provides multiple storage options, from a global key-value store (Workers KV) for configuration data to durable objects (Durable Objects) for real-time state management and object storage (R2) for larger assets.',
            features: [
                '<strong>Workers KV:</strong> High-read, low-write key-value store',
                '<strong>Durable Objects:</strong> Strongly consistent, stateful objects',
                '<strong>R2 Storage:</strong> S3-compatible object storage with zero egress fees'
            ]
        }
    }
];
