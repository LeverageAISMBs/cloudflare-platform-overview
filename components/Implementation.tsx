
import React from 'react';

const codeExample = `
export default {
  async fetch(request, env) {
    const ai = new Ai(env.AI);

    const inputs = {
      prompt: "What is the origin of the phrase 'hello world'"
    };

    const response = await ai.run(
      '@cf/meta/llama-2-7b-chat-int8',
      inputs
    );

    return new Response(JSON.stringify(response));
  },
};
`;

const CodeBlock: React.FC<{ code: string }> = ({ code }) => (
    <div className="mt-16 bg-gray-800 rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300 font-semibold">Example: Text Generation Worker</span>
            <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
        </div>
        <pre className="overflow-x-auto text-sm"><code className="language-js text-white">
            {code.trim()}
        </code></pre>
    </div>
);

const TimelineStep: React.FC<{ number: number; title: string; description: string; alignment: 'left' | 'right' }> = ({ number, title, description, alignment }) => (
    <div className="flex flex-col md:flex-row items-center gap-8">
        <div className={`w-full md:w-1/2 ${alignment === 'left' ? 'md:pr-8 text-center md:text-right' : 'md:order-2 md:pl-8 text-center md:text-left'}`}>
            <div className="inline-block bg-white p-4 rounded-xl shadow-lg">
                <span className="text-3xl font-bold text-orange-500">{number}</span>
                <h3 className="text-xl font-semibold mt-2">{title}</h3>
                <p className="text-gray-600 mt-1">{description}</p>
            </div>
        </div>
        <div className={`hidden md:block ${alignment === 'right' ? 'md:order-1' : ''} w-8 h-8 rounded-full bg-orange-500 border-4 border-white ring-4 ring-orange-500 z-10`}></div>
        <div className={`w-full md:w-1/2 ${alignment === 'left' ? '' : 'md:order-0'}`}></div>
    </div>
);

export const Implementation: React.FC = () => {
    return (
        <section id="implementation" className="py-16 scroll-mt-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Getting Started: A Simple Workflow</h2>
                <p className="mt-2 text-lg text-gray-600">The platform is designed for developer productivity. Here is a simplified overview of the steps to deploy a Worker that uses Workers AI, showing how you can go from code to a globally available AI-powered endpoint in minutes.</p>
            </div>

            <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block" aria-hidden="true"></div>
                <div className="space-y-12 md:space-y-16">
                    <TimelineStep number={1} title="Create a Worker" description="Use the Wrangler CLI or the Cloudflare dashboard to bootstrap a new Worker project. This sets up the necessary files and configuration." alignment="left" />
                    <TimelineStep number={2} title="Write AI Logic" description="Bind the Workers AI service to your Worker. In your code, instantiate the AI client and call your desired model with a prompt." alignment="right" />
                    <TimelineStep number={3} title="Deploy Globally" description="Run a single command: wrangler deploy. Your code and AI model configuration are instantly deployed across Cloudflare's global network." alignment="left" />
                </div>
            </div>

            <CodeBlock code={codeExample} />
        </section>
    );
};
